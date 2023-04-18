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
	cumsum,
	repeat,
	tupleType,
	all,
	argsort,
	clip,
	compress,
	cumprod,
	diagonal,
	amax,
	mean,
	amin,
	nonzero,
	prod,
	ptp,
	put,
	ravel,
	contiguous,
	around,
	searchsorted,
	squeeze,
	std,
	sum,
	take,
	variance,
	array_repr,
	array_str,
	_dtype,
	Dtype,
} from './core.mjs';

/**
 * @param {number[]} shape
 * @param {number} ndim
 * @param {number} itemsize
 * @returns {number[]}
 * @ignore
 */
function get_strides(shape, ndim, itemsize) {
	if (ndim == 0) return [];

	let strides = Array(ndim);
	strides[ndim - 1] = itemsize;
	for (let i = ndim - 1; i > 0; i--) {
		strides[i - 1] = strides[i] * shape[i];
	}
	return strides;
}

/**
 * @param {number[]} shape
 * @returns {number}
 * @ignore
 */
function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

/**
 * Converts flatten index to multi-dimensional indices.
 * @param {number|number[]} index
 * @param {number[]} shape
 * @param {number} ndim
 * @param {number} size
 * @returns {number[]}
 * @ignore
 */
function get_indices(index, shape, ndim, size) {
	if (Number.isInteger(index)) {
		let idx = index;
		if (idx < 0) idx += size;
		if (idx < 0 || idx >= size) {
			throw new Error(`index ${index} out of bound for size ${size}`);
		}

		if (ndim == 0) return [0];

		let indices = Array(ndim);
		for (let i = ndim - 1; i >= 0; i--) {
			indices[i] = idx % shape[i];
			idx = (idx / shape[i]) | 0;
		}
		return indices;
	}

	if (index.length != ndim) {
		throw new Error('incorrect number of indices for array');
	}

	return index;
}

/**
 * Converts NDArray index to array index.
 * @param {NDArray} a
 * @param {number|number[]|undefined} index
 * @returns {number}
 * @ignore
 */
function get_idx(a, index) {
	let { shape, strides, ndim, size, offset } = a;

	if (index == 0) return offset;

	if (index == undefined) {
		if (size != 1) {
			throw new Error('index cannot be empty if size != 1');
		}
		return offset;
	}

	let indices = get_indices(index, shape, ndim, size);

	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i];
		let dim = shape[i];
		if (idx < 0) idx += dim;
		if (idx < 0 || idx >= dim) {
			throw new Error(`index ${indices[i]} out of bound for dimension ${dim}`);
		}
		offset += idx * strides[i];
	}

	return offset;
}

