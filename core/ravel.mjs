import { tester, array, ascontiguousarray, NDArray, arange, slice, get_strides } from './core.mjs';

/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
export function ravel(a) {
	a = ascontiguousarray(a);
	let { size, base, offset, itemsize } = a;
	a = a.as_strided([size], get_strides([size], 1, itemsize), offset);
	a.base = base;
	return a;
}

process.env.PRODUCTION ||
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
