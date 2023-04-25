import { tester, arange, array, asarray, NDArray, ndoffset, empty } from './core.mjs';

/**
 *
 * @param {NDArray} ndarray
 * @param {function(any, number): any} callback
 * @param {any} thisArg
 * @returns {NDArray}
 */
export function map(ndarray, callback, thisArg = null) {
	ndarray = asarray(ndarray);
	let { shape, strides, offset, data } = ndarray;

	let out = empty(shape);
	let i = 0;
	for (let index of ndoffset(shape, strides, offset)) {
		out.data[i++] = callback.call(thisArg, data[index], index, data);
	}

	return out;
}

tester.add(
	map,
	() => map(arange(10).reshape(-1, 2), (element, index) => element + index),
	() =>
		array([
			[0, 2],
			[4, 6],
			[8, 10],
			[12, 14],
			[16, 18],
		])
);
