export function normalize_axis(axis: any, ndim: any, allow_duplicate?: boolean): any;
/**
 * @param {NDArray} a
 * @param {null|number|number[]} axis
 * @returns {Nditer}
 */
export function nditer(a: NDArray, axis?: null | number | number[]): Nditer;
export function normalize_axis_tuple(axis: any, ndim: any, allow_duplicate?: boolean): any;
/** @class */
export class Nditer {
    constructor(a: any, axis?: any);
    array: NDArray;
    axis: any;
    shape: any[];
    indices: any[];
    mask: boolean[];
    [Symbol.iterator](): Generator<any, void, unknown>;
}
import { NDArray } from './core.mjs';
