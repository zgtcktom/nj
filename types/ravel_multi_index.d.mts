/**
 * One mode per index is not supported yet
 * @param {NDArray[]} multi_index array-like array
 * @param {number[]} shape
 * @param {string} [mode] {'raise', 'wrap', 'clip'}
 * @example
 * ravel_multi_index([[3, 6, 6], [4, 5, 1]], [4, 6], 'clip')
 * // array([22, 23, 19])
 * @example
 * ravel_multi_index([3, 1, 4, 1], [6, 7, 8, 9])
 * // array(1621)
 */
export function ravel_multi_index(multi_index: NDArray[], shape: number[], mode?: string): NDArray;
import { NDArray } from './core.mjs';
