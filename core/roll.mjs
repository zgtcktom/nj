import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	amax,
	normalize_axis_tuple,
	broadcast,
	empty_like,
} from './core.mjs';

export class Product {
	constructor(iterables) {
		this.lengths = this.size = iterables.length;
		let ndim = shape.length;
		this.shape = shape;
		this.strides = strides;
		this.start = start;
		this.size = shape.reduce(_multiply, 1);
		this.ndim = ndim;

		this.coords = Array(ndim);
		this.index = this.offset = this.done = undefined;
		this.reset();
	}

	[Symbol.iterator]() {
		return this.reset();
	}

	reset() {
		this.coords.fill(0);
		this.index = this.offset = 0;
		this.done = this.size == 0;
		return this;
	}

	next() {
		if (this.done) return { done: true };

		let { offset, coords, shape, strides, ndim } = this;
		let value = offset;

		let ptr = ndim - 1;
		let carry = true;
		loop: while (ptr >= 0) {
			switch (shape[ptr]) {
				case 1:
					ptr--;
					break;
				case coords[ptr]:
					offset -= strides[ptr] * shape[ptr];
					coords[ptr--] = 0;
					carry = true;
					break;
				default:
					if (!carry) break loop;
					offset += strides[ptr];
					coords[ptr] += 1;
					carry = false;
			}
		}

		this.index++;
		this.offset = offset;
		this.done = this.index >= this.size;

		value += this.start;
		return { value, done: false };
	}
}

export function roll(a, shift, axis = null) {
	a = asarray(a);
	if (axis == null) {
		return roll(a.ravel(), shift, 0).reshape(a.shape);
	} else {
		axis = normalize_axis_tuple(axis, a.ndim, true);
		let broadcasted = broadcast(shift, axis);
		if (broadcasted.ndim > 1) {
			throw new Error(`'shift' and 'axis' should be scalars or 1D sequences`);
		}

		let shifts = Array(a.ndim).fill(0);
		for (let [sh, ax] of broadcasted) {
			shifts[ax] += sh;
		}

		let rolls = Array(a.ndim).fill([slice(null), slice(null)]);

		for (let [ax, offset] of shifts.entries()) {
			offset %= a.shape[ax] || 1;
			if (offset) {
				rolls[ax] = [
					[slice(null, -offset), slice(offset, null)],
					[slice(-offset, null), slice(null, offset)],
				];
			}
		}

		let result = empty_like(a);
		console.log(shifts, rolls);
		for (indices of itertools.product(...rolls)) {
			[arr_index, res_index] = zip(...indices);
			result[res_index] = a[arr_index];
		}
		return result;
	}
}

tester.add(
	roll,
	() => [
		...(function* () {
			let x = arange(10);
			yield roll(x, 2);
			yield roll(x, -2);
			let x2 = x.reshape([2, 5]);
			yield x2;
			yield roll(x2, 1);
			yield roll(x2, -1);
			yield roll(x2, 1, 0);
			yield roll(x2, -1, 0);
			yield roll(x2, 1, 1);
			yield roll(x2, -1, 1);
			yield roll(x2, [1, 1], [1, 0]);
			yield roll(x2, [2, 1], [1, 0]);
		})(),
	],
	() => [
		...(function* () {
			yield array([8, 9, 0, 1, 2, 3, 4, 5, 6, 7]);
			yield array([2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
			yield array([
				[0, 1, 2, 3, 4],
				[5, 6, 7, 8, 9],
			]);
			yield array([
				[9, 0, 1, 2, 3],
				[4, 5, 6, 7, 8],
			]);
			yield array([
				[1, 2, 3, 4, 5],
				[6, 7, 8, 9, 0],
			]);
			yield array([
				[5, 6, 7, 8, 9],
				[0, 1, 2, 3, 4],
			]);
			yield array([
				[5, 6, 7, 8, 9],
				[0, 1, 2, 3, 4],
			]);
			yield array([
				[4, 0, 1, 2, 3],
				[9, 5, 6, 7, 8],
			]);
			yield array([
				[1, 2, 3, 4, 0],
				[6, 7, 8, 9, 5],
			]);
			yield array([
				[9, 5, 6, 7, 8],
				[4, 0, 1, 2, 3],
			]);
			yield array([
				[8, 9, 5, 6, 7],
				[3, 4, 0, 1, 2],
			]);
		})(),
	]
);
