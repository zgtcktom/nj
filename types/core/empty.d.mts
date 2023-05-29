/**
 * empty(2) is equivalent to empty([2])
 * @param {number|number[]} shape empty([]) for a scalar ndarray
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function empty(shape: number | number[], dtype?: Dtype): NDArray;
/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function empty_like(a: NDArray, dtype?: Dtype): NDArray;
/**
 * Returns an array-like object
 * @param {any} value
 * @returns {any[]}
 * @ignore
 */
export function tuple_(value: any): any[];
import { Dtype } from './core.mjs';
import { NDArray } from './core.mjs';
