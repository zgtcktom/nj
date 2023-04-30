import { normalize_axis_index, asarray, ndindex, slice, NDArray, normalize_axes } from './core.mjs';

export function normalize_axis(axis, ndim, allow_duplicate = false) {
	// https://github.com/numpy/numpy/blob/857c64a95339bd937fbcc5398246fd2dcf78f3ab/numpy/core/numeric.py#L1331
	if (!Array.isArray(axis)) axis = [axis];
	axis = axis.map(axis => normalize_axis_index(axis, ndim));
	if (!allow_duplicate && new Set(axis).size != axis.length) throw `repeated axis`;
	return axis;
}

export const normalize_axis_tuple = normalize_axis;

/** @class */
export class Nditer {
	constructor(a, axis = null) {
		this.array = asarray(a);
		let { ndim, shape } = a;
		if (axis != null) axis = normalize_axis(axis, ndim);
		this.axis = axis;
		if (axis != null) {
			let ndshape = [];
			let indices = [];
			let mask = [];
			for (let i = 0; i < ndim; i++) {
				if ((mask[i] = !axis.includes(i))) {
					indices[i] = 0;
					ndshape.push(shape[i]);
				} else {
					indices[i] = slice[':'];
				}
			}
			this.shape = ndshape;
			this.indices = indices;
			this.mask = mask;
		} else {
			this.shape = [a.size];
			this.indices = [0];
			this.mask = null;
		}
	}
	*[Symbol.iterator]() {
		let { array, axis } = this;
		if (axis == null) {
			yield* array.flat;
			return;
		}
		let { shape, mask, indices } = this;
		for (let index of ndindex(shape)) {
			for (let i = 0, j = 0; i < array.ndim; i++) {
				if (mask[i]) {
					indices[i] = index[j++];
				}
			}
			// console.log(indices);
			yield [index, array.get(indices)];
		}
	}
}

/**
 * @param {NDArray} a
 * @param {null|number|number[]} axis
 * @returns {Nditer}
 */
export function nditer(a, axis = null) {
	// no. this is not like numpy.iter
	return new Nditer(a, axis);
}
