import { tester, NDArray, shape, ndoffset, _dtype, Dtype } from './core.mjs';

function flatten_with_shape(data, array, shape, level = 0) {
	if (level == shape.length) {
		data.push(array instanceof NDArray ? array.item() : array);
		return;
	}
	for (let i = 0; i < shape[level]; i++) {
		flatten_with_shape(data, array instanceof NDArray ? array.get(i) : array[i], shape, level + 1);
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
	let data, _shape;
	if (dtype != null) dtype = _dtype(dtype);
	if (a instanceof NDArray) {
		if (!copy) {
			_shape = a.shape;
			if (_shape.length < ndmin) _shape = [...Array(ndmin - _shape.length).fill(1), ..._shape];
			let { data, base, strides, offset, itemsize } = a;
			dtype ??= a.dtype;
			return new NDArray(_shape, data, dtype, base, strides, offset, itemsize);
		}
		if (a.base == undefined) data = a.data.slice();
		else {
			data = [];
			for (let offset of ndoffset(a.shape, a.strides)) {
				data.push(a.data[a.offset + offset]);
			}
		}
		_shape = a.shape;
		dtype ??= a.dtype;
	} else {
		data = [];
		_shape = shape(a);
		flatten_with_shape(data, a, _shape);
		dtype ??= guess_dtype(data);
	}
	if (_shape.length < ndmin) _shape = [...Array(ndmin - _shape.length).fill(1), ..._shape];

	return new NDArray(_shape, dtype.new(data.length, data), dtype);
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
