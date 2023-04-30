// import {
// 	NDArray,
// 	asarray,
// 	broadcast_shapes,
// 	broadcast_to,
// 	empty,
// 	ravel,
// 	shallow_array_equal,
// 	normalize_axis_index,
// } from './core.mjs';

// let range = length => [...Array(length).keys()];

// function _cache(builder) {
// 	let create = () => Object.create(null);

// 	let root = create();

// 	/**
// 	 *
// 	 * @param {object} map
// 	 * @param {number[]} key
// 	 * @param {function} valuefn
// 	 * @returns {NDArray}
// 	 */
// 	let get = (map, key, valuefn) => {
// 		return map[key] ?? (map[key] = valuefn(...key));
// 	};

// 	return (...key) => get(root, key, builder);
// }

// let cached_axis_masks = {};

// /**
//  * @param {number|number[]|null} axis
//  * @param {number} ndim
//  * @param {boolean} [allow_duplicate]
//  * @returns {object}
//  * @ignore
//  */
// export function normalize_axis_mask(axis, ndim, allow_duplicate = false) {
// 	// assume axis : int or array of int or null
// 	if (axis == null) {
// 		return cached_axis_masks[ndim] ?? (cached_axis_masks[ndim] = Array(ndim).fill(1));
// 	}
// 	let mask = Array(ndim).fill(0);
// 	if (Array.isArray(axis)) {
// 		for (let i = 0; i < axis.length; i++) {
// 			mask[normalize_axis_index(axis[i], ndim)] = 1;
// 		}
// 		if (!allow_duplicate) {
// 			let count = 0;
// 			for (let i = 0; i < ndim; i++) count += mask[i];
// 			if (count != axis.length) throw `repeated axis`;
// 		}
// 	} else {
// 		mask[normalize_axis_index(axis, ndim)] = 1;
// 	}
// 	return mask;
// }

// let declaration = (variables, type = 'let') => {
// 	if (!Array.isArray(variables)) variables = [variables];
// 	return `${type} ${variables.join(', ')}`;
// };
// let destructuringArray = (declaration = null, variables, array) => {
// 	if (declaration != null) {
// 		return `${declaration} [${variables.join(', ')}] = ${array}`;
// 	}
// 	return `[${variables.join(', ')}] = ${array}`;
// };
// let destructuringObject = (declaration = null, variables, object, keys = variables) => {
// 	let pair = [];
// 	for (let i = 0; i < variables.length; i++) {
// 		pair.push(keys[i] == variables[i] ? `${keys[i]}` : `${keys[i]}: ${variables[i]}`);
// 	}
// 	if (declaration != null) {
// 		// console.log(variables, keys, pair, `${declaration} {${pair.join(', ')}} = ${object}`);
// 		return `${declaration} {${pair.join(', ')}} = ${object}`;
// 	}
// 	return `({${pair.join(', ')}} = ${object})`;
// };
// let assignment = (declaration = null, variables, values) => {
// 	if (!Array.isArray(variables)) {
// 		variables = [variables];
// 		values = [values];
// 	}
// 	let pair = [];
// 	for (let i = 0; i < variables.length; i++) {
// 		pair.push(`${variables[i]} = ${values[i]}`);
// 	}
// 	if (declaration != null) {
// 		return `${declaration} ${pair.join(', ')}`;
// 	}
// 	return `${pair.join(', ')}`;
// };
// let forLoop = (index, length, body) => {
// 	return `for(let ${index} = 0; ${index} < ${length}; ${index}++) {${body}}`;
// };
// let body = (...statements) => {
// 	return `${statements.join('; ')}`;
// };
// let functionCall = (fn, ...args) => {
// 	return `${fn}(${args.join(', ')})`;
// };
// let bracketAccess = (object, expr) => {
// 	return `${object}[${expr}]`;
// };
// let dotAccess = (object, ident) => {
// 	return `${object}.${ident}`;
// };
// let group = expr => {
// 	return `(${expr})`;
// };
// let product = (...args) => {
// 	return `${args.map(group).join(' * ')}`;
// };
// let sum = (...args) => {
// 	return `${args.map(group).join(' + ')}`;
// };
// let functionReturn = expr => {
// 	return `return ${expr}`;
// };
// // let range = length => [...Array(length).keys()];

