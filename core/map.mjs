import {
	tester,
	arange,
	asarray,
	NDArray,
	empty,
	broadcast_to,
	power,
	shallow_array_equal,
	prod,
	cumprod,
	broadcast_shapes,
	ravel,
	Dtype,
} from './core.mjs';

/**
 * @callback mapCallback
 * @param {any} value
 * @returns {any}
 * @ignore
 */

/**
 * @callback map2Callback
 * @param {any} value1
 * @param {any} value2
 * @returns {any}
 * @ignore
 */

/**
 * @callback reduceCallback
 * @param {any} accum
 * @param {any} value
 * @returns {any}
 * @ignore
 */

/**
 * @callback accumulateCallback
 * @param {any} accum
 * @param {any} value
 * @returns {any}
 * @ignore
 */

/**
 * @callback mapFunction
 * @param {mapCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @returns {void}
 * @ignore
 */

/**
 * @callback map2Function
 * @param {map2Callback} fn
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {NDArray} out
 * @returns {void}
 * @ignore
 */

/**
 * @callback reduceFunction
 * @param {reduceCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @param {any} initial
 * @returns {void}
 * @ignore
 */

/**
 * @callback accumulateFunction
 * @param {accumulateCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @returns {void}
 * @ignore
 */

/**
 * @callback mapWrappedFunction
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 * @ignore
 */

/**
 * @callback map2WrappedFunction
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 * @ignore
 */

/**
 * @callback reduceWrappedFunction
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 * @ignore
 */

/**
 * @callback accumulateWrappedFunction
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 * @ignore
 */

/**
 *
 * @param {NDArray} ndarray
 * @param {function(any, number): any} callback
 * @returns {NDArray}
 */
export function map(ndarray, callback) {
	return map_(callback, ndarray);
}

/**
 *
 * @param {NDArray} a
 * @param {reduceCallback} callback
 * @returns {NDArray}
 */
export function reduce(a, callback) {
	return reduce_(callback, a, axis);
}

/**
 * @param {function(...any): any} builder
 * @returns {function(...any): any}
 * @ignore
 */
function cache(builder) {
	let generated = Object.create(null);
	return (...args) => {
		return generated[args] ?? (generated[args] = builder(...args));
	};
}

export function wrapper_(name, fn, ...args) {
	fn = fn.bind(null, ...args);
	Object.defineProperty(fn, 'name', { value: name });
	return fn;
}

/**
 * @param {string} name
 * @param {mapCallback} fn
 * @param {Object} [args = null]
 * @returns {mapWrappedFunction}
 * @ignore
 */
export function wrapper_map(name, fn, args = null) {
	return Object.defineProperty(map_.bind(args, fn), 'name', { value: name });
}

/**
 * @param {string} name
 * @param {map2Callback} fn
 * @param {Object} [args = null]
 * @returns {map2WrappedFunction}
 * @ignore
 */
export function wrapper_map2(name, fn, args = null) {
	return Object.defineProperty(map2_.bind(args, fn), 'name', { value: name });
}

/**
 * @param {string} name
 * @param {reduceCallback} fn
 * @param {any} [defaultinitial = undefined]
 * @returns {reduceWrappedFunction}
 * @ignore
 */
export function wrapper_reduce(name, fn, defaultinitial = undefined) {
	return Object.defineProperty(reduce_.bind({ defaultinitial }, fn), 'name', { value: name });
}

/**
 * @param {string} name
 * @param {accumulateCallback} fn
 * @param {Object} [args = null]
 * @returns {accumulateWrappedFunction}
 * @ignore
 */
export function wrapper_accumulate(name, fn, args = null) {
	return Object.defineProperty(accumulate_.bind(args, fn), 'name', { value: name });
}

