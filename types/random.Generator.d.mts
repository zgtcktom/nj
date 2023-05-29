/**
 * @class
 */
export class Generator {
    constructor(rand?: () => number);
    rand: () => number;
    /**
     * @param {number} low
     * @param {number} [high]
     * @param {number} [size]
     * @param {boolean} [endpoint]
     * @returns {NDArray}
     */
    integers(low: number, high?: number, size?: number, endpoint?: boolean): NDArray;
    /**
     *
     * @param {*} size
     * @param {*} out
     * @returns {NDArray}
     */
    random(size?: any, out?: any): NDArray;
    /**
     *
     * @param {*} a
     * @param {*} size
     * @param {*} replace
     * @param {*} p
     * @param {*} axis
     * @returns {NDArray}
     */
    choice(a: any, size?: any, replace?: any, p?: any, axis?: any): NDArray;
    /**
     *
     * @param {*} a
     * @param {*} axis
     */
    shuffle(a: any, axis?: any): void;
    /**
     *
     * @param {*} a
     * @param {*} axis
     * @param {*} out
     * @returns {NDArray}
     */
    permuted(a: any, axis?: any, out?: any): NDArray;
    /**
     *
     * @param {*} a
     * @param {*} axis
     * @returns {NDArray}
     */
    permutation(a: any, axis?: any): NDArray;
    /**
     *
     * @param {*} low
     * @param {*} high
     * @param {*} size
     * @returns {NDArray}
     */
    uniform(low?: any, high?: any, size?: any): NDArray;
    /**
     * @param {number} [loc]
     * @param {number} [scale]
     * @param {null|number} [size]
     * @returns {NDArray}
     */
    normal(loc?: number, scale?: number, size?: null | number): NDArray;
}
/**
 * @type {Generator}
 */
export const random: Generator;
import { NDArray } from './core.mjs';
