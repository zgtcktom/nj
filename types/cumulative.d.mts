/**
 * x1 * x2
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cumprod: import("./map.mjs").accumulateWrappedFunction;
/**
 * x1 + x2
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cumsum: import("./map.mjs").accumulateWrappedFunction;
/**
 * nan1(x1) * nan1(x2)
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const nancumprod: import("./map.mjs").accumulateWrappedFunction;
/**
 * nan0(x1) + nan0(x2)
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const nancumsum: import("./map.mjs").accumulateWrappedFunction;
