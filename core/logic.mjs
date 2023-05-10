/**
 * @module logic
 */

import {
	array,
	tester,
	NDArray,
	wrapper_reduce,
	wrapper_map,
	wrapper_map2,
	arange,
	greater,
	less,
} from './core.mjs';

/**
 * x1 && x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_and = wrapper_map2('logical_and', (x1, x2) => !!(x1 && x2));

/**
 * Alias of {@link logical_and}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const and = logical_and;

/**
 * x1 || x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_or = wrapper_map2('logical_or', (x1, x2) => !!(x1 || x2));

/**
 * Alias of {@link logical_or}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const or = logical_or;

/**
 * !x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_not = wrapper_map('logical_not', x => !x);

/**
 * Alias of {@link logical_not}
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const not = logical_not;

/**
 * !x1 != !x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const logical_xor = wrapper_map2('logical_xor', (x1, x2) => !x1 != !x2);

/**
 * Alias of {@link logical_xor}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const xor = logical_xor;

/**
 * accum && !!value
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const all = wrapper_reduce('all', (accum, value) => accum && !!value, true);

/**
 * accum || !!value
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
export const any = wrapper_reduce('any', (accum, value) => accum || !!value, false);

/**
 * Number.isFinite
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isfinite = wrapper_map('isfinite', Number.isFinite);

/**
 * n == Infinity || n == -Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isinf = wrapper_map('isinf', n => n == Infinity || n == -Infinity);

/**
 * Number.isNaN
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isna = wrapper_map('isna', Number.isNaN);

/**
 * n == -Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isneginf = wrapper_map('isneginf', n => n == -Infinity);

/**
 * n == Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isposinf = wrapper_map('isposinf', n => n == Infinity);

tester
	.add(
		logical_and,
		() => logical_and(true, false),
		() => false
	)
	.add(
		logical_and,
		() => logical_and([true, false], [false, false]),
		() => array([false, false])
	)
	.add(
		logical_and,
		() => {
			let x = arange(5);
			return logical_and(greater(x, 1), less(x, 4));
		},
		() => array([false, false, true, true, false])
	)
	.add(
		logical_and,
		() => logical_and(array([true, false]), array([false, false])),
		() => array([false, false])
	);

tester
	.add(
		all,
		() =>
			all([
				[true, false],
				[true, true],
			]) == false,
		() => true
	)
	.add(
		all,
		() =>
			all(
				[
					[true, false],
					[true, true],
				],
				0
			),
		() => array([true, false])
	)
	.add(
		all,
		() => all([-1, 4, 5]),
		() => true
	)
	.add(
		all,
		() => {
			let o = array(false);
			return [all([-1, 4, 5], null, o) == o, o];
		},
		() => [true, array(true)]
	)
	.add(
		all,
		() => all([]),
		() => true
	);

tester
	.add(
		any,
		() =>
			any([
				[true, false],
				[true, true],
			]),
		() => true
	)
	.add(
		any,
		() =>
			any(
				[
					[true, false],
					[false, false],
				],
				0
			),
		() => array([true, false])
	)
	.add(
		any,
		() => any([-1, 0, 5]),
		() => true
	)
	.add(
		any,
		() => any(NaN),
		() => false
	);
