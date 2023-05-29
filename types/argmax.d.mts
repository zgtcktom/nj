/**
 * @param {NDArray} a array-like
 * @param {number|null} [axis = null]
 * @param {NDArray|null} [out = null]
 * @param {boolean} [keepdims = false]
 * @returns {NDArray}
 */
export function argmax(a: NDArray, axis?: number | null, out?: NDArray | null, keepdims?: boolean): NDArray;
/**
 * @param {NDArray} a array-like
 * @param {number|null} [axis = null]
 * @param {NDArray|null} [out = null]
 * @param {boolean} [keepdims = false]
 * @returns {NDArray}
 */
export function argmin(a: NDArray, axis?: number | null, out?: NDArray | null, keepdims?: boolean): NDArray;
import { NDArray } from './core.mjs';
