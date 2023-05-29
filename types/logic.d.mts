/**
 * x1 && x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_and: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link logical_and}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const and: import("./map.mjs").map2WrappedFunction;
/**
 * x1 || x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_or: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link logical_or}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const or: import("./map.mjs").map2WrappedFunction;
/**
 * !x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_not: import("./map.mjs").mapWrappedFunction;
/**
 * Alias of {@link logical_not}
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const not: import("./map.mjs").mapWrappedFunction;
/**
 * !x1 != !x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_xor: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link logical_xor}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const xor: import("./map.mjs").map2WrappedFunction;
/**
 * accum && !!value
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const all: import("./map.mjs").reduceWrappedFunction;
/**
 * accum || !!value
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const any: import("./map.mjs").reduceWrappedFunction;
/**
 * Number.isFinite
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isfinite: import("./map.mjs").mapWrappedFunction;
/**
 * n == Infinity || n == -Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isinf: import("./map.mjs").mapWrappedFunction;
/**
 * Number.isNaN
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isnan: import("./map.mjs").mapWrappedFunction;
/**
 * n == -Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isneginf: import("./map.mjs").mapWrappedFunction;
/**
 * n == Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isposinf: import("./map.mjs").mapWrappedFunction;
