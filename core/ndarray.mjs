import {
	tester,
	slice,
	copyto,
	array,
	Flatiter,
	ndoffset,
	reshape,
	transpose,
	swapaxes,
	Slice,
	broadcast,
	arange,
	concatenate,
	sort,
} from './core.mjs';

function get_strides(shape, itemsize) {
	let strides = [];
	if (shape.length > 0) {
		strides[shape.length - 1] = itemsize;
		for (let i = shape.length - 2; i >= 0; i--) {
			strides[i] = strides[i + 1] * shape[i + 1];
		}
	}
	return strides;
}

function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

function type(value) {
	return value?.constructor.name;
}

function is_int(value) {
	return Number.isInteger(value);
}

function is_tuple(value) {
	return value?.length != undefined;
}

function _index(array, index) {
	if (is_int(index)) {
		let { ndim, shape, size } = array;
		if (index < 0) index += size;
		if (index >= size) throw `index ${index} out of bound for size ${size}`;
		let sizes = [...shape];
		for (let i = sizes.length - 2; i >= 1; i--) {
			sizes[i] *= sizes[i + 1];
		}
		let indices = Array(ndim).fill(0);
		for (let i = 0; i < indices.length - 1; i++) {
			let size = sizes[i + 1];
			if (index >= size) {
				indices[i] = (index / size) | 0;
				index %= size;
			}
		}
		indices[indices.length - 1] = index;
		// console.log('sizes', sizes, indices);
		index = indices;
	} else if (!is_tuple(index)) throw `unexpected type '${type(index)}'`;
	else if (index.length != array.ndim) throw 'incorrect number of indices for array';
	return index;
}

function index_offset(index, strides, shape) {
	let offset = 0;
	for (let i = 0; i < index.length; i++)
		offset += (index[i] < 0 ? index[i] + shape[i] : index[i]) * strides[i];
	return offset;
}

function toPrimitive() {
	return this.item();
}

function _view(array, indices) {
	let { shape, strides, offset } = array;
	// indices = indices.slice();
	indices = indices.map(index => (typeof index == 'string' ? slice(index) : index));
	shape = shape.slice();
	strides = strides.slice();
	let ndim = 0;
	let newaxis_length = indices.filter(e => e == null).length;
	let ellipsis = indices.filter(e => e == slice('...'));
	if (ellipsis.length > 1) throw `an index can only have a single ellipsis ('...')`;
	if (ellipsis.length == 1) {
		indices = indices.slice();
		let colons = Array(shape.length + newaxis_length - indices.length + 1).fill(slice(':'));
		indices.splice(indices.indexOf(slice('...')), 1, ...colons);
		// console.log(indices, indices.indexOf(slice('...')));
	}
	if (indices.length - newaxis_length > shape.length) throw 'too many indices for array';

	// remove tail slice[':']?

	for (let index of indices) {
		if (index == null) {
			shape.splice(ndim, 0, 1);
			strides.splice(ndim, 0, 0);
			ndim++;
		} else {
			if (shape.length == 0) throw 'invalid index to scalar variable';
			if (index == slice[':']) {
				ndim++;
			} else if (slice.is(index)) {
				let { start, step, slicelength } = index.get(shape[ndim]);
				offset = offset + strides[ndim] * start;
				shape.splice(ndim, 1, slicelength);
				strides.splice(ndim, 1, strides[ndim] * step);
				ndim++;
			} else {
				if (index < 0) index += shape[ndim];
				offset = offset + strides[ndim] * index;
				shape.splice(ndim, 1);
				strides.splice(ndim, 1);
			}
		}
		// console.log('offset', offset, indices);
	}
	let immutable = shape.length == 0 && ellipsis.length == 0;
	return { strides, shape, offset, immutable };
}

export function use_advanced_indexing(indices) {
	// console.log(indices);
	for (let ind of indices)
		if (typeof ind == 'object' && (Array.isArray(ind) || ind instanceof NDArray)) return true;
	return false;
}

