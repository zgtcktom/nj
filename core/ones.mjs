import { Dtype, NDArray, full, full_like } from './core.mjs';

/**
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function ones(shape, dtype = undefined) {
	return full(shape, 1, dtype);
}

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function ones_like(a, dtype = undefined) {
	return full_like(a, 1, dtype);
}
