import { tester, array, NDArray, Dtype, guessType } from './core.mjs';

/**
 * @param {Iterable} iter
 * @param {number} [count]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function fromiter(iter, count = -1, dtype = undefined) {
	let a;
	if (count == -1) a = [...iter];
	else {
		a = [];
		let i = 0;
		if (i < count) {
			for (let value of iter) {
				a.push(value);
				i++;
				if (i >= count) break;
			}
		}
	}
	return array(a, dtype ?? guessType(a));
}

process.env.PRODUCTION ||
	tester
		.add(
			fromiter,
			() => {
				return fromiter({
					*[Symbol.iterator]() {
						for (let x = 0; x < 5; x++) yield x * x;
					},
				});
			},
			() => array([0, 1, 4, 9, 16])
		)
		.add(
			fromiter,
			() => {
				return fromiter({
					*[Symbol.iterator]() {
						for (let x = 0; x < 5; x++) yield [x + 1, x + 2];
					},
				});
			},
			() =>
				array([
					[1, 2],
					[2, 3],
					[3, 4],
					[4, 5],
					[5, 6],
				])
		);
