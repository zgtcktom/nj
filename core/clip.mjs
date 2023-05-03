import {
	tester,
	arange,
	array,
	asarray,
	NDArray,
	empty_like,
	shallow_array_equal,
	broadcast_to,
	ndoffset,
	isscalar,
} from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {NDArray} a_min array-like
 * @param {NDArray} a_max array-like
 * @param {NDArray} out
 * @returns {NDArray}
 */
export function clip(a, a_min, a_max, out = null) {
	a = asarray(a);
	if (out == null) out = empty_like(a);
	else if (!shallow_array_equal(a.shape, out.shape)) throw `out shape does not match input shape`;
	if (isscalar(a_min) && isscalar(a_max)) {
		let a_offset = ndoffset(a.shape, a.strides)[Symbol.iterator]();
		for (let offset of ndoffset(out.shape, out.strides)) {
			out.data[offset] = Math.min(Math.max(a_min, a.data[a_offset.next().value]), a_max);
		}
		return out;
	}
	a_min = broadcast_to(a_min, a.shape);
	a_max = broadcast_to(a_max, a.shape);
	let a_offset = ndoffset(a.shape, a.strides)[Symbol.iterator]();
	let a_min_offset = ndoffset(a_min.shape, a_min.strides)[Symbol.iterator]();
	let a_max_offset = ndoffset(a_max.shape, a_max.strides)[Symbol.iterator]();
	for (let offset of ndoffset(out.shape, out.strides)) {
		out.data[offset] = Math.min(
			Math.max(a_min.data[a_min_offset.next().value], a.data[a_offset.next().value]),
			a_max.data[a_max_offset.next().value]
		);
	}
	return out;
}

tester
	.add(
		clip,
		() => clip(arange(10), 1, 8),
		() => array([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])
	)
	.add(
		clip,
		() => clip(arange(10), 8, 1),
		() => array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
	)
	.add(
		clip,
		() => {
			let a = arange(10);

			return [clip(a, 3, 6, a), a];
		},
		() => [array([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), array([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]
	)
	.add(
		clip,
		() => clip(arange(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8),
		() => array([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])
	);
