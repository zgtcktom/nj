import { tester, array, concatenate, atleast_3d, NDArray } from './core.mjs';

/**
 * @param {NDArray[]} arrays
 * @returns {NDArray}
 */
export function dstack(arrays) {
	arrays = atleast_3d(...arrays);
	if (!Array.isArray(arrays)) arrays = [arrays];
	return concatenate(arrays, 2);
}

tester
	.add(
		dstack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([2, 3, 4]);
			return dstack([a, b]);
		},
		() =>
			array([
				[
					[1, 2],
					[2, 3],
					[3, 4],
				],
			])
	)
	.add(
		dstack,
		() => {
			let a = array([[1], [2], [3]]);
			let b = array([[2], [3], [4]]);
			return dstack([a, b]);
		},
		() => array([[[1, 2]], [[2, 3]], [[3, 4]]])
	);
