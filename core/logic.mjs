import { arange, array, asarray, broadcast, broadcastable_to, empty, ones, tester, timeit } from './core.mjs';

function* offsetiter(strides1, strides2, shape1, shape2) {
	let offset;
	for (let i2 = 0; i2 < shape2; i2++) {
		for (let i1 = 0; i1 < shape1; i1++) {
			offset = i1 * strides1 + i2 * strides2;
			yield offset;
		}
	}
}

function nested_body(ndim, narg = 1) {
	let loop = '';
	let shape = [...Array(ndim).keys()].map(i => `shape_${i + 1}`);
	let offsets = Array(narg).fill('');
	let strides = [...Array(narg).keys()].map(i => [...Array(ndim).keys()].map(j => `strides_${i}_${j}`));
	let outstrides = [...Array(ndim).keys()].map(i => `outstrides_${i + 1}`);
	let outoffset = '';
	for (let i = 0; i < ndim; i++) {
		let coord = `i${i + 1}`;
		let dim = shape[i];
		loop += `for (let ${coord} = 0; ${coord} < ${dim}; ${coord}++) `;
		if (i > 0) {
			for (let j = 0; j < narg; j++) offsets[j] += ' + ';
			outoffset += ' + ';
		}
		for (let j = 0; j < narg; j++) offsets[j] += `${coord} * ${strides[j][i]}`;
		outoffset += `${coord} * ${outstrides[i]}`;
	}

	return { loop, outoffset, offsets, shape, strides, outstrides };

	// return `${loop}out.data[${outoffset}] = func(${offsets
	// 	.map((offset, i) => `array${i}.data[${offset}]`)
	// 	.join(', ')})`;
}
function map_func(ndim, narg, func = 'f') {
	let { loop, outoffset, offsets, shape, strides, outstrides } = nested_body(ndim, narg);

	let out = 'out';
	let args = Array(narg)
		.fill()
		.map((_, i) => `x${i + 1}`);
	let body = `let [${shape.join(', ')}] = ${out}.shape;\n`;
	body += `let [${outstrides.join(', ')}] = ${out}.strides;\n`;
	strides.forEach((strides, i) => {
		body += `let [${strides.join(', ')}] = ${args[i]}.strides;\n`;
	});
	body += `${loop}out.data[${outoffset}] = ${func}(${offsets
		.map((offset, i) => `${args[i]}.data[${offset}]`)
		.join(', ')})\n`;
	body += `return ${out};`;

	console.log(loop, outoffset, offsets, shape, strides, outstrides);
	return new Function(func, ...args, out, body);
}

let saved_fn = {};
export function _map_func(narg, ndim) {
	return (saved_fn[narg] ?? (saved_fn[narg] = {}))[ndim] ?? (saved_fn[narg][ndim] = map_func(ndim, narg));
}

function scoped(name, fn, args) {
	let body = `return function ${name}(${args.join(', ')}, out=null) {
        ${args.map(arg => `${arg} = asarray(${arg})`).join('; ')};
        if (out == null) out = empty(${args[0]}.shape);
        return _map_func(${args.length}, out.ndim)(fn, ${args.join(', ')}, out);
    }`;
	return new Function('_map_func', 'asarray', 'empty', 'fn', body)(_map_func, asarray, empty, fn);
}

export function map(name, fn, narg = fn.length) {
	let args = Array(narg)
		.fill()
		.map((_, i) => `x${i + 1}`);
	return scoped(name, fn, args);
	return (...args) => {
		let out = args.at(-1);
		args = args.slice(0, -1).map(asarray);
		return _map_func(narg, out.ndim)(fn, ...args, out);
	};
}

// console.log(_map_func(1, 1).toString());
console.log(
	_map_func(2, 2)(
		(a, b) => a * b,
		arange(10).reshape([5, -1]),
		arange(10, 20).reshape([5, -1]),
		empty([10]).reshape([5, -1])
	).toarray()
);

// console.log(map_func(3, 'add', 1).toString());
// console.log(map_func(1, 'add', 2).toString());
// console.log(map_func(1, 'add', 1).toString());

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
