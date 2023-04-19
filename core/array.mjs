import { tester, NDArray, _shape, ndoffset, _dtype, Dtype } from './core.mjs';

function flatten_with_shape(data, array, shape, level = 0) {
	if (level == shape.length) {
		data.push(array instanceof NDArray ? array.toarray() : array);
		return;
	}
	for (let i = 0; i < shape[level]; i++) {
		flatten_with_shape(data, array instanceof NDArray ? array.at(i) : array[i], shape, level + 1);
	}
}

export function guess_dtype(array) {
	let type = typeof array[0];
	for (let n of array) {
		if (type != typeof n) {
			type = 'object';
			break;
		}
	}
	if (type == 'number' || type == 'string' || type == 'boolean') return _dtype(type);
	return _dtype('object');
}

/**
 *
 * @param {any} a
 * @param {Dtype} dtype
 * @param {boolean} copy
 * @param {number} ndmin
 * @returns {NDArray}
 */
export function array(a, dtype = null, copy = true, ndmin = 0) {
	let data, shape;
	if (dtype != null) dtype = _dtype(dtype);
	if (a instanceof NDArray) {
		if (!copy) {
			shape = a.shape;
			if (shape.length < ndmin) shape = [...Array(ndmin - shape.length).fill(1), ...shape];
			let { data, base, strides, offset, itemsize } = a;
			dtype ??= a.dtype;
			return new NDArray(shape, data, dtype, base, strides, offset, itemsize);
		}
		if (a.base == undefined) data = a.data.slice();
		else {
			data = [];
			for (let offset of ndoffset(a.shape, a.strides)) {
				data.push(a.data[a.offset + offset]);
			}
		}
		shape = a.shape;
		dtype ??= a.dtype;
	} else {
		data = [];
		shape = _shape(a);
		flatten_with_shape(data, a, shape);
		dtype ??= guess_dtype(data);
	}
	if (shape.length < ndmin) _shape = [...Array(ndmin - shape.length).fill(1), ...shape];

	return new NDArray(shape, dtype.new(data.length, data), dtype);
}

tester
	.add(
		'array',
		() => array([3.1, 9]),
		() => [3.1, 9]
	)
	.add(
		'array',
		() => array([[9, 6], 3.1, 9]).shape,
		() => [3]
	)
	.add(
		'array',
		() => array(5),
		() => 5
	);
