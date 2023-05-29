/**
 *
 * @param {NDArray} a
 * @param {any[]} indices
 * @param {null|number} [axis]
 * @param {NDArray} [out]
 * @param {string} [mode]
 * @returns {NDArray}
 */
export function take(a: NDArray, indices: any[], axis?: null | number, out?: NDArray, mode?: string): NDArray;
import { NDArray } from './core.mjs';
