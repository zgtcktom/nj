import { NDArray, tester } from './core.mjs';

function nested_shape(array, shape, level) {
	for (let i = 0; i < array.length; i++) {
		let elem = array[i];
		if (elem instanceof NDArray) {
			for (let i = level, j = 0; i < shape.length; i++) {
				if (shape[i] != elem.shape[j++]) {
					shape.length = i;
					return false;
				}
			}
			return true;
		}
		if (elem?.length != shape[level]) {
			shape.length = level;
			return false;
		}
		if (elem?.length != undefined && shape.length > level + 1) {
			if (!nested_shape(elem, shape, level + 1)) return false;
		}
	}
	return true;
}

export function shape(array) {
	if (array.shape != undefined) return array.shape;
	let shape = [];
	let elem = array;
	while (true) {
		if (elem instanceof NDArray) {
			shape.push(...elem.shape);
			break;
		} else if (elem?.length != undefined) {
			shape.push(elem.length);
			elem = elem[0];
		} else break;
	}
	if (array.length != undefined && shape.length > 1) nested_shape(array, shape, 1);
	return shape;
}

tester
	.add(
		'shape',
		() => shape([[[3, 9]], [[3, 9, 3]], [[3, 9]]]),
		() => [3, 1]
	)
	.add(
		'shape',
		() => shape([1, 2, 3, [1, 3]]),
		() => [4]
	)
	.add(
		'shape',
		() => shape([0]),
		() => [1]
	)
	.add(
		'shape',
		() => shape(0),
		() => []
	);
