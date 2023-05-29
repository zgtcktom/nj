import { tester, empty, copyto, NDArray, Dtype, guessType, array, array_equal, shape } from './core.mjs';

/**
 * @param {number[]} shape
 * @param {any} fill_value
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function full(shape, fill_value, dtype = undefined) {
	let out = empty(shape, dtype ?? guessType(fill_value));
	copyto(out, fill_value);
	return out;
}

/**
 * @param {NDArray} a array-like
 * @param {any} fill_value
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function full_like(a, fill_value, dtype = undefined) {
	return full(shape(a), fill_value, dtype);
}

process.env.PRODUCTION ||
	tester
		.add(
			'full',
			() => full([2, 2], Infinity),
			() => [
				[Infinity, Infinity],
				[Infinity, Infinity],
			]
		)
		.add(
			'full',
			() => full([2, 2], 10),
			() => [
				[10, 10],
				[10, 10],
			]
		)
		.add(
			'full',
			() => full([2, 2], [1, 2]),
			() => [
				[1, 2],
				[1, 2],
			]
		)
		.add(
			'full',
			() => full(2, -1),
			() => [-1, -1]
		);

process.env.PRODUCTION ||
	tester
		.add(
			full_like,
			() => full_like([1], 2),
			() => [2]
		)
		.add(
			full_like,
			() => full_like(1, 99),
			() => 99
		)
		.add(
			full_like,
			() =>
				array_equal(
					full_like(
						[
							[0, 1],
							[2, 3],
						],
						[1.1, 2.2],
						'int8'
					),
					array([
						[1, 2],
						[1, 2],
					])
				),
			() => true
		);
