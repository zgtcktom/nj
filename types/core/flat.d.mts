/**
 * @class
 * @extends {NdoffsetIterator}
 */
export class Flatiter extends NdoffsetIterator {
    /**
     * @param {NDArray} base
     */
    constructor(base: NDArray);
    /** @member {NDArray} */
    base: NDArray;
    /**
     * @typedef {Object} FlatiterResult
     * @property {any} value
     * @property {boolean} done
     */
    /**
     * @returns {FlatiterResult}
     */
    next(): {
        value: any;
        done: boolean;
    };
    /**
     * @param {number|Slice|string|number[]} index
     * @returns {NDArray}
     */
    at(index: number | Slice | string | number[]): NDArray;
    /**
     * @param {number|Slice|string|number[]} index
     * @returns {NDArray}
     */
    get(index: number | Slice | string | number[]): NDArray;
    /**
     * `Flatiter.set` repeats and flattens `value` to match the number of elements being set.
     *
     * `NDArray.set` broadcasts the value to match the shape of the selection
     * @param {number|Slice|string|number[]} index
     * @param {any[]|any} value
     * @returns {Flatiter} this
     */
    set(index: number | Slice | string | number[], value: any[] | any): Flatiter;
    /**
     * Returns a copy of the flatten array
     * @returns {NDArray}
     */
    copy(): NDArray;
}
import { NdoffsetIterator } from './core.mjs';
import { NDArray } from './core.mjs';
import { Slice } from './core.mjs';
