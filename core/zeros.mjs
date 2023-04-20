import { Dtype, NDArray, full, full_like } from './core.mjs';

/**
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function zeros(shape, dtype = undefined) {
	return full(shape, 0, dtype);
}

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function zeros_like(a, dtype = undefined) {
	return full_like(a, 0, dtype);
}
