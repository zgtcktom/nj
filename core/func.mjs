import { asarray, broadcast_shapes, broadcast_to, empty, normalize_axis } from './core.mjs';

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
	let strides = range(outer_axis.length).map(i => `strides${i}`);

	let outer_loop = outer_axis.map(
		i => `for (let ${index[i]} = 0; ${index[i]} < ${shape[i]}; ${index[i]}++)`
	);
	let inner_loop = inner_axis.map(
		i => `for (let ${index[i]} = 0; ${index[i]} < ${shape[i]}; ${index[i]}++)`
	);

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
		.map((i, j) => `${index[i]} * ${strides[j]}`)
		.join(' + ')}]`;

	let inner_loop_body = `${inner_loop.join(' ')} {${accum} = ${func}(${accum}, ${inner_loop_x.join(
		', '
	)});}`;

	let outer_loop_body = `let ${accum} = ${initial};`;
	outer_loop_body += x_start_decl.join('') + '';
	outer_loop_body += inner_loop_body + '';
	outer_loop_body += `${outer_loop_out} = ${accum};`;
	outer_loop_body = outer_loop_body;

	let decl = '';
	decl += `let ${offset} = ${out}.offset;`;
	if (strides.length > 0) decl += `let [${strides.join(', ')}] = ${out}.strides;`;
	decl += `let [${shape.join(', ')}] = ${args[0]}.shape;`;
	decl += nargs.map(i => `let [${x_strides[i].join(', ')}] = ${args[i]}.strides;`).join('');
	decl += nargs.map(i => `let ${x_offset[i]} = ${args[i]}.offset;`).join('');

	let loop = outer_loop.length ? `${outer_loop.join(' ')} {${outer_loop_body}}` : outer_loop_body;

	let body = decl + loop + 'return out;';

	return {
		out,
		initial,
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
		decl,
		body,
	};
}

function s() {
	let offset = out.offset;
	let [strides0, strides1] = out.strides;
	let [shape0, shape1, shape2, shape3] = undefined.shape;
	for (let index1 = 0; index1 < shape1; index1++)
		for (let index3 = 0; index3 < shape3; index3++) {
			let accum = initial;
			for (let index0 = 0; index0 < shape0; index0++)
				for (let index2 = 0; index2 < shape2; index2++) {
					accum = func(accum);
				}
			out.data[offset + index1 * strides0 + index3 * strides1] = accum;
		}
	return out;
}

// console.log(reduce_body([0, 2], 4, 0));

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

function wrapper_map(builder, self = Object.create(null)) {
	// self as an obj for caching the generated functions
	// builder = (ndim, narg) => new Function()
	return function (builder, narg, ndim) {
		return (this[narg] ?? (this[narg] = {}))[ndim] ?? (this[narg][ndim] = builder(narg, ndim));
	}.bind(self, builder);
}

const map_func = wrapper_map((narg, ndim) => {
	let func = 'fn';
	let { declare, out, args, loop, outoffset, strides, offsets } = func_body(narg, ndim);

	// console.log(strides, ndim);
	let body = declare;
	body += `${loop} {
${out}.data[${out}.offset + ${outoffset}] = ${func}(${offsets
		.map((offset, i) => `${args[i]}.data[${args[i]}.offset + ${offset}]`)
		.join(', ')});
}\n`;
	body += `return ${out};`;

	// console.log(body);

	// signiture: f(func, ...args, out)

	console.log(new Function(func, ...args, out, body).toString());
	return new Function(func, ...args, out, body);
});

function binary_tree(tree, ndim, path, builder, narg, axis) {
	for (let i = 0; i < ndim - 1; i++) {
		tree = tree[!!path[i]] ?? (tree[!!path[i]] = {});
	}
	return tree[!!path[ndim - 1]] ?? (tree[!!path[ndim - 1]] = builder(narg, ndim, axis));
}

function cached_reduce(builder, self = Object.create(null)) {
	// self as an obj for caching the generated functions
	return function (builder, narg, ndim, axis) {
		let path = {};
		if (axis != null) for (let i = 0; i < axis.length; i++) path[axis[i]] = true;
		return binary_tree(
			(this[narg] ?? (this[narg] = {}))[ndim] ?? (this[narg][ndim] = {}),
			ndim,
			path,
			builder,
			narg,
			axis
		);
	}.bind(self, builder);
}

const reduce_func = cached_reduce((narg, ndim, axis) => {
	let { args, out, body, func, initial } = reduce_body(axis, ndim, narg);
	console.log(new Function(func, ...args, out, initial, body).toString());
	return new Function(func, ...args, out, initial, body);
});

export function wrap_map(name, func, narg = func.length) {
	let args = getargs(narg);
	let body = `return function (${args.join(', ')}, out=null) {
	${args.map(arg => `${arg} = this.asarray(${arg})`).join(';')};
	let shape;
	if (out == null) {
		shape = ${
			narg > 1
				? `this.broadcast_shapes(${args.map(arg => `${arg}.shape`).join(', ')})`
				: `${args[0]}.shape`
		};
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
		(x1, axis = null, out = null, initial = defaultinitial) => {
			x1 = asarray(x1);
			if (axis != null) {
				axis = normalize_axis(axis, x1.ndim, false);
				if (out == null) {
					let shape = [];
					for (let i = 0; i < x1.ndim; i++) {
						if (!axis.includes(i)) shape.push(x1.shape[i]);
					}
					out = empty(shape);
				}
			} else {
				if (out == null) {
					out = empty([]);
				}
			}
			return reduce_func(1, x1.ndim, axis)(func, x1, out, initial);
		},
		'name',
		{ value: name }
	);
}

function _cache(builder) {
	let create = () => Object.create(null);

	let root = create();

	let get = (key, valuefn) => {
		// key = [].concat(...key);
		let map = root;
		// let i = 0;
		// for (; i < key.length - 1; i++) map = map[key[i]] ?? (map[key[i]] = create());
		// console.log(root);
		return map[key] ?? (map[key] = valuefn(...key));
		// return map[key[i]] ?? (map[key[i]] = valuefn(...key));
	};

	return (...key) => get(key, builder);
}

let _map = _cache((narg, ndim) => {
	console.log('generate', narg, ndim);
	return {};
});
let _reduce = _cache((narg, ndim, ...axis) => {});
let _accumulate = _cache((narg, ndim, ...axis) => {});
let _outer = _cache((narg, ndims) => {});

console.log(
	_map(1, 2) === _map(1, 2),
	_map(1, 3) === _map(1, 3),
	_map(1, 1, [1, 2, 3]) === _map(1, 1, [1, 2, 3])
);
