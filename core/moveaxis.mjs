import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	normalize_axis_tuple,
	transpose,
} from './core.mjs';

export function moveaxis(a, source, destination) {
	source = normalize_axis_tuple(source, a.ndim);
	destination = normalize_axis_tuple(destination, a.ndim);

	if (source.length != destination.length) {
		throw `'source' and 'destination' arguments must have the same number of elements`;
	}

	let order = [...Array(a.ndim).keys()].filter(x => !source.includes(x));

	for (let i = 0; i < source.length; i++) {
		order.splice(destination[i], 0, source[i]);
	}

	return transpose(a, order);
}

tester
	.add(
		moveaxis,
		() => moveaxis(zeros([3, 4, 5]), 0, -1).shape,
		() => [4, 5, 3]
	)
	.add(
		moveaxis,
		() => moveaxis(zeros([3, 4, 5]), -1, 0).shape,
		() => [5, 3, 4]
	);
