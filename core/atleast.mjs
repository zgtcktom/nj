import { array, asarray, tester, arange, NDArray } from './core.mjs';

/**
 *
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 */
export function atleast_1d(...arrays) {
	if (arrays.length != 1) {
		let ret = [];
		for (let array of arrays) ret.push(atleast_1d(array));
		return ret;
	}
	let array = asarray(arrays[0]);
	if (array.ndim >= 1) return array;
	// scalar array
	array = array.copy();
	let { data, itemsize, dtype } = array;
	return new NDArray([1], data, dtype, array, [itemsize], 0, itemsize);
}

/**
 *
 * @param  {...NDArray|any} arrays
 * @returns {NDArray|NDArray[]}
 */
export function atleast_2d(...arrays) {
	if (arrays.length != 1) {
		let ret = [];
		for (let array of arrays) ret.push(atleast_2d(array));
		return ret;
	}
	let array = asarray(arrays[0]);
	if (array.ndim >= 2) return array;
	let { shape, data, dtype, strides, offset, itemsize, ndim } = array;
	if (ndim == 1) {
		return new NDArray([1, shape[0]], data, dtype, array, [0, strides[0]], offset, itemsize);
	}
	// scalar array
	array = array.copy();
	return new NDArray([1, 1], array.data, dtype, array, [itemsize, itemsize], 0, itemsize);
}

/**
 *
 * @param  {...NDArray|any} arrays
 * @returns {NDArray|NDArray[]}
 */
export function atleast_3d(...arrays) {
	if (arrays.length != 1) {
		let ret = [];
		for (let array of arrays) ret.push(atleast_3d(array));
		return ret;
	}
	let array = asarray(arrays[0]);
	if (array.ndim >= 3) return array;
	let { shape, data, dtype, strides, offset, itemsize, ndim } = array;
	if (ndim == 2) {
		return new NDArray(
			[shape[0], shape[1], 1],
			data,
			dtype,
			array,
			[strides[0], strides[1], 0],
			offset,
			itemsize
		);
	}
	if (ndim == 1) {
		return new NDArray([1, shape[0], 1], data, dtype, array, [0, strides[0], 0], offset, itemsize);
	}
	// scalar array
	array = array.copy();
	return new NDArray([1, 1, 1], array.data, dtype, array, [itemsize, itemsize, itemsize], 0, itemsize);
}

tester
	.add(
		atleast_1d,
		() => atleast_1d(1.0),
		() => array([1])
	)
	.add(
		atleast_1d,
		() => atleast_1d(1, [3, 4]),
		() => [array([1]), array([3, 4])]
	)
	.add(
		atleast_1d,
		() => atleast_1d(arange(9.0).reshape([3, 3])),
		() =>
			array([
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			])
	)
	.add(
		atleast_1d,
		() => {
			let x = array([1]);
			let y = x.get(0);
			let z = atleast_1d(y);
			z.set([0], -96);
			return [x.toarray(), y.toarray(), z.toarray(), x.base === null, y.base === null, z.base != y, z.base];
		},
		() => [array([1]), 1, array([-96]), true, true, true, array(-96)]
	);

tester
	.add(
		atleast_2d,
		() => atleast_2d(3.0),
		() => array([[3]])
	)
	.add(
		atleast_2d,
		() => {
			let x = arange(3.0);
			return [atleast_2d(x), atleast_2d(x).base === x];
		},
		() => [array([[0, 1, 2]]), true]
	)
	.add(
		atleast_2d,
		() => atleast_2d(1, [1, 2], [[1, 2]]),
		() => [array([[1]]), array([[1, 2]]), array([[1, 2]])]
	);

tester
	.add(
		atleast_3d,
		() => atleast_3d(3.0),
		() => array([[[3]]])
	)
	.add(
		atleast_3d,
		() => atleast_3d(arange(3.0)).shape,
		() => [1, 3, 1]
	)
	.add(
		atleast_3d,
		() => {
			let x = arange(12.0).reshape(4, 3);
			return [atleast_3d(x).shape, atleast_3d(x).base === x.base];
		},
		() => [[4, 3, 1], true]
	)
	.add(
		atleast_3d,
		() => atleast_3d([1, 2], [[1, 2]], [[[1, 2]]]),
		() => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]
	);
