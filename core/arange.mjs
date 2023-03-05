import { tester, array, NDArray } from './core.mjs';

export function arange(start, stop, step = 1) {
	if (stop == undefined) {
		stop = start;
		start = 0;
	}
	let size = (stop - start) / step;
	let data = [];
	for (let i = 0; i < size; i++) {
		data[i] = start + i * step;
	}
	return new NDArray([size], data);
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
