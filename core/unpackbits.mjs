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
	empty,
	normalize_axis_index,
	ravel,
	ndindex,
	packbits,
	array_equal,
} from './core.mjs';

export function unpackbits(a, axis = null, bitorder = 'big') {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let outshape = a.shape.slice();
	outshape[axis] = Math.ceil(outshape[axis] / 8);
	let out = empty(outshape);

	return out;
}

tester
	.add(
		unpackbits,
		() => unpackbits(array([[2], [7], [23]]), 1),
		() =>
			array([
				[0, 0, 0, 0, 0, 0, 1, 0],
				[0, 0, 0, 0, 0, 1, 1, 1],
				[0, 0, 0, 1, 0, 1, 1, 1],
			])
	)
	.add(
		unpackbits,
		() => {
			let b = array([
				[0, 0, 0, 0, 0, 0, 1, 0],
				[0, 0, 0, 0, 0, 1, 1, 1],
				[0, 0, 0, 1, 0, 1, 1, 1],
			]);
			let p = packbits(b, 0);

			return [unpackbits(p, 0), array_equal(b, unpackbits(p, 0, b.shape[0]))];
		},
		() => [
			array([
				[0, 0, 0, 0, 0, 0, 1, 0],
				[0, 0, 0, 0, 0, 1, 1, 1],
				[0, 0, 0, 1, 0, 1, 1, 1],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			]),
			true,
		]
	);
