/**
 * x1 == x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const equal: import("./map.mjs").map2WrappedFunction;
/**
 * x1 != x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const not_equal: import("./map.mjs").map2WrappedFunction;
/**
 * x1 < x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const less: import("./map.mjs").map2WrappedFunction;
/**
 * x1 <= x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const less_equal: import("./map.mjs").map2WrappedFunction;
/**
 * x1 > x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const greater: import("./map.mjs").map2WrappedFunction;
/**
 * x1 >= x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const greater_equal: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const eq: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link not_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const neq: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link less}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const lt: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link less_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const lte: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link greater}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const gt: import("./map.mjs").map2WrappedFunction;
/**
 * Alias of {@link greater_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const gte: import("./map.mjs").map2WrappedFunction;
