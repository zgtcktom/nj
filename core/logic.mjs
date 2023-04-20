import { array, tester, _wrap_map_unary, _wrap_reduce, NDArray } from './core.mjs';

/**
 * @function
 * @param {NDArray} x1
 * @param {number} axis
 * @param {NDArray} out
 * @param {boolean} keepdims
 * @param {any} initial
 * @param {boolean} return_scalar
 * @returns {NDArray}
 */
export const all = _wrap_reduce('all', (accum, value) => accum && !!value, 1, true);

/**
 * @function
 * @param {NDArray} x1
 * @param {number} axis
 * @param {NDArray} out
 * @param {boolean} keepdims
 * @param {any} initial
 * @param {boolean} return_scalar
 * @returns {NDArray}
 */
export const any = _wrap_reduce('any', (accum, value) => accum || !!value, 1, false);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} out
 * @returns {NDArray}
 */
export const isfinite = _wrap_map_unary('isfinite', Number.isFinite);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} out
 * @returns {NDArray}
 */
export const isinf = _wrap_map_unary(
	'isinf',
	n => n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY
);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} out
 * @returns {NDArray}
 */
export const isna = _wrap_map_unary('isinf', Number.isNaN);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} out
 * @returns {NDArray}
 */
export const isneginf = _wrap_map_unary('isinf', n => n == Number.NEGATIVE_INFINITY);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} out
 * @returns {NDArray}
 */
export const isposinf = _wrap_map_unary('isinf', n => n == Number.POSITIVE_INFINITY);

tester
	.add(
		all,
		() =>
			// noted that !!all(false) is true
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
			return [all([-1, 4, 5], null, o) === o, o];
		},
		() => [true, array(true)]
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
		// > np.any(np.nan)
		// True
		// Nope
		() => any(NaN),
		() => false
	);
