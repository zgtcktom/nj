import { tester, array, zeros, slice, ravel, concatenate, reshape, NDArray } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {number[]} new_shape
 * @returns {NDArray}
 */
export function resize(a, new_shape) {
	if (typeof new_shape == 'number') new_shape = [new_shape];

	a = ravel(a);

	let new_size = 1;
	for (let dim of new_shape) {
		if (dim < 0) throw `all elements of 'new_shape' must be non-negative`;
		new_size *= dim;
	}

	if (a.size == 0 || new_size == 0) {
		return zeros(new_shape);
	}

	let repeats = Math.ceil(new_size / a.size);
	a = concatenate(Array(repeats).fill(a)).at(slice(0, new_size));

	return reshape(a, new_shape);
}

process.env.PRODUCTION ||
	tester
		.add(
			resize,
			() =>
				resize(
					array([
						[0, 1],
						[2, 3],
					]),
					[2, 3]
				),
			() =>
				array([
					[0, 1, 2],
					[3, 0, 1],
				])
		)
		.add(
			resize,
			() =>
				resize(
					array([
						[0, 1],
						[2, 3],
					]),
					[1, 4]
				),
			() => array([[0, 1, 2, 3]])
		)

		.add(
			resize,
			() =>
				resize(
					array([
						[0, 1],
						[2, 3],
					]),
					[2, 4]
				),
			() =>
				array([
					[0, 1, 2, 3],
					[0, 1, 2, 3],
				])
		);
