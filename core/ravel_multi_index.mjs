import {
	tester,
	array,
	asarray,
	zeros,
	NDArray,
	any,
	less,
	greater,
	mod,
	add,
	clip,
	multiply,
	cumprod,
	sum,
	empty,
	subtract,
	concatenate,
	atleast_2d,
	shape_,
} from './core.mjs';

/**
 * One mode per index is not supported yet
 * @param {NDArray[]} multi_index array-like array
 * @param {number[]} shape
 * @param {string} [mode] {'raise', 'wrap', 'clip'}
 * @example
 * ravel_multi_index([[3, 6, 6], [4, 5, 1]], [4, 6], 'clip')
 * // array([22, 23, 19])
 * @example
 * ravel_multi_index([3, 1, 4, 1], [6, 7, 8, 9])
 * // array(1621)
 */
export function ravel_multi_index(multi_index, shape, mode = 'raise') {
	// slower implementation (?) as it depends on many library functions
	let indices = asarray(multi_index).T;
	indices = atleast_2d(indices);

	if (mode == 'raise') {
		if (any(less(indices, 0)) || any(greater(indices, shape))) {
			throw new Error(`index is out of bounds for array with shape ${shape}`);
		}
	} else if (mode == 'wrap') {
		indices = mod(add(mod(indices, shape), shape), shape);
	} else if (mode == 'clip') {
		indices = clip(indices, zeros(shape.length), subtract(shape, 1));
	} else {
		throw new Error(`unsupported mode '${mode}'`);
	}

	let out = empty(shape_(multi_index).slice(1));
	let strides = concatenate([cumprod(shape.slice(1).reverse()).at('::-1'), [1]]);
	let i = 0;
	for (let coords of indices) {
		out.itemset(i++, sum(multiply(coords, strides)));
	}

	return out;
}

process.env.PRODUCTION ||
	tester
		.add(
			ravel_multi_index,
			() =>
				ravel_multi_index(
					array([
						[3, 6, 6],
						[4, 5, 1],
					]),
					[7, 6]
				),
			() => array([22, 41, 37])
		)
		.add(
			ravel_multi_index,
			() =>
				ravel_multi_index(
					[
						[3, 6, 6],
						[4, 5, 1],
					],
					[4, 6],
					'clip'
				),
			() => array([22, 23, 19])
		)
		.add(
			ravel_multi_index,
			() =>
				ravel_multi_index(
					array([
						[3, 6, 6],
						[4, 5, 1],
					]),
					[4, 4],
					'wrap'
				),
			() => array([12, 9, 9])
		)
		.add(
			ravel_multi_index,
			() => ravel_multi_index([3, 1, 4, 1], [6, 7, 8, 9]),
			() => 1621
		);
