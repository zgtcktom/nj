import { NDArray, arange, array, compress, ravel, tester } from './core.mjs';

/**
 *
 * @param {NDArray} condition
 * @param {NDArray} a
 * @returns {NDArray}
 */
export function extract(condition, a) {
	return compress(ravel(condition), ravel(a));
}

process.env.PRODUCTION ||
	tester.add(
		extract,
		() => {
			let arr, condition;
			arr = arange(12).reshape([3, 4]);
			condition = array([
				[true, false, false, true],
				[false, false, true, false],
				[false, true, false, false],
			]);
			return extract(condition, arr);
		},
		() => array([0, 3, 6, 9])
	);