function _view(array, indices) {
	let { shape, strides, offset } = array;
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
			} else if (index instanceof Slice) {
				let { start, step, slicelength } = index.indices(shape[ndim]);
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

/**
 * @param {any[]} indices
 * @returns {boolean}
 * @ignore
 */
export function use_advanced_indexing(indices) {
	for (let index of indices) {
		if (typeof index == 'object' && (Array.isArray(index) || index instanceof NDArray)) {
			return true;
		}
	}
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
	let shape = this.shape.map((dim, i) => (mask[i] ? indices[i].indices(dim).slicelength : indices[i]));

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

	return new NDArray(outshape, concatenate(arrays, before.length).data);
}

tester.onload(() => {
	console.log(arange(0, 10));
	console.log(array([0, 'strss', 6.3]));

	console.log(array([false, 2.3, 3, 4, { ok: 5 }], 'int8'));

	console.dir(array([false, true]).dtype == _dtype('boolean'));
});

/** @class */
export class NDArray {
	/**
	 * @param {number[]} shape
	 * @param {any[]} data
	 * @param {Dtype} dtype
	 * @param {NDArray} base
	 * @param {number[]} strides
	 * @param {number} offset
	 * @param {number} itemsize
	 */
	constructor(shape, data = null, dtype = null, base = null, strides = null, offset = 0, itemsize = 1) {
		// https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html
		/** @member {number} */
		this.ndim = shape.length;
		/** @member {number} */
		this.size = get_size(shape);

		/** @member {number[]} */
		this.shape = shape;
		/** @member {any[]} */
		this.data = data ?? Array(this.size);
		/** @member {number} */
		this.itemsize = itemsize;
		/** @member {number[]} */
		this.strides = strides ?? get_strides(shape, this.ndim, itemsize);
		/** @member {number} */
		this.offset = offset;

		/** @member {Dtype} */
		this.dtype = dtype ?? _dtype(data.constructor);

		/** @member {NDArray|null} */
		this.base = base?.base ?? base;
	}

	/** @member {number} */
	get length() {
		let { ndim, shape } = this;
		if (ndim != 0) return shape[0];
	}

	/**
	 * @returns {string}
	 */
	toString() {
		return array_str(this);
	}

	/**
	 * @returns {*|string}
	 */
	valueOf() {
		return this.ndim == 0 ? this.item() : array_repr(this);
	}

	*[Symbol.iterator]() {
		for (let i = 0; i < this.shape[0]; i++) {
			yield this.get(i);
		}
	}

	/**
	 * @param  {...number|Slice|string|null|number[]|boolean[]} indices
	 * @returns {NDArray}
	 */
	at(...indices) {
		return this.get(indices);
	}

	_getview(indices) {
		let { strides, shape, offset } = _view(this, indices);
		let { data, itemsize, base, dtype } = this;
		return new NDArray(shape, data, dtype, base ?? this, strides, offset, itemsize);
	}

	/**
	 *
	 * @param  {...number|Slice|number[]|boolean[]} indices
	 * @returns {NDArray}
	 */
	get(...indices) {
		if (indices.length == 1 && indices[0]?.[tupleType]) {
			indices = indices[0];
		}

		if (use_advanced_indexing(indices)) return array_indexing.call(this, indices);

		let { strides, shape, offset, immutable } = _view(this, indices);
		let { data, itemsize, base, dtype } = this;
		if (immutable) {
			// immutable scalar
			return new NDArray(shape, [data[offset]], dtype, null, strides, 0, itemsize);
		}
		return new NDArray(shape, data, dtype, base ?? this, strides, offset, itemsize);
	}

	/**
	 *
	 * @param  {Array<number|Slice>} indices
	 * @param  {any} value
	 * @returns {NDArray}
	 */
	set(indices, value = null) {
		if (value == null) {
			value = indices;
			copyto(this, value);
			return this;
		}
		if (use_advanced_indexing(indices)) throw 'cannot use advanced indexing in .set()';

		let { strides, shape, offset } = _view(this, indices);
		let { data, itemsize, dtype, base } = this;

		new NDArray(shape, data, dtype, base ?? this, strides, offset, itemsize).set(value);
		return this;
	}

	/**
	 * Returns an element of the array.
	 *
	 * index can be undefined only if a.size == 1.
	 * @param {number|number[]|undefined} index
	 * @returns {*}
	 */
	item(index) {
		return this.data[get_idx(this, index)];
	}

	/**
	 * Sets an element of the array.
	 *
	 * index can be undefined only if a.size == 1.
	 * @param {number|number[]|undefined} index
	 * @param {*} scalar
	 * @returns {NDArray}
	 */
	itemset(index, scalar) {
		this.data[get_idx(this, index)] = scalar;
		return this;
	}

	/**
	 * @returns {any[]|any}
	 */
	toarray() {
		let { ndim, strides, itemsize, offset, data, shape } = this;
		if (ndim == 0) {
			return data[offset];
		}

		let dim = shape[0];
		if (ndim == 1 && strides[0] == itemsize) {
			return data.slice(offset, offset + dim);
		}
		let array = [];
		for (let i = 0; i < dim; i++) {
			array.push(this.get(i).toarray());
		}
		return array;
	}

	/**
	 * @returns {any[]|any}
	 */
	tolist() {
		return this.toarray();
	}

	/** @member {Flatiter} */
	get flat() {
		return new Flatiter(this);
	}

	set flat(value) {
		this.flat.set([...Array(this.size).keys()], value);
	}

	/** @member {NDArray} */
	get T() {
		return transpose(this);
	}

	set T(value) {
		this.T.set(value);
	}

	reshape(...shape) {
		if (shape.length == 1) {
			if (typeof shape[0] != 'number') shape = shape[0];
		}
		return reshape(this, shape);
	}

	// ndarray.[]

	all(axis = null, out = null, keepdims = false) {
		return all(this, axis, out, keepdims);
	}

	any(axis = null, out = null, keepdims = false) {
		return any(this, axis, out, keepdims);
	}

	argmax(axis = null, out = null, keepdims = false) {
		throw `not implemented`;
	}

	argmin(axis = null, out = null, keepdims = false) {
		throw `not implemented`;
	}

	argpartition(kth, axis = -1, kind = 'introselect', order = null) {
		throw `not implemented`;
	}

	argsort(axis = -1, key = null) {
		return argsort(this, axis, key);
	}

	astype() {
		throw `not implemented`;
	}

	byteswap() {
		throw `not implemented`;
	}

	choose(choices, out = null, mode = 'raise') {
		throw `not implemented`;
	}

	clip(a_min, a_max, out = null) {
		return clip(this, a_min, a_max, out);
	}

	compress(condition, axis = null, out = null) {
		return compress(condition, this, axis, out);
	}

	conj() {
		throw `not implemented`;
	}

	conjugate() {
		throw `not implemented`;
	}

	copy() {
		return array(this);
	}

	cumprod(axis = null, out = null) {
		return cumprod(this, axis, out);
	}

	cumsum(axis = null, out = null) {
		return cumsum(this, axis, out);
	}

	diagonal(offset = 0, axis1 = 0, axis2 = 1) {
		return diagonal(this, offset, axis1, axis2);
	}

	dump() {
		throw `not implemented`;
	}

	dumps() {
		throw `not implemented`;
	}

	fill(value) {
		this.flat = value;
		return this;
	}

	flatten() {
		return new NDArray([this.size], [...this.flat]);
	}

	getfield() {
		throw `not implemented`;
	}

	// item
	// itemset

	max(axis = null, out = null, keepdims = false, initial = null, return_scalar = true) {
		return amax(this, axis, out, keepdims, initial, return_scalar);
	}

	mean(axis = null, out = null, keepdims = false) {
		return mean(this, axis, out, keepdims);
	}

	min(axis = null, out = null, keepdims = false, initial = null, return_scalar = true) {
		return amin(this, axis, out, keepdims, initial, return_scalar);
	}

	newbyteorder() {
		throw `not implemented`;
	}

	nonzero() {
		return nonzero(this);
	}

	partition(kth, axis = -1, kind = 'introselect', order = null) {
		throw `not implemented`;
	}

	prod(axis = null, out = null, keepdims = false, initial = 0, return_scalar = true) {
		return prod(this, axis, out, keepdims, initial, return_scalar);
	}

	ptp(axis = null, out = null, keepdims = false) {
		return ptp(this, axis, out, keepdims);
	}

	put(indices, values, mode = 'raise') {
		put(this, indices, values, mode);
		return this;
	}

	ravel() {
		return ravel(this);
	}

	repeat(repeats, axis = null) {
		return repeat(this, repeats, axis);
	}

	// reshape

	resize(new_shape) {
		if (this.base != null) throw `cannot resize this array: it does not own its data`;
		if (!contiguous(this)) throw `resize only works on single-segment arrays`;
		let new_size = get_size(new_shape);
		if (new_size <= this.size) {
			this.data = [...this.data.slice(this.offset, new_size)];
		} else {
			this.data = [...this.data.slice(this.offset, new_size), ...Array(new_size - this.size).fill(0)];
		}
		this.shape = new_shape;
		this.ndim = new_shape.length;
		this.strides = get_strides(new_shape, this.ndim, this.itemsize);
		this.offset = 0;
	}

	round(decimals = 0, out = null) {
		return around(this, decimals, out);
	}

	searchsorted(v, side = 'left') {
		return searchsorted(this, v, side);
	}

	setfield() {
		throw `not implemented`;
	}

	setflags() {
		throw `not implemented`;
	}

	sort(axis = -1, key = null) {
		this.set(sort(this, axis, key));
	}

	squeeze(axis = null) {
		return squeeze(this, axis);
	}

	std(axis = null, out = null, ddof = 0, keepdims = false) {
		return std(this, axis, out, ddof, keepdims);
	}

	sum(axis = null, out = null, keepdims = false, initial = 0, return_scalar = true) {
		return sum(this, axis, out, keepdims, initial, return_scalar);
	}

	swapaxes(axis1, axis2) {
		return swapaxes(this, axis1, axis2);
	}

	take(indices, axis = null, out = null, mode = 'raise') {
		return take(this, indices, axis, out, mode);
	}

	tobytes() {
		throw `not implemented`;
	}

	tofile() {
		throw `not implemented`;
	}

	// tolist

	trace() {
		throw `not implemented`;
	}

	transpose(axes = null) {
		return transpose(this, axes);
	}

	variance(axis = null, out = null, ddof = 0, keepdims = false) {
		return variance(this, axis, out, ddof, keepdims);
	}
}

import util from 'util';
NDArray.prototype[util?.inspect?.custom] = function () {
	return this.valueOf();
};

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

tester
	.add(
		'ndarray.resize',
		() => {
			let a = array([
				[0, 1],
				[2, 3],
			]);
			a.resize([2, 1]);
			return a;
		},
		() => array([[0], [1]])
	)
	.add(
		'ndarray.resize',
		() => {
			let a = array([
				[0, 1],
				[2, 3],
			]);
			a.resize([2, 3]);
			return a;
		},
		() =>
			array([
				[0, 1, 2],
				[3, 0, 0],
			])
	)
	.add(
		'ndarray.resize',
		() => {
			let a = array([
				[0, 1],
				[2, 3],
			]);
			let c = a;
			a.resize([1, 1]);
			return [a, c];
		},
		() => [array([[0]]), array([[0]])]
	);
