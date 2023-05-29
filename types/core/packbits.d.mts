/**
 * @param {NDArray} a
 * @param {null|number} [axis]
 * @param {string} [bitorder]
 * @returns {NDArray}
 */
export function packbits(a: NDArray, axis?: null | number, bitorder?: string): NDArray;
/**
 * @param {NDArray} a
 * @param {null|number} [axis]
 * @param {null|number} [count]
 * @param {string} [bitorder]
 * @returns {NDArray}
 */
export function unpackbits(a: NDArray, axis?: null | number, count?: null | number, bitorder?: string): NDArray;
import { NDArray } from './core.mjs';
