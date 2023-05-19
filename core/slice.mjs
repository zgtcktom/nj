import { tester } from './core.mjs';

/** @class */
export class Slice {
	/** @member {null} */
	static newaxis = null;
	/** @member {Slice} */
	static ellipsis = new Slice();
	/** @member {Slice} */
	static colon = new Slice();

	/**
	 * @param {number|null} start
	 * @param {number|null} stop
	 * @param {number|null} step
	 */
	constructor(start, stop, step) {
		/** @member {number|null} */
		this.start = start;
		/** @member {number|null} */
		this.stop = stop;
		/** @member {number|null} */
		this.step = step;
	}

	/**
	 * Returns `{start, stop, step, slicelength}` given the length of a sequence.
	 *
	 * `this.stop` must be non-null if `length` is null.
	 *
	 * Refer to: https://svn.python.org/projects/python/branches/pep-0384/Objects/sliceobject.c.
	 *
	 * @param {number|null} [length]
	 * @returns {SliceIterator}
	 * @example
	 * // returns [0, 2, 4, 6]
	 * [...slice(0, 10, 2).indices(7)]
	 * @example
	 * // returns 4
	 * slice(0, 10, 2).indices(7).slicelength
	 */
	indices(length = null) {
		let { start, stop, step } = this;

		step ??= 1;

		if (length == null) {
			start ??= 0;
			if (stop == null) throw new Error(`stop must be non-null`);
		} else {
			let defstart = step < 0 ? length - 1 : 0;
			let defstop = step < 0 ? -1 : length;

			if (start == null) {
				start = defstart;
			} else {
				if (start < 0) start += length;
				if (start < 0) start = step < 0 ? -1 : 0;
				if (start >= length) start = step < 0 ? length - 1 : length;
			}

			if (stop == null) {
				stop = defstop;
			} else {
				if (stop < 0) stop += length;
				if (stop < 0) stop = step < 0 ? -1 : 0;
				if (stop >= length) stop = step < 0 ? length - 1 : length;
			}
		}

		let slicelength;
		if (step == 0 || (step < 0 && stop >= start) || (step > 0 && start >= stop)) {
			slicelength = 0;
		} else if (step < 0) {
			slicelength = ((stop - start + 1) / step + 1) | 0;
		} else {
			slicelength = ((stop - start - 1) / step + 1) | 0;
		}

		return new SliceIterator(start, stop, step, slicelength);
	}

	toString() {
		if (this == Slice.ellipsis) return '...';
		if (this == Slice.colon) return ':';

		let { start, stop, step } = this;
		let str = `${start ?? ''}:${stop ?? ''}`;
		if (step != null) str += `:${step}`;
		return str;
	}
}

import util from 'util';
Slice.prototype[util?.inspect?.custom] = function () {
	return this.toString();
};

/** @class */
class SliceIterator {
	/** @type {number} */
	#value;
	/** @type {boolean} */
	#done;
	/** @type {number} */
	#index;

	/**
	 * @param {number} start
	 * @param {number} stop
	 * @param {number} step
	 * @param {number} slicelength
	 */
	constructor(start, stop, step, slicelength) {
		/** @member {number} */
		this.start = start;
		/** @member {number} */
		this.stop = stop;
		/** @member {number} */
		this.step = step;
		/** @member {number} */
		this.slicelength = slicelength;
	}

	[Symbol.iterator]() {
		this.reset();
		return this;
	}

	reset() {
		let { start, slicelength } = this;
		this.#index = 0;
		this.#done = slicelength == 0;
		this.#value = start;
	}

	/**
	 * @typedef {Object} SliceIteratorResult
	 * @property {number} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {SliceIteratorResult}
	 */
	next() {
		if (this.#done) return { done: true };
		let { step, slicelength } = this;
		let value = this.#value;
		this.#value += step;
		this.#done = ++this.#index >= slicelength;
		return { value, done: false };
	}
}

let lookup = Object.assign(Object.create(null), {
	['None']: Slice.newaxis,
	['...']: Slice.ellipsis,
	[':']: Slice.colon,
});

let _sliceArg = arg => {
	arg = arg.trim();
	return arg.length == 0 ? null : +arg;
};

let _normalize = (arg, argName) => {
	if (arg != null && !Number.isInteger((arg = +arg))) {
		throw new Error(`${argName} must be either null or able to convert to integer`);
	}
	return arg;
};

/**
 * Create a Slice instance
 * @param {number|string|null|Array<number|null>} [start]
 * @param {number} [stop]
 * @param {number} [step]
 * @returns {Slice}
 * @example
 * // returns Slice.ellipsis
 * slice('...')
 * @example
 * // returns Slice.colon
 * slice()
 * @example
 * // returns new Slice(1, null, null)
 * slice(1)
 * @example
 * // returns slice(null, null, -1)
 * slice('::-1')
 * @example
 * // returns slice(null, -1, 1)
 * slice(':-1')
 * @example
 * // returns slice(null, null, 1)
 * slice([,,1])
 */
export function slice(start = null, stop = null, step = null) {
	if (typeof start == 'string') {
		if (Object.hasOwn(lookup, start)) return lookup[start];
		let args = start.split(':');

		if (args.length == 0 || args.length > 3) throw new Error(`invalid string slice representation ${start}`);

		start = _sliceArg(args[0]);
		stop = args.length > 1 ? _sliceArg(args[1]) : null;
		step = args.length > 2 ? _sliceArg(args[2]) : null;
	} else if (start && typeof start == 'object') {
		if (start[Symbol.iterator] != undefined) [start = null, stop = null, step = null] = start;
		else if (start.length != undefined) ({ 0: start = null, 1: stop = null, 2: step = null } = start);
		else ({ start = null, stop = null, step = null } = start);
	}

	if (start == null && stop == null && step == null) return Slice.colon;

	start = _normalize(start, 'start');
	stop = _normalize(stop, 'stop');
	step = _normalize(step, 'step');

	return new Slice(start, stop, step);
}

slice.newaxis = Slice.newaxis;
slice.ellipsis = Slice.ellipsis;
slice.colon = Slice.colon;

// tester.onload(() => {
// 	console.log([...slice(0, 10, 2).indices(7)]);
// 	console.log(slice(0, 10, 2).indices(7).slicelength);
// });

tester
	.add(
		slice,
		() => slice(0, 1, 2).toString(),
		() => '0:1:2'
	)
	.add(
		slice,
		() => slice(null, 1, 2).toString(),
		() => ':1:2'
	)
	.add(
		slice,
		() => slice(0, null, 2).toString(),
		() => '0::2'
	)
	.add(
		slice,
		() => slice(null, null, -1).toString(),
		() => '::-1'
	)
	.add(
		slice,
		() => slice(null, null, null).toString(),
		() => ':'
	);
