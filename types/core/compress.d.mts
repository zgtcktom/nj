/**
 * @param {boolean[]} condition
 * @param {NDArray} a
 * @param {number} [axis]
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
export function compress(condition: boolean[], a: NDArray, axis?: number, out?: NDArray): NDArray;
import { NDArray } from './core.mjs';
