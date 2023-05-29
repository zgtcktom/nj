/**
 *
 * @param {NDArray} y
 * @param {null|NDArray} [x]
 * @param {number} [dx]
 * @param {number} [axis]
 * @returns {NDArray}
 */
export function trapz(y: NDArray, x?: null | NDArray, dx?: number, axis?: number): NDArray;
import { NDArray } from './core.mjs';
