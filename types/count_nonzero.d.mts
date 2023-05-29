/**
 *
 * @param {NDArray} a
 * @param {null|number|number[]} [axis]
 * @param {boolean} [keepdims]
 * @returns {NDArray}
 */
export function count_nonzero(a: NDArray, axis?: null | number | number[], keepdims?: boolean): NDArray;
import { NDArray } from './core.mjs';
