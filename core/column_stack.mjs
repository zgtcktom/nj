import { tester, array, concatenate, asarray, NDArray } from './core.mjs';

/**
 * @param {NDArray[]} arrs
 * @returns {NDArray}
 */
export function column_stack(arrs) {
	let arrays = [];
	for (let arr of arrs) {
		arr = asarray(arr);
		if (arr.ndim < 2) arr = array(arr, null, false, 2).T;
		arrays.push(arr);
	}
	return concatenate(arrays, 1);
}

process.env.PRODUCTION ||
	tester.add(
		column_stack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([2, 3, 4]);
			return column_stack([a, b]);
		},
		() =>
			array([
				[1, 2],
				[2, 3],
				[3, 4],
			])
	);
