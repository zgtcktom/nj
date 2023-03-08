import {
	arange,
	array,
	asarray,
	broadcast_shapes,
	broadcast,
	broadcast_to,
	broadcastable_to,
	empty,
	ones,
	tester,
	timeit,
	normalize_axis,
} from './core.mjs';

function* offsetiter(strides1, strides2, shape1, shape2) {
	let offset;
	for (let i2 = 0; i2 < shape2; i2++) {
		for (let i1 = 0; i1 < shape1; i1++) {
			offset = i1 * strides1 + i2 * strides2;
			yield offset;
		}
	}
}

function offsetit(shape, strides) {
	return {
		shape: [...shape].reverse(),
		strides: [...strides].reverse(),
		size: shape.reduce((a, b) => a * b, 1),
		ndim: shape.length,
		coords: [0, 0],
		index: 0,
		offset: 0,

		[Symbol.iterator]() {
			return this.reset();
		},
		reset() {
			this.index = this.offset = 0;
			let { coords } = this;
			for (let i = 0; i < coords.length; i++) coords[i] = 0;
			return this;
		},
		next() {
			let done = this.index >= this.size;
			let value;
			if (!done) {
				let { offset, coords, shape, strides, ndim } = this;
				let ptr = 0;
				let carry = true;
				value = offset;
				loop: while (ptr < ndim) {
					switch (shape[ptr]) {
						case 1:
							ptr++;
							break;
						case coords[ptr]:
							offset -= strides[ptr] * shape[ptr];
							coords[ptr++] = 0;
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
		},
	};
}

// let t = offsetiter(1, 20, 10, 2);
// for (let offset of t) {
// 	console.log('offsetiter', offset);
// }
// for (let offset of t) {
// 	console.log('offsetiter2', offset);
// }

// let t2 = offsetit([2, 10], [20, 1]);
// for (let offset of t2) {
// 	console.log('offsetit', offset);
// }
// for (let offset of t2) {
// 	console.log('offsetit2', offset);
// }

// let total = 0;
// timeit(() => {
// 	for (let offset of offsetiter(1, 20, 10, 2)) total += offset;
// });
// console.log(total);
// total = 0;
// timeit(() => {
// 	for (let i = 0; i < 20; i++) total += i;
// });
// console.log(total);
// let tmpit = offsetit([2, 10], [20, 1]);
// total = 0;
// timeit(() => {
// 	for (let offset of tmpit) total += offset;
// });
// console.log(total);

export function all(a, axis = null, keepdims = false, out = null) {}

// let f1 = function (a, b) {
// 	return a + b;
// };
// let f2 = new Function('a', 'b', 'return a+b;');
// let f3 = eval(`(function(a,b){return a+b;})`);

// let a = 99,
// 	b = 56;

// timeit(() => {
// 	f3(a, b);
// });
// timeit(() => {
// 	f1(a, b);
// });
// timeit(() => {
// 	f2(a, b);
// });

// timeit(() => {
// 	new Function('a', 'b', 'return a+b;')(a, b);
// });

// timeit(() => {
// 	eval(`(function(a,b){return a+b;})`)(a, b);
// });
// timeit(() => {
// 	(function (a, b) {
// 		return a + b;
// 	})(a, b);
// });

// function* g() {
// 	let i;
// 	for (i = 0; i < 100000; i++) yield i;
// }
// let it = {
// 	i: 0,
// 	[Symbol.iterator]() {
// 		this.i = 0;
// 		return this;
// 	},
// 	next() {
// 		let value = this.i++,
// 			done = value >= 100000;
// 		return { value, done };
// 	},
// };

// let total = 0;
// timeit(() => {
// 	for (let i of g()) total += i;
// });
// console.log(total);
// total = 0;
// timeit(() => {
// 	for (let i of it) total += i;
// });
// console.log(total);
// total = 0;
// timeit(() => {
// 	for (let i = 0; i < 100000; i++) total += i;
// });
// console.log(total);
