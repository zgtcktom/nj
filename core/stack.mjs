import {
	tester,
	array,
	asarray,
	random,
	shallow_array_equal,
	normalize_axis_index,
	Slice,
	concatenate,
} from './core.mjs';

export function stack(arrays, axis = 0, out = null) {
	arrays = arrays.map(asarray);

	if (arrays.length == 0) {
		throw `need at least one array to stack`;
	}
	for (let i = 1; i < arrays.length; i++) {
		if (!shallow_array_equal(arrays[0], arrays[i])) {
			throw `all input arrays must have the same shape`;
		}
	}

	let result_ndim = arrays[0].ndim + 1;
	axis = normalize_axis_index(axis, result_ndim);

	let sl = [...Array(axis).fill(Slice.colon), Slice.newaxis];

	let expanded_arrays = arrays.map(arr => arr.get(...sl));

	return concatenate(expanded_arrays, axis, out);
}

tester
	.add(
		stack,
		() => {
			let arrays = Array(10)
				.fill()
				.map(() => random.normal(0, 1, [3, 4]));
			return stack(arrays, 0).shape;
		},
		() => [10, 3, 4]
	)
	.add(
		stack,
		() => {
			let arrays = Array(10)
				.fill()
				.map(() => random.normal(0, 1, [3, 4]));
			return stack(arrays, 1).shape;
		},
		() => [3, 10, 4]
	)
	.add(
		stack,
		() => {
			let arrays = Array(10)
				.fill()
				.map(() => random.normal(0, 1, [3, 4]));
			return stack(arrays, 2).shape;
		},
		() => [3, 4, 10]
	)
	.add(
		stack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([4, 5, 6]);
			return stack([a, b]);
		},
		() =>
			array([
				[1, 2, 3],
				[4, 5, 6],
			])
	)
	.add(
		stack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([4, 5, 6]);
			return stack([a, b], -1);
		},
		() =>
			array([
				[1, 4],
				[2, 5],
				[3, 6],
			])
	);
