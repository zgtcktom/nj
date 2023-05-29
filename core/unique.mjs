import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @returns {NDArray}
 */
export function unique(a) {
	a = asarray(a);
	return array([...new Set(a.flat)].sort());
}

process.env.PRODUCTION ||
	tester
		.add(
			unique,
			() => unique([1, 1, 2, 2, 3, 3]),
			() => array([1, 2, 3])
		)
		.add(
			unique,
			() =>
				unique(
					array([
						[1, 1],
						[2, 3],
					])
				),
			() => array([1, 2, 3])
		)
		.add(
			unique,
			() => unique(array([1, 2, 6, 4, 2, 3, 2])),
			() => array([1, 2, 3, 4, 6])
		);
