import { array, tester, NDArray, wrapper_reduce, wrapper_map } from './core.mjs';

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
 * n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isinf = wrapper_map(
	'isinf',
	n => n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY
);

/**
 * Number.isNaN
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isna = wrapper_map('isna', Number.isNaN);

/**
 * n == Number.NEGATIVE_INFINITY
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isneginf = wrapper_map('isneginf', n => n == Number.NEGATIVE_INFINITY);

/**
 * n == Number.POSITIVE_INFINITY
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const isposinf = wrapper_map('isposinf', n => n == Number.POSITIVE_INFINITY);

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
