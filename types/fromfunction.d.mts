/**
 * @param {Function} func
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function fromfunction(func: Function, shape: number[], dtype?: Dtype): NDArray;
import { Dtype } from './core.mjs';
import { NDArray } from './core.mjs';
