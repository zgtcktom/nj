import { NDArray, array, asarray, normalize_axis_tuple, tester } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {number|number[]} axis
 * @returns {NDArray}
 */
export function expand_dims(a, axis) {
	a = asarray(a);

	if (typeof axis == 'number') axis = [axis];

	let newndim = a.ndim + axis.length;
	axis = normalize_axis_tuple(axis, newndim, false);

	let newshape = [];
	for (let i = 0, j = 0; i < newndim; i++) {
		newshape.push(axis.includes(i) ? 1 : a.shape[j++]);
	}
	return a.reshape(newshape);
}

process.env.PRODUCTION ||
	tester
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), 0),
			() => array([[1, 2]])
		)
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), 1),
			() => array([[1], [2]])
		)
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), [0, 1]),
			() => array([[[1, 2]]])
		)
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), [2, 0]),
			() => array([[[1], [2]]])
		)
		.add(
			expand_dims,
			() => {
				let x = array([1, 2]);
				return expand_dims(x, [2, 0]).base === x;
			},
			() => true
		);
