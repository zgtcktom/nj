import { tester, NDArray, ndindex, array, Dtype, guessType } from './core.mjs';

/**
 * @param {Function} func
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function fromfunction(func, shape, dtype = undefined) {
	let data = [];
	for (let index of ndindex(shape)) {
		data.push(func(index));
	}
	return new NDArray(shape, data, dtype ?? guessType(data));
}

tester
	.add(
		fromfunction,
		() => {
			return fromfunction(([i, j]) => i, [2, 2]);
		},
		() =>
			array([
				[0, 0],
				[1, 1],
			])
	)
	.add(
		fromfunction,
		() => {
			return fromfunction(([i, j]) => j, [2, 2]);
		},
		() =>
			array([
				[0, 1],
				[0, 1],
			])
	)
	.add(
		fromfunction,
		() => {
			return fromfunction(([i, j]) => i == j, [3, 3]);
		},
		() =>
			array([
				[true, false, false],
				[false, true, false],
				[false, false, true],
			])
	)
	.add(
		fromfunction,
		() => {
			return fromfunction(([i, j]) => i + j, [3, 3]);
		},
		() =>
			array([
				[0, 1, 2],
				[1, 2, 3],
				[2, 3, 4],
			])
	);
