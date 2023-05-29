/**
 * @param {NDArray} a
 * @param {null|number|number[]} [axis]
 * @returns {NDArray}
 */
export function flip(a: NDArray, axis?: null | number | number[]): NDArray;
/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
export function fliplr(a: NDArray): NDArray;
/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
export function flipud(a: NDArray): NDArray;
import { NDArray } from './core.mjs';
