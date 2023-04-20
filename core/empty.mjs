import { tester, NDArray, dtype_, Dtype, get_size, asarray } from './core.mjs';

/**
 * @param {number|number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function empty(shape, dtype = undefined) {
	shape = tuple_(shape);
	dtype = dtype_(dtype);
	return new NDArray(shape, dtype.new(get_size(shape)), dtype);
}

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function empty_like(a, dtype = undefined) {
	a = asarray(a);
	return empty(a.shape, dtype ?? a.dtype);
}

/**
 * Returns an array-like object
 * @param {any} value
 * @returns {any[]}
 * @ignore
 */
export function tuple_(value) {
	// all falsy values are scalars
	if (!value) return [value];

	// object that supports .toarray() method
	if (typeof value.toarray == 'function') value = value.toarray();

	// array-like object
	if (typeof value == 'object' && value.length != undefined) return value;

	return [value];
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