function array_indexing(indices) {
	let simple = true;
	let start = 0;
	let stop = indices.length - 1;
	let mask = indices.map(index => index instanceof Slice);
	for (; start < stop && mask[start]; start++);
	for (; stop > start && mask[stop]; stop--);

	for (let i = start + 1; i < stop; i++) {
		if (mask[i]) {
			simple = false;
			break;
		}
	}
	let before, after;
	let array_indices;
	let shape = this.shape.map((dim, i) => (mask[i] ? indices[i].get(dim).slicelength : indices[i]));

	if (simple) {
		before = shape.slice(0, start);
		after = shape.slice(stop + 1);
		array_indices = indices.slice(start, stop + 1);
	} else {
		before = [];
		after = shape.filter((_, i) => mask[i]);
		array_indices = [];
		for (let i = start; i <= stop; i++) {
			if (!mask[i]) array_indices.push(indices[i]);
		}
	}

	let b = broadcast(...array_indices);
	let outshape = [...before, ...b.shape, ...after];
	indices = indices.slice();

	// let data = [];
	let arrays = [];
	for (let ind of b) {
		for (let i = 0, j = 0; i < indices.length; i++) {
			if (!mask[i]) indices[i] = ind[j++];
		}
		// console.log('asd', [...indices, null], this);
		arrays.push(this.get(...indices, null));
		// data.push(...this.get(...indices).flat);
	}

	// console.log(
	// 	'simple',
	// 	arrays.map(a => a.toarray()),
	// 	simple,
	// 	start,
	// 	stop,
	// 	before,
	// 	after,
	// 	outshape,
	// 	new NDArray(outshape, concatenate(arrays, before.length).data)
	// );
	return new NDArray(outshape, concatenate(arrays, before.length).data);
	// return new NDArray(outshape, data);
}

// tester.onload(() => {
// 	let x = arange(120).reshape(4, 6, 5, 1);
// 	_get.call(x, array([0, 2, 1]), slice(), array([0, 2, 4]), slice());
// 	_get.call(x, array([0, 2, 1]), [0, 2, 1], slice(), slice());
// 	_get.call(x, slice(), [0, 2, 1], array([0, 2, 4]), slice());
// 	_get.call(x, slice(), [0, 2, 1], slice(), [0, 0, 0]);
// 	_get.call(x, slice(), slice(), array([0, 2, 1]), array([0, 0, 0]));
// 	_get.call(x, array([0, 2, 1]), slice(), slice(), [0, 0, 0]);
// 	_get.call(x, array([0, 2, 1]), [0, 2, 1], slice(), [0, 0, 0]);
// });

export class NDArray {
	constructor(shape, data = null, base = null, strides = null, offset = 0, itemsize = 1) {
		// https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html
		this.size = get_size(shape);
		this.ndim = shape.length;

		this.shape = shape;
		this.data = data ?? Array(this.size);
		this.itemsize = itemsize;
		this.strides = strides ?? get_strides(shape, itemsize);
		this.offset = offset;

		this.base = base?.base ?? base;

		if (this.ndim > 0) this.length = this.shape[0];
		else this[Symbol.toPrimitive] = toPrimitive;
	}

	*[Symbol.iterator]() {
		for (let i = 0; i < this.shape[0]; i++) {
			yield this.get(i);
		}
	}

	_getview(indices) {
		let { strides, shape, offset } = _view(this, indices);
		let { data, itemsize, base } = this;
		return new NDArray(shape, data, base ?? this, strides, offset, itemsize);
	}

	get(...indices) {
		if (use_advanced_indexing(indices)) return array_indexing.call(this, indices);

		let { strides, shape, offset, immutable } = _view(this, indices);
		let { data, itemsize, base } = this;
		if (immutable) {
			// immutable scalar
			return new NDArray(shape, [data[offset]], null, strides, 0, itemsize);
		}
		return new NDArray(shape, data, base ?? this, strides, offset, itemsize);
	}

