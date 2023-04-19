import { tester, NDArray, slice, array, asarray, ndoffset, Slice, empty, empty_like } from './core.mjs';

/**
 * @class
 * @template T
 */
export class Flatiter {
	#offsetiter;

	/**
	 * @param {NDArray<T>} base
	 */
	constructor(base) {
		/** @member {NDArray<T>} */
		this.base = base;

		let { shape, strides, offset } = base;
		this.#offsetiter = ndoffset(shape, strides, offset);
	}

	/** @member {number} */
	get index() {
		return this.#offsetiter.index;
	}

	/** @member {number[]} */
	get coords() {
		return this.#offsetiter.coords;
	}

	[Symbol.iterator]() {
		this.reset();
		return this;
	}

	reset() {
		this.#offsetiter.reset();
	}

	/**
	 * @typedef {Object} FlatiterResult
	 * @property {T} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {FlatiterResult}
	 * @ignore
	 */
	next() {
		let offsetiter = this.#offsetiter;
		if (offsetiter.done) return { done: true };

		let offset = offsetiter.next().value;
		let value = this.base.data[offset];
		return { value, done: false };
	}

	/**
	 * @param {number|Slice|string|number[]} index
	 * @returns {NDArray<T>}
	 */
	at(index) {
		return this.get(index);
	}

	/**
	 * @param {number|Slice|string|number[]} index
	 * @returns {NDArray<T>}
	 */
	get(index) {
		let { base } = this;
		if (typeof index == 'number') {
			return array(base.item(index), base.dtype);
		}
		if (typeof index == 'string') index = slice(index);

		let it, out;
		if (index instanceof Slice) {
			it = index.indices(base.size);
			out = empty([it.slicelength], base.dtype);
		} else {
			it = asarray(index).flat;
			out = empty_like(index);
		}

		let i = 0;
		for (let idx of it) {
			out.data[i++] = base.item(idx);
		}
		return out;
	}

	/**
	 * `Flatiter.set` repeats and flattens `value` to match the number of elements being set.
	 *
	 * `NDArray.set` broadcasts the value to match the shape of the selection
	 * @param {number|Slice|string|number[]} index
	 * @param {T[]|T} value
	 * @returns {Flatiter<T>} this
	 */
	set(index, value) {
		let { base } = this;
		if (typeof index == 'number') {
			base.itemset(index, value);
			return this;
		}
		if (typeof index == 'string') index = slice(index);

		value = asarray(value).flatten().data;

		let it = index instanceof Slice ? index.indices(base.size) : asarray(index).flat;

		let i = 0;
		for (let idx of it) {
			base.itemset(idx, value[i++ % value.length]);
		}
		return this;
	}

	/**
	 * Returns a copy of the flatten array
	 * @returns {NDArray<T>}
	 */
	copy() {
		return array([...this], this.base.dtype);
	}
}

tester.add(
	'Flatiter',
	() => {
		let array = new NDArray([2, 3], [0, 1, 2, 3, 4, 5]);
		let a = new Flatiter(array);
		let out = [];
		// console.log(a.next());
		for (let item of a) {
			out.push(item);
		}
		return out;
	},
	() => [0, 1, 2, 3, 4, 5]
);

tester
	.add(
		'Flatiter.get',
		() =>
			new Flatiter(
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
			).at(3),
		() => 4
	)
	.add(
		'Flatiter.get',
		() =>
			new Flatiter(
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
			).at(slice(2, -2)),
		() => array([3, 4])
	)
	.add(
		'Flatiter.get',
		() =>
			new Flatiter(
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
			).get([3, 4, -1]),
		() => [4, 5, 6]
	);

tester
	.add(
		'Flatiter.set',
		() => {
			let x = array([
				[3, 3, 3],
				[3, 3, 3],
			]);
			new Flatiter(x).set([1, -1], [[1], [2]]);
			return x;
		},
		() => [
			[3, 1, 3],
			[3, 3, 2],
		]
	)
	.add(
		'Flatiter.set',
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			x.flat.set(
				[1, 0, 1],
				[
					[1, 2, 3],
					[5, 6, 7],
				]
			);
			return x;
		},
		() =>
			array([
				[2, 3, 3],
				[4, 5, 6],
			])
	)
	.add(
		'Flatiter.set',
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			x.flat.set(slice(1, -1), [
				[1, 2, 3],
				[5, 6, 7],
			]);
			return x;
		},
		() =>
			array([
				[1, 1, 2],
				[3, 5, 6],
			])
	)
	.add(
		'Flatiter.set',
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			x.flat.set(':', [[1, 2]]);
			return x;
		},
		() =>
			array([
				[1, 2, 1],
				[2, 1, 2],
			])
	);

tester.add(
	'Flatiter.copy',
	() => new Flatiter(new NDArray([2, 3], [0, 1, 2, 3, 4, 5]).at(slice([, , -1]))).copy(),
	() => [3, 4, 5, 0, 1, 2]
);
