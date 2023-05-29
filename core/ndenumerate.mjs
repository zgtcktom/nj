import { tester, array, asarray, NDArray, Flatiter } from './core.mjs';

/**
 * @param {NDArray} a
 * @returns {NdenumerateIterator}
 */
export function ndenumerate(a) {
	a = asarray(a);
	return new NdenumerateIterator(a);
}

/**
 * @class
 * @extends {Flatiter}
 */
export class NdenumerateIterator extends Flatiter {
	/**
	 * @param {NDArray} base
	 */
	constructor(base) {
		super(base);
	}

	/**
	 * @typedef {Object} NdenumerateResult
	 * @property {Array.<number[], any>} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {NdenumerateResult}
	 */
	next() {
		if (this.done) return { done: true };
		let value = super.next().value;
		return { value: [this.coords, value], done: false };
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
