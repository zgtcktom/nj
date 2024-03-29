import { NDArray, array, tester } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @returns {NDArray}
 */
export function copy(a) {
	return array(a);
}

process.env.PRODUCTION ||
	tester.add(
		copy,
		() => {
			let x, y, z;
			x = array([1, 2, 3]);
			y = x;
			z = copy(x);
			x.set([0], 10);
			return [x.item(0) == y.item(0), x.item(0) == z.item(0)];
		},
		() => [true, false]
	);
