import {
	tester,
	asarray,
	ravel,
	normalize_axis_index,
	empty,
	shallow_array_equal,
	slice,
	array,
	NDArray,
} from './core.mjs';

/**
 * @param {NDArray[]} arrays
 * @param {null|number} [axis]
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
export function concatenate(arrays, axis = 0, out = undefined) {
	if (arrays.length == 0) throw new Error('need at least one array to concatenate');

	arrays = arrays.map(a => asarray(a));
	if (axis == null) {
		arrays = arrays.map(a => ravel(a));
		axis = 0;
	}
	let { ndim, shape } = arrays[0];
	if (ndim == 0) throw new Error('zero-dimensional arrays cannot be concatenated');

	for (let i = 1; i < arrays.length; i++) {
		let array = arrays[i];
		if (array.ndim != ndim) {
			throw new Error(
				`all the input arrays must have same number of dimensions, but the array at index 0 has ${ndim} dimension(s) and the array at index ${i} has ${arrays[i].ndim} dimension(s)`
			);
		}
		for (let j = 0; j < ndim; j++) {
			if (j != axis && array.shape[j] != shape[j]) {
				throw new Error(
					`all the input array dimensions for the concatenation axis must match exactly, but along dimension ${j}, the array at index 0 has size ${shape[j]} and the array at index ${i} has size ${arrays[i].shape[j]}`
				);
			}
		}
	}

	axis = normalize_axis_index(axis, ndim);

	let outshape = shape.slice();
	outshape[axis] = arrays.reduce((a, b) => a + b.shape[axis], 0);

	if (out == null) out = empty(outshape);
	else if (out.ndim != ndim) throw new Error('output array has wrong dimensionality');
	else if (!shallow_array_equal(out.shape, outshape)) throw new Error('output array is the wrong shape');

	let slices = Array(ndim).fill(slice(':'));
	let cumsum = 0;
	for (let array of arrays) {
		slices[axis] = slice(cumsum, (cumsum += array.shape[axis]));
		out.set(slices, array);
	}

	return out;
}

process.env.PRODUCTION ||
	tester.add(
		concatenate,
		() => {
			let a = array([
				[1, 2],
				[3, 4],
			]);
			let b = array([[5, 6]]);
			return [concatenate([a, b], 0), concatenate([a, b.T], 1), concatenate([a, b], null)];
		},
		() => [
			array([
				[1, 2],
				[3, 4],
				[5, 6],
			]),
			array([
				[1, 2, 5],
				[3, 4, 6],
			]),
			array([1, 2, 3, 4, 5, 6]),
		]
	);