	set(indices, value = null) {
		if (value == null) {
			value = indices;
			copyto(this, value);
			return this;
		}
		if (use_advanced_indexing(indices)) throw 'cannot use advanced indexing in .set()';

		let { strides, shape, offset } = _view(this, indices);
		let { data, itemsize, base } = this;

		new NDArray(shape, data, base ?? this, strides, offset, itemsize).set(value);
		return this;
	}

	item(index) {
		let { data, strides, shape, offset, ndim, size } = this;
		if (index == undefined) {
			if (size != 1) throw 'index cannot be empty if size != 1';
			return data[offset];
		}
		if (ndim == 0) {
			if (index.length != undefined) {
				if (index.length == 0) index = 0;
				else if (index.length == 1) index = index[0];
				else throw 'incorrect number of indices for array';
			}
			if (index != 0 && index != -1) throw `index ${index} out of bound for size ${size}`;
			return data[offset];
		}
		if (ndim == 1) {
			if (index.length != undefined) {
				if (index.length != 1) throw 'incorrect number of indices for array';
				index = index[0];
			}
			if (index < -size || size <= index) throw `index ${index} out of bound for size ${size}`;
			if (index < 0) index += size;
			return data[offset + index * strides[0]];
		}
		if (index.length == 1) index = index[0];

		index = _index(this, index);

		return data[offset + index_offset(index, strides, shape)];
	}

	itemset(index, scalar) {
		let { ndim, size, offset, data, shape, strides } = this;
		if (scalar == undefined && size == 1) {
			data[offset] = index;
			return;
		}

		if (index == undefined) {
			if (size != 1) throw 'index cannot be empty if size != 1';
			data[offset] = scalar;
			return this;
		}
		if (ndim == 0) {
			if (index.length != undefined) {
				if (index.length == 0) index = 0;
				else if (index.length == 1) index = index[0];
				else throw 'incorrect number of indices for array';
			}
			if (index != 0 && index != -1) throw `index ${index} out of bound for size ${size}`;
			data[offset] = scalar;
			return this;
		}
		if (ndim == 1) {
			if (index.length != undefined) {
				if (index.length != 1) throw 'incorrect number of indices for array';
				index = index[0];
			}
			if (index < -size || size <= index) throw `index ${index} out of bound for size ${size}`;
			if (index < 0) index += size;
			data[offset + index * strides[0]] = scalar;
			return this;
		}
		if (index.length == 1) index = index[0];

		index = _index(this, index);

		data[offset + index_offset(index, strides, shape)] = scalar;

		return this;
	}

	toarray() {
		let { ndim, offset, data, shape } = this;
		if (ndim == 0) return data[offset];
		let array = [];
		for (let i = 0; i < shape[0]; i++) {
			array.push(this.get(i).toarray());
		}
		return array;
	}

	tolist() {
		return this.toarray();
	}

	flatten() {
		let { base, size, data } = this;

		let newdata;
		if (base == undefined) {
			newdata = data.slice();
		} else {
			newdata = [];
			for (let offset of ndoffset(this.shape, this.strides)) {
				newdata.push(data[this.offset + offset]);
			}
		}

		return new NDArray([size], newdata);
	}

	get flat() {
		return new Flatiter(this);
	}

	set flat(value) {
		this.flat.set([...Array(this.size).keys()], value);
	}

	get T() {
		return transpose(this);
	}

	set T(value) {
		transpose(this).set(value);
	}

	copy() {
		return array(this);
	}

	reshape(...shape) {
		if (shape.length == 1) {
			if (typeof shape[0] != 'number') shape = shape[0];
		}
		return reshape(this, shape);
	}

	swapaxes(axis1, axis2) {
		return swapaxes(this, axis1, axis2);
	}

	sort(axis = -1, key = null) {
		this.set(sort(this, axis, key));
	}
}

