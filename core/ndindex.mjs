import { get_size } from './core.mjs';

/**
 * @param {number[]} shape
 * @returns {NdindexIterator}
 */
export function ndindex(shape) {
	return new NdindexIterator(shape);
}

/** @class */
export class NdindexIterator {
	/**
	 * @param {number[]} shape
	 */
	constructor(shape) {
		/** @member {number} */
		this.ndim = shape.length;
		/** @member {number} */
		this.size = get_size(shape);
		/** @member {number[]} */
		this.shape = shape;

		/** @member {number[]} */
		this.coords = Array(this.ndim);
		/** @member {number} */
		this.index;
		/** @member {boolean} */
		this.done;

		this[Symbol.iterator]();
	}

	[Symbol.iterator]() {
		this.coords.fill(0);
		this.index = 0;
		this.done = this.size == 0;
		return this;
	}

	/**
	 * @typedef {Object} NdindexResult
	 * @property {number[]} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {NdindexResult}
	 */
	next() {
		if (this.done) return { done: true };

		let { coords, size, index } = this;
		if (index != 0) {
			let { shape, ndim } = this;

			let ptr = ndim - 1;
			let carry = true;
			while (ptr >= 0) {
				let dim = shape[ptr];
				if (dim == 1) {
					ptr--;
				} else if (dim == coords[ptr]) {
					coords[ptr--] = 0;
					carry = true;
				} else {
					if (!carry) break;
					coords[ptr]++;
					carry = false;
				}
			}
		}

		this.done = ++this.index >= size;

		return { value: coords, done: false };
	}
}
