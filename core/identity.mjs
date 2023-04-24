import { tester, NDArray, Dtype, eye } from './core.mjs';

/**
 * @param {number} n
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function identity(n, dtype = 'number') {
	return eye(n, n, 0, dtype);
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
