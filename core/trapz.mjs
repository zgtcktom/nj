import {
	tester,
	arange,
	array,
	asarray,
	slice,
	normalize_axis_index,
	diff,
	sum,
	multiply,
	add,
	divide,
} from './core.mjs';

export function trapz(y, x = null, dx = 1.0, axis = -1) {
	y = asarray(y);
	let { ndim } = y;
	axis = normalize_axis_index(axis, ndim);
	let d = dx;
	if (x != null) {
		x = asarray(x);
		if (x.ndim == 1) {
			d = diff(x);
			let shape = Array(ndim).fill(1);
			shape[axis] = d.shape[0];
			d = d.reshape(shape);
		} else {
			d = diff(x, null, axis);
		}
	}
	let slice1 = Array(ndim).fill(slice());
	let slice2 = Array(ndim).fill(slice());
	slice1[axis] = slice(1, null);
	slice2[axis] = slice(null, -1);
	let tmp;
	tmp = add(y.get(slice1), y.get(slice2));
	multiply(d, tmp, tmp);
	divide(tmp, 2.0, tmp);

	return sum(tmp, axis);
}

tester
	.add(
		trapz,
		() => trapz([1, 2, 3]),
		() => 4.0
	)
	.add(
		trapz,
		() => trapz([1, 2, 3], [4, 6, 8]),
		() => 8.0
	)
	.add(
		trapz,
		() => trapz([1, 2, 3], null, 2),
		() => 8.0
	)
	.add(
		trapz,
		() => trapz([1, 2, 3], [8, 6, 4]),
		() => -8.0
	)
	.add(
		trapz,
		() => trapz(arange(6).reshape(2, 3), undefined, undefined, 0),
		() => array([1.5, 2.5, 3.5])
	)
	.add(
		trapz,
		() => trapz(arange(6).reshape(2, 3), undefined, undefined, 1),
		() => array([2, 8])
	);
