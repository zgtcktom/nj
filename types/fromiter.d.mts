/**
 * @param {Iterable} iter
 * @param {number} [count]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function fromiter(iter: Iterable<any>, count?: number, dtype?: Dtype): NDArray;
import { Dtype } from './core.mjs';
import { NDArray } from './core.mjs';
