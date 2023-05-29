/**
 *
 * @param {number[]} shape
 * @param {number[]} strides
 * @param {number} [initial = 0]
 * @returns {NdoffsetIterator}
 */
export function ndoffset(shape: number[], strides: number[], initial?: number): NdoffsetIterator;
/** @class */
export class NdoffsetIterator {
    /**
     * @param {number[]} shape
     * @param {number[]} strides
     * @param {number} initial
     */
    constructor(shape: number[], strides: number[], initial: number);
    /** @member {number} */
    ndim: number;
    /** @member {number} */
    size: number;
    /** @member {number[]} */
    shape: number[];
    /** @member {number[]} */
    strides: number[];
    /** @member {number[]} */
    dim_strides: any[];
    /** @member {number} */
    initial: number;
    /** @member {number[]} */
    coords: any[];
    index: number;
    done: boolean;
    offset: any;
    /**
     * @typedef {Object} NdoffsetResult
     * @property {number} value
     * @property {boolean} done
     */
    /**
     * @returns {NdoffsetResult}
     */
    next(): {
        value: number;
        done: boolean;
    };
    [Symbol.iterator](): NdoffsetIterator;
}
