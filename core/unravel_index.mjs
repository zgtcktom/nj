import { tester, array, asarray, NDArray, get_size, empty } from './core.mjs';

/**
 * Expects non-negative indices
 * @param {NDArray} indices array-like
 * @param {number[]} shape
 * @returns {NDArray[]}
 * @example
 * unravel_index([22, 41, 37], [7, 6])
 * // [array([3, 6, 6]), array([4, 5, 1])]
 * @example
 * unravel_index(1621, [6, 7, 8, 9])
 * // [3, 1, 4, 1]
 */
export function unravel_index(indices, shape) {
	indices = asarray(indices);

	let ndim = shape.length;
	let size = get_size(shape);
	let out = empty([].concat(indices.shape, ndim));

	let i = 0;
	for (let idx of indices.flat) {
		if (idx < 0 || idx >= size) {
			throw new Error(`index ${idx} is out of bounds for array with size ${size}`);
		}
		for (let axis = ndim; axis--; ) {
			out.data[i + axis] = idx % shape[axis];
			idx = (idx / shape[axis]) | 0;
		}
		i += ndim;
	}

	let unraveled_coords = Array(ndim)
		.fill()
		.map((_, i) => i)
		.map(i => out.at('...', i));

	return unraveled_coords;
}

process.env.PRODUCTION ||
	tester
		.add(
			unravel_index,
			() => unravel_index([22, 41, 37], [7, 6]),
			() => [array([3, 6, 6]), array([4, 5, 1])]
		)
		.add(
			unravel_index,
			() => unravel_index(1621, [6, 7, 8, 9]),
			() => [3, 1, 4, 1]
		);
