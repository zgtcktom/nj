import { asarray, broadcast_shapes, broadcast_to, empty } from './core.mjs';

// function getargs(narg) {
// 	// ['x1', 'x2', ...]
// 	return [...Array(narg).keys()].map(i => `x${i + 1}`);
// }

let range = length => [...Array(length).keys()];

// function reduce_body(
// 	axis,
// 	ndim,
// 	narg = 1,
// 	{ out = 'out', args = getargs(narg), initial = 'initial', func = 'func', accum = 'accum' } = {}
// ) {
// 	// unary always?
// 	// assume normalized

// 	let ndims = range(ndim);
// 	let nargs = range(narg);

// 	let index = ndims.map(i => `index${i}`);
// 	let shape = ndims.map(i => `shape${i}`);
// 	let offset = `offset`;

// 	let x_strides = nargs.map(i => ndims.map(j => `x${i + 1}_strides${j}`));
// 	let x_offset = nargs.map(i => `x${i + 1}_offset`);

// 	let outer_axis;
// 	let inner_axis;

// 	if (axis == null || axis.length == 0) {
// 		outer_axis = [];
// 		inner_axis = ndims;
// 	} else {
// 		outer_axis = ndims.filter(i => !axis.includes(i));
// 		inner_axis = ndims.filter(i => axis.includes(i));
// 	}
// 	let strides = range(outer_axis.length).map(i => `strides${i}`);

// 	let outer_loop = outer_axis.map(
// 		i => `for (let ${index[i]} = 0; ${index[i]} < ${shape[i]}; ${index[i]}++)`
// 	);
// 	let inner_loop = inner_axis.map(
// 		i => `for (let ${index[i]} = 0; ${index[i]} < ${shape[i]}; ${index[i]}++)`
// 	);

// 	let x_start = nargs.map(i => `x${i + 1}_start`);
// 	let x_start_decl = nargs.map(
// 		i =>
// 			`let ${x_start[i]} = ${x_offset[i]}${outer_axis.length ? ' + ' : ''}${outer_axis
// 				.map(j => `${index[j]} * ${x_strides[i][j]}`)
// 				.join(' + ')};`
// 	);

// 	let inner_loop_x = nargs.map(
// 		i =>
// 			`${args[i]}.data[${x_start[i]}${inner_axis.length ? ' + ' : ''}${inner_axis
// 				.map(j => `${index[j]} * ${x_strides[i][j]}`)
// 				.join(' + ')}]`
// 	);

// 	let outer_loop_out = `${out}.data[${offset}${outer_axis.length ? ' + ' : ''}${outer_axis
// 		.map((i, j) => `${index[i]} * ${strides[j]}`)
// 		.join(' + ')}]`;

// 	let inner_loop_body = `${inner_loop.join(' ')} {${accum} = ${func}(${accum}, ${inner_loop_x.join(
// 		', '
// 	)});}`;

// 	let outer_loop_body = `let ${accum} = ${initial};`;
// 	outer_loop_body += x_start_decl.join('') + '';
// 	outer_loop_body += inner_loop_body + '';
// 	outer_loop_body += `${outer_loop_out} = ${accum};`;
// 	outer_loop_body = outer_loop_body;

// 	let decl = '';
// 	decl += `let ${offset} = ${out}.offset;`;
// 	if (strides.length > 0) decl += `let [${strides.join(', ')}] = ${out}.strides;`;
// 	decl += `let [${shape.join(', ')}] = ${args[0]}.shape;`;
// 	decl += nargs.map(i => `let [${x_strides[i].join(', ')}] = ${args[i]}.strides;`).join('');
// 	decl += nargs.map(i => `let ${x_offset[i]} = ${args[i]}.offset;`).join('');

// 	let loop = outer_loop.length ? `${outer_loop.join(' ')} {${outer_loop_body}}` : outer_loop_body;

// 	let body = decl + loop + 'return out;';

// 	return {
// 		out,
// 		initial,
// 		args,
// 		func,
// 		index,
// 		shape,
// 		strides,
// 		offset,
// 		x_strides,
// 		x_offset,
// 		outer_axis,
// 		inner_axis,
// 		outer_loop,
// 		inner_loop,
// 		x_start,
// 		x_start_decl,
// 		inner_loop_x,
// 		outer_loop_out,
// 		inner_loop_body,
// 		outer_loop_body,
// 		loop,
// 		decl,
// 		body,
// 	};
// }

