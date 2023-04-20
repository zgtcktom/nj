import { tester, NDArray } from './core.mjs';

/**
 * @param {NDArray} N
 * @param {number} [M]
 * @param {number} [k]
 * @returns {NDArray}
 */
export function eye(N, M = N, k = 0) {
	let size = N * M;
	let data = Array(size).fill(0);
	for (let i = k + Math.ceil(-k / (M + 1)) * (M + 1); i < size; i += M + 1) {
		data[i] = 1;
	}
	return new NDArray([N, M], data);
}

tester
	.add(
		'eye',
		() => eye(2),
		() => [
			[1, 0],
			[0, 1],
		]
	)
	.add(
		'eye',
		() => eye(3, 3, 1),
		() => [
			[0, 1, 0],
			[0, 0, 1],
			[0, 0, 0],
		]
	)
	.add(
		'eye',
		() => eye(4, 5, -1),
		() => [
			[0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0],
		]
	);
