import { arange, slice, tester } from './core.mjs';

// function index_offset(index, strides) {
// 	let offset = 0;
// 	for (let i = 0; i < index.length; i++) offset += index[i] * strides[i];
// 	return offset;
// }

// export function* ndoffset(array) {
// 	let { strides, shape, offset } = array;
// 	for (let index of ndindex(shape)) {
// 		yield offset + index_offset(index, strides);
// 	}
// }

class Ndoffset {
	constructor(shape, strides) {
		let ndim = shape.length;
		this.shape = shape;
		this.strides = strides;
		this.size = shape.reduce((a, b) => a * b, 1);
		this.ndim = ndim;

		this.index = 0;
		this.offset = 0;
		this.coords = Array(ndim);
	}

	[Symbol.iterator]() {
		return this.reset();
	}

	reset() {
		this.index = this.offset = 0;
		this.coords.fill(0);
		return this;
	}

	next() {
		let done = this.index >= this.size;
		let value;
		if (!done) {
			let { offset, coords, shape, strides, ndim } = this;
			value = offset;
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
			this.offset = offset;
			this.index++;
		}
		return { value, done };
	}
}

export function ndoffset(shape, strides) {
	return new Ndoffset(shape, strides);
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
		21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44,
		47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70,
		73, 72, 75, 74, 77, 76, 79, 78,
	]
);
// let a = arange(100);
// a = a.get(slice(20, -20)).reshape([2, 1, -1, 2]).get(slice('...'), slice('::-1'));
// let it = ndoffset(a.shape, a.strides).reset();
// while (true) {
// 	let { value, done } = it.next();
// 	if (done) break;
// 	console.log(value, it.coords);
// }

// function offsetit(shape, strides) {
// 	return {
// 		shape: [...shape].reverse(),
// 		strides: [...strides].reverse(),
// 		size: shape.reduce((a, b) => a * b, 1),
// 		ndim: shape.length,
// 		coords: [0, 0],
// 		index: 0,
// 		offset: 0,

// 		[Symbol.iterator]() {
// 			return this.reset();
// 		},
// 		reset() {
// 			this.index = this.offset = 0;
// 			let { coords } = this;
// 			for (let i = 0; i < coords.length; i++) coords[i] = 0;
// 			return this;
// 		},
// 		next() {
// 			let done = this.index >= this.size;
// 			let value;
// 			if (!done) {
// 				let { offset, coords, shape, strides, ndim } = this;
// 				let ptr = 0;
// 				let carry = true;
// 				value = offset;
// 				loop: while (ptr < ndim) {
// 					switch (shape[ptr]) {
// 						case 1:
// 							ptr++;
// 							break;
// 						case coords[ptr]:
// 							offset -= strides[ptr] * shape[ptr];
// 							coords[ptr++] = 0;
// 							carry = true;
// 							break;
// 						default:
// 							if (!carry) break loop;
// 							offset += strides[ptr];
// 							coords[ptr] += 1;
// 							carry = false;
// 					}
// 				}
// 				this.offset = offset;
// 				this.index++;
// 			}
// 			return { value, done };
// 		},
// 	};
// }
