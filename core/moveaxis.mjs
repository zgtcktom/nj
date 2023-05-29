import { tester, asarray, zeros, normalize_axis_tuple, transpose, NDArray } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {number|number[]} src
 * @param {number|number[]} dst
 * @returns {NDArray}
 */
export function moveaxis(a, src, dst) {
	a = asarray(a);

	let { ndim } = a;
	src = normalize_axis_tuple(src, ndim);
	dst = normalize_axis_tuple(dst, ndim);

	if (src.length != dst.length) {
		throw new Error(`'src' and 'dst' arguments must have the same number of elements`);
	}

	let order = [...Array(ndim).keys()].filter(x => !src.includes(x));

	for (let i = 0; i < src.length; i++) {
		order.splice(dst[i], 0, src[i]);
	}

	return transpose(a, order);
}

process.env.PRODUCTION ||
	tester
		.add(
			moveaxis,
			() => moveaxis(zeros([3, 4, 5]), 0, -1).shape,
			() => [4, 5, 3]
		)
		.add(
			moveaxis,
			() => moveaxis(zeros([3, 4, 5]), -1, 0).shape,
			() => [5, 3, 4]
		);