/**
 * @param {mapCallback} fn
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function map_(fn, x, out = null, dtype = this?.dtype) {
	x = asarray(x);
	if (out == null) {
		out = empty(x.shape, dtype);
	} else {
		x = broadcast_to(x, out.shape);
	}
	mapfunc(out.ndim)(fn, x, out);
	return out;
}

/**
 * @param {mapCallback} fn
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function map2_(fn, x1, x2, out = null, dtype = this?.dtype) {
	x1 = asarray(x1);
	x2 = asarray(x2);

	let shape;
	if (out == null) {
		shape = broadcast_shapes(x1.shape, x2.shape);
		out = empty(shape, dtype);
	} else {
		shape = out.shape;
	}

	x1 = broadcast_to(x1, shape);
	x2 = broadcast_to(x2, shape);

	map2func(out.ndim)(fn, x1, x2, out);
	return out;
}

/**
 * @param {reduceCallback} fn
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function reduce_(
	fn,
	x,
	axis = null,
	out = null,
	keepdims = false,
	initial = this?.defaultinitial,
	return_scalar = true,
	dtype = this?.dtype
) {
	x = asarray(x);
	let axes = normalize_axes(axis, x.ndim);
	let outshape = [];
	let keepshape = [];
	for (let i = 0; i < axes.length; i++) {
		if (!axes[i]) {
			outshape.push(x.shape[i]);
			keepshape.push(x.shape[i]);
		} else keepshape.push(1);
	}

	if (out == null) {
		out = empty(outshape, dtype);
	} else if (!shallow_array_equal(outshape, out.shape)) {
		throw new Error(`unmatch shape`);
	}

	let _out = out.reshape(keepshape);
	if (keepdims) out = _out;

	reducefunc(x.ndim, axes)(fn, x, _out, initial);

	if (return_scalar && out.ndim == 0) return out.item();

	return out;
}

/**
 * @param {accumulateCallback} fn
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 * @ignore
 */
export function accumulate_(fn, x, axis = null, out = null, dtype = this?.dtype) {
	x = asarray(x);

	if (axis == null) {
		x = ravel(x);
	}

	let axes = normalize_axes(axis, x.ndim);

	if (out == null) {
		out = empty(x.shape, dtype);
	} else if (!shallow_array_equal(x.shape, out.shape)) {
		throw new Error(`unmatch shape`);
	}

	accumulatefunc(x.ndim, axes)(fn, x, out);
	return out;
}

/**
 * @param {number} ndim
 * @returns {mapFunction}
 * @ignore
 */
function mapfunc(ndim) {
	if (ndim == 0) {
		return new Function(
			'fn',
			'x',
			'out',
			`
out.data[out.offset] = fn(x.data[x.offset]);
`
		);
	}

	let names = (pattern, sep = ', ') => {
		return [...Array(ndim).keys()].map(i => pattern.replaceAll('$', i)).join(sep);
	};

	return new Function(
		'fn',
		'x',
		'out',
		`
let { data, strides, offset, shape } = out;
let [${names('d_$')}] = shape;
let [${names('s_$')}] = strides;
let { data: x_data, strides: x_strides, offset: x_offset } = x;
let [${names('x_$')}] = x_strides;
${names('for (let i_$ = 0; i_$ < d_$; i_$++)', ' ')} {
	data[offset + ${names('i_$ * s_$', ' + ')}] = fn(x_data[x_offset + ${names('i_$ * x_$', ' + ')}]);
}
`
	);
}
mapfunc = cache(mapfunc);

/**
 * @param {number} ndim
 * @returns {map2Function}
 * @ignore
 */
function map2func(ndim) {
	if (ndim == 0) {
		return new Function(
			'fn',
			'x1',
			'x2',
			'out',
			`
out.data[out.offset] = fn(x1.data[x1.offset], x2.data[x2.offset]);
`
		);
	}

	let names = (pattern, sep = ', ') => {
		return [...Array(ndim).keys()].map(i => pattern.replaceAll('$', i)).join(sep);
	};

	return new Function(
		'fn',
		'x1',
		'x2',
		'out',
		`
let { data, strides, offset, shape } = out;
let [${names('d_$')}] = shape;
let [${names('s_$')}] = strides;
let { data: x1_data, strides: x1_strides, offset: x1_offset } = x1;
let { data: x2_data, strides: x2_strides, offset: x2_offset } = x2;
let [${names('x1_$')}] = x1_strides;
let [${names('x2_$')}] = x2_strides;
${names('for (let i_$ = 0; i_$ < d_$; i_$++)', ' ')} {
	data[offset + ${names('i_$ * s_$', ' + ')}] = fn(
		x1_data[x1_offset + ${names('i_$ * x1_$', ' + ')}],
		x2_data[x2_offset + ${names('i_$ * x2_$', ' + ')}]
	);
}
`
	);
}
map2func = cache(map2func);

/**
 * @param {number} ndim
 * @param {boolean[]} axes
 * @returns {reduceFunction}
 * @ignore
 */
