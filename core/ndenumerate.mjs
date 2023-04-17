import { ndindex, tester, array, asarray, NDArray } from './core.mjs';

/**
 *
 * @param {NDArray} a
 */
export function* ndenumerate(a) {
	a = asarray(a);
	for (let index of ndindex(a.shape)) {
		/** @type {[number[], any]} */
		let value = [index, a.item(index)];
		yield value;
	}
}

tester.add(
	ndenumerate,
	() => {
		{
			let a;
			a = array([
				[1, 2],
				[3, 4],
			]);
			let out = [];
			for (let [index, x] of ndenumerate(a)) {
				out.push(index.slice(), x);
			}
			return out;
		}
	},
	() => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]
);
