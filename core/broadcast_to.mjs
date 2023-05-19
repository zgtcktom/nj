import { tester, NDArray, asarray, array, broadcast_shapes } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {number[]} shape
 * @returns {NDArray}
 */
export function broadcast_to(a, shape) {
	a = asarray(a);
	let { strides, ndim } = a;

	if (ndim > shape.length) {
		throw new Error('broadcast shape has less dimensions than input array');
	}

	let new_strides = [];
	for (let i = shape.length - 1, j = a.shape.length - 1; i >= 0; i--, j--) {
		if (j >= 0 && !(a.shape[j] == 1 || a.shape[j] == shape[i])) {
			throw new Error('operands could not be broadcast together');
		}
		new_strides[i] = j < 0 || a.shape[j] == 1 ? 0 : strides[j];
	}

	return a.as_strided(shape, new_strides);
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

tester.add(
	'broadcast_to',
	() => broadcast_to(array([1, 2, 3]).reshape(3), [3, 3]).array(),
	() => [
		[1, 2, 3],
		[1, 2, 3],
		[1, 2, 3],
	]
);

tester.add(
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
