import { array, tester, NDArray } from './core.mjs';

export function swapaxes(a, axis1, axis2) {
	let { strides, shape, data, offset, base, itemsize } = a;

	strides = strides.slice();
	shape = shape.slice();

	let x = strides[axis1];
	let y = shape[axis1];

	strides[axis1] = strides[axis2];
	shape[axis1] = shape[axis2];

	strides[axis2] = x;
	shape[axis2] = y;

	return new NDArray(shape, data, base, strides, offset, itemsize);
}

tester.add(
	swapaxes,
	() => {
		let x = array([[1, 2, 3]]);
		return swapaxes(x, 0, 1);
	},
	() => array([[1], [2], [3]])
);
tester.add(
	swapaxes,
	() => {
		let x = array([
			[
				[0, 1],
				[2, 3],
			],
			[
				[4, 5],
				[6, 7],
			],
		]);
		return swapaxes(x, 0, 2);
	},
	() =>
		array([
			[
				[0, 4],
				[2, 6],
			],
			[
				[1, 5],
				[3, 7],
			],
		])
);
