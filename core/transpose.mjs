import { arange, array, asarray, NDArray, ones, tester } from './core.mjs';

/**
 * @param {number[]} axes
 * @param {number} ndim
 * @returns {number[]}
 * @ignore
 */
function normalize_axes(axes, ndim) {
	if (axes.length != ndim) {
		throw new Error(`axes don't match array`);
	}
	let newaxes = [];
	let unique = {};
	for (let i = 0; i < ndim; i++) {
		let axis = axes[i];
		if (axis < 0) axis += ndim;
		if (axis < 0 || ndim <= axis) {
			throw new Error(`axis ${axis} is out of bounds for array of dimension ${i + 1}`);
		}
		if (unique[axis]) {
			throw new Error('repeated axis in transpose');
		}
		unique[axis] = true;
		newaxes[i] = axis;
	}
	return newaxes;
}

/**
 * @param {NDArray<T>} a
 * @param {number[]} [axes]
 * @returns {NDArray<T>}
 */
export function transpose(a, axes = undefined) {
	a = asarray(a);

	let { ndim, shape, data, dtype, base, strides, offset, itemsize } = a;
	let newshape, newstrides;
	if (axes == undefined) {
		newshape = shape.slice().reverse();
		newstrides = strides.slice().reverse();
	} else {
		axes = normalize_axes(axes, ndim);
		newshape = Array(ndim);
		newstrides = Array(ndim);
		for (let i = 0; i < ndim; i++) {
			newshape[i] = shape[axes[i]];
			newstrides[i] = strides[axes[i]];
		}
	}

	return new NDArray(newshape, data, dtype, base ?? a, newstrides, offset, itemsize);
}

tester
	.add(
		transpose,
		() => {
			let x = arange(4).reshape([2, 2]);
			return transpose(x);
		},
		() =>
			array([
				[0, 2],
				[1, 3],
			])
	)
	.add(
		transpose,
		() => {
			let x = ones([1, 2, 3]);
			return transpose(x, [1, 0, 2]);
		},
		() => array([[[1, 1, 1]], [[1, 1, 1]]])
	)
	.add(
		transpose,
		() => {
			let x = ones([2, 3, 4, 5]);
			return transpose(x).shape;
		},
		() => [5, 4, 3, 2]
	);