// function s() {
// 	let offset = out.offset;
// 	let [strides0, strides1] = out.strides;
// 	let [shape0, shape1, shape2, shape3] = undefined.shape;
// 	for (let index1 = 0; index1 < shape1; index1++)
// 		for (let index3 = 0; index3 < shape3; index3++) {
// 			let accum = initial;
// 			for (let index0 = 0; index0 < shape0; index0++)
// 				for (let index2 = 0; index2 < shape2; index2++) {
// 					accum = func(accum);
// 				}
// 			out.data[offset + index1 * strides0 + index3 * strides1] = accum;
// 		}
// 	return out;
// }

// console.log(reduce_body([0, 2], 4, 0));

// function func_body(narg, ndim) {
// 	// assume all arrays (including out) have the exact shape
// 	let out = 'out';
// 	let args = getargs(narg);
// 	let shape = [...Array(ndim).keys()].map(i => `shape${i}`);
// 	let offsets = Array(narg).fill('');
// 	let strides = [...Array(narg).keys()].map(i => [...Array(ndim).keys()].map(j => `strides${i + 1}_${j}`));
// 	let shapes = [...Array(narg).keys()].map(i => [...Array(ndim).keys()].map(j => `shape${i + 1}_${j}`));
// 	let outstrides = [...Array(ndim).keys()].map(i => `outstrides_${i}`);
// 	let outoffset = '';
// 	let loop = '';
// 	for (let i = 0; i < ndim; i++) {
// 		let coord = `i${i}`;
// 		let dim = shape[i];
// 		loop += `for (let ${coord} = 0; ${coord} < ${dim}; ${coord}++) `;
// 		if (i > 0) {
// 			for (let j = 0; j < narg; j++) offsets[j] += ' + ';
// 			outoffset += ' + ';
// 		}
// 		for (let j = 0; j < narg; j++) offsets[j] += `${coord} * ${strides[j][i]}`;
// 		outoffset += `${coord} * ${outstrides[i]}`;
// 	}

// 	// use args[0] instead of out, all shapes are the same
// 	let decl_shape = `let [${shape.join(', ')}] = ${args[0]}.shape;\n`;
// 	let declare = decl_shape;
// 	declare += `let [${outstrides.join(', ')}] = ${out}.strides;\n`;

// 	let shapes_declare = '';
// 	let strides_declare = '';
// 	for (let i = 0; i < narg; i++) {
// 		shapes_declare += `let [${shapes[i].join(', ')}] = ${args[i]}.shape;\n`;
// 		strides_declare += `let [${strides[i].join(', ')}] = ${args[i]}.strides;\n`;
// 	}
// 	declare += strides_declare;

// 	// declare
// 	// > `let [shape1, shape2] = out.shape;
// 	// let [outstrides_0, outstrides_1] = out.strides;
// 	// let [strides1_0, strides1_1] = x1.strides;
// 	// let [strides2_0, strides2_1] = x2.strides;`
// 	// out
// 	// > 'out'
// 	// args
// 	// > ['x1', 'x2']
// 	// loop
// 	// > 'for (let i1 = 0; i1 < shape1; i1++) for (let i2 = 0; i2 < shape2; i2++)'
// 	// outoffset
// 	// > 'i1 * outstrides_0 + i2 * outstrides_1'
// 	// offsets
// 	// > ['i1 * strides1_0 + i2 * strides1_1', 'i1 * strides2_0 + i2 * strides2_1']
// 	// shape
// 	// > ['shape1', 'shape2']
// 	// strides
// 	// > [['strides1_0', 'strides1_1'], ['strides2_0', 'strides2_1']]
// 	// outstrides
// 	// > ['outstrides_0', 'outstrides_1']

// 	return {
// 		decl_shape,
// 		declare,
// 		out,
// 		args,
// 		loop,
// 		outoffset,
// 		offsets,
// 		shape,
// 		strides,
// 		outstrides,
// 		shapes_declare,
// 		shapes,
// 		strides_declare,
// 	};
// }

// function wrapper_map(builder, self = Object.create(null)) {
// 	// self as an obj for caching the generated functions
// 	// builder = (ndim, narg) => new Function()
// 	return function (builder, narg, ndim) {
// 		return (this[narg] ?? (this[narg] = {}))[ndim] ?? (this[narg][ndim] = builder(narg, ndim));
// 	}.bind(self, builder);
// }

