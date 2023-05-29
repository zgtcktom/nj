/**
 * @param {NDArray} a array-like
 * @param {number[]} shape
 * @returns {NDArray}
 */
export function broadcast_to(a: NDArray, shape: number[]): NDArray;
/**
 * @param  {...NDArray} arrays
 * @returns {NDArray[]}
 */
export function broadcast_arrays(...arrays: NDArray[]): NDArray[];
import { NDArray } from './core.mjs';
