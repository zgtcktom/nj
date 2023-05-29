/**
 * @param {NDArray} x
 * @param {NDArray} xp
 * @param {NDArray} fp
 * @param {null|number} [left]
 * @param {null|number} [right]
 * @param {null|number} [period]
 * @returns {NDArray}
 */
export function interp(x: NDArray, xp: NDArray, fp: NDArray, left?: null | number, right?: null | number, period?: null | number): NDArray;
import { NDArray } from './core.mjs';