// const map_func = wrapper_map((narg, ndim) => {
// 	let func = 'fn';
// 	let { declare, out, args, loop, outoffset, strides, offsets } = func_body(narg, ndim);

// 	// console.log(strides, ndim);
// 	let body = declare;
// 	body += `${loop} {
// ${out}.data[${out}.offset + ${outoffset}] = ${func}(${offsets
// 		.map((offset, i) => `${args[i]}.data[${args[i]}.offset + ${offset}]`)
// 		.join(', ')});
// }\n`;
// 	body += `return ${out};`;

// 	// console.log(body);

// 	// signiture: f(func, ...args, out)

// 	// console.log(new Function(func, ...args, out, body).toString());
// 	return new Function(func, ...args, out, body);
// });

// function binary_tree(tree, ndim, path, builder, narg, axis) {
// 	for (let i = 0; i < ndim - 1; i++) {
// 		tree = tree[!!path[i]] ?? (tree[!!path[i]] = {});
// 	}
// 	return tree[!!path[ndim - 1]] ?? (tree[!!path[ndim - 1]] = builder(narg, ndim, axis));
// }

// function cached_reduce(builder, self = Object.create(null)) {
// 	// self as an obj for caching the generated functions
// 	return function (builder, narg, ndim, axis) {
// 		let path = {};
// 		if (axis != null) for (let i = 0; i < axis.length; i++) path[axis[i]] = true;
// 		return binary_tree(
// 			(this[narg] ?? (this[narg] = {}))[ndim] ?? (this[narg][ndim] = {}),
// 			ndim,
// 			path,
// 			builder,
// 			narg,
// 			axis
// 		);
// 	}.bind(self, builder);
// }

// const reduce_func = cached_reduce((narg, ndim, axis) => {
// 	let { args, out, body, func, initial } = reduce_body(axis, ndim, narg);
// 	// console.log(new Function(func, ...args, out, initial, body).toString());
// 	return new Function(func, ...args, out, initial, body);
// });

// export function wrap_map(name, func, narg = func.length) {
// 	let args = getargs(narg);
// 	let body = `return function (${args.join(', ')}, out=null) {
// 	${args.map(arg => `${arg} = this.asarray(${arg})`).join(';')};
// 	let shape;
// 	if (out == null) {
// 		shape = ${
// 			narg > 1
// 				? `this.broadcast_shapes(${args.map(arg => `${arg}.shape`).join(', ')})`
// 				: `${args[0]}.shape`
// 		};
// 		out = this.empty(shape);
// 	} else {
// 		shape = out.shape;
// 	}
// 	${args.map(arg => `${arg} = this.broadcast_to(${arg}, shape)`).join(';')};
// 	return this.map_func(${narg}, out.ndim)(func, ${args.join(', ')}, out);
// }`;

// 	return Object.defineProperty(
// 		new Function('func', body)(func).bind({
// 			map_func,
// 			asarray,
// 			empty,
// 			broadcast_shapes,
// 			broadcast_to,
// 		}),
// 		'name',
// 		{ value: name }
// 	);
// }

// export function wrap_map_binary(name, func) {
// 	return Object.defineProperty(
// 		(x1, x2, out = null) => {
// 			x1 = asarray(x1);
// 			x2 = asarray(x2);
// 			let shape;
// 			if (out == null) {
// 				shape = broadcast_shapes(x1.shape, x2.shape);
// 				out = empty(shape);
// 			} else shape = out.shape;
// 			x1 = broadcast_to(x1, shape);
// 			x2 = broadcast_to(x2, shape);
// 			return map_func(2, out.ndim)(func, x1, x2, out);
// 		},
// 		'name',
// 		{ value: name }
// 	);
// }

// export function wrap_reduce_unary(name, func, defaultinitial) {
// 	return Object.defineProperty(
// 		(x1, axis = null, out = null, initial = defaultinitial) => {
// 			x1 = asarray(x1);
// 			if (axis != null) {
// 				axis = normalize_axis(axis, x1.ndim, false);
// 				if (out == null) {
// 					let shape = [];
// 					for (let i = 0; i < x1.ndim; i++) {
// 						if (!axis.includes(i)) shape.push(x1.shape[i]);
// 					}
// 					out = empty(shape);
// 				}
// 			} else {
// 				if (out == null) {
// 					out = empty([]);
// 				}
// 			}
// 			return reduce_func(1, x1.ndim, axis)(func, x1, out, initial);
// 		},
// 		'name',
// 		{ value: name }
// 	);
// }

