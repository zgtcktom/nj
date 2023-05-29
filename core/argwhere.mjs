import {
	arange,
	array,
	atleast_1d,
	greater,
	NDArray,
	ndim,
	nonzero,
	slice,
	tester,
	transpose,
} from './core.mjs';

/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
export function argwhere(a) {
	if (ndim(a) == 0) {
		a = atleast_1d(a);
		return argwhere(a).at(slice(), slice(null, 0));
	}
	return transpose(nonzero(a));
}

process.env.PRODUCTION ||
	tester
		.add(
			argwhere,
			() => argwhere(55).shape,
			() => [1, 0]
		)
		.add(
			argwhere,
			() => argwhere(greater(arange(6).reshape(2, 3), 1)),
			() =>
				array([
					[0, 2],
					[1, 0],
					[1, 1],
					[1, 2],
				])
		);