// function variableNames(narg, ndim, out_dim = ndim) {
// 	let fn = 'fn';
// 	let out = 'out';
// 	let x = range(narg).map(i => `x${i + 1}`);

// 	let out_offset = `${out}_offset`;
// 	let x_offset = x.map(x => `${x}_offset`);

// 	let out_data = `${out}_data`;
// 	let x_data = x.map(x => `${x}_data`);

// 	let out_strides = range(out_dim).map(axis => `${out}_strides_${axis}`);
// 	let x_strides = x.map(x => range(ndim).map(axis => `${x}_strides_${axis}`));

// 	let index = range(ndim).map(axis => `i_${axis}`);
// 	let shape = range(ndim).map(axis => `shape_${axis}`);

// 	return {
// 		fn,
// 		out,
// 		x,
// 		out_offset,
// 		x_offset,
// 		out_data,
// 		x_data,
// 		out_strides,
// 		x_strides,
// 		index,
// 		shape,
// 	};
// }

// function declarations(obj, data, offset, strides) {
// 	let statements = [];

// 	statements.push(assignment('let', data, dotAccess(obj, 'data')));
// 	statements.push(assignment('let', offset, dotAccess(obj, 'offset')));
// 	if (strides.length > 0)
// 		statements.push(
// 			destructuringObject('let', strides, dotAccess(obj, 'strides'), range(strides.length))
// 		);

// 	return statements;
// }

// function _map_body(narg, ndim) {
// 	let { fn, out, x, out_offset, x_offset, out_data, x_data, out_strides, x_strides, index, shape } =
// 		variableNames(narg, ndim);

// 	let statements = [];

// 	statements.push(...declarations(out, out_data, out_offset, out_strides));

// 	x.forEach((x, i) => {
// 		statements.push(...declarations(x, x_data[i], x_offset[i], x_strides[i]));
// 	});

// 	statements.push(destructuringObject('let', shape, dotAccess(x[0], 'shape'), range(shape.length)));

// 	statements.push(
// 		range(ndim)
// 			.reverse()
// 			.reduce(
// 				(body, axis) => forLoop(index[axis], shape[axis], body),
// 				body(
// 					assignment(
// 						null,
// 						[
// 							bracketAccess(
// 								out_data,
// 								sum(
// 									out_offset,
// 									...index.map((index, axis) => product(index, out_strides[axis]))
// 								)
// 							),
// 						],
// 						[
// 							functionCall(
// 								fn,
// 								...x_data.map((x_data, i) =>
// 									bracketAccess(
// 										x_data,
// 										sum(
// 											x_offset[i],
// 											...index.map((index, axis) => product(index, x_strides[i][axis]))
// 										)
// 									)
// 								)
// 							),
// 						]
// 					)
// 				)
// 			),
// 		functionReturn(out)
// 	);

// 	return [fn, ...x, out, body(...statements)];
// }

// function _outer_body(narg, ndim) {}

// function _reduce_body(narg, ndim, axis) {
// 	// axis as bool(0, 1) mask

// 	let out_ndim = ndim;
// 	for (let i = 0; i < ndim; i++) out_ndim -= axis[i];

// 	let { fn, out, x, out_offset, x_offset, out_data, x_data, out_strides, x_strides, index, shape } =
// 		variableNames(narg, ndim, out_ndim);

// 	let initial = 'initial';
// 	let accum = 'accum';
// 	let x_start = x.map(x => `${x}_start`);

// 	let statements = [];

// 	statements.push(...declarations(out, out_data, out_offset, out_strides));

// 	x.forEach((x, i) => {
// 		statements.push(...declarations(x, x_data[i], x_offset[i], x_strides[i]));
// 	});

// 	statements.push(destructuringObject('let', shape, dotAccess(x[0], 'shape'), range(shape.length)));

