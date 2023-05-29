/**
 * [x % 1, x | 0]
 * @function
 * @param {NDArray} x
 * @param {Array<null|NDArray>} [out = [null, null]]
 * @returns {NDArray[]}
 */
export function modf(x: NDArray, out?: Array<null | NDArray>): NDArray[];
/**
 * [x % 1, x | 0]
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {Array<null|NDArray>} [out = [null, null]]
 * @returns {NDArray[]}
 */
export function divmod(x1: NDArray, x2: NDArray, out?: Array<null | NDArray>): NDArray[];
/**
 * x1 + x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const add: import("./map.mjs").map2WrappedFunction;
/**
 * 1 / x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const reciprocal: import("./map.mjs").mapWrappedFunction;
/**
 * +x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const positive: import("./map.mjs").mapWrappedFunction;
/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const negative: import("./map.mjs").mapWrappedFunction;
/**
 * x1 * x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const multiply: import("./map.mjs").map2WrappedFunction;
/**
 * x1 / x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const divide: import("./map.mjs").map2WrappedFunction;
/**
 * x1 ** x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const power: import("./map.mjs").map2WrappedFunction;
/**
 * x1 - x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const subtract: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link divide}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const true_divide: import("./map.mjs").map2WrappedFunction;
/**
 * (x1 / x2) | 0
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const floor_divide: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link power}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const float_power: import("./map.mjs").map2WrappedFunction;
/**
 * x1 - ((x1 / x2) | 0) * x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const fmod: import("./map.mjs").map2WrappedFunction;
/**
 * ((x1 % x2) + x2) % x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const mod: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link mod}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const remainder: import("./map.mjs").map2WrappedFunction;
import { NDArray } from './core.mjs';
