import { tester, array, NDArray, empty } from './core.mjs';

/**
 * The parameters can be either float or integer numbers.
 * @param {number} start
 * @param {number} [stop]
 * @param {number} [step]
 * @returns {NDArray<number>}
 * @example
 * arange(2) // array([0, 1])
 * @example
 * arange(1, 3) // array([1, 2])
 * @example
 * arange(0, 6, 2) // array([0, 2, 4])
 */
export function arange(start, stop = undefined, step = 1) {
	if (stop == undefined) {
		stop = start;
		start = 0;
	}
	let size = Math.max(0, ((stop - start) / step) | 0);

	let out = empty([size], 'number');
	let { data } = out;
	for (let i = 0; i < size; i++) {
		data[i] = start + i * step;
	}
	return out;
}

tester
	.add(
		'arange',
		() => arange(3),
		() => array([0, 1, 2])
	)
	.add(
		'arange',
		() => arange(-10, 10),
		() => array([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
	)
	.add(
		'arange',
		() => arange(-10, 10, -1),
		() => array([])
	)
	.add(
		'arange',
		() => arange(3, 7, 2),
		() => array([3, 5])
	)
	.add(
		'arange',
		() => arange(0, -10, -1),
		() => array([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
	);