// 	statements.push(
// 		range(ndim)
// 			.filter(i => !axis[i])
// 			.reverse()
// 			.reduce(
// 				(body, axis) => forLoop(index[axis], shape[axis], body),
// 				body(
// 					assignment('let', accum, initial),
// 					...x_start.map((x_start, i) =>
// 						assignment(
// 							'let',
// 							x_start,
// 							sum(
// 								x_offset[i],
// 								...range(ndim)
// 									.filter(i => !axis[i])
// 									.map(axis => product(index[axis], x_strides[i][axis]))
// 							)
// 						)
// 					),
// 					range(ndim)
// 						.filter(i => axis[i])
// 						.reverse()
// 						.reduce(
// 							(body, axis) => forLoop(index[axis], shape[axis], body),
// 							body([
// 								assignment(
// 									null,
// 									accum,
// 									functionCall(
// 										fn,
// 										accum,
// 										...x_data.map((x_data, i) =>
// 											bracketAccess(
// 												x_data,
// 												sum(
// 													x_start[i],
// 													...range(ndim)
// 														.filter(i => axis[i])
// 														.map(axis => product(index[axis], x_strides[i][axis]))
// 												)
// 											)
// 										)
// 									)
// 								),
// 							])
// 						),
// 					assignment(
// 						null,
// 						bracketAccess(
// 							out_data,
// 							sum(
// 								out_offset,
// 								...range(ndim)
// 									.filter(i => !axis[i])
// 									.map((axis, i) => product(index[axis], out_strides[i]))
// 							)
// 						),
// 						accum
// 					)
// 				)
// 			),
// 		functionReturn(out)
// 	);

// 	return [fn, ...x, out, initial, body(...statements)];
// }

// function _accumulate_body(narg, ndim, axis) {
// 	let out_ndim = ndim;

// 	let { fn, out, x, out_offset, x_offset, out_data, x_data, out_strides, x_strides, index, shape } =
// 		variableNames(narg, ndim, out_ndim);

// 	let initial = 'initial';
// 	let accum = 'accum';
// 	let x_start = x.map(x => `${x}_start`);
// 	let offset_start = `offset_start`;

// 	let statements = [];

// 	statements.push(...declarations(out, out_data, out_offset, out_strides));

// 	x.forEach((x, i) => {
// 		statements.push(...declarations(x, x_data[i], x_offset[i], x_strides[i]));
// 	});

// 	statements.push(destructuringObject('let', shape, dotAccess(x[0], 'shape'), range(shape.length)));

// 	statements.push(
// 		range(ndim)
// 			.filter(i => !axis[i])
// 			.reverse()
// 			.reduce(
// 				(body, axis) => forLoop(index[axis], shape[axis], body),
// 				body(
// 					assignment('let', accum, initial),
// 					...x_start.map((x_start, i) =>
// 						assignment(
// 							'let',
// 							x_start,
// 							sum(
// 								x_offset[i],
// 								...range(ndim)
// 									.filter(i => !axis[i])
// 									.map(axis => product(index[axis], x_strides[i][axis]))
// 							)
// 						)
// 					),
// 					assignment(
// 						'let',
// 						offset_start,
// 						sum(
// 							out_offset,
// 							...range(ndim)
// 								.filter(i => !axis[i])
// 								.map(axis => product(index[axis], out_strides[axis]))
// 						)
// 					),
// 					range(ndim)
// 						.filter(i => axis[i])
// 						.reverse()
// 						.reduce(
// 							(body, axis) => forLoop(index[axis], shape[axis], body),
// 							body([
// 								assignment(
// 									null,
// 									accum,
// 									functionCall(
// 										fn,
// 										accum,
// 										...x_data.map((x_data, i) =>
// 											bracketAccess(
// 												x_data,
// 												sum(
// 													x_start[i],
// 													...range(ndim)
// 														.filter(i => axis[i])
// 														.map(axis => product(index[axis], x_strides[i][axis]))
// 												)
// 											)
// 										)
// 									)
// 								),
// 								assignment(
// 									null,
// 									bracketAccess(
// 										out_data,
// 										sum(
// 											offset_start,
// 											...range(ndim)
// 												.filter(i => axis[i])
// 												.map((axis, i) => product(index[axis], out_strides[axis]))
// 										)
// 									),
// 									accum
// 								),
// 							])
// 						)
// 				)
// 			),
// 		functionReturn(out)
// 	);

