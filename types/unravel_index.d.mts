/**
 * Expects non-negative indices
 * @param {NDArray} indices array-like
 * @param {number[]} shape
 * @returns {NDArray[]}
 * @example
 * unravel_index([22, 41, 37], [7, 6])
 * // [array([3, 6, 6]), array([4, 5, 1])]
 * @example
 * unravel_index(1621, [6, 7, 8, 9])
 * // [3, 1, 4, 1]
 */
export function unravel_index(indices: NDArray, shape: number[]): NDArray[];
import { NDArray } from './core.mjs';
