import { tester } from './core.mjs';

function nested_shape(array, shape, level) {
	for (let i = 0; i < array.length; i++) {
		if (array[i]?.length != shape[level]) {
			shape.length = level;
			return false;
		}
		if (array[i]?.length != undefined && shape.length > level + 1) {
			if (!nested_shape(array[i], shape, level + 1)) return false;
		}
	}
	return true;
}

export function shape(array) {
	if (array.shape != undefined) return array.shape;
	let shape = [];
	let elem = array;
	while (elem?.length != undefined) {
		shape.push(elem.length);
		elem = elem[0];
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
