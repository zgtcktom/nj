import { tester, NDArray, shape, ndoffset } from './core.mjs';

function flatten_with_shape(data, array, shape, level = 0) {
	if (level == shape.length) {
		data.push(array instanceof NDArray ? array.item() : array);
		return;
	}
	for (let i = 0; i < shape[level]; i++) {
		flatten_with_shape(data, array instanceof NDArray ? array.get(i) : array[i], shape, level + 1);
	}
}

export function array(a) {
	if (a instanceof NDArray) {
		let data;
		if (a.base == undefined) data = a.data.slice();
		else {
			data = [];
			for (let offset of ndoffset(a.shape, a.strides)) {
				data.push(a.data[a.offset + offset]);
			}
		}
		return new NDArray(a.shape, data);
	}
	let data = [];
	flatten_with_shape(data, a, shape(a));
	return new NDArray(shape(a), data);
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
