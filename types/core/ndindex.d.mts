/**
 * @param {number[]} shape
 * @returns {NdindexIterator}
 */
export function ndindex(shape: number[]): NdindexIterator;
/** @class */
export class NdindexIterator {
    /**
     * @param {number[]} shape
     */
    constructor(shape: number[]);
    /** @member {number} */
    ndim: number;
    /** @member {number} */
    size: number;
    /** @member {number[]} */
    shape: number[];
    /** @member {number[]} */
    coords: any[];
    index: number;
    done: boolean;
    /**
     * @typedef {Object} NdindexResult
     * @property {number[]} value
     * @property {boolean} done
     */
    /**
     * @returns {NdindexResult}
     */
    next(): {
        value: number[];
        done: boolean;
    };
    [Symbol.iterator](): NdindexIterator;
}
