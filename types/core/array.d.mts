/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @param {boolean} [copy = true]
 * @param {number} [ndmin = 0]
 * @returns {NDArray}
 */
export function array(a: NDArray, dtype?: Dtype, copy?: boolean, ndmin?: number): NDArray;
/**
 * @param {any[]|any} array
 * @returns {string}
 * @ignore
 */
export function guessType(array: any[] | any): string;
import { NDArray } from './core.mjs';
import { Dtype } from './core.mjs';
