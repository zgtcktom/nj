import { tester, array, ascontiguousarray, NDArray, arange, slice } from './core.mjs';

export function ravel(a) {
	a = ascontiguousarray(a);
	let { size, data, dtype, offset, itemsize } = a;
	return new NDArray([size], data, dtype, a.base, undefined, offset, itemsize);
}

tester
	.add(
		ravel,
		() =>
			ravel(
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
			),
		() => array([1, 2, 3, 4, 5, 6])
	)
	.add(
		ravel,
		() =>
			ravel(
				array([
					[1, 2, 3],
					[4, 5, 6],
				]).T
			),
		() => array([1, 4, 2, 5, 3, 6])
	)
	.add(
		ravel,
		() => ravel(arange(12).reshape(2, 3, 2).swapaxes(1, 2)),
		() => array([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])
	)
	.add(
		ravel,
		() => {
			let x, y;
			x = arange(40).reshape([5, -1]).copy();
			y = x.at(null, slice(':'), null, null, slice('::2'), null);
			return [y.reshape(-1).base == x, ravel(y).base];
		},
		() => [true, null]
	)
	.add(
		ravel,
		() => {
			let x, y;
			x = arange(40).reshape([5, -1]).copy();
			y = x.at(null, slice(':'), null, null, slice('::3'), null);
			return [y.reshape(-1).base == x, ravel(y).base];
		},
		() => [false, null]
	);
