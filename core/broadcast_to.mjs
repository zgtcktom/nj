import { tester, NDArray, asarray, array, broadcast_shapes } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {number[]} shape
 * @returns {NDArray}
 */
export function broadcast_to(a, shape) {
	a = asarray(a);
	let { strides, ndim, shape: aShape } = a;
	let n = shape.length;

	if (ndim > n) {
		throw new Error('broadcast shape has less dimensions than input array');
	}

	let newStrides = [];
	for (let i = n - 1, j = ndim - 1; i >= 0; i--, j--) {
		if (j >= 0 && !(aShape[j] == 1 || aShape[j] == shape[i])) {
			throw new Error('operands could not be broadcast together');
		}
		newStrides[i] = j < 0 || aShape[j] == 1 ? 0 : strides[j];
	}

	return a.as_strided(shape, newStrides);
}

/**
 * @param  {...NDArray} arrays
 * @returns {NDArray[]}
 */
export function broadcast_arrays(...arrays) {
	arrays = arrays.map(a => asarray(a));
	let shape = broadcast_shapes(...arrays.map(a => a.shape));
	return arrays.map(a => broadcast_to(a, shape));
}

process.env.PRODUCTION ||
	tester
		.add(
			'broadcast_to',
			() => broadcast_to(array([1, 2, 3]).reshape(3), [3, 3]).array(),
			() => [
				[1, 2, 3],
				[1, 2, 3],
				[1, 2, 3],
			]
		)
		.add(
			'broadcast_to',
			() => broadcast_to(array([1, 2, 3]).reshape(1, 3, 1), [2, 3, 4]).array(),
			() => [
				[
					[1, 1, 1, 1],
					[2, 2, 2, 2],
					[3, 3, 3, 3],
				],
				[
					[1, 1, 1, 1],
					[2, 2, 2, 2],
					[3, 3, 3, 3],
				],
			]
		);
