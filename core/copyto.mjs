import { tester, array, slice, broadcast_to, ndoffset, ndindex, asarray, NDArray } from './core.mjs';

/**
 *
 * @param {NDArray} dst
 * @param {NDArray} src
 * @param {boolean} where
 */
export function copyto(dst, src, where = true) {
	if (where == true) {
		if (!(src instanceof NDArray) && !Array.isArray(src)) {
			for (let offset of ndoffset(dst.shape, dst.strides)) {
				dst.data[dst.offset + offset] = src;
			}
		} else {
			src = broadcast_to(asarray(src), dst.shape);
			let it = ndoffset(src.shape, src.strides);
			for (let offset of ndoffset(dst.shape, dst.strides)) {
				dst.data[dst.offset + offset] = src.data[src.offset + it.next().value];
			}
			// for (let index of ndindex(dst.shape)) {
			// 	dst.itemset(index, src.item(index));
			// }
		}
	} else {
		throw `haven't implement`;
	}
}

tester
	.add(
		'copyto',
		() => {
			let A = asarray([4, 5, 6]);
			let B = [1, 2, 3];
			copyto(A, B);
			return A;
		},
		() => [1, 2, 3]
	)
	.add(
		'copyto',
		() => {
			let A = asarray([
				[1, 2, 3],
				[4, 5, 6],
			]);
			let B = [
				[4, 5, 6],
				[7, 8, 9],
			];
			copyto(A, B);
			return A;
		},
		() => [
			[4, 5, 6],
			[7, 8, 9],
		]
	)
	.add(
		'copyto',
		() => {
			let b = asarray([
				[0, 1, 2],
				[3, 4, 5],
			]);
			copyto(b.at(slice(), 1), [-1, -2]);
			return b;
		},
		() => [
			[0, -1, 2],
			[3, -2, 5],
		]
	);
