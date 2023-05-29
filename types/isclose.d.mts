/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [rtol = 1e-5]
 * @param {number} [atol = 1e-8]
 * @param {boolean} [equal_nan = false]
 * @returns {NDArray}
 */
export function isclose(a: NDArray, b: NDArray, rtol?: number, atol?: number, equal_nan?: boolean): NDArray;
/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [rtol = 1e-5]
 * @param {number} [atol = 1e-8]
 * @param {boolean} [equal_nan = false]
 * @returns {boolean}
 */
export function allclose(a: NDArray, b: NDArray, rtol?: number, atol?: number, equal_nan?: boolean): boolean;
import { NDArray } from './core.mjs';
