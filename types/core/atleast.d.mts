/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_1d(1.0) // array([1])
 * @example
 * atleast_1d(1, [3, 4]) // [array([1]), array([3, 4])]
 */
export function atleast_1d(...arrays: NDArray[]): NDArray | NDArray[];
/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_2d(1.0) // array([[1]])
 * @example
 * atleast_2d(1, [3, 4]) // [array([[1]]), array([[3, 4]])]
 */
export function atleast_2d(...arrays: NDArray[]): NDArray | NDArray[];
/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_3d(1.0) // array([[[1]]])
 * @example
 * atleast_3d(1, [3, 4]) // [array([[[1]]]), array([[[3], [4]]])]
 */
export function atleast_3d(...arrays: NDArray[]): NDArray | NDArray[];
import { NDArray } from './core.mjs';
