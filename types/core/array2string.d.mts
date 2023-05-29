/**
 *
 * @param {NDArray} a
 * @param {FormatOptions} options
 * @returns {string}
 */
export function array2string(a: NDArray, options?: FormatOptions): string;
/**
 *
 * @param {NDArray} a
 * @param {number} linewidth
 * @param {number} precision
 * @returns {string}
 */
export function array_str(a: NDArray, linewidth?: number, precision?: number): string;
/**
 *
 * @param {NDArray} a
 * @param {number} linewidth
 * @param {number} precision
 * @returns {string}
 */
export function array_repr(a: NDArray, linewidth?: number, precision?: number): string;
export type FormatOptions = {
    edgeitems: number;
    threshold: number;
    precision: number | undefined;
    linewidth: number;
    formatter: number | null;
    separator: string;
    prefix: string;
};
import { NDArray } from './core.mjs';
