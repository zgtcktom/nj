import { array, asarray, tester, slice, ones } from './core.mjs';

export function contiguous(a) {
	let { strides, shape, ndim, itemsize } = a;
	if (ndim == 0) return false;
	// if (shape[ndim - 1] != 1 && strides[ndim - 1] != itemsize) return false;

	// console.log('asda');
	for (let i = ndim - 1; i >= 0; i--) {
		if (shape[i] > 1) {
			// console.log(itemsize, strides[i], itemsize * shape[i]);
			if (itemsize != strides[i]) return false;
			itemsize *= shape[i];
		}
	}
	return true;
	// for (let i = ndim - 1; i > 0; i--) {
	// 	if (shape[i - 1] != 1 && shape[i] != 1 && strides[i] * shape[i] != strides[i - 1]) return false;
	// }
	// return true;
}

export function ascontiguousarray(a) {
	let arr = asarray(a);
	if (contiguous(arr)) return arr;
	return array(arr);
}

tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3, 1, 5]).get(slice(), slice([, , 3]), slice());
		// console.log(a.shape, a.strides, a.itemsize);
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3, 4, 5]).get(slice(), slice([, , 1]), slice());
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3, 4, 5]).get(slice(), slice(), slice(1));
		return ascontiguousarray(a) === a;
	},
	() => false
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3]).get(slice([, , -3]));
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([2]).get(slice([, , 2]));
		return ascontiguousarray(a) === a;
	},
	() => true
);
tester.add(
	ascontiguousarray,
	() => {
		let a = ones([3]).get(slice([, , 2]));
		return ascontiguousarray(a) === a;
	},
	() => false
);
tester
	.add(
		ascontiguousarray,
		() => {
			let a = ones([3]).get(slice([1, 2]));
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
