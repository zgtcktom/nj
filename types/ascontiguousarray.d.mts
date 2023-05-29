/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function ascontiguousarray(a: NDArray, dtype?: Dtype): NDArray;
/**
 * Always returns `false` if `ndim == 0`
 * @param {NDArray} a
 * @returns {boolean}
 * @ignore
 */
export function contiguous(a: NDArray): boolean;
import { NDArray } from './core.mjs';
import { Dtype } from './core.mjs';
