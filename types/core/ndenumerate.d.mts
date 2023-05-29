/**
 * @param {NDArray} a
 * @returns {NdenumerateIterator}
 */
export function ndenumerate(a: NDArray): NdenumerateIterator;
/**
 * @class
 * @extends {Flatiter}
 */
export class NdenumerateIterator extends Flatiter {
    /**
     * @typedef {Object} NdenumerateResult
     * @property {Array.<number[], any>} value
     * @property {boolean} done
     */
    /**
     * @returns {NdenumerateResult}
     */
    next(): {
        value: Array<number[], any>;
        done: boolean;
    };
}
import { NDArray } from './core.mjs';
import { Flatiter } from './core.mjs';
