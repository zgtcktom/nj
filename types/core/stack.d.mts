/**
 * @param {NDArray[]} arrays
 * @param {number} [axis]
 * @param {null|NDArray} [out]
 * @returns {NDArray}
 */
export function stack(arrays: NDArray[], axis?: number, out?: null | NDArray): NDArray;
import { NDArray } from './core.mjs';