tester
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(array([0, 2, 1]), slice(), [0, 2, 4], slice());
		},
		() =>
			array([
				[[0], [5], [10], [15], [20], [25]],
				[[62], [67], [72], [77], [82], [87]],
				[[34], [39], [44], [49], [54], [59]],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(array([0, 2, 1]), array([0, 2, 1]), slice(), slice());
		},
		() =>
			array([
				[[0], [1], [2], [3], [4]],
				[[70], [71], [72], [73], [74]],
				[[35], [36], [37], [38], [39]],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(slice(), array([0, 2, 1]), array([0, 2, 4]), slice());
		},
		() =>
			array([
				[[0], [12], [9]],
				[[30], [42], [39]],
				[[60], [72], [69]],
				[[90], [102], [99]],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(slice(), array([0, 2, 1]), slice(), [0, 0, 0]);
		},
		() =>
			array([
				[
					[0, 1, 2, 3, 4],
					[30, 31, 32, 33, 34],
					[60, 61, 62, 63, 64],
					[90, 91, 92, 93, 94],
				],
				[
					[10, 11, 12, 13, 14],
					[40, 41, 42, 43, 44],
					[70, 71, 72, 73, 74],
					[100, 101, 102, 103, 104],
				],
				[
					[5, 6, 7, 8, 9],
					[35, 36, 37, 38, 39],
					[65, 66, 67, 68, 69],
					[95, 96, 97, 98, 99],
				],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(slice(), slice(), array([0, 2, 1]), array([0, 0, 0]));
		},
		() =>
			array([
				[
					[0, 2, 1],
					[5, 7, 6],
					[10, 12, 11],
					[15, 17, 16],
					[20, 22, 21],
					[25, 27, 26],
				],
				[
					[30, 32, 31],
					[35, 37, 36],
					[40, 42, 41],
					[45, 47, 46],
					[50, 52, 51],
					[55, 57, 56],
				],
				[
					[60, 62, 61],
					[65, 67, 66],
					[70, 72, 71],
					[75, 77, 76],
					[80, 82, 81],
					[85, 87, 86],
				],
				[
					[90, 92, 91],
					[95, 97, 96],
					[100, 102, 101],
					[105, 107, 106],
					[110, 112, 111],
					[115, 117, 116],
				],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(array([0, 2, 1]), slice(), slice(), array([0, 0, 0]));
		},
		() =>
			array([
				[
					[0, 1, 2, 3, 4],
					[5, 6, 7, 8, 9],
					[10, 11, 12, 13, 14],
					[15, 16, 17, 18, 19],
					[20, 21, 22, 23, 24],
					[25, 26, 27, 28, 29],
				],
				[
					[60, 61, 62, 63, 64],
					[65, 66, 67, 68, 69],
					[70, 71, 72, 73, 74],
					[75, 76, 77, 78, 79],
					[80, 81, 82, 83, 84],
					[85, 86, 87, 88, 89],
				],
				[
					[30, 31, 32, 33, 34],
					[35, 36, 37, 38, 39],
					[40, 41, 42, 43, 44],
					[45, 46, 47, 48, 49],
					[50, 51, 52, 53, 54],
					[55, 56, 57, 58, 59],
				],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(array([0, 2, 1]), array([0, 2, 1]), slice(), 0);
		},
		() =>
			array([
				[0, 1, 2, 3, 4],
				[70, 71, 72, 73, 74],
				[35, 36, 37, 38, 39],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.get(array([0, 2, 1]), slice(), slice(), 0);
		},
		() =>
			array([
				[
					[0, 1, 2, 3, 4],
					[5, 6, 7, 8, 9],
					[10, 11, 12, 13, 14],
					[15, 16, 17, 18, 19],
					[20, 21, 22, 23, 24],
					[25, 26, 27, 28, 29],
				],
				[
					[60, 61, 62, 63, 64],
					[65, 66, 67, 68, 69],
					[70, 71, 72, 73, 74],
					[75, 76, 77, 78, 79],
					[80, 81, 82, 83, 84],
					[85, 86, 87, 88, 89],
				],
				[
					[30, 31, 32, 33, 34],
					[35, 36, 37, 38, 39],
					[40, 41, 42, 43, 44],
					[45, 46, 47, 48, 49],
					[50, 51, 52, 53, 54],
					[55, 56, 57, 58, 59],
				],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let a = new NDArray([2, 5], [...Array(10).keys()]);
			return a.get(slice(), slice([, , -1]));
		},
		() => [
			[4, 3, 2, 1, 0],
			[9, 8, 7, 6, 5],
		]
	)
	.add(
		'ndarray.get',
		() => {
			let a = new NDArray([2, 5], [...Array(10).keys()]);
			return a.get(slice(-1), 3);
		},
		() => [8]
	)
	.add(
		'ndarray.get',
		() => {
			let a = new NDArray([2, 5], [...Array(10).keys()]);
			return a.get(slice([, , -1]), slice([, , -1]));
		},
		() => [
			[9, 8, 7, 6, 5],
			[4, 3, 2, 1, 0],
		]
	)
	.add(
		'ndarray.get',
		() => {
			let x;
			x = array([
				[3, 0, 0],
				[0, 4, 0],
				[5, 6, 0],
			]).get(slice(), slice(), null);
			return x;
		},
		() =>
			array([
				[[3], [0], [0]],

				[[0], [4], [0]],

				[[5], [6], [0]],
			])
	)
	.add(
		'ndarray.get',
		() => {
			let x;
			x = array([
				[3, 0, 0],
				[0, 4, 0],
				[5, 6, 0],
			]).get(slice('...'), null);
			return x;
		},
		() =>
			array([
				[[3], [0], [0]],

				[[0], [4], [0]],

				[[5], [6], [0]],
			])
	);

tester.add(
	'ndarray.item',
	() => {
		let a = new NDArray([2, 5], [...Array(10).keys()]);
		return a.get(slice([, , -1]), slice([, , -1])).item(5);
	},
	() => 4
);

tester.add(
	'ndarray.itemset',
	() => {
		let x = new NDArray(
			[3, 3],
			[
				[2, 2, 6],
				[1, 3, 6],
				[1, 0, 1],
			].flat()
		);
		x.itemset(4, 0);
		x.itemset([2, 2], 9);
		return x;
	},
	() => [
		[2, 2, 6],
		[1, 0, 6],
		[1, 0, 9],
	]
);

tester.add(
	'ndarray.set',
	() => {
		let a = new NDArray([2, 5], [...Array(10).keys()]);
		a.get(slice(), slice(1, -1)).set(10);
		return a;
	},
	() => [
		[0, 10, 10, 10, 4],
		[5, 10, 10, 10, 9],
	]
);

tester.add(
	'ndarray.flatten',
	() =>
		array([
			[1, 2],
			[3, 4],
		]).flatten(),
	() => array([1, 2, 3, 4])
);

tester
	.add(
		'ndarray.flat.set',
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			x.flat = 3;
			return x;
		},
		() =>
			array([
				[3, 3, 3],
				[3, 3, 3],
			])
	)
	.add(
		'ndarray.flat.set',
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			x.flat = [7, 8, 9, 10];
			return x;
		},
		() =>
			array([
				[7, 8, 9],
				[10, 7, 8],
			])
	);

tester
	.add(
		'ndarray.copy',
		() => {
			let x = array([[1, 2, 3]]);
			return x.copy() == x;
		},
		() => false
	)
	.add(
		'ndarray.copy',
		() => {
			let x = array([[1, 2, 3]]);
			let y = x.copy();
			y.itemset(0, -1);
			return [x, y];
		},
		() => [array([[1, 2, 3]]), array([[-1, 2, 3]])]
	);