function _cache(builder) {
	let create = () => Object.create(null);

	let root = create();

	let get = (map, key, valuefn) => {
		// let flatkey = key;
		// // let flatkey = [].concat(...key);
		// let i = 0;
		// for (; i < flatkey.length - 1; i++) map = map[flatkey[i]] ?? (map[flatkey[i]] = create());
		// return map[flatkey[i]] ?? (map[flatkey[i]] = valuefn(...key));
		return map[key] ?? (map[key] = valuefn(...key));
	};

	return (...key) => get(root, key, builder);
}

export function normalize_axis_index(axis, ndim) {
	// assume non null
	let _axis = axis;
	axis = +axis;
	if (!Number.isInteger(axis)) throw `${_axis} cannot be cast to integer`;
	if (axis < 0) axis += ndim;
	if (axis < 0 || ndim <= axis) throw `axis ${_axis} is out of bounds for array of dimension ${ndim}`;
	return axis;
}

let cached_axis_masks = {};

export function normalize_axis_mask(axis, ndim, allow_duplicate = false) {
	// assume axis : int or array of int or null
	if (axis == null) {
		return cached_axis_masks[ndim] ?? (cached_axis_masks[ndim] = Array(ndim).fill(1));
	}
	let mask = Array(ndim).fill(0);
	if (Array.isArray(axis)) {
		for (let i = 0; i < axis.length; i++) {
			mask[normalize_axis_index(axis[i], ndim)] = 1;
		}
		if (!allow_duplicate) {
			let count = 0;
			for (let i = 0; i < ndim; i++) count += mask[i];
			if (count != axis.length) throw `repeated axis`;
		}
	} else {
		mask[normalize_axis_index(axis, ndim)] = 1;
	}
	return mask;
}

let declaration = (variables, type = 'let') => {
	if (!Array.isArray(variables)) variables = [variables];
	return `${type} ${variables.join(', ')}`;
};
let destructuringArray = (declaration = null, variables, array) => {
	if (declaration != null) {
		return `${declaration} [${variables.join(', ')}] = ${array}`;
	}
	return `[${variables.join(', ')}] = ${array}`;
};
let destructuringObject = (declaration = null, variables, object, keys = variables) => {
	let pair = [];
	for (let i = 0; i < variables.length; i++) {
		pair.push(keys[i] == variables[i] ? `${keys[i]}` : `${keys[i]}: ${variables[i]}`);
	}
	if (declaration != null) {
		// console.log(variables, keys, pair, `${declaration} {${pair.join(', ')}} = ${object}`);
		return `${declaration} {${pair.join(', ')}} = ${object}`;
	}
	return `({${pair.join(', ')}} = ${object})`;
};
let assignment = (declaration = null, variables, values) => {
	if (!Array.isArray(variables)) {
		variables = [variables];
		values = [values];
	}
	let pair = [];
	for (let i = 0; i < variables.length; i++) {
		pair.push(`${variables[i]} = ${values[i]}`);
	}
	if (declaration != null) {
		return `${declaration} ${pair.join(', ')}`;
	}
	return `${pair.join(', ')}`;
};
let forLoop = (index, length, body) => {
	return `for(let ${index} = 0; ${index} < ${length}; ${index}++) {${body}}`;
};
let body = (...statements) => {
	return `${statements.join('; ')}`;
};
let functionCall = (fn, ...args) => {
	return `${fn}(${args.join(', ')})`;
};
let bracketAccess = (object, expr) => {
	return `${object}[${expr}]`;
};
let dotAccess = (object, ident) => {
	return `${object}.${ident}`;
};
let group = expr => {
	return `(${expr})`;
};
let product = (...args) => {
	return `${args.map(group).join(' * ')}`;
};
let sum = (...args) => {
	return `${args.map(group).join(' + ')}`;
};
let functionReturn = expr => {
	return `return ${expr}`;
};
// let range = length => [...Array(length).keys()];