function reducefunc(ndim, axes) {
	if (ndim == 0) {
		return new Function(
			'fn',
			'x',
			'out',
			'initial',
			`
out.data[out.offset] = initial != undefined ? fn(initial, x.data[x.offset]) : x.data[x.offset];
`
		);
	}

	let names = (pattern, sep = ', ', keys = [...Array(ndim).keys()]) => {
		return keys.map(i => pattern.replaceAll('$', i)).join(sep);
	};

	let outer = [...Array(ndim).keys()].filter(i => !axes[i]);
	let inner = [...Array(ndim).keys()].filter(i => axes[i]);

	return new Function(
		'fn',
		'x',
		'out',
		'initial',
		`
let { data, strides, offset } = out;
let [${names('s_$')}] = strides;
let { data: x_data, strides: x_strides, offset: x_offset, shape } = x;
let [${names('d_$')}] = shape;
let [${names('x_$')}] = x_strides;

let use_initial = initial != undefined;
${names('for (let i_$ = 0; i_$ < d_$; i_$++)', ' ', outer)} {
	let startOffset = x_offset${outer.length ? ' + ' : ''}${names('i_$ * x_$', ' + ', outer)};
	let first = !use_initial;
	let accum = initial;
	${names('for (let i_$ = 0; i_$ < d_$; i_$++)', ' ', inner)} {
		if (first) {
			first = false;
			accum = x_data[startOffset];
		} else {
			accum = fn(accum, x_data[startOffset + ${names('i_$ * x_$', ' + ', inner)}]);
		}
	}
	data[offset${outer.length ? ' + ' : ''}${names('i_$ * s_$', ' + ', outer)}] = accum;
}
`
	);
}
reducefunc = cache(reducefunc);

/**
 * @param {number} ndim
 * @param {boolean[]} axes
 * @returns {accumulateFunction}
 * @ignore
 */
function accumulatefunc(ndim, axes) {
	if (ndim == 0) {
		return new Function(
			'fn',
			'x',
			'out',
			'initial',
			`
out.data[out.offset] = initial != undefined ? fn(initial, x.data[x.offset]) : x.data[x.offset];
`
		);
	}

	let names = (pattern, sep = ', ', keys = [...Array(ndim).keys()]) => {
		return keys.map(i => pattern.replaceAll('$', i)).join(sep);
	};

	let outer = [...Array(ndim).keys()].filter(i => !axes[i]);
	let inner = [...Array(ndim).keys()].filter(i => axes[i]);

	return new Function(
		'fn',
		'x',
		'out',
		'initial',
		`
let { data, strides, offset } = out;
let [${names('s_$')}] = strides;
let { data: x_data, strides: x_strides, offset: x_offset, shape } = x;
let [${names('d_$')}] = shape;
let [${names('x_$')}] = x_strides;

${names('for (let i_$ = 0; i_$ < d_$; i_$++)', ' ', outer)} {
	let first = true;
	let accum = x_data[x_offset${outer.length ? ' + ' : ''}${names('i_$ * x_$', ' + ', outer)}];
	${names('for (let i_$ = 0; i_$ < d_$; i_$++)', ' ', inner)} {
		if (first) {
			first = false;
		} else {
			accum = fn(accum, x_data[x_offset + ${names('i_$ * x_$', ' + ')}]);
		}
		data[offset + ${names('i_$ * s_$', ' + ')}] = accum;
	}
}
`
	);
}
accumulatefunc = cache(accumulatefunc);

/**
 * @param {null|number|number[]} axis
 * @param {number} ndim
 * @param {boolean} [allow_duplicate = false]
 * @returns {boolean[]}
 * @ignore
 */
export function normalize_axes(axis, ndim, allow_duplicate = false) {
	if (axis == null) {
		return Array(ndim).fill(true);
	}

	if (typeof axis != 'object') {
		axis = [+axis];
	}

	let axes = Array(ndim).fill(false);
	for (let i of axis) {
		i = normalize_axis_index(i, ndim);
		if (!allow_duplicate && axes[i]) {
			throw new Error(`repeated axis`);
		}
		axes[i] = true;
	}

	return axes;
}

/**
 * @param {number} axis
 * @param {number} ndim
 * @returns {number}
 * @ignore
 */
export function normalize_axis_index(axis, ndim) {
	let _axis = axis;
	axis = +axis;
	if (!Number.isInteger(axis)) {
		throw new Error(`${_axis} cannot be cast to integer`);
	}
	if (axis < 0) axis += ndim;
	if (axis < 0 || ndim <= axis) {
		throw new Error(`axis ${_axis} is out of bounds for array of dimension ${ndim}`);
	}
	return axis;
}

