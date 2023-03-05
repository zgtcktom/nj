import { array, asarray, tester } from './core.mjs';

export function expand_dims(a, axis) {
	a = asarray(a);
	if (typeof axis == 'number') axis = [axis];
	let length = axis.length;
	axis = new Set(axis);
	if (axis.size != length) throw 'repeated axis';
	let newndim = a.ndim + length;
	let newshape = [];
	for (let i = 0, j = 0; i < newndim; i++) {
		newshape.push(axis.has(i) ? 1 : a.shape[j++]);
	}
	return a.reshape(newshape);
}

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
