import { NDArray, arange, tester } from './core.mjs';

/**
 * Determine the shape of a nested array given the nested first element as the initial guess.
 * @param {*} a
 * @param {number[]} shape
 * @param {number} level
 * @returns {void}
 * @ignore
 */
function nested_shape(a, shape, level = 0) {
	for (let i = 0; i < a.length && level < shape.length; i++) {
		let item = a[i];
		if (item == null || typeof item != 'object' || item.length != shape[level]) {
			shape.length = level;
			break;
		}
		if (item instanceof NDArray) {
			for (let i = level, j = 0; i < shape.length && j < item.ndim; i++, j++) {
				if (shape[i] != item.shape[j]) {
					shape.length = i;
					break;
				}
			}
		} else if (level + 1 < shape.length) {
			nested_shape(item, shape, level + 1);
		}
	}
}

/**
 * Return the shape of an array without invoking array creation.
 * @param {*} a
 * @returns {number[]}
 */
export function shape(a) {
	if (a == null || typeof a != 'object') return [];
	if (a.shape != undefined) return a.shape;

	let shape = [];
	let item = a;
	while (true) {
		if (item instanceof NDArray) {
			shape.push(...item.shape);
		} else if (typeof item == 'object' && item?.length != undefined) {
			shape.push(item.length);
			item = item[0];
			continue;
		}
		break;
	}
	if (shape.length > 1) nested_shape(a, shape, 1);
	return shape;
}

export const _shape = shape;

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
	)
	.add(
		'shape',
		() =>
			shape([
				arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
				arange(1 * 2 * 3 * 4).reshape(1, 2, 3 * 4),
				arange(1 * 2 * 3 * 4).reshape(1, 2, 3 * 4),
			]),
		() => [3, 1, 2]
	)
	.add(
		'shape',
		() =>
			shape([
				arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
				arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
				arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
			]),
		() => [3, 1, 2, 3, 4]
	);
