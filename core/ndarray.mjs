import { tester, slice, copyto, array, Flatiter, ndoffset, reshape, transpose, swapaxes } from './core.mjs';

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
	indices = indices.slice();
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
	}
	if (indices.length - newaxis_length > shape.length) throw 'too many indices for array';

	// remove tail slice[':']?

	for (let index of indices) {
		if (shape.length == 0) throw 'invalid index to scalar variable';
		if (index == null) {
			shape.splice(ndim, 0, 1);
			strides.splice(ndim, 0, 0);
			ndim++;
		} else if (index == slice[':']) {
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
		// console.log('offset', offset, indices);
	}
	return { strides, shape, offset };
}

export class NDArray {
	constructor(shape, buffer = null, base = null, strides = null, offset = 0, itemsize = 1) {
		// https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html
		this.size = get_size(shape);
		this.ndim = shape.length;

		this.shape = shape;
		this.data = buffer ?? Array(this.size);
		this.itemsize = itemsize;
		this.strides = strides ?? get_strides(shape, itemsize);
		this.offset = offset;

		this.base = base?.base ?? base;

		if (this.ndim > 0) this.length = this.shape[0];
		else this[Symbol.toPrimitive] = toPrimitive;
	}

	get(...indices) {
		let { strides, shape, offset } = _view(this, indices);
		let { data, itemsize, base } = this;
		if (shape.length == 0) {
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

	flatten() {
		let { base, size, data } = this;

		let newdata;
		if (base == undefined) {
			newdata = data.slice();
		} else {
			newdata = [];
			for (let offset of ndoffset(this)) newdata.push(data[offset]);
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
}

tester
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