/**
 * @type {mapFunction}
 * @ignore
 */
function _mapfunc(fn, x, out) {
	let { data, strides, offset, shape } = out;
	let [d_0, d_1] = shape;
	let [s_0, s_1] = strides;
	let { data: x_data, strides: x_strides, offset: x_offset } = x;
	let [x_0, x_1] = x_strides;
	for (let i_0 = 0; i_0 < d_0; i_0++) {
		for (let i_1 = 0; i_1 < d_1; i_1++) {
			data[offset + i_0 * s_0 + i_1 * s_1] = fn(x_data[x_offset + i_0 * x_0 + i_1 * x_1]);
		}
	}
}

/**
 * @type {map2Function}
 * @ignore
 */
function _map2func(fn, x1, x2, out) {
	let { data, strides, offset, shape } = out;
	let [d_0, d_1] = shape;
	let [s_0, s_1] = strides;
	let { data: x1_data, strides: x1_strides, offset: x1_offset } = x1;
	let { data: x2_data, strides: x2_strides, offset: x2_offset } = x2;
	let [x1_0, x1_1] = x1_strides;
	let [x2_0, x2_1] = x2_strides;
	for (let i_0 = 0; i_0 < d_0; i_0++) {
		for (let i_1 = 0; i_1 < d_1; i_1++) {
			data[offset + i_0 * s_0 + i_1 * s_1] = fn(
				x1_data[x1_offset + i_0 * x1_0 + i_1 * x1_1],
				x2_data[x2_offset + i_0 * x2_0 + i_1 * x2_1]
			);
		}
	}
}

/**
 * @type {reduceFunction}
 * @ignore
 */
function _reducefunc(fn, x, out, initial) {
	let { data, strides, offset, shape } = out;
	let [d_0, d_1, d_2, d_3] = shape;
	let [s_0, s_1, s_2, s_3] = strides;
	let { data: x_data, strides: x_strides, offset: x_offset } = x;
	let [x_0, x_1, x_2, x_3] = x_strides;

	let use_initial = initial != undefined;
	for (let i_0 = 0; i_0 < d_0; i_0++)
		for (let i_1 = 0; i_1 < d_1; i_1++) {
			let startOffset = x_offset + i_0 * x_0 + i_1 * x_1;
			let first = use_initial;
			let accum = initial;
			for (let i_2 = 0; i_2 < d_2; i_2++)
				for (let i_3 = 0; i_3 < d_3; i_3++) {
					if (first) {
						first = false;
						accum = x_data[startOffset];
					} else {
						accum = fn(accum, x_data[startOffset + i_2 * x_2 + i_3 * x_3]);
					}
				}
			data[offset + i_0 * s_0 + i_1 * s_1] = accum;
		}
}

/**
 * @type {accumulateFunction}
 * @ignore
 */
function _accumulatefunc(fn, x, out) {
	let { data, strides, offset, shape } = out;
	let [d_0, d_1, d_2, d_3] = shape;
	let [s_0, s_1, s_2, s_3] = strides;
	let { data: x_data, strides: x_strides, offset: x_offset } = x;
	let [x_0, x_1, x_2, x_3] = x_strides;

	for (let i_0 = 0; i_0 < d_0; i_0++)
		for (let i_1 = 0; i_1 < d_1; i_1++) {
			let first = true;
			let accum = x_data[x_offset + i_0 * x_0 + i_1 * x_1];
			for (let i_2 = 0; i_2 < d_2; i_2++)
				for (let i_3 = 0; i_3 < d_3; i_3++) {
					if (first) {
						first = false;
					} else {
						accum = fn(accum, x_data[x_offset + i_0 * x_0 + i_1 * x_1 + i_2 * x_2 + i_3 * x_3]);
					}
					data[offset + i_0 * s_0 + i_1 * s_1 + i_2 * s_2 + i_3 * s_3] = accum;
				}
		}
}

tester.onload(() => {
	let x = empty(100).reshape(10, 10);
	// console.log(map_(x => x ** 2, arange(10), x));
});

tester.add(
	map,
	() => map(arange(10).reshape(-1, 2), element => element ** 2),
	() => power(arange(10).reshape(-1, 2), 2)
);

tester.add(
	reduce,
	() => reduce_((x1, x2) => x1 * x2, arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3], null, false),
	() => prod(arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3])
);

tester.add(
	reduce,
	() => accumulate_((x1, x2) => x1 * x2, arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3], null),
	() => cumprod(arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3])
);
