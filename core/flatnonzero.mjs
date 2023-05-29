import { NDArray, arange, array, nonzero, ravel, tester } from './core.mjs';

/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
export function flatnonzero(a) {
	return nonzero(ravel(a))[0];
}

process.env.PRODUCTION ||
	tester.add(
		flatnonzero,
		() => {
			let x;
			x = arange(-2, 3);
			return flatnonzero(x);
		},
		() => array([0, 1, 3, 4])
	);
