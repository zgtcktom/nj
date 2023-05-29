/**
 *
 * @param {NDArray} ary
 * @param {NDArray} indices_or_sections
 * @param {number} [axis]
 * @returns {NDArray}
 */
export function split(ary: NDArray, indices_or_sections: NDArray, axis?: number): NDArray;
export function dsplit(ary: any, indices_or_sections: any): NDArray;
export function hsplit(ary: any, indices_or_sections: any): NDArray;
export function vsplit(ary: any, indices_or_sections: any): NDArray;
import { NDArray } from './core.mjs';
