/**
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function ones(shape: number[], dtype?: Dtype): NDArray;
/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function ones_like(a: NDArray, dtype?: Dtype): NDArray;
import { Dtype } from './core.mjs';
import { NDArray } from './core.mjs';
