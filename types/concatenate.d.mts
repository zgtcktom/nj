/**
 * @param {NDArray[]} arrays
 * @param {null|number} [axis]
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
export function concatenate(arrays: NDArray[], axis?: null | number, out?: NDArray): NDArray;
import { NDArray } from './core.mjs';
