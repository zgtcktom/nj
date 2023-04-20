import { tester, array, concatenate, atleast_1d, NDArray } from './core.mjs';

/**
 * @param {NDArray[]} arrays
 * @returns {NDArray}
 */
export function hstack(arrays) {
	arrays = atleast_1d(...arrays);
	if (!Array.isArray(arrays)) arrays = [arrays];
	if (arrays.length > 0 && arrays[0].ndim == 1) return concatenate(arrays, 0);
	return concatenate(arrays, 1);
}

tester
	.add(
		hstack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([4, 5, 6]);
			return hstack([a, b]);
		},
		() => array([1, 2, 3, 4, 5, 6])
	)
	.add(
		hstack,
		() => {
			let a = array([[1], [2], [3]]);
			let b = array([[4], [5], [6]]);
			return hstack([a, b]);
		},
		() =>
			array([
				[1, 4],
				[2, 5],
				[3, 6],
			])
	);
