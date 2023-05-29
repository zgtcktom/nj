/**
 * @callback mapCallback
 * @param {any} value
 * @returns {any}
 * @ignore
 */
/**
 * @callback map2Callback
 * @param {any} value1
 * @param {any} value2
 * @returns {any}
 * @ignore
 */
/**
 * @callback reduceCallback
 * @param {any} accum
 * @param {any} value
 * @returns {any}
 * @ignore
 */
/**
 * @callback accumulateCallback
 * @param {any} accum
 * @param {any} value
 * @returns {any}
 * @ignore
 */
/**
 * @callback mapFunction
 * @param {mapCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @returns {void}
 * @ignore
 */
/**
 * @callback map2Function
 * @param {map2Callback} fn
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {NDArray} out
 * @returns {void}
 * @ignore
 */
/**
 * @callback reduceFunction
 * @param {reduceCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @param {any} initial
 * @returns {void}
 * @ignore
 */
/**
 * @callback accumulateFunction
 * @param {accumulateCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @returns {void}
 * @ignore
 */
/**
 * @callback mapWrappedFunction
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 * @ignore
 */
/**
 * @callback map2WrappedFunction
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 * @ignore
 */
/**
 * @callback reduceWrappedFunction
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 * @ignore
 */
/**
 * @callback accumulateWrappedFunction
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 * @ignore
 */
/**
 *
 * @param {NDArray} ndarray
 * @param {function(any, number): any} callback
 * @returns {NDArray}
 */
export function map(ndarray: NDArray, callback: (arg0: any, arg1: number) => any): NDArray;
/**
 *
 * @param {NDArray} a
 * @param {reduceCallback} callback
 * @returns {NDArray}
 */
export function reduce(a: NDArray, callback: reduceCallback): NDArray;
export function wrapper_(name: any, fn: any, ...args: any[]): any;
/**
 * @param {string} name
 * @param {mapCallback} fn
 * @param {Object} [args = null]
 * @returns {mapWrappedFunction}
 * @ignore
 */
export function wrapper_map(name: string, fn: mapCallback, args?: any): mapWrappedFunction;
/**
 * @param {string} name
 * @param {map2Callback} fn
 * @param {Object} [args = null]
 * @returns {map2WrappedFunction}
 * @ignore
 */
export function wrapper_map2(name: string, fn: map2Callback, args?: any): map2WrappedFunction;
/**
 * @param {string} name
 * @param {reduceCallback} fn
 * @param {any} [defaultinitial = undefined]
 * @returns {reduceWrappedFunction}
 * @ignore
 */
export function wrapper_reduce(name: string, fn: reduceCallback, defaultinitial?: any): reduceWrappedFunction;
/**
 * @param {string} name
 * @param {accumulateCallback} fn
 * @param {Object} [args = null]
 * @returns {accumulateWrappedFunction}
 * @ignore
 */
export function wrapper_accumulate(name: string, fn: accumulateCallback, args?: any): accumulateWrappedFunction;
/**
 * @param {mapCallback} fn
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function map_(fn: mapCallback, x: NDArray, out?: null | NDArray, dtype?: Dtype): NDArray;
/**
 * @param {mapCallback} fn
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function map2_(fn: mapCallback, x1: NDArray, x2: NDArray, out?: null | NDArray, dtype?: Dtype): NDArray;
/**
 * @param {reduceCallback} fn
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function reduce_(fn: reduceCallback, x: NDArray, axis?: null | number | number[], out?: null | NDArray, keepdims?: boolean, initial?: any, return_scalar?: boolean, dtype?: Dtype): NDArray;
/**
 * @param {accumulateCallback} fn
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function accumulate_(fn: accumulateCallback, x: NDArray, axis?: null | number | number[], out?: null | NDArray, dtype?: Dtype): NDArray;
/**
 * @param {null|number|number[]} axis
 * @param {number} ndim
 * @param {boolean} [allow_duplicate = false]
 * @returns {boolean[]}
 * @ignore
 */
export function normalize_axes(axis: null | number | number[], ndim: number, allow_duplicate?: boolean): boolean[];
/**
 * @param {number} axis
 * @param {number} ndim
 * @returns {number}
 * @ignore
 */
export function normalize_axis_index(axis: number, ndim: number): number;
export type mapCallback = (value: any) => any;
export type map2Callback = (value1: any, value2: any) => any;
export type reduceCallback = (accum: any, value: any) => any;
export type accumulateCallback = (accum: any, value: any) => any;
export type mapFunction = (fn: mapCallback, x: NDArray, out: NDArray) => void;
export type map2Function = (fn: map2Callback, x1: NDArray, x2: NDArray, out: NDArray) => void;
export type reduceFunction = (fn: reduceCallback, x: NDArray, out: NDArray, initial: any) => void;
export type accumulateFunction = (fn: accumulateCallback, x: NDArray, out: NDArray) => void;
export type mapWrappedFunction = (x: NDArray, out?: null | NDArray) => NDArray;
export type map2WrappedFunction = (x1: NDArray, x2: NDArray, out?: null | NDArray) => NDArray;
export type reduceWrappedFunction = (x: NDArray, axis?: null | number | number[], out?: null | NDArray, keepdims?: boolean, initial?: any, return_scalar?: boolean) => NDArray;
export type accumulateWrappedFunction = (x: NDArray, axis?: null | number | number[], out?: null | NDArray) => NDArray;
import { NDArray } from './core.mjs';
import { Dtype } from './core.mjs';
