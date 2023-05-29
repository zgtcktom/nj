/**
 *
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @param {number} [axis = 0]
 * @returns {ViewIterator}
 */
export function scatter(a: NDArray, indices: Array<number | Slice | string | null | number[] | boolean[] | NDArray>, axis?: number): ViewIterator;
/**
 * @param {NDArray} a array-like
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {NDArray}
 */
export function get(a: NDArray, indices: Array<number | Slice | string | null | number[] | boolean[] | NDArray>): NDArray;
export function set(a: any, indices: any, value: any): void;
import { NDArray } from './core.mjs';
import { Slice } from './core.mjs';
/**
 * @class
 * @extends {NdindexIterator}
 */
declare class ViewIterator extends NdindexIterator {
    /**
     * @param {NDArray} base
     * @param {number[]} shape
     * @param {Array<Slice|NDArray>} indices
     * @param {number} axis
     * @param {number[]} outShape
     */
    constructor(base: NDArray, shape: number[], indices: Array<Slice | NDArray>, axis: number, outShape: number[]);
    base: NDArray;
    indices: (NDArray | Slice)[];
    axis: number;
    outShape: number[];
    _indices: (NDArray | Slice)[];
    /**
     * @returns {{value: NDArray, done: boolean}}
     */
    next(): {
        value: NDArray;
        done: boolean;
    };
    /**
     * @returns {NDArray}
     */
    get(): NDArray;
    /**
     * @param {NDArray} value array-like
     */
    set(value: NDArray): void;
}
import { NdindexIterator } from './core.mjs';
export {};
