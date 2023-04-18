import { tester, NDArray, slice, array, asarray, ndoffset } from './core.mjs';

function is_tuple(value) {
	return value?.length != undefined;
}

/** @class */
export class Flatiter {
	#offsetiter;

	/**
	 * @param {NDArray} base
	 */
	constructor(base) {
		/** @member {NDArray} */
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
	 * @property {*} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {FlatiterResult}
	 */
	next() {
		let offsetiter = this.#offsetiter;
		if (offsetiter.done) return { done: true };

		let offset = offsetiter.next().value;
		let value = this.base.data[offset];
		return { value, done: false };
	}

	get(index) {
		if (is_tuple(index)) {
			let data = [];
			for (let i = 0; i < index.length; i++) {
				data[i] = this.base.item(index[i]);
			}
			return new NDArray([index.length], data);
		}
		return this.base.item(index);
	}

	set(index, value) {
		if (is_tuple(index)) {
			if (is_tuple(value)) {
				value = asarray(value).flatten().data;
				for (let i = 0; i < index.length; i++) this.base.itemset(index[i], value[i % value.length]);
			} else {
				for (let i = 0; i < index.length; i++) this.base.itemset(index[i], value);
			}
			return;
		}
		if (is_tuple(value)) throw 'Error setting single item of array';
		this.base.itemset(index, value);
	}

	/**
	 * Returns a copy of the flatten array
	 * @returns {NDArray}
	 */
	copy() {
		return new NDArray([this.base.size], [...this]);
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
			).get(3),
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
			).get([3, 4, -1]),
		() => [4, 5, 6]
	);

tester.add(
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
);

tester.add(
	'Flatiter.copy',
	() => new Flatiter(new NDArray([2, 3], [0, 1, 2, 3, 4, 5]).get(slice([, , -1]))).copy(),
	() => [3, 4, 5, 0, 1, 2]
);
