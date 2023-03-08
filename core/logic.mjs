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

function getargs(narg) {
	// ['x1', 'x2', ...]
	return [...Array(narg).keys()].map(i => `x${i + 1}`);
}

let range = length => [...Array(length).keys()];

function reduce_body(
	axis,
	ndim,
	narg = 1,
	{ out = 'out', args = getargs(narg), initial = 'initial', func = 'func', accum = 'accum' } = {}
) {
	// unary always?
	// assume normalized

	let ndims = range(ndim);
	let nargs = range(narg);

	let index = ndims.map(i => `index${i}`);
	let shape = ndims.map(i => `shape${i}`);
	let strides = ndims.map(i => `strides${i}`);
	let offset = `offset`;

	let x_strides = nargs.map(i => ndims.map(j => `x${i + 1}_strides${j}`));
	let x_offset = nargs.map(i => `x${i + 1}_offset`);

	let outer_axis;
	let inner_axis;

	if (axis == null || axis.length == 0) {
		outer_axis = [];
		inner_axis = ndims;
	} else {
		outer_axis = ndims.filter(i => !axis.includes(i));
		inner_axis = ndims.filter(i => axis.includes(i));
	}

	let outer_loop = outer_axis.map(i => `for (let ${index[i]} = 0; ${index[i]} < ${shape[i]}; ${index[i]}++)`);
	let inner_loop = inner_axis.map(i => `for (let ${index[i]} = 0; ${index[i]} < ${shape[i]}; ${index[i]}++)`);

	let x_start = nargs.map(i => `x${i + 1}_start`);
	let x_start_decl = nargs.map(
		i =>
			`let ${x_start[i]} = ${x_offset[i]}${outer_axis.length ? ' + ' : ''}${outer_axis
				.map(j => `${index[j]} * ${x_strides[i][j]}`)
				.join(' + ')};`
	);

	let inner_loop_x = nargs.map(
		i =>
			`${args[i]}.data[${x_start[i]}${inner_axis.length ? ' + ' : ''}${inner_axis
				.map(j => `${index[j]} * ${x_strides[i][j]}`)
				.join(' + ')}]`
	);

	let outer_loop_out = `${out}.data[${offset}${outer_axis.length ? ' + ' : ''}${outer_axis
		.map(i => `${index[i]} * ${strides[i]}`)
		.join(' + ')}]`;

	let inner_loop_body = `${inner_loop.join(' ')} {${accum} = ${func}(${accum}, ${inner_loop_x.join(', ')});}`;

	let outer_loop_body = `let ${accum} = ${initial};`;
	outer_loop_body += x_start_decl.join('') + '';
	outer_loop_body += inner_loop_body + '';
	outer_loop_body += `${outer_loop_out} = ${accum};`;
	outer_loop_body = outer_loop_body;

	let loop = outer_loop.length ? `${outer_loop.join('')}{${outer_loop_body}}` : outer_loop_body;

	return {
		out,
		args,
		func,
		index,
		shape,
		strides,
		offset,
		x_strides,
		x_offset,
		outer_axis,
		inner_axis,
		outer_loop,
		inner_loop,
		x_start,
		x_start_decl,
		inner_loop_x,
		outer_loop_out,
		inner_loop_body,
		outer_loop_body,
		loop,
	};
	// // if axis=1, ndim=3
	// for (let i0 = 0; i0 < shape0; i0++)
	// 	for (let i2 = 0; i2 < shape2; i2++) {
	// 		let accum = initial;
	// 		let offset = arg.offset + i0 * strides1_0 + i2 * strides1_2;
	// 		for (let i1 = 0; i1 < shape1; i1++) {
	// 			accum = func(accum, x1[offset + i1 * strides1_1]);
	// 		}
	// 		out[out.offset + i0 * strides1_0 + i2 * strides1_2] = accum;
	// 	}

	// // if axis=(1, 3), ndim=4
	// for (let i0 = 0; i0 < shape0; i0++)
	// 	for (let i2 = 0; i2 < shape2; i2++) {
	// 		let accum = initial;
	// 		let offset = i0 * strides1_0 + i2 * strides1_2;
	// 		for (let i3 = 0; i3 < shape3; i3++)
	// 			for (let i1 = 0; i1 < shape1; i1++) {
	// 				accum = func(accum, x1[offset + i1 * strides1_1 + i3 * strides1_3]);
	// 			}
	// 		out[i0 * strides1_0 + i2 * strides1_2] = accum;
	// 	}
	for (let index0 = 0; index0 < shape0; index0++)
		for (let index2 = 0; index2 < shape2; index2++) {
			let accum = initial;
			let x1_start = x1_offset + index0 * x1_strides0 + index2 * x1_strides2;
			for (let index1 = 0; index1 < shape1; index1++)
				for (let index3 = 0; index3 < shape3; index3++) {
					accum = func(accum, x1.data[x1_start + index1 * x1_strides1 + index3 * x1_strides3]);
				}
			out.data[offset + index0 * strides0 + index2 * strides2] = accum;
		}
}

console.log(reduce_body([], 4, 1));

