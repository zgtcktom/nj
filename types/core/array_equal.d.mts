/**
 * @param {NDArray} a1 array-like
 * @param {NDArray} a2 array-like
 * @param {boolean} [equal_nan]
 * @returns {boolean}
 */
export function array_equal(a1: NDArray, a2: NDArray, equal_nan?: boolean): boolean;
/**
 * @param {NDArray} a1 array-like
 * @param {NDArray} a2 array-like
 * @returns {boolean}
 */
export function array_equiv(a1: NDArray, a2: NDArray): boolean;
/**
 * @param {any[]} a
 * @param {any[]} b
 * @returns {boolean}
 * @ignore
 */
export function shallow_array_equal(a: any[], b: any[]): boolean;
import { NDArray } from './core.mjs';
