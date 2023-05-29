import { tester, NDArray, array } from './core.mjs';

/**
 * @param {number} start
 * @param {number} stop
 * @param {number} [num]
 * @param {boolean} [endpoint]
 * @param {boolean} [retstep]
 * @returns {NDArray}
 */
export function linspace(start, stop, num = 50, endpoint = true, retstep = false) {
	let step = (stop - start) / (endpoint ? num - 1 : num);
	let data = [];
	for (let i = 0; i < num; i++) {
		data[i] = start + i * step;
	}
	let out = array(data);
	if (retstep) return [out, step];
	return out;
}

process.env.PRODUCTION ||
	tester
		.add(
			'linspace',
			() => linspace(2, 3, 5),
			() => array([2, 2.25, 2.5, 2.75, 3])
		)
		.add(
			'linspace',
			() => linspace(2, 3, 5, false),
			() => array([2, 2.2, 2.4, 2.6, 2.8])
		)
		.add(
			'linspace',
			() => linspace(2.0, 3.0, 5, true, true),
			() => [array([2, 2.25, 2.5, 2.75, 3]), 0.25]
		)
		.add(
			'linspace',
			() => linspace(2.0, 3.0, 5, false, true),
			() => [array([2, 2.2, 2.4, 2.6, 2.8]), 0.2]
		)
		.add(
			'linspace',
			() => linspace(1, 10, 10, false),
			() => array([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])
		);