function func_body(narg, ndim) {
	// assume all arrays (including out) have the exact shape
	let out = 'out';
	let args = getargs(narg);
	let shape = [...Array(ndim).keys()].map(i => `shape${i}`);
	let offsets = Array(narg).fill('');
	let strides = [...Array(narg).keys()].map(i => [...Array(ndim).keys()].map(j => `strides${i + 1}_${j}`));
	let shapes = [...Array(narg).keys()].map(i => [...Array(ndim).keys()].map(j => `shape${i + 1}_${j}`));
	let outstrides = [...Array(ndim).keys()].map(i => `outstrides_${i}`);
	let outoffset = '';
	let loop = '';
	for (let i = 0; i < ndim; i++) {
		let coord = `i${i}`;
		let dim = shape[i];
		loop += `for (let ${coord} = 0; ${coord} < ${dim}; ${coord}++) `;
		if (i > 0) {
			for (let j = 0; j < narg; j++) offsets[j] += ' + ';
			outoffset += ' + ';
		}
		for (let j = 0; j < narg; j++) offsets[j] += `${coord} * ${strides[j][i]}`;
		outoffset += `${coord} * ${outstrides[i]}`;
	}

	// use args[0] instead of out, all shapes are the same
	let decl_shape = `let [${shape.join(', ')}] = ${args[0]}.shape;\n`;
	let declare = decl_shape;
	declare += `let [${outstrides.join(', ')}] = ${out}.strides;\n`;

	let shapes_declare = '';
	let strides_declare = '';
	for (let i = 0; i < narg; i++) {
		shapes_declare += `let [${shapes[i].join(', ')}] = ${args[i]}.shape;\n`;
		strides_declare += `let [${strides[i].join(', ')}] = ${args[i]}.strides;\n`;
	}
	declare += strides_declare;

	// declare
	// > `let [shape1, shape2] = out.shape;
	// let [outstrides_0, outstrides_1] = out.strides;
	// let [strides1_0, strides1_1] = x1.strides;
	// let [strides2_0, strides2_1] = x2.strides;`
	// out
	// > 'out'
	// args
	// > ['x1', 'x2']
	// loop
	// > 'for (let i1 = 0; i1 < shape1; i1++) for (let i2 = 0; i2 < shape2; i2++)'
	// outoffset
	// > 'i1 * outstrides_0 + i2 * outstrides_1'
	// offsets
	// > ['i1 * strides1_0 + i2 * strides1_1', 'i1 * strides2_0 + i2 * strides2_1']
	// shape
	// > ['shape1', 'shape2']
	// strides
	// > [['strides1_0', 'strides1_1'], ['strides2_0', 'strides2_1']]
	// outstrides
	// > ['outstrides_0', 'outstrides_1']

	return {
		decl_shape,
		declare,
		out,
		args,
		loop,
		outoffset,
		offsets,
		shape,
		strides,
		outstrides,
		shapes_declare,
		shapes,
		strides_declare,
	};
}

function wrapper(builder, self = Object.create(null)) {
	// self as an obj for caching the generated functions
	// builder = (ndim, narg) => new Function()
	return function (builder, narg, ndim) {
		return (this[narg] ?? (this[narg] = {}))[ndim] ?? (this[narg][ndim] = builder(narg, ndim));
	}.bind(self, builder);
}

const map_func = wrapper((narg, ndim) => {
	let func = 'fn';
	let { declare, out, args, loop, outoffset, strides, offsets } = func_body(narg, ndim);

	// console.log(strides, ndim);
	let body = declare;
	body += `${loop} {
${out}.data[${outoffset}] = ${func}(${offsets.map((offset, i) => `${args[i]}.data[${offset}]`).join(', ')});
}\n`;
	body += `return ${out};`;

	// console.log(body);

	// signiture: f(func, ...args, out)
	return new Function(func, ...args, out, body);
});

const reduce_func = wrapper((narg, ndim) => {
	let func = 'fn';
	let initial = 'initial';
	let { args, loop, strides_declare, decl_shape, offsets, out } = func_body(narg, ndim);

	let body = decl_shape + strides_declare;
	body += `let accum = ${initial};\n`;
	body += `${loop} {
	accum = ${func}(accum, ${offsets.map((offset, i) => `${args[i]}.data[${offset}]`).join(', ')});
}\n`;
	body += `return accum;`;

	// console.log(body);

	return new Function(func, ...args, initial, out, body);
});

export function wrap_map(name, func, narg = func.length) {
	let args = getargs(narg);
	let body = `return function (${args.join(', ')}, out=null) {
	${args.map(arg => `${arg} = this.asarray(${arg})`).join(';')};
	let shape;
	if (out == null) {
		shape = ${narg > 1 ? `this.broadcast_shapes(${args.map(arg => `${arg}.shape`).join(', ')})` : `${args[0]}.shape`};
		out = this.empty(shape);
	} else {
		shape = out.shape;
	}
	${args.map(arg => `${arg} = this.broadcast_to(${arg}, shape)`).join(';')};
	return this.map_func(${narg}, out.ndim)(func, ${args.join(', ')}, out);
}`;

	return Object.defineProperty(
		new Function('func', body)(func).bind({ map_func, asarray, empty, broadcast_shapes, broadcast_to }),
		'name',
		{ value: name }
	);
}

export function wrap_map_binary(name, func) {
	return Object.defineProperty(
		(x1, x2, out = null) => {
			x1 = asarray(x1);
			x2 = asarray(x2);
			let shape;
			if (out == null) {
				shape = broadcast_shapes(x1.shape, x2.shape);
				out = empty(shape);
			} else shape = out.shape;
			x1 = broadcast_to(x1, shape);
			x2 = broadcast_to(x2, shape);
			return map_func(2, out.ndim)(func, x1, x2, out);
		},
		'name',
		{ value: name }
	);
}

export function wrap_reduce_unary(name, func, defaultinitial) {
	return Object.defineProperty(
		(x1, initial = defaultinitial) => {
			x1 = asarray(x1);
			return reduce_func(1, x1.ndim)(func, x1, initial, x1);
		},
		'name',
		{ value: name }
	);
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
