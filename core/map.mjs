import { tester, arange, array, asarray, NDArray, ndoffset } from './core.mjs';

export function map(ndarray, callback, thisArg = null) {
	ndarray = asarray(ndarray);
	let { shape, strides, offset, data } = ndarray;

	let out = [];
	for (let index of ndoffset(shape, strides, offset)) {
		out.push(callback.call(thisArg, data[index], index, data));
	}

	return new NDArray(shape, out);
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
