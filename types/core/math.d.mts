/**
 * @param {NDArray} p
 * @param {number} [period]
 * @param {number} [discont]
 * @returns {NDArray}
 */
export function unwrap(p: NDArray, period?: number, discont?: number): NDArray;
/**
 * @param {NDArray} x
 * @param {number} [decimals = 0]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export function around(x: NDArray, decimals?: number, out?: null | NDArray): NDArray;
/**
 * @function
 * @param {NDArray} a
 * @param {number} [n]
 * @param {number} [axis]
 * @returns {NDArray}
 */
export function diff(a: NDArray, n?: number, axis?: number): NDArray;
/**
 * @param {NDArray} a
 * @param {null|NDArray} [to_end]
 * @param {null|NDArray} [to_begin]
 * @returns {NDArray}
 */
export function ediff1d(a: NDArray, to_end?: null | NDArray, to_begin?: null | NDArray): NDArray;
/** @type {number} */
export const e: number;
/** @type {number} */
export const nan: number;
/** @type {number} */
export const pi: number;
/** @type {number} */
export const inf: number;
/** @type {number} */
export const NINF: number;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const sin: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cos: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const tan: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arcsin: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arccos: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arctan: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const hypot: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arctan2: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const degrees: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const radians: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const rad2deg: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const deg2rad: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const sinh: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cosh: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const tanh: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arcsinh: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arccosh: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const arctanh: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const rint: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const fix: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const floor: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const ceil: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const trunc: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const prod: import("./map.mjs").reduceWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const sum: import("./map.mjs").reduceWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const nanprod: import("./map.mjs").reduceWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const nansum: import("./map.mjs").reduceWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const exp: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const expm1: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const exp2: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const log: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const log10: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const log2: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const log1p: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logaddexp: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logaddexp2: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const signbit: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const copysign: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const ldexp: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const lcm: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const gcd: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const maximum: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const minimum: import("./map.mjs").map2WrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const amax: import("./map.mjs").reduceWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const amin: import("./map.mjs").reduceWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const sqrt: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cbrt: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const square: import("./map.mjs").mapWrappedFunction;
export const abs: import("./map.mjs").mapWrappedFunction;
export const absolute: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const sign: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const nan_to_num: import("./map.mjs").mapWrappedFunction;
import { NDArray } from './core.mjs';
