import { tester, slice, broadcast_to, asarray, NDArray, ndoffset } from './core.mjs';

/**
 * @param {NDArray} dst
 * @param {NDArray} src array-like
 * @returns {void}
 */
export function copyto(dst, src) {
	src = asarray(src);
	if (src.size == 1) {
		dst.fill(src.item());
	} else {
		let flat = broadcast_to(src, dst.shape).flat[Symbol.iterator]();
		let { data, shape, strides, offset } = dst;
		for (let idx of ndoffset(shape, strides, offset)) {
			data[idx] = flat.next().value;
		}
	}
}

process.env.PRODUCTION ||
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
