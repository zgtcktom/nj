/**
 * @module bitwise
 */

import { tester, array, NDArray, wrapper_map, wrapper_map2 } from './core.mjs';

/**
 * x1 & x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_and = wrapper_map2('bitwise_and', (x1, x2) => x1 & x2);

/**
 * x1 | x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_or = wrapper_map2('bitwise_or', (x1, x2) => x1 | x2);

/**
 * x1 ^ x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_xor = wrapper_map2('bitwise_xor', (x1, x2) => x1 ^ x2);

/**
 * ~x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const bitwise_not = wrapper_map('bitwise_not', x => ~x);

/**
 * Alias of {@link bitwise_not}
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const invert = bitwise_not;

/**
 * x1 << x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const left_shift = wrapper_map2('left_shift', (x1, x2) => x1 << x2);

/**
 * x1 >> x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const right_shift = wrapper_map2('right_shift', (x1, x2) => x1 >> x2);

process.env.PRODUCTION ||
	tester
		.add(
			invert,
			() => invert([13]),
			() => array([-14])
		)
		.add(
			bitwise_and,
			() => bitwise_and(13, 17),
			() => 1
		)
		.add(
			bitwise_and,
			() => bitwise_and([11, 7], [4, 25]),
			() => array([0, 1])
		)
		.add(
			bitwise_and,
			() => bitwise_and(array([2, 5, 255]), array([3, 14, 16])),
			() => array([2, 4, 16])
		)
		.add(
			bitwise_and,
			() => bitwise_and([true, true], [false, true]),
			() => array([false, true])
		);

process.env.PRODUCTION ||
	tester.add(
		bitwise_or,
		() => bitwise_or([33, 4], 1),
		() => array([33, 5])
	);

process.env.PRODUCTION ||
	tester.add(
		bitwise_xor,
		() => {
			// xor swap
			let a = [1, 2, 3];
			let b = [4, 5, 6];
			a = bitwise_xor(a, b);
			b = bitwise_xor(a, b);
			a = bitwise_xor(a, b);
			return [a, b];
		},
		() => [
			[4, 5, 6],
			[1, 2, 3],
		]
	);

process.env.PRODUCTION ||
	tester.add(
		left_shift,
		() => left_shift(5, [1, 2, 3]),
		() => array([10, 20, 40])
	);

process.env.PRODUCTION ||
	tester.add(
		right_shift,
		() => right_shift(10, [1, 2, 3]),
		() => array([5, 2, 1])
	);
