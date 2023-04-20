import { array, tester, NDArray, asarray, transpose } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {number} axis1
 * @param {number} axis2
 * @returns {NDArray}
 */
export function swapaxes(a, axis1, axis2) {
	a = asarray(a);

	let axes = [...Array(a.ndim).keys()];
	[axes[axis1], axes[axis2]] = [axes[axis2], axes[axis1]];

	return transpose(a, axes);
}

tester
	.add(
		swapaxes,
		() => {
			let x = array([[1, 2, 3]]);
			return swapaxes(x, 0, 1);
		},
		() => array([[1], [2], [3]])
	)
	.add(
		swapaxes,
		() => {
			let x = array([
				[
					[0, 1],
					[2, 3],
				],
				[
					[4, 5],
					[6, 7],
				],
			]);
			return swapaxes(x, 0, 2);
		},
		() =>
			array([
				[
					[0, 4],
					[2, 6],
				],
				[
					[1, 5],
					[3, 7],
				],
			])
	);
