/**
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function zeros(shape: number[], dtype?: Dtype): NDArray;
/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function zeros_like(a: NDArray, dtype?: Dtype): NDArray;
import { Dtype } from './core.mjs';
import { NDArray } from './core.mjs';
