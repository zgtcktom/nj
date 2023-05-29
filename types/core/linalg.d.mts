/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @returns {NDArray}
 */
export function solve(a: NDArray, b: NDArray): NDArray;
/**
 * @param {number[][]} a
 * @returns {number[][][]}
 */
export function lu(a: number[][]): number[][][];
/**
 * @param {number[][]} a (M, N) array
 * @returns {Array<number[][], number[]>}
 */
export function lu_factor(a: number[][]): Array<number[][], number[]>;
/**
 * @param {number[][]} a (M, N) array
 * @param {number} M
 * @param {number} N
 * @returns {Array<number[][], number[]>}
 */
export function lu_factor_(a: number[][], M: number, N: number): Array<number[][], number[]>;
/**
 * @param {Array<number[][], number[]>} lu_piv
 * @param {number[]} b
 * @returns {number[]}
 */
export function lu_solve(lu_piv: Array<number[][], number[]>, b: number[]): number[];
import { NDArray } from './core.mjs';
