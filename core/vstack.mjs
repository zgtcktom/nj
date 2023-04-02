import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	amax,
	random,
	shallow_array_equal,
	normalize_axis_index,
	Slice,
	concatenate,
	atleast_2d,
} from './core.mjs';

export function vstack(arrays) {
	arrays = atleast_2d(...arrays);
	if (!Array.isArray(arrays)) arrays = [arrays];
	return concatenate(arrays, 0);
}

tester
	.add(
		vstack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([4, 5, 6]);
			return vstack([a, b]);
		},
		() =>
			array([
				[1, 2, 3],
				[4, 5, 6],
			])
	)
	.add(
		vstack,
		() => {
			let a = array([[1], [2], [3]]);
			let b = array([[4], [5], [6]]);
			return vstack([a, b]);
		},
		() => array([[1], [2], [3], [4], [5], [6]])
	);
