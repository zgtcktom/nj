/**
 * @param {NDArray} a
 * @param {number|number[]} indices_or_sections
 * @param {number} [axis]
 * @returns {NDArray}
 */
export function array_split(a: NDArray, indices_or_sections: number | number[], axis?: number): NDArray;
import { NDArray } from './core.mjs';
