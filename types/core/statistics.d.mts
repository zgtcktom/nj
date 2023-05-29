/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function ptp(a: any, axis?: any, out?: any, keepdims?: any): NDArray;
/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} weights
 * @param {*} returned
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function average(a: any, axis?: any, weights?: any, returned?: any, keepdims?: any): NDArray;
/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function mean(a: any, axis?: any, out?: any, keepdims?: any): NDArray;
/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} ddof
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function variance(a: any, axis?: any, out?: any, ddof?: any, keepdims?: any): NDArray;
/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} ddof
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function std(a: any, axis?: any, out?: any, ddof?: any, keepdims?: any): NDArray;
/**
 *
 * @param {*} a
 * @param {*} weights
 * @param {*} minlength
 * @returns {NDArray}
 */
export function bincount(a: any, weights?: any, minlength?: any): NDArray;
import { NDArray } from './core.mjs';
