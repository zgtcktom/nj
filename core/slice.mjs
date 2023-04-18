import { tester } from './core.mjs';

export class Slice {
	static newaxis = null;
	static ellipsis = new Slice();
	static colon = new Slice();

	static ['None'] = Slice.newaxis;
	static ['...'] = Slice.ellipsis;
	static [':'] = Slice.colon;

	/**
	 * Slice constructor
	 * @param {number} start
	 * @param {number} stop
	 * @param {number} step
	 */
	constructor(start = null, stop = null, step = null) {
		this.start = start;
		this.stop = stop;
		this.step = step;
	}

	/**
	 * Return `{start, stop, step, slicelength}` given the length of a sequence
	 *
	 * `this.stop` must be non-null if `length` is null
	 * @param {number} length
	 * @returns {{start: number, stop: number, step: number, slicelength: number}}
	 */
	indices(length = null) {
		// https://svn.python.org/projects/python/branches/pep-0384/Objects/sliceobject.c
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

		return Object.assign(Object.create(iteratorPrototype), { start, stop, step, slicelength });
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

let iteratorPrototype = {
	[Symbol.iterator]() {
		this.reset();
		return this;
	},
	reset() {
		let { start, slicelength } = this;
		this.index = 0;
		this.done = slicelength == 0;
		this.value = start;
	},
	next() {
		let { value, step, slicelength } = this;
		if (this.done) return { done: true };

		this.value += step;
		this.done = ++this.index >= slicelength;
		return { value, done: false };
	},
};

tester.onload(() => {
	console.log(slice(0, -1, 2).indices(10));
});

/**
 *
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @returns {Slice}
 */
export function slice(start, stop, step) {
	if (start == null && stop == null && step == null) return Slice.colon;
	if (typeof start == 'string') {
		if (Object.hasOwn(Slice, start)) return Slice[start];
		let args = start.split(':');
		// console.log(args);
		if (args.length == 1) {
			let [start] = args;

			if (start.length == 0) start = null;
			else if (Number.isInteger(+start)) start = +start;
			else throw new Error(`${start} cannot be cast to integer`);

			return new Slice(start);
		}
		if (args.length == 2) {
			let [start, stop] = args;

			if (start.length == 0) start = null;
			else if (Number.isInteger(+start)) start = +start;
			else throw new Error(`${start} cannot be cast to integer`);

			if (stop.length == 0) stop = null;
			else if (Number.isInteger(+stop)) stop = +stop;
			else throw new Error(`${stop} cannot be cast to integer`);

			return new Slice(start, stop);
		}
		if (args.length == 3) {
			let [start, stop, step] = args;

			if (start.length == 0) start = null;
			else if (Number.isInteger(+start)) start = +start;
			else throw new Error(`${start} cannot be cast to integer`);

			if (stop.length == 0) stop = null;
			else if (Number.isInteger(+stop)) stop = +stop;
			else throw new Error(`${stop} cannot be cast to integer`);

			if (step.length == 0) step = null;
			else if (Number.isInteger(+step)) step = +step;
			else throw new Error(`${step} cannot be cast to integer`);

			return new Slice(start, stop, step);
		}
		throw `invalid string slice representation ${start}`;
	}
	if (start?.length != undefined) {
		({ 0: start, 1: stop, 2: step } = start);
	}
	return new Slice(start, stop, step);
}

Object.assign(slice, { colon: Slice.colon }, Slice);

slice.colon = Slice.colon;

slice.is = function (obj) {
	return obj instanceof Slice;
};

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
