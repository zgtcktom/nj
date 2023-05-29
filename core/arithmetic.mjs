/**
 * @module math/arithmetic
 */

import { tester, arange, array, NDArray, wrapper_map2, wrapper_map, map_ } from './core.mjs';

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
 * 1 / x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const reciprocal = wrapper_map('reciprocal', x => 1 / x);

/**
 * +x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const positive = wrapper_map('positive', x => +x);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const negative = wrapper_map('negative', x => -x);

/**
 * x1 * x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const multiply = wrapper_map2('multiply', (x1, x2) => x1 * x2);

/**
 * x1 / x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const divide = wrapper_map2('divide', (x1, x2) => x1 / x2);

/**
 * x1 ** x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const power = wrapper_map2('power', (x1, x2) => x1 ** x2);

/**
 * x1 - x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const subtract = wrapper_map2('subtract', (x1, x2) => x1 - x2);

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
 * (x1 / x2) | 0
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const floor_divide = wrapper_map2('floor_divide', (x1, x2) => (x1 / x2) | 0);

/**
 * Alias of {@link power}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const float_power = power;

/**
 * x1 - ((x1 / x2) | 0) * x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const fmod = wrapper_map2('fmod', (x1, x2) => x1 - ((x1 / x2) | 0) * x2);

/**
 * ((x1 % x2) + x2) % x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const mod = wrapper_map2('mod', (x1, x2) => ((x1 % x2) + x2) % x2);

/**
 * [x % 1, x | 0]
 * @function
 * @param {NDArray} x
 * @param {Array<null|NDArray>} [out = [null, null]]
 * @returns {NDArray[]}
 */
export function modf(x, out = [null, null]) {
	return [map_(modf_frac, x, out[0]), map_(modf_int, x, out[1])];
}

const modf_frac = x => x % 1;
const modf_int = x => x | 0;

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
 * [x % 1, x | 0]
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {Array<null|NDArray>} [out = [null, null]]
 * @returns {NDArray[]}
 */
export function divmod(x1, x2, out = [null, null]) {
	return [floor_divide(x1, x2, out[0]), mod(x1, x2, out[1])];
}

process.env.PRODUCTION ||
	tester.add(
		divmod,
		() => divmod(arange(5), 3),
		() => [array([0, 0, 0, 1, 1]), array([0, 1, 2, 0, 1])]
	);

process.env.PRODUCTION ||
	tester
		.add(
			modf,
			() => modf([0, 3.5]),
			() => [array([0, 0.5]), array([0, 3])]
		)
		.add(
			modf,
			() => modf(-0.5),
			() => [-0.5, -0]
		);

process.env.PRODUCTION ||
	tester
		.add(
			fmod,
			() => fmod([-3, -2, -1, 1, 2, 3], 2),
			() => array([-1, 0, -1, 1, 0, 1])
		)
		.add(
			fmod,
			() => remainder([-3, -2, -1, 1, 2, 3], 2),
			() => array([1, 0, 1, 1, 0, 1])
		);

process.env.PRODUCTION ||
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

process.env.PRODUCTION ||
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

process.env.PRODUCTION ||
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

process.env.PRODUCTION ||
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

process.env.PRODUCTION ||
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

process.env.PRODUCTION ||
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
