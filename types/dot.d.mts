export function assert(cond: any, msg: any): void;
/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {null|NDArray} [out]
 * @returns {NDArray}
 */
export function dot(a: NDArray, b: NDArray, out?: null | NDArray): NDArray;
import { NDArray } from './core.mjs';