function variableNames(narg, ndim, out_dim = ndim) {
	let fn = 'fn';
	let out = 'out';
	let x = range(narg).map(i => `x${i + 1}`);

	let out_offset = `${out}_offset`;
	let x_offset = x.map(x => `${x}_offset`);

	let out_data = `${out}_data`;
	let x_data = x.map(x => `${x}_data`);

	let out_strides = range(out_dim).map(axis => `${out}_strides_${axis}`);
	let x_strides = x.map(x => range(ndim).map(axis => `${x}_strides_${axis}`));

	let index = range(ndim).map(axis => `i_${axis}`);
	let shape = range(ndim).map(axis => `shape_${axis}`);

	return {
		fn,
		out,
		x,
		out_offset,
		x_offset,
		out_data,
		x_data,
		out_strides,
		x_strides,
		index,
		shape,
	};
}

function declarations(obj, data, offset, strides) {
	let statements = [];

	statements.push(assignment('let', data, dotAccess(obj, 'data')));
	statements.push(assignment('let', offset, dotAccess(obj, 'offset')));
	if (strides.length > 0)
		statements.push(destructuringObject('let', strides, dotAccess(obj, 'strides'), range(strides.length)));

	return statements;
}

function _map_body(narg, ndim) {
	let { fn, out, x, out_offset, x_offset, out_data, x_data, out_strides, x_strides, index, shape } =
		variableNames(narg, ndim);

	let statements = [];

	statements.push(...declarations(out, out_data, out_offset, out_strides));

	x.forEach((x, i) => {
		statements.push(...declarations(x, x_data[i], x_offset[i], x_strides[i]));
	});

	statements.push(destructuringObject('let', shape, dotAccess(x[0], 'shape'), range(shape.length)));

	statements.push(
		range(ndim)
			.reverse()
			.reduce(
				(body, axis) => forLoop(index[axis], shape[axis], body),
				body(
					assignment(
						null,
						[
							bracketAccess(
								out_data,
								sum(out_offset, ...index.map((index, axis) => product(index, out_strides[axis])))
							),
						],
						[
							functionCall(
								fn,
								...x_data.map((x_data, i) =>
									bracketAccess(
										x_data,
										sum(x_offset[i], ...index.map((index, axis) => product(index, x_strides[i][axis])))
									)
								)
							),
						]
					)
				)
			),
		functionReturn(out)
	);

	return [fn, ...x, out, body(...statements)];
}

function _outer_body(narg, ndim) {}

function _reduce_body(narg, ndim, axis) {
	// axis as bool(0, 1) mask

	let out_ndim = ndim;
	for (let i = 0; i < ndim; i++) out_ndim -= axis[i];

	// console.log(axis);

	let { fn, out, x, out_offset, x_offset, out_data, x_data, out_strides, x_strides, index, shape } =
		variableNames(narg, ndim, out_ndim);

	let initial = 'initial';
	let accum = 'accum';
	let x_start = x.map(x => `${x}_start`);

	let statements = [];

	statements.push(...declarations(out, out_data, out_offset, out_strides));

	x.forEach((x, i) => {
		statements.push(...declarations(x, x_data[i], x_offset[i], x_strides[i]));
	});

	statements.push(destructuringObject('let', shape, dotAccess(x[0], 'shape'), range(shape.length)));

	statements.push(
		range(ndim)
			.filter(i => !axis[i])
			.reverse()
			.reduce(
				(body, axis) => forLoop(index[axis], shape[axis], body),
				body(
					assignment('let', accum, initial),
					...x_start.map((x_start, i) =>
						assignment(
							'let',
							x_start,
							sum(
								x_offset[i],
								...range(ndim)
									.filter(i => !axis[i])
									.map(axis => product(index[axis], x_strides[i][axis]))
							)
						)
					),
					range(ndim)
						.filter(i => axis[i])
						.reverse()
						.reduce(
							(body, axis) => forLoop(index[axis], shape[axis], body),
							body([
								assignment(
									null,
									accum,
									functionCall(
										fn,
										accum,
										...x_data.map((x_data, i) =>
											bracketAccess(
												x_data,
												sum(
													x_start[i],
													...range(ndim)
														.filter(i => axis[i])
														.map(axis => product(index[axis], x_strides[i][axis]))
												)
											)
										)
									)
								),
							])
						),
					assignment(
						null,
						bracketAccess(
							out_data,
							sum(
								out_offset,
								...range(ndim)
									.filter(i => !axis[i])
									.map((axis, i) => product(index[axis], out_strides[i]))
							)
						),
						accum
					)
				)
			),
		functionReturn(out)
	);

	return [fn, ...x, out, initial, body(...statements)];
}

function _accumulate_body(narg, ndim, axis) {}

