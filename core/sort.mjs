import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	normalize_axis_index,
	ndindex,
	ravel,
	empty_like,
} from './core.mjs';

export function sort(a, axis = -1, key = null) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let out = empty_like(a);
	let tmp = Array(a.shape[axis]);
	let cmp = (a, b) => a - b;

	let shape = a.shape.slice();
	shape[axis] = 1;

	for (let ii of ndindex(shape)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		for (let i = 0; i < a.shape[axis]; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			tmp[i] = key != null ? key(value) : value;
		}
		tmp.sort(cmp);
		for (let i = 0; i < a.shape[axis]; i++) {
			out.data[_offset + i * out.strides[axis]] = tmp[i];
		}
	}

	return out;
}

tester
	.add(
		sort,
		() =>
			sort(
				array([
					[1, 4],
					[3, 1],
				])
			),
		() =>
			array([
				[1, 4],
				[1, 3],
			])
	)
	.add(
		sort,
		() =>
			sort(
				array([
					[1, 4],
					[3, 1],
				]),
				null
			),
		() => array([1, 1, 3, 4])
	)
	.add(
		sort,
		() =>
			sort(
				array([
					[1, 4],
					[3, 1],
				]),
				0
			),
		() =>
			array([
				[1, 1],
				[3, 4],
			])
	);
