/**
 * @param {number[]} shape
 * @param {any} fill_value
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function full(shape: number[], fill_value: any, dtype?: Dtype): NDArray;
/**
 * @param {NDArray} a array-like
 * @param {any} fill_value
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function full_like(a: NDArray, fill_value: any, dtype?: Dtype): NDArray;
import { Dtype } from './core.mjs';
import { NDArray } from './core.mjs';
