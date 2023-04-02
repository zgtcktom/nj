import { arange, slice, tester } from './core.mjs';

let _multiply = (a, b) => a * b;

class Ndoffset {
	constructor(shape, strides, start) {
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

export function ndoffset(shape, strides, start = 0) {
	return new Ndoffset(shape, strides, start);
}

tester.add(
	ndoffset,
	() => {
		let a = arange(100);
		a = a.get(slice(20, -20)).reshape([2, 1, -1, 2]).get(slice('...'), slice('::-1'));
		let flatten = [];
		for (let offset of ndoffset(a.shape, a.strides)) {
			flatten.push(a.data[a.offset + offset]);
		}
		return flatten;
	},
	() => [
		21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45,
		44, 47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68,
		71, 70, 73, 72, 75, 74, 77, 76, 79, 78,
	]
);
