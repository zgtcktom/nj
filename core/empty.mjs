import { tester, NDArray, shape, _dtype, Dtype } from './core.mjs';

function is_int(value) {
	return Number.isInteger(value);
}

function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

/**
 *
 * @param {number[]} shape
 * @param {Dtype} dtype
 * @returns {NDArray}
 */
export function empty(shape, dtype = undefined) {
	dtype = _dtype(dtype);
	if (is_int(shape)) shape = [shape];
	return new NDArray(shape, dtype.new(get_size(shape)), dtype);
}

export function empty_like(prototype) {
	return empty(shape(prototype));
}

tester
	.add(
		'empty',
		() => empty([2, 2]),
		() => [
			[, ,],
			[, ,],
		]
	)
	.add(
		'empty',
		() => empty(0),
		() => []
	)
	.add(
		'empty',
		() => empty([]),
		() => undefined
	);

tester
	.add(
		'empty_like',
		() =>
			empty_like([
				[1, 2, 3],
				[4, 5, 6],
			]),
		() => [
			[, , ,],
			[, , ,],
		]
	)
	.add(
		'empty_like',
		() => empty_like([1, 2, 3, [1, 3]]),
		() => [, , , ,]
	);
