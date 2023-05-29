import { tester, array, NDArray, wrapper_accumulate } from './core.mjs';

/**
 * x1 * x2
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cumprod = wrapper_accumulate('cumprod', (x1, x2) => x1 * x2);

/**
 * x1 + x2
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const cumsum = wrapper_accumulate('cumsum', (x1, x2) => x1 + x2);

let nan1 = x => (Number.isNaN(x) ? 1 : x);

/**
 * nan1(x1) * nan1(x2)
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const nancumprod = wrapper_accumulate('nancumprod', (x1, x2) => nan1(x1) * nan1(x2));

let nan0 = x => (Number.isNaN(x) ? 0 : x);

/**
 * nan0(x1) + nan0(x2)
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
export const nancumsum = wrapper_accumulate('nancumsum', (x1, x2) => nan0(x1) + nan0(x2));

process.env.PRODUCTION ||
	tester
		.add(
			cumprod,
			() => cumprod(0),
			() => array([0])
		)
		.add(
			cumprod,
			() => cumprod([]),
			() => array([])
		)
		.add(
			cumprod,
			() => cumprod(array([1, 2, 3])),
			() => array([1, 2, 6])
		)
		.add(
			cumprod,
			() =>
				cumprod(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				),
			() => array([1, 2, 6, 24, 120, 720])
		)
		.add(
			cumprod,
			() =>
				cumprod(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					0
				),
			() =>
				array([
					[1, 2, 3],
					[4, 10, 18],
				])
		)
		.add(
			cumprod,
			() =>
				cumprod(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					1
				),
			() =>
				array([
					[1, 2, 6],
					[4, 20, 120],
				])
		);

process.env.PRODUCTION ||
	tester
		.add(
			cumsum,
			() =>
				cumsum(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				),
			() => array([1, 3, 6, 10, 15, 21])
		)
		.add(
			cumsum,
			() =>
				cumsum(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					0
				),
			() =>
				array([
					[1, 2, 3],
					[5, 7, 9],
				])
		)
		.add(
			cumsum,
			() =>
				cumsum(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					1
				),
			() =>
				array([
					[1, 3, 6],
					[4, 9, 15],
				])
		);

process.env.PRODUCTION ||
	tester
		.add(
			nancumprod,
			() => nancumprod(1),
			() => array([1])
		)
		.add(
			nancumprod,
			() => nancumprod([1]),
			() => array([1])
		)
		.add(
			nancumprod,
			() => nancumprod([1, NaN]),
			() => array([1, 1])
		)
		.add(
			nancumprod,
			() =>
				nancumprod(
					array([
						[1, 2],
						[3, NaN],
					])
				),
			() => array([1, 2, 6, 6])
		)
		.add(
			nancumprod,
			() =>
				nancumprod(
					array([
						[1, 2],
						[3, NaN],
					]),
					0
				),
			() =>
				array([
					[1, 2],
					[3, 2],
				])
		)
		.add(
			nancumprod,
			() =>
				nancumprod(
					array([
						[1, 2],
						[3, NaN],
					]),
					1
				),
			() =>
				array([
					[1, 2],
					[3, 3],
				])
		);

process.env.PRODUCTION ||
	tester
		.add(
			nancumsum,
			() => nancumsum(1),
			() => array([1])
		)
		.add(
			nancumsum,
			() => nancumsum([1]),
			() => array([1])
		)
		.add(
			nancumsum,
			() => nancumsum([1, NaN]),
			() => array([1, 1])
		)
		.add(
			nancumsum,
			() =>
				nancumsum(
					array([
						[1, 2],
						[3, NaN],
					])
				),
			() => array([1, 3, 6, 6])
		)
		.add(
			nancumsum,
			() =>
				nancumsum(
					array([
						[1, 2],
						[3, NaN],
					]),
					0
				),
			() =>
				array([
					[1, 2],
					[4, 2],
				])
		)
		.add(
			nancumsum,
			() =>
				nancumsum(
					array([
						[1, 2],
						[3, NaN],
					]),
					1
				),
			() =>
				array([
					[1, 3],
					[3, 3],
				])
		);
