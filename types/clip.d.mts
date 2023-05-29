/**
 * @param {NDArray} a array-like
 * @param {NDArray} a_min array-like
 * @param {NDArray} a_max array-like
 * @param {NDArray} out
 * @returns {NDArray}
 */
export function clip(a: NDArray, a_min: NDArray, a_max: NDArray, out?: NDArray): NDArray;
import { NDArray } from './core.mjs';
