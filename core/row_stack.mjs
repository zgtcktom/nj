import { tester, array, concatenate, asarray, atleast_2d, NDArray } from './core.mjs';

/**
 * @param {NDArray[]} arrs
 * @returns {NDArray}
 */
export function row_stack(arrs) {
	arrs = atleast_2d(...arrs);
	if (!Array.isArray(arrs)) arrs = [arrs];
	return concatenate(arrs, 0);
}

tester
	.add(
		row_stack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([4, 5, 6]);
			return row_stack([a, b]);
		},
		() =>
			array([
				[1, 2, 3],
				[4, 5, 6],
			])
	)
	.add(
		row_stack,
		() => {
			let a = array([[1], [2], [3]]);
			let b = array([[4], [5], [6]]);
			return row_stack([a, b]);
		},
		() => array([[1], [2], [3], [4], [5], [6]])
	);
