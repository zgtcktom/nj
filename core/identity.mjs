import { tester, NDArray } from './core.mjs';

/**
 * @param {number} n
 * @returns {NDArray}
 */
export function identity(n) {
	let size = n * n;
	let data = Array(size).fill(0);
	for (let i = 0; i < size; i += n + 1) data[i] = 1;
	return new NDArray([n, n], data);
}

tester
	.add(
		'identity',
		() => identity(3),
		() => [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1],
		]
	)
	.add(
		'identity',
		() => identity(0),
		() => []
	);
