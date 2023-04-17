import {
	tester,
	asarray,
	ravel,
	normalize_axis_index,
	empty,
	shallow_array_equal,
	slice,
	array,
} from './core.mjs';

export function concatenate(arrays, axis = 0, out = null) {
	if (arrays.length <= 0) throw 'need at least one array to concatenate';
	arrays = arrays.map(asarray);
	if (axis == null) {
		arrays = arrays.map(ravel);
		axis = 0;
	}
	let { ndim, shape } = arrays[0];
	if (ndim == 0) throw 'zero-dimensional arrays cannot be concatenated';

	for (let i = 1; i < arrays.length; i++) {
		let array = arrays[i];
		if (array.ndim != ndim) {
			throw new Error(
				`all the input arrays must have same number of dimensions, but the array at index 0 has ${ndim} dimension(s) and the array at index ${i} has ${arrays[i].ndim} dimension(s)`
			);
		}
		for (let j = 0; j < ndim; j++) {
			if (j != axis && array.shape[j] != shape[j]) {
				throw `all the input array dimensions for the concatenation axis must match exactly, but along dimension ${j}, the array at index 0 has size ${shape[j]} and the array at index ${i} has size ${arrays[i].shape[j]}`;
			}
		}
	}

	axis = normalize_axis_index(axis, ndim);

	let outshape = shape.slice();
	outshape[axis] = arrays.reduce((a, b) => a + b.shape[axis], 0);

	if (out == null) out = empty(outshape);
	else if (out.ndim != ndim) throw 'Output array has wrong dimensionality';
	else if (!shallow_array_equal(out.shape, outshape)) throw 'Output array is the wrong shape';

	let slices = Array(ndim).fill(slice(':'));
	let cumsum = 0;
	for (let array of arrays) {
		slices[axis] = slice(cumsum, (cumsum += array.shape[axis]));
		out.set(slices, array);
	}

	return out;
}

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