// 	return [fn, ...x, out, initial, body(...statements)];
// }

// let _map = _cache((narg, ndim) => {
// 	return new Function(..._map_body(narg, ndim));
// });

// let _outer = _cache((narg, ndims) => {
// 	return new Function();
// });

// let _reduce = _cache((narg, ndim, axis) => {
// 	return new Function(..._reduce_body(narg, ndim, axis));
// });

// let _accumulate = _cache((narg, ndim, axis) => {
// 	return new Function(..._accumulate_body(narg, ndim, axis));
// });

// export function _wrap_map(name, fn, narg = fn.length, use_args = false) {
// 	let func;
// 	if (narg == 1) {
// 		if (use_args) {
// 			func = (x1, out = null, args = null) => {
// 				x1 = asarray(x1);
// 				if (out == null) {
// 					out = empty(x1.shape);
// 				} else {
// 					x1 = broadcast_to(x1, out.shape);
// 				}
// 				return _map(1, out.ndim)(fn.bind(null, args), x1, out);
// 			};
// 		} else {
// 			func = (x1, out = null) => {
// 				x1 = asarray(x1);
// 				if (out == null) {
// 					out = empty(x1.shape);
// 				} else {
// 					x1 = broadcast_to(x1, out.shape);
// 				}
// 				return _map(1, out.ndim)(fn, x1, out);
// 			};
// 		}
// 	} else if (narg == 2) {
// 		func = (x1, x2, out = null) => {
// 			x1 = asarray(x1);
// 			x2 = asarray(x2);
// 			let shape;
// 			if (out == null) {
// 				shape = broadcast_shapes(x1.shape, x2.shape);
// 				out = empty(shape);
// 			} else shape = out.shape;
// 			x1 = broadcast_to(x1, shape);
// 			x2 = broadcast_to(x2, shape);
// 			return _map(2, out.ndim)(fn, x1, x2, out);
// 		};
// 	} else throw 'not support on narg > 2 yet';
// 	return Object.defineProperty(func, 'name', { value: name });
// }

// export function _wrap_map_unary(name, fn, use_args = false) {
// 	if (use_args) {
// 		/**
// 		 *
// 		 * @param {NDArray} x1
// 		 * @param {NDArray} out
// 		 * @param {{}} args
// 		 * @returns {NDArray}
// 		 */
// 		function func(x1, out = null, args = null) {
// 			x1 = asarray(x1);
// 			if (out == null) {
// 				out = empty(x1.shape);
// 			} else {
// 				x1 = broadcast_to(x1, out.shape);
// 			}
// 			return _map(1, out.ndim)(fn.bind(null, args), x1, out);
// 		}
// 		return Object.defineProperty(func, 'name', { value: name });
// 	}
// 	/**
// 	 *
// 	 * @param {NDArray} x1
// 	 * @param {NDArray} out
// 	 * @returns {NDArray}
// 	 */
// 	function func(x1, out = null) {
// 		x1 = asarray(x1);
// 		if (out == null) {
// 			out = empty(x1.shape);
// 		} else {
// 			x1 = broadcast_to(x1, out.shape);
// 		}
// 		return _map(1, out.ndim)(fn, x1, out);
// 	}
// 	return Object.defineProperty(func, 'name', { value: name });
// }

// /**
//  * @param {string} name
//  * @param {function(any, any): any} fn
//  * @ignore
//  */
// export function _wrap_map_binary(name, fn) {
// 	/**
// 	 * @param {NDArray} x1
// 	 * @param {NDArray} x2
// 	 * @param {NDArray} [out]
// 	 * @returns {NDArray}
// 	 */
// 	function func(x1, x2, out = null) {
// 		x1 = asarray(x1);
// 		x2 = asarray(x2);
// 		let shape;
// 		if (out == null) {
// 			shape = broadcast_shapes(x1.shape, x2.shape);
// 			out = empty(shape);
// 		} else shape = out.shape;
// 		x1 = broadcast_to(x1, shape);
// 		x2 = broadcast_to(x2, shape);
// 		return _map(2, out.ndim)(fn, x1, x2, out);
// 	}

