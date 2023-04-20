import { NDArray, Slice } from './core/core.mjs';

/**
 * Single element indexing.
 * @typedef {number} idx
 */

/**
 * Array indexing.
 * @typedef {number|Slice|string|null|number[]|boolean[]} index
 */

/**
 * An Array, TypedArray, or any object that supports `element = arr[idx]`.
 * @typedef {any[]} arr
 */

/**
 * An array-like object, which can be a NDArray, an Array, a TypedArray, or any scalar.
 * Typically followed by `a = asarray(a)` to convert to NDArray.
 * @typedef {NDArray} a
 */

/**
 * If a method has the same name as a typical argument, e.g.: the `shape` in
 * `shape(a)` and `empty(shape)`, an alias `shape_(a)' will be provided.
 * @typedef {*} functionName
 */
