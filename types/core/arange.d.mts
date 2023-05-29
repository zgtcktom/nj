/**
 * The parameters can be either float or integer numbers.
 * @param {number} start
 * @param {number} [stop]
 * @param {number} [step]
 * @returns {NDArray}
 * @example
 * arange(2) // array([0, 1])
 * @example
 * arange(1, 3) // array([1, 2])
 * @example
 * arange(0, 6, 2) // array([0, 2, 4])
 */
export function arange(start: number, stop?: number, step?: number): NDArray;
import { NDArray } from './core.mjs';
