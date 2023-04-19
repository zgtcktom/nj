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
	exp,
	normalize_axis_index,
	transpose,
} from './core.mjs';

export function diagonal(a, offset = 0, axis1 = 0, axis2 = 1) {
	a = asarray(a);
	let { ndim } = a;
	if (ndim < 2) throw `array.ndim must be >= 2`;

	axis1 = normalize_axis_index(axis1, ndim);
	axis2 = normalize_axis_index(axis2, ndim);

	let axes = Array(ndim);
	axes[ndim - 2] = axis1;
	axes[ndim - 1] = axis2;
	for (let i = 0, j = 0; i < ndim; i++) {
		if (i == axis1 || i == axis2) continue;
		axes[j++] = i;
	}

	// console.log(a.toarray(), transpose(a, axes).toarray());
	a = transpose(a, axes);

	// if (ndim == 2) {
	// 	let n1 = a.shape[0];
	// 	let n2 = a.shape[1];
	// 	let step = n2 + 1;
	// 	let start, stop;
	// 	if (offset < 0) {
	// 		start = -n2 * offset;
	// 		stop = Math.min(n2, n1 + offset) * (n2 + 1) - n2 * offset;
	// 	} else {
	// 		start = offset;
	// 		stop = Math.min(n1, n2 - offset) * (n2 + 1) + offset;
	// 	}

	// 	let count = Math.ceil((stop - start) / step);

	// 	// let indices = Array(count);
	// 	// for (let i = 0; i < count; i++) {
	// 	// 	indices[i] = start + i * step;
	// 	// }
	// 	// console.log(indices);

	// 	return new NDArray([count], a.data, a.base ?? a, [step * a.strides[1]], a.offset + start, a.itemsize);
	// }

	// https://github.com/numpy/numpy-refactor/blob/6de313865ec3f49bcdd06ccbc879f27e65acf818/numpy/core/src/multiarray/item_selection.c
	// view only
	// writable, no need to d.setflags(write=True)
	let n1 = a.shape[ndim - 2];
	let n2 = a.shape[ndim - 1];
	let step = n2 + 1;
	let start, stop;
	if (offset < 0) {
		start = -n2 * offset;
		stop = Math.min(n2, n1 + offset) * (n2 + 1) - n2 * offset;
	} else {
		start = offset;
		stop = Math.min(n1, n2 - offset) * (n2 + 1) + offset;
	}

	let count = Math.ceil((stop - start) / step);

	return new NDArray(
		[...a.shape.slice(0, -2), count],
		a.data,
		a.dtype,
		a.base ?? a,
		[...a.strides.slice(0, -2), step * a.strides[ndim - 1]],
		a.offset + start,
		a.itemsize
	);
}

tester
	.add(
		diagonal,
		() => diagonal(arange(4).reshape(2, 2)),
		() => array([0, 3])
	)
	.add(
		diagonal,
		() => diagonal(arange(4).reshape(2, 2), 1),
		() => array([1])
	)
	.add(
		diagonal,
		() => diagonal(arange(8).reshape(2, 2, 2), 0, 0, 1),
		() =>
			array([
				[0, 6],
				[1, 7],
			])
	)
	.add(
		diagonal,
		() => diagonal(arange(8).reshape(2, 2, 2).at(slice(':'), slice(':'), 0), 0, 0, 1),
		() => array([0, 6])
	)
	.add(
		diagonal,
		() => diagonal(arange(8).reshape(2, 2, 2).at(slice(':'), slice(':'), 1), 0, 0, 1),
		() => array([1, 7])
	)
	.add(
		diagonal,
		() => {
			let a = arange(8);
			diagonal(a.reshape(2, 2, 2), 0, 0, 1).set(-1);
			return a;
		},
		() => array([-1, -1, 2, 3, 4, 5, -1, -1])
	);
