/**
 * @param  {...NDArray} arrays
 * @returns {Broadcast}
 */
export function broadcast(...arrays: NDArray[]): Broadcast;
/**
 * @class
 */
export class Broadcast {
    /**
     * @param {NDArray[]} arrays
     */
    constructor(arrays: NDArray[]);
    /** @member {number[]} */
    shape: number[];
    /** @member {NDArray[]} */
    arrays: NDArray[];
    /** @member {number} */
    ndim: number;
    /** @member {number} */
    size: number;
    /**
     * @typedef {Object} BroadcastResult
     * @property {any} value
     * @property {boolean} done
     */
    /**
     * @returns {BroadcastResult}
     */
    next(): {
        value: any;
        done: boolean;
    };
    reset(): void;
    /** @member {Flatiter[]} */
    iters: import("./flat.mjs").Flatiter[];
    /** @member {number} */
    index: number;
    [Symbol.iterator](): Broadcast;
}
import { NDArray } from './core.mjs';