// 	return Object.defineProperty(func, 'name', { value: name });
// }

// export function _wrap_accum_unary(name, fn, defaultinitial) {
// 	/**
// 	 *
// 	 * @param {ArrayLike} x1
// 	 * @param {number} [axis]
// 	 * @param {NDArray} [out]
// 	 * @param {any} [initial]
// 	 * @returns {NDArray}
// 	 */
// 	function func(x1, axis = null, out = null, initial = defaultinitial) {
// 		x1 = asarray(x1);
// 		if (axis == null) {
// 			x1 = ravel(x1);
// 		}
// 		let { ndim, shape } = x1;
// 		axis = normalize_axis_mask(axis, ndim);
// 		if (out == null) out = empty(shape);
// 		else if (!shallow_array_equal(shape, out.shape)) throw 'unmatch shape';

// 		_accumulate(1, ndim, axis)(fn, x1, out, initial);
// 		return out;
// 	}
// 	return Object.defineProperty(func, 'name', { value: name });
// }

// const EMPTY_SHAPE = [];

// export function _wrap_reduce(name, fn, narg = fn.length - 1, defaultinitial) {
// 	if (narg != 1) throw 'not support on narg > 1 yet';
// 	/**
// 	 *
// 	 * @param {NDArray} x1
// 	 * @param {number} axis
// 	 * @param {NDArray} out
// 	 * @param {boolean} keepdims
// 	 * @param {any} initial
// 	 * @param {boolean} return_scalar
// 	 * @returns {NDArray}
// 	 */
// 	function func(
// 		x1,
// 		axis = null,
// 		out = null,
// 		keepdims = false,
// 		initial = defaultinitial,
// 		return_scalar = true
// 	) {
// 		if (out != null) return_scalar = false;
// 		x1 = asarray(x1);
// 		let { ndim, shape } = x1;
// 		let outshape;
// 		if (axis == null) {
// 			axis = normalize_axis_mask(axis, ndim);
// 			outshape = EMPTY_SHAPE;
// 		} else {
// 			axis = normalize_axis_mask(axis, ndim);
// 			outshape = [];
// 			for (let i = 0; i < ndim; i++) if (!axis[i]) outshape.push(shape[i]);
// 		}
// 		if (keepdims) {
// 			// very hacky
// 			// kinda force it to keepdims=false
// 			// and force it back to original shape and strides (ndim is not used in the loop)

// 			// maybe pass out_data, out_strides, out_shape instead of out to the generated function
// 			// to avoid this?

// 			// let { strides } = x1;
// 			let sameshape = shape.slice();
// 			// let outstrides = [];
// 			for (let i = 0; i < ndim; i++) {
// 				if (axis[i]) {
// 					sameshape[i] = 1;
// 				} else {
// 					// outstrides.push(strides[i]);
// 				}
// 			}
// 			if (out == null) out = empty(sameshape);
// 			else if (!shallow_array_equal(sameshape, out.shape)) throw 'unmatch shape';
// 			// else {
// 			// 	sameshape = out.shape;
// 			// 	strides = out.strides;
// 			// }

// 			// out.shape = outshape;
// 			// out.strides = outstrides;

// 			// out = _reduce(1, ndim, axis)(fn, x1, out, initial);

// 			// out.shape = sameshape;
// 			// out.strides = strides;

// 			// how about reshape out as a non-copy view?
// 			// if only interleaved 1s exist in the shape
// 			// seems working
// 			_reduce(1, ndim, axis)(fn, x1, out.reshape(outshape), initial);
// 			return return_scalar && out.ndim == 0 ? out.item() : out;
// 		}

// 		if (out == null) out = empty(outshape);
// 		else if (!shallow_array_equal(outshape, out.shape)) throw 'unmatch shape';

// 		out = _reduce(1, ndim, axis)(fn, x1, out, initial);
// 		return return_scalar && out.ndim == 0 ? out.item() : out;
// 	}
// 	return Object.defineProperty(func, 'name', { value: name });
// }
