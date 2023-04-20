import { array, NDArray, ones, tester, sum, not_equal } from './core.mjs';

/**
 *
 * @param {NDArray} a
 * @param {null|number|number[]} [axis]
 * @param {boolean} [keepdims]
 * @returns {NDArray}
 */
export function count_nonzero(a, axis = null, keepdims = false) {
	return sum(not_equal(a, 0), axis, null, keepdims);
}

tester
	.add(
		count_nonzero,
		() => {
			let x;
			x = ones([2, 3, 4, 5]);
			return count_nonzero(x);
		},
		() => 120
	)
	.add(
		count_nonzero,
		() => {
			let x;
			x = ones([2, 3, 4, 5]);
			return count_nonzero(x, 0);
		},
		() =>
			array([
				[
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
				],

				[
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
				],

				[
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2],
				],
			])
	)
	.add(
		count_nonzero,
		() => {
			let x;
			x = ones([2, 3, 4, 5]);
			return count_nonzero(x, 1);
		},
		() =>
			array([
				[
					[3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3],
				],

				[
					[3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3],
				],
			])
	)
	.add(
		count_nonzero,
		() => {
			let x;
			x = ones([2, 3, 4, 5]);
			return count_nonzero(x, -1);
		},
		() =>
			array([
				[
					[5, 5, 5, 5],
					[5, 5, 5, 5],
					[5, 5, 5, 5],
				],

				[
					[5, 5, 5, 5],
					[5, 5, 5, 5],
					[5, 5, 5, 5],
				],
			])
	)
	.add(
		count_nonzero,
		() => {
			let x;
			x = ones([2, 3, 4, 5]);
			return count_nonzero(x, [0, -1]);
		},
		() =>
			array([
				[10, 10, 10, 10],
				[10, 10, 10, 10],
				[10, 10, 10, 10],
			])
	)
	.add(
		count_nonzero,
		() => {
			let x;
			x = ones([2, 3, 4, 5]);
			return count_nonzero(x, [0, -1], true);
		},
		() =>
			array([
				[
					[[10], [10], [10], [10]],

					[[10], [10], [10], [10]],

					[[10], [10], [10], [10]],
				],
			])
	);
