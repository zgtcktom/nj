import { tester, empty, copyto, NDArray } from './core.mjs';

/**
 *
 * @param {number[]} shape
 * @param {*} fill_value
 * @returns {NDArray}
 */
export function full(shape, fill_value) {
	let array = empty(shape);
	copyto(array, fill_value);
	return array;
}

tester
	.add(
		'full',
		() => full([2, 2], Infinity),
		() => [
			[Infinity, Infinity],
			[Infinity, Infinity],
		]
	)
	.add(
		'full',
		() => full([2, 2], 10),
		() => [
			[10, 10],
			[10, 10],
		]
	)
	.add(
		'full',
		() => full([2, 2], [1, 2]),
		() => [
			[1, 2],
			[1, 2],
		]
	)
	.add(
		'full',
		() => full(2, -1),
		() => [-1, -1]
	);
