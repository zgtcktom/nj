import { arange, get_size, slice, tester } from './core.mjs';

/** @class */
export class NdoffsetIterator {
	/**
	 * @param {number[]} shape
	 * @param {number[]} strides
	 * @param {number} initial
	 */
	constructor(shape, strides, initial) {
		/** @member {number} */
		this.ndim = shape.length;
		/** @member {number} */
		this.size = get_size(shape);
		/** @member {number[]} */
		this.shape = shape;

		/** @member {number[]} */
		this.strides = strides;
		let dim_strides = Array(this.ndim);
		for (let i = 0; i < this.ndim; i++) dim_strides[i] = shape[i] * strides[i];
		/** @member {number[]} */
		this.dim_strides = dim_strides;
		/** @member {number} */
		this.initial = initial;

		/** @member {number} */
		this.offset;

		/** @member {number[]} */
		this.coords = Array(this.ndim);
		/** @member {number} */
		this.index;
		/** @member {boolean} */
		this.done;

		this[Symbol.iterator]();
	}

	[Symbol.iterator]() {
		this.index = 0;
		this.done = this.size == 0;
		this.coords.fill(0);
		this.offset = this.initial;
		return this;
	}

	/**
	 * @typedef {Object} NdoffsetResult
	 * @property {number} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {NdoffsetResult}
	 */
	next() {
		if (this.done) return { done: true };

		let { offset, coords, size, index } = this;
		if (index != 0) {
			let { shape, strides, ndim, dim_strides } = this;

			let ptr = ndim - 1;
			let carry = true;
			while (ptr >= 0) {
				let dim = shape[ptr];
				if (dim == 1) {
					ptr--;
				} else if (dim == coords[ptr]) {
					offset -= dim_strides[ptr];
					coords[ptr--] = 0;
					carry = true;
				} else {
					if (!carry) break;
					offset += strides[ptr];
					coords[ptr]++;
					carry = false;
				}
			}
			this.offset = offset;
		}

		this.done = ++this.index >= size;

		return { value: offset, done: false };
	}
}

/**
 *
 * @param {number[]} shape
 * @param {number[]} strides
 * @param {number} [initial = 0]
 * @returns {NdoffsetIterator}
 */
export function ndoffset(shape, strides, initial = 0) {
	return new NdoffsetIterator(shape, strides, initial);
}

process.env.PRODUCTION ||
	tester.add(
		ndoffset,
		() => {
			let a = arange(100);
			a = a.at(slice(20, -20)).reshape([2, 1, -1, 2]).at(slice('...'), slice('::-1'));
			// console.log(a.shape, a.strides, a.offset, a.data, [...ndoffset(a.shape, a.strides)]);
			let flatten = [];
			for (let offset of ndoffset(a.shape, a.strides)) {
				flatten.push(a.data[a.offset + offset]);
			}
			return flatten;
		},
		() => [
			21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44,
			47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70,
			73, 72, 75, 74, 77, 76, 79, 78,
		]
	);

// tester.onload(() => {
// 	let a = arange(100);
// 	a = a.get(slice(20, -20)).reshape([2, 1, -1, 2]).get(slice('...'), slice('::-1'));

// 	console.log(ndoffset(a.shape, a.strides, a.offset));
// 	console.log([...ndoffset(a.shape, a.strides, a.offset)]);
// });