// console.log(_map_body(2, 3));
// console.log(_reduce_body(2, 4, normalize_axis_mask([0, -1], 4)));

// console.log(normalize_axis_mask([0, -1], 4));

let _map = _cache((narg, ndim) => {
	// console.log('generate', narg, ndim);
	return new Function(..._map_body(narg, ndim));
});
let _outer = _cache((narg, ndims) => {
	return new Function();
});
let _reduce = _cache((narg, ndim, axis) => {
	// console.log(new Function(..._reduce_body(narg, ndim, axis)).toString());
	return new Function(..._reduce_body(narg, ndim, axis));
});
let _accumulate = _cache((narg, ndim, ...axis) => {
	return new Function();
});

export function _wrap_map(name, fn, narg = fn.length, use_args = false) {
	let func;
	if (narg == 1) {
		if (use_args) {
			func = (x1, out = null, args = null) => {
				x1 = asarray(x1);
				if (out == null) {
					out = empty(x1.shape);
				} else {
					x1 = broadcast_to(x1, out.shape);
				}
				return _map(1, out.ndim)(fn.bind(null, args), x1, out);
			};
		} else {
			func = (x1, out = null) => {
				x1 = asarray(x1);
				if (out == null) {
					out = empty(x1.shape);
				} else {
					x1 = broadcast_to(x1, out.shape);
				}
				return _map(1, out.ndim)(fn, x1, out);
			};
		}
	} else if (narg == 2) {
		func = (x1, x2, out = null) => {
			x1 = asarray(x1);
			x2 = asarray(x2);
			let shape;
			if (out == null) {
				shape = broadcast_shapes(x1.shape, x2.shape);
				out = empty(shape);
			} else shape = out.shape;
			x1 = broadcast_to(x1, shape);
			x2 = broadcast_to(x2, shape);
			return _map(2, out.ndim)(fn, x1, x2, out);
		};
	} else throw 'not support on narg > 2 yet';
	return Object.defineProperty(func, 'name', { value: name });
}

function shallow_array_equals(a, b) {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}

const EMPTY_SHAPE = [];

export function _wrap_reduce(name, fn, narg = fn.length - 1, defaultinitial) {
	let func;
	if (narg == 1)
		func = (
			x1,
			axis = null,
			out = null,
			keepdims = false,
			initial = defaultinitial,
			return_scalar = true
		) => {
			if (out != null) return_scalar = false;
			x1 = asarray(x1);
			let { ndim, shape } = x1;
			let outshape;
			if (axis == null) {
				axis = normalize_axis_mask(axis, ndim);
				outshape = EMPTY_SHAPE;
			} else {
				axis = normalize_axis_mask(axis, ndim);
				outshape = [];
				for (let i = 0; i < ndim; i++) if (!axis[i]) outshape.push(shape[i]);
			}
			if (keepdims) {
				// very hacky
				// kinda force it to keepdims=false
				// and force it back to original shape and strides (ndim is not used in the loop)

				// maybe pass out_data, out_strides, out_shape instead of out to the generated function
				// to avoid this?

				// let { strides } = x1;
				let sameshape = shape.slice();
				// let outstrides = [];
				for (let i = 0; i < ndim; i++) {
					if (axis[i]) {
						sameshape[i] = 1;
					} else {
						// outstrides.push(strides[i]);
					}
				}
				if (out == null) out = empty(sameshape);
				else if (!shallow_array_equals(sameshape, out.shape)) throw 'unmatch shape';
				// else {
				// 	sameshape = out.shape;
				// 	strides = out.strides;
				// }

				// out.shape = outshape;
				// out.strides = outstrides;

				// out = _reduce(1, ndim, axis)(fn, x1, out, initial);

				// out.shape = sameshape;
				// out.strides = strides;

				// how about reshape out as a non-copy view?
				// if only interleaved 1s exist in the shape
				// seems working
				_reduce(1, ndim, axis)(fn, x1, out.reshape(outshape), initial);
				return return_scalar && out.ndim == 0 ? out.item() : out;
			}

			if (out == null) out = empty(outshape);
			else if (!shallow_array_equals(outshape, out.shape)) throw 'unmatch shape';

			out = _reduce(1, ndim, axis)(fn, x1, out, initial);
			return return_scalar && out.ndim == 0 ? out.item() : out;
		};
	else throw 'not support on narg > 1 yet';
	return Object.defineProperty(func, 'name', { value: name });
}
