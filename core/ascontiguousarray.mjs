import { array, asarray, tester, slice, ones, NDArray, Dtype } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function ascontiguousarray(a, dtype = undefined) {
	a = asarray(a, dtype);
	if (contiguous(a)) return a;
	return array(a);
}

/**
 * Always returns `false` if `ndim == 0`
 * @param {NDArray} a
 * @returns {boolean}
 * @ignore
 */
export function contiguous(a) {
	let { strides, shape, ndim, itemsize } = a;
	if (ndim == 0) return false;

	for (let i = ndim - 1; i >= 0; i--) {
		if (shape[i] > 1) {
			if (itemsize != strides[i]) return false;
			itemsize *= shape[i];
		}
	}
	return true;
}

tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3, 1, 5]).at(slice(), slice([, , 3]), slice());
		// console.log(a.shape, a.strides, a.itemsize);
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3, 4, 5]).at(slice(), slice([, , 1]), slice());
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3, 4, 5]).at(slice(), slice(), slice(1));
		return ascontiguousarray(a) === a;
	},
	() => false
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3]).at(slice([, , -3]));
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([2]).at(slice([, , 2]));
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3]).at(slice([, , 2]));
		return ascontiguousarray(a) === a;
	},
	() => false
);
tester
	.add(
		ascontiguousarray,
		() => {
			let a = ones([3]).at(slice([1, 2]));
			return ascontiguousarray(a) === a;
		},
		() => true
	)
	.add(
		ascontiguousarray,
		() => {
			let x, y;
			x = array([]);
			y = ascontiguousarray(x);
			return x === y;
		},
		() => true
	)
	.add(
		ascontiguousarray,
		() => {
			let x, y;
			x = array(5);
			y = ascontiguousarray(x);
			return x === y;
		},
		() => false
	);
