import { tester, arange, array, NDArray, wrapper_map2 } from './core.mjs';

/**
 * x1 + x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const add = wrapper_map2('add', (x1, x2) => x1 + x2);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const subtract = wrapper_map2('subtract', (x1, x2) => x1 - x2);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const multiply = wrapper_map2('multiply', (x1, x2) => x1 * x2);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const divide = wrapper_map2('divide', (x1, x2) => x1 / x2);

/**
 * Alias of {@link divide}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const true_divide = divide;

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const floor_divide = wrapper_map2('floor_divide', (x1, x2) => (x1 / x2) | 0);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const mod = wrapper_map2('mod', (x1, x2) => ((x1 % x2) + x2) % x2);

/**
 * Alias of {@link mod}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const remainder = mod;

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const power = wrapper_map2('power', (x1, x2) => x1 ** x2);

tester.add(
	add,
	() => add(arange(9.0).reshape([3, 3]), arange(3.0)),
	() =>
		array([
			[0, 2, 4],
			[3, 5, 7],
			[6, 8, 10],
		])
);

tester
	.add(
		subtract,
		() => subtract(1.0, 4.0),
		() => -3.0
	)
	.add(
		subtract,
		() => subtract(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[0, 0, 0],
				[3, 3, 3],
				[6, 6, 6],
			])
	);

tester
	.add(
		multiply,
		() => multiply(2.0, 4.0),
		() => 8.0
	)
	.add(
		subtract,
		() => multiply(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[0, 1, 4],
				[0, 4, 10],
				[0, 7, 16],
			])
	);

tester
	.add(
		divide,
		() => divide(2.0, 4.0),
		() => 0.5
	)
	.add(
		divide,
		() => divide(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[NaN, 1, 1],
				[Infinity, 4, 2.5],
				[Infinity, 7, 4],
			])
	);

tester
	.add(
		mod,
		() => mod([4, 7], [2, 3]),
		() => array([0, 1])
	)
	.add(
		mod,
		() => mod(arange(7), 5),
		() => array([0, 1, 2, 3, 4, 0, 1])
	);

tester
	.add(
		power,
		() => power(arange(6), 3),
		() => array([0, 1, 8, 27, 64, 125])
	)
	.add(
		power,
		() => power(arange(6), [1.0, 2.0, 3.0, 3.0, 2.0, 1.0]),
		() => array([0, 1, 8, 27, 16, 5])
	)
	.add(
		power,
		() =>
			power(
				arange(6),
				array([
					[1, 2, 3, 3, 2, 1],
					[1, 2, 3, 3, 2, 1],
				])
			),
		() =>
			array([
				[0, 1, 8, 27, 16, 5],
				[0, 1, 8, 27, 16, 5],
			])
	)
	.add(
		power,
		() => power(arange(6), array([1, 2, 3, 3, 2, 1])),
		() => array([0, 1, 8, 27, 16, 5])
	);
