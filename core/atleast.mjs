import { array, asarray, tester, arange, NDArray } from './core.mjs';

/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_1d(1.0) // array([1])
 * @example
 * atleast_1d(1, [3, 4]) // [array([1]), array([3, 4])]
 */
export function atleast_1d(...arrays) {
	if (arrays.length != 1) {
		return arrays.map(a => atleast_1d(a));
	}

	let a = asarray(arrays[0]);
	let { ndim } = a;

	if (ndim >= 1) return a;

	return a.copy().reshape([1]);
}

/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_2d(1.0) // array([[1]])
 * @example
 * atleast_2d(1, [3, 4]) // [array([[1]]), array([[3, 4]])]
 */
export function atleast_2d(...arrays) {
	if (arrays.length != 1) {
		return arrays.map(a => atleast_2d(a));
	}

	let a = asarray(arrays[0]);
	let { ndim, shape } = a;

	if (ndim >= 2) return a;

	if (ndim == 1) return a.reshape([1, shape[0]]);

	return a.copy().reshape([1, 1]);
}

/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_3d(1.0) // array([[[1]]])
 * @example
 * atleast_3d(1, [3, 4]) // [array([[[1]]]), array([[[3], [4]]])]
 */
export function atleast_3d(...arrays) {
	if (arrays.length != 1) {
		return arrays.map(a => atleast_3d(a));
	}

	let a = asarray(arrays[0]);
	let { ndim, shape } = a;

	if (ndim >= 3) return a;

	if (ndim == 2) return a.reshape([shape[0], shape[1], 1]);

	if (ndim == 1) return a.reshape([1, shape[0], 1]);

	return a.copy().reshape([1, 1, 1]);
}

process.env.PRODUCTION ||
	tester
		.add(
			atleast_1d,
			() => atleast_1d(1.0),
			() => array([1])
		)
		.add(
			atleast_1d,
			() => atleast_1d(1, [3, 4]),
			() => [array([1]), array([3, 4])]
		)
		.add(
			atleast_1d,
			() => atleast_1d(arange(9.0).reshape([3, 3])),
			() =>
				array([
					[0, 1, 2],
					[3, 4, 5],
					[6, 7, 8],
				])
		)
		.add(
			atleast_1d,
			() => {
				let x = array([1]);
				let y = x.at(0);
				let z = atleast_1d(y);
				z.set([0], -96);
				return [x.array(), y.array(), z.array(), x.base === null, y.base === null, z.base != y, z.base];
			},
			() => [array([1]), 1, array([-96]), true, false, true, array(-96)]
		);

process.env.PRODUCTION ||
	tester
		.add(
			atleast_2d,
			() => atleast_2d(3.0),
			() => array([[3]])
		)
		.add(
			atleast_2d,
			() => {
				let x = arange(3.0);
				return [atleast_2d(x), atleast_2d(x).base === x];
			},
			() => [array([[0, 1, 2]]), true]
		)
		.add(
			atleast_2d,
			() => atleast_2d(1, [1, 2], [[1, 2]]),
			() => [array([[1]]), array([[1, 2]]), array([[1, 2]])]
		);

process.env.PRODUCTION ||
	tester
		.add(
			atleast_3d,
			() => atleast_3d(3.0),
			() => array([[[3]]])
		)
		.add(
			atleast_3d,
			() => atleast_3d(arange(3.0)).shape,
			() => [1, 3, 1]
		)
		.add(
			atleast_3d,
			() => {
				let x = arange(12.0).reshape(4, 3);
				return [atleast_3d(x).shape, atleast_3d(x).base === x.base];
			},
			() => [[4, 3, 1], true]
		)
		.add(
			atleast_3d,
			() => atleast_3d([1, 2], [[1, 2]], [[[1, 2]]]),
			() => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]
		);
