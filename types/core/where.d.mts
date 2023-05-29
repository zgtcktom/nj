/**
 * @param {NDArray} condition
 * @param {null|NDArray} [x]
 * @param {null|NDArray} [y]
 * @returns {NDArray}
 */
export function where(condition: NDArray, x?: null | NDArray, y?: null | NDArray): NDArray;
import { NDArray } from './core.mjs';
