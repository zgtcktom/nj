/**
 * x1 & x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_and: import("./map.mjs").map2WrappedFunction;
/**
 * x1 | x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_or: import("./map.mjs").map2WrappedFunction;
/**
 * x1 ^ x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_xor: import("./map.mjs").map2WrappedFunction;
/**
 * ~x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_not: import("./map.mjs").mapWrappedFunction;
/**
 * Alias of {@link bitwise_not}
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const invert: import("./map.mjs").mapWrappedFunction;
/**
 * x1 << x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const left_shift: import("./map.mjs").map2WrappedFunction;
/**
 * x1 >> x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const right_shift: import("./map.mjs").map2WrappedFunction;
