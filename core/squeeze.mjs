import {
	NDArray,
	tester,
	array,
	asarray,
	ascontiguousarray,
	arange,
	slice,
	normalize_axis_tuple,
} from './core.mjs';

/**
 * @param {NDArray} a
 * @param {null|number|number[]} axis
 * @returns {NDArray}
 */
export function squeeze(a, axis = null) {
	a = asarray(a);
	if (axis != null) {
		axis = normalize_axis_tuple(axis);
	}
	let { shape, ndim } = a;
	let newshape = [];
	for (let i = 0; i < ndim; i++) {
		if (axis ? axis.includes(i) : shape[i] == 1) continue;
		newshape.push(shape[i]);
	}

	return a.reshape(newshape);
}

tester
	.add(
		squeeze,
		() => squeeze(array([[[0], [1], [2]]])).shape,
		() => [3]
	)
	.add(
		squeeze,
		() => squeeze(array([[[0], [1], [2]]]), 0).shape,
		() => [3, 1]
	)
	.add(
		squeeze,
		() => squeeze(array([[[0], [1], [2]]]), 2).shape,
		() => [1, 3]
	)
	.add(
		squeeze,
		() => squeeze(array([[1234]])),
		() => array(1234)
	)
	.add(
		squeeze,
		() => {
			`
x = np.arange(20)
y = x.reshape((5, -1))
z = y[::-1]
a = np.ascontiguousarray(z)
b = a.reshape((5, 1, 1, -1))
b.reshape((5, -1)).base is a, b.reshape(-1).base is a, np.squeeze(b).base is a, x, y, z, np.squeeze(b)
`;
			let x, y, z, a, b;
			x = arange(20);
			y = x.reshape([5, -1]);
			z = y.at(slice([, , -1]));
			a = ascontiguousarray(z);
			b = a.reshape([5, 1, 1, -1]);
			return [
				b.reshape([5, -1]).base === a,
				b.reshape(-1).base === a,
				squeeze(b).base === a,
				x,
				y,
				z,
				squeeze(b),
			];
		},
		() => [
			true,
			true,
			true,
			array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
			array([
				[0, 1, 2, 3],
				[4, 5, 6, 7],
				[8, 9, 10, 11],
				[12, 13, 14, 15],
				[16, 17, 18, 19],
			]),
			array([
				[16, 17, 18, 19],
				[12, 13, 14, 15],
				[8, 9, 10, 11],
				[4, 5, 6, 7],
				[0, 1, 2, 3],
			]),
			array([
				[16, 17, 18, 19],
				[12, 13, 14, 15],
				[8, 9, 10, 11],
				[4, 5, 6, 7],
				[0, 1, 2, 3],
			]),
		]
	);
