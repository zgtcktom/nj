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
	Dtype,
	any,
	dtype_,
	NdoffsetIterator,
	greater_equal,
	where,
} from './core.mjs';

/**
 * @class
 */
export class NDArray {
	/**
	 * @param {number[]} shape
	 * @param {any[]} data
	 * @param {Dtype} dtype
	 * @param {NDArray} base
	 * @param {number[]} strides
	 * @param {number} offset
	 * @param {number} itemsize always 1
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
		this.dtype = dtype_(dtype ?? data.constructor);

		/** @member {NDArray|null} */
		this.base = base?.base ?? base;
	}

	/** @member {number} */
	get length() {
		let { ndim, shape } = this;
		if (ndim != 0) return shape[0];
	}

	/**
	 * @member {Flatiter}
	 * @type {Flatiter}
	 */
	get flat() {
		return new Flatiter(this);
	}

	set flat(value) {
		this.flat.set(':', value);
	}

	/** @member {NDArray} */
	get T() {
		return transpose(this);
	}

	set T(value) {
		this.T.set(value);
	}

	/**
	 * @returns {string}
	 */
	toString() {
		return array_str(this);
	}

	/**
	 * @returns {any|string}
	 */
	valueOf() {
		return this.ndim == 0 ? this.item() : array_repr(this);
	}

	*[Symbol.iterator]() {
		for (let i = 0; i < this.shape[0]; i++) {
			yield this.at(i);
		}
	}

	/**
	 * Returns a view with the given shape, strides, and offset.
	 *
	 * out.base = this.base ?? this
	 * @param {number[]} [shape]
	 * @param {number[]} [strides]
	 * @param {number} [offset] required as a ptr to the first item
	 * @returns {NDArray}
	 */
	as_strided(shape = this.shape, strides = this.strides, offset = this.offset) {
		let { data, dtype, base, itemsize } = this;
		return new NDArray(shape, data, dtype, base ?? this, strides, offset, itemsize);
	}

	/**
	 * Returns `ndoffset(this.shape, this.strides, this.offset)`.
	 *
	 * Useful when iterating `this.data[i]` or `this.item(i)` in a `for (let i of this.keys())` loop.
	 * @returns {NdoffsetIterator}
	 */
	keys() {
		let { shape, strides, offset } = this;
		return ndoffset(shape, strides, offset);
	}

	/**
	 * Returns `this.flat`.
	 * @returns {Flatiter}
	 */
	values() {
		return this.flat;
	}

	/**
	 * Converts NDArray index to .data[] index.
	 * @param {number|number[]|undefined} index
	 * @returns {number}
	 */
	idx(index) {
		let { shape, strides, ndim, size, offset } = this;

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

	/**
	 * `.at(0)` is is equivalent to `.get([0])`
	 * @param  {...number|Slice|string|null|number[]|boolean[]} indices
	 * @returns {NDArray}
	 */
	at(...indices) {
		return this.get(indices);
	}

	/**
	 * `.get(indices)` is is equivalent to `.at(...indices)`
	 * @param  {Array<number|Slice|string|null|number[]|boolean[]>} indices
	 * @returns {NDArray}
	 */
	get(indices) {
		if (use_advanced_indexing(indices)) return array_indexing.call(this, indices);

		return basic_indexing(this, indices);
	}

	/**
	 * Throw an error if advanced indexing (i.e. number[] and boolean[] index) is used.
	 *
	 * `.set(value)` is equivalent to `.set(['...'], value)`, but faster
	 * @param  {Array<number|Slice|string|null>} indices
	 * @param  {any} [value]
	 * @returns {NDArray}
	 */
	set(indices, value) {
		if (arguments.length == 1) {
			copyto(this, indices);
			return this;
		}

		if (use_advanced_indexing(indices)) {
			return this.set(where(indices, value, this));

			// console.log(indices);
			// throw new Error('cannot use advanced indexing in .set()');
		}

		copyto(basic_indexing(this, indices), value);
		return this;
	}

	/**
	 * Returns an element of the array.
	 *
	 * if `index` is an integer, `index` is regarded as a flatten index.
	 *
	 * `index` can be undefined only if `a.size == 1`.
	 *
	 * @param {number|number[]|undefined} index
	 * @returns {any}
	 */
	item(index) {
		return this.data[this.idx(index)];
	}

	/**
	 * Sets an element of the array.
	 *
	 * index can be undefined only if a.size == 1.
	 * @param {number|number[]|undefined} index
	 * @param {any} scalar
	 * @returns {NDArray}
	 */
	itemset(index, scalar) {
		this.data[this.idx(index)] = scalar;
		return this;
	}

	/**
	 * @param {Dtype} dtype
	 * @param {boolean} [copy]
	 * @returns {NDArray}
	 */
	astype(dtype, copy = true) {
		dtype = dtype_(dtype);
		copy ||= this.dtype != dtype;

		if (!copy) return this;

		let { shape, size } = this;
		let data = dtype.new(size, [...this.flat]);
		return new NDArray(shape, data, dtype);
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
			return Array.prototype.slice.call(data, offset, offset + dim);
		}
		let array = [];
		for (let i = 0; i < dim; i++) {
			array.push(this.at(i).toarray());
		}
		return array;
	}

	/**
	 * Alias of .toarray()
	 * @returns {any[]|any}
	 */
	tolist() {
		return this.toarray();
	}

	/**
	 * `.reshape(1, 2)` is equivalent to `.reshape([1, 2])`
	 * @param  {...number|number[]} shape
	 * @returns {NDArray}
	 */
	reshape(...shape) {
		if (shape.length == 1 && typeof shape[0] == 'object') {
			shape = shape[0];
		}
		return reshape(this, shape);
	}

	// ndarray.[]

	/**
	 * @param {number|number[]|null} axis
	 * @param {NDArray} out
	 * @param {boolean} keepdims
	 * @param {boolean} initial
	 * @param {boolean} return_scalar
	 * @returns {NDArray<boolean>|boolean}
	 */
	all(axis = null, out = null, keepdims = false, initial = true, return_scalar = true) {
		return all(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number|number[]|null} axis
	 * @param {NDArray} out
	 * @param {boolean} keepdims
	 * @param {boolean} initial
	 * @param {boolean} return_scalar
	 * @returns {NDArray<boolean>|boolean}
	 */
	any(axis = null, out = null, keepdims = false, initial = false, return_scalar = true) {
		return any(this, axis, out, keepdims, initial, return_scalar);
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

	/**
	 * @param {number} axis
	 * @param {function} [key]
	 * @returns {NDArray<number>}
	 */
	argsort(axis = -1, key = null) {
		return argsort(this, axis, key);
	}

	byteswap() {
		throw `not implemented`;
	}

	choose(choices, out = null, mode = 'raise') {
		throw `not implemented`;
	}

	/**
	 * @param {number|NDArray} a_min
	 * @param {number|NDArray} a_max
	 * @param {NDArray} out
	 * @returns {NDArray}
	 */
	clip(a_min, a_max, out = null) {
		return clip(this, a_min, a_max, out);
	}

	/**
	 * @param {boolean[]} condition
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	compress(condition, axis = null, out = null) {
		return compress(condition, this, axis, out);
	}

	conj() {
		throw `not implemented`;
	}

	conjugate() {
		throw `not implemented`;
	}

	/**
	 * @returns {NDArray}
	 */
	copy() {
		return array(this);
	}

	/**
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	cumprod(axis, out) {
		return cumprod(this, axis, out);
	}

	/**
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	cumsum(axis, out) {
		return cumsum(this, axis, out);
	}

	/**
	 * @param {number} [offset]
	 * @param {number} [axis1]
	 * @param {number} [axis2]
	 * @returns {NDArray}
	 */
	diagonal(offset = 0, axis1 = 0, axis2 = 1) {
		return diagonal(this, offset, axis1, axis2);
	}

	dump() {
		throw `not implemented`;
	}

	dumps() {
		throw `not implemented`;
	}

	/**
	 * @param {any} value
	 * @returns {NDArray} this
	 */
	fill(value) {
		let { data, shape, strides, offset } = this;
		for (let idx of ndoffset(shape, strides, offset)) {
			data[idx] = value;
		}
		return this;
	}

	/**
	 * @returns {NDArray}
	 */
	flatten() {
		let { size, flat, dtype } = this;
		return new NDArray([size], [...flat], dtype);
	}

	getfield() {
		throw `not implemented`;
	}

	// item
	// itemset

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {any} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray<any>|any}
	 */
	max(axis = null, out = null, keepdims = false, initial = null, return_scalar = true) {
		return amax(this, axis, out, keepdims, initial, return_scalar);
	}

	mean(axis = null, out = null, keepdims = false) {
		return mean(this, axis, out, keepdims);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {any} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray|any}
	 */
	min(axis = null, out = null, keepdims = false, initial = null, return_scalar = true) {
		return amin(this, axis, out, keepdims, initial, return_scalar);
	}

	newbyteorder() {
		throw `not implemented`;
	}

	/**
	 * @returns {NDArray[]}
	 */
	nonzero() {
		return nonzero(this);
	}

	partition(kth, axis = -1, kind = 'introselect', order = null) {
		throw `not implemented`;
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {any} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray|any}
	 */
	prod(axis = null, out = null, keepdims = false, initial = 0, return_scalar = true) {
		return prod(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @returns {NDArray}
	 */
	ptp(axis = null, out = null, keepdims = false) {
		return ptp(this, axis, out, keepdims);
	}

	/**
	 * @param {number[]} indices
	 * @param {any[]} values
	 * @param {string} [mode]
	 * @returns {NDArray} this
	 */
	put(indices, values, mode = 'raise') {
		put(this, indices, values, mode);
		return this;
	}

	/**
	 * @returns {NDArray}
	 */
	ravel() {
		return ravel(this);
	}

	/**
	 * @param {number|number[]} repeats
	 * @param {number} [axis]
	 * @returns {NDArray}
	 */
	repeat(repeats, axis = null) {
		return repeat(this, repeats, axis);
	}

	// reshape

	/**
	 * inplace resize
	 * @param {number[]} new_shape
	 * @returns {NDArray} this
	 */
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
		return this;
	}

	/**
	 * @param {number} [decimals]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	round(decimals = 0, out = null) {
		return around(this, decimals, out);
	}

	/**
	 * @param {any[]} v
	 * @param {string} [side]
	 * @returns {NDArray}
	 */
	searchsorted(v, side = 'left') {
		return searchsorted(this, v, side);
	}

	setfield() {
		throw `not implemented`;
	}

	setflags() {
		throw `not implemented`;
	}

	/**
	 * @param {number} [axis]
	 * @param {Function} [key]
	 * @returns {NDArray} this
	 */
	sort(axis = -1, key = null) {
		this.set(sort(this, axis, key));
		return this;
	}

	/**
	 * @param {number|number[]} axis
	 * @returns {NDArray}
	 */
	squeeze(axis = null) {
		return squeeze(this, axis);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {number} [ddof]
	 * @param {boolean} [keepdims]
	 * @returns {NDArray}
	 */
	std(axis = null, out = null, ddof = 0, keepdims = false) {
		return std(this, axis, out, ddof, keepdims);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {number} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray|any}
	 */
	sum(axis = null, out = null, keepdims = false, initial = 0, return_scalar = true) {
		return sum(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number} axis1
	 * @param {number} axis2
	 * @returns {NDArray}
	 */
	swapaxes(axis1, axis2) {
		return swapaxes(this, axis1, axis2);
	}

	/**
	 * @param {number[]} indices
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @param {string} [mode]
	 * @returns {NDArray}
	 */
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

	/**
	 * @param {number|number[]} [axes]
	 * @returns {NDArray}
	 */
	transpose(axes = null) {
		return transpose(this, axes);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {number} [ddof]
	 * @param {boolean} [keepdims]
	 * @returns {NDArray}
	 */
	variance(axis = null, out = null, ddof = 0, keepdims = false) {
		return variance(this, axis, out, ddof, keepdims);
	}
}

import util from 'util';
NDArray.prototype[util?.inspect?.custom] = function () {
	return this.valueOf();
};

/**
 * @param {number[]} shape
 * @param {number} ndim
 * @param {number} itemsize
 * @returns {number[]}
 * @ignore
 */
export function get_strides(shape, ndim, itemsize) {
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
export function get_size(shape) {
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
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null>} indices
 * @returns {NDArray}
 * @ignore
 */
function basic_indexing(a, indices) {
	let { shape, ndim, strides, offset, data, itemsize, base, dtype } = a;

	let nnewaxis = 0;
	let ellipsisIndex = -1;
	for (let i = 0; i < indices.length; i++) {
		let index = indices[i];
		if (index == Slice.newaxis) {
			nnewaxis++;
		} else if (index == Slice.ellipsis) {
			if (ellipsisIndex != -1) {
				throw new Error(`an index can only have a single ellipsis ('...')`);
			}
			ellipsisIndex = i;
		}
	}

	if (ellipsisIndex != -1) {
		let colons = Array(ndim + nnewaxis - indices.length + 1).fill(Slice.colon);
		let before = indices.slice(0, ellipsisIndex);
		let after = indices.slice(ellipsisIndex + 1);
		indices = [].concat(before, colons, after);
	}

	if (indices.length - nnewaxis > ndim) {
		throw new Error(`too many indices for array`);
	}

	shape = [...shape];
	strides = [...strides];

	let i = 0;
	for (let index of indices) {
		if (index == null) {
			shape.splice(i, 0, 1);
			strides.splice(i, 0, 1);
			i++;
			continue;
		}

		if (typeof index == 'string') {
			index = slice(index);
		} else if (!(index instanceof Slice)) {
			let idx = index;
			if (idx < 0) idx += shape[i];
			if (idx < 0 || idx > shape[i]) {
				throw new Error(`index ${index} out of bound for dimension size ${shape[i]}`);
			}
			offset += strides[i] * idx;
			shape.splice(i, 1);
			strides.splice(i, 1);
			continue;
		}

		if (index != Slice.colon) {
			let { start, step, slicelength } = index.indices(shape[i]);
			offset += strides[i] * start;
			shape.splice(i, 1, slicelength);
			strides.splice(i, 1, strides[i] * step);
		}
		i++;
	}

	return new NDArray(shape, data, dtype, base ?? a, strides, offset, itemsize);
}

/**
 * @param {Array<number|Slice|string|null|number[]|boolean[]>} indices
 * @returns {boolean}
 * @ignore
 */
function use_advanced_indexing(indices) {
	for (let index of indices) {
		if (
			index != null &&
			typeof index == 'object' &&
			(Array.isArray(index) || (index instanceof NDArray && index.ndim > 0))
		) {
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
		arrays.push(this.at(...indices, null));
		// data.push(...this.get(...indices).flat);
	}

	return new NDArray(outshape, concatenate(arrays, before.length).data);
}

tester.onload(() => {
	// console.log(arange(0, 10));
	// console.log(array([0, 'strss', 6.3]));
	// console.log(array([false, 2.3, 3, 4, { ok: 5 }], 'int8'));
	// console.dir(array([false, true]).dtype == _dtype('boolean'));
	// console.log(
	// 	arange(2 * 3 * 4 * 5)
	// 		.reshape(2, 3, 4, 5)
	// 		.at(0, 0, 0, 0, null)
	// );
	// let a = {};
	// a[array(12)] = 55;
	// a[12] = 51;
	// console.log(a);
});

tester
	.add(
		'ndarray.get',
		() => {
			let x = arange(120).reshape(4, 6, 5, 1);
			return x.at(array([0, 2, 1]), slice(), [0, 2, 4], slice());
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
			return x.at(array([0, 2, 1]), array([0, 2, 1]), slice(), slice());
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
			return x.at(slice(), array([0, 2, 1]), array([0, 2, 4]), slice());
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
			return x.at(slice(), array([0, 2, 1]), slice(), [0, 0, 0]);
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
			return x.at(slice(), slice(), array([0, 2, 1]), array([0, 0, 0]));
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
			return x.at(array([0, 2, 1]), slice(), slice(), array([0, 0, 0]));
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
			return x.at(array([0, 2, 1]), array([0, 2, 1]), slice(), 0);
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
			return x.at(array([0, 2, 1]), slice(), slice(), 0);
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
			return a.at(slice(), slice([, , -1]));
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
			return a.at(slice(-1), 3);
		},
		() => [8]
	)
	.add(
		'ndarray.get',
		() => {
			let a = new NDArray([2, 5], [...Array(10).keys()]);
			return a.at(slice([, , -1]), slice([, , -1]));
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
			]).at(slice(), slice(), null);
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
			]).at(slice('...'), null);
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
		() =>
			arange(2 * 3 * 4)
				.reshape(2, 3, 4)
				.at(null, '...', null),
		() =>
			array([
				[
					[
						[[0], [1], [2], [3]],
						[[4], [5], [6], [7]],
						[[8], [9], [10], [11]],
					],
					[
						[[12], [13], [14], [15]],
						[[16], [17], [18], [19]],
						[[20], [21], [22], [23]],
					],
				],
			])
	)
	.add(
		'ndarray.get',
		() =>
			arange(2 * 3 * 4)
				.reshape(2, 3, 4)
				.at(slice(':'), [0, 2], slice('::2')),
		() =>
			array([
				[
					[0, 2],
					[8, 10],
				],
				[
					[12, 14],
					[20, 22],
				],
			])
	);

tester.add(
	'ndarray.item',
	() => {
		let a = new NDArray([2, 5], [...Array(10).keys()]);
		return a.at(slice([, , -1]), slice([, , -1])).item(5);
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

tester
	.add(
		'ndarray.set',
		() => {
			let a = new NDArray([2, 5], [...Array(10).keys()]);
			a.at(slice(), slice(1, -1)).set(10);
			return a;
		},
		() => [
			[0, 10, 10, 10, 4],
			[5, 10, 10, 10, 9],
		]
	)
	.add(
		'ndarray.set',
		() => {
			let a = arange(2 * 3 * 4).reshape(2, 3, 4);
			a.set(greater_equal(a, 10), -1);
			return a;
		},
		() =>
			array([
				[
					[0, 1, 2, 3],
					[4, 5, 6, 7],
					[8, 9, -1, -1],
				],
				[
					[-1, -1, -1, -1],
					[-1, -1, -1, -1],
					[-1, -1, -1, -1],
				],
			])
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
