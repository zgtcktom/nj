/**
 * @param {NDArray} a
 * @param {number} shift
 * @param {null|number|number[]} [axis]
 * @returns {NDArray}
 */
export function roll(a: NDArray, shift: number, axis?: null | number | number[]): NDArray;
export class Product {
    constructor(iterables: any);
    length: any;
    elements: any;
    lengths: any;
    size: any;
    coords: any[];
    done: boolean;
    index: number;
    reset(): Product;
    next(): {
        done: boolean;
        value?: undefined;
    } | {
        value: any;
        done: boolean;
    };
    [Symbol.iterator](): Product;
}
import { NDArray } from './core.mjs';
