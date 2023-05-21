/**
 * @module comparison
 */

import { arange, array, ones, tester, NDArray, wrapper_map2 } from './core.mjs';

/**
 * x1 == x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const equal = wrapper_map2('equal', (x1, x2) => x1 == x2, { dtype: 'boolean' });

/**
 * x1 != x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const not_equal = wrapper_map2('not_equal', (x1, x2) => x1 != x2, { dtype: 'boolean' });

/**
 * x1 < x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const less = wrapper_map2('less', (x1, x2) => x1 < x2, { dtype: 'boolean' });

/**
 * x1 <= x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const less_equal = wrapper_map2('less_equal', (x1, x2) => x1 <= x2, { dtype: 'boolean' });

/**
 * x1 > x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const greater = wrapper_map2('greater', (x1, x2) => x1 > x2, { dtype: 'boolean' });

/**
 * x1 >= x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const greater_equal = wrapper_map2('greater_equal', (x1, x2) => x1 >= x2, { dtype: 'boolean' });

/**
 * Alias of {@link equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const eq = equal;

/**
 * Alias of {@link not_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const neq = not_equal;

/**
 * Alias of {@link less}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const lt = less;

/**
 * Alias of {@link less_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const lte = less_equal;

/**
 * Alias of {@link greater}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const gt = greater;

/**
 * Alias of {@link greater_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const gte = greater_equal;

tester
	.add(
		equal,
		() => equal([0, 1, 3], arange(3)),
		() => array([true, true, false])
	)
	.add(
		equal,
		() => equal(1, ones(1)),
		() => array([true])
	)
	.add(
		equal,
		() => equal(array([2, 4, 6]), array([2, 4, 2])),
		() => array([true, true, false])
	);

tester
	.add(
		not_equal,
		() => not_equal([1, 2], [1, 3]),
		() => array([false, true])
	)
	.add(
		not_equal,
		() =>
			not_equal(
				[1, 2],
				[
					[1, 3],
					[1, 4],
				]
			),
		() =>
			array([
				[false, true],
				[false, true],
			])
	);

tester.add(
	less_equal,
	() => less_equal([4, 2, 1], [2, 2, 2]),
	() => array([false, true, true])
);

tester.add(
	less,
	() => less([1, 2], [2, 2]),
	() => array([true, false])
);

tester.add(
	greater_equal,
	() => greater_equal([4, 2, 1], [2, 2, 2]),
	() => array([true, true, false])
);

tester.add(
	greater,
	() => greater([4, 2], [2, 2]),
	() => array([true, false])
);
