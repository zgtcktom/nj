/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 460:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 220:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(584);


/***/ }),

/***/ 584:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Broadcast: () => (/* reexport */ Broadcast),
  Dtype: () => (/* reexport */ Dtype),
  Flatiter: () => (/* reexport */ Flatiter),
  Generator: () => (/* reexport */ Generator),
  NDArray: () => (/* reexport */ NDArray),
  NINF: () => (/* reexport */ NINF),
  NdenumerateIterator: () => (/* reexport */ NdenumerateIterator),
  NdindexIterator: () => (/* reexport */ NdindexIterator),
  Nditer: () => (/* reexport */ Nditer),
  NdoffsetIterator: () => (/* reexport */ NdoffsetIterator),
  Product: () => (/* reexport */ Product),
  Slice: () => (/* reexport */ Slice),
  _ndim: () => (/* reexport */ _ndim),
  _shape: () => (/* reexport */ _shape),
  abs: () => (/* reexport */ abs),
  absolute: () => (/* reexport */ absolute),
  accumulate_: () => (/* reexport */ accumulate_),
  add: () => (/* reexport */ add),
  all: () => (/* reexport */ logic_all),
  allclose: () => (/* reexport */ allclose),
  amax: () => (/* reexport */ amax),
  amin: () => (/* reexport */ amin),
  and: () => (/* reexport */ and),
  any: () => (/* reexport */ any),
  arange: () => (/* reexport */ arange),
  arccos: () => (/* reexport */ arccos),
  arccosh: () => (/* reexport */ arccosh),
  arcsin: () => (/* reexport */ arcsin),
  arcsinh: () => (/* reexport */ arcsinh),
  arctan: () => (/* reexport */ arctan),
  arctan2: () => (/* reexport */ arctan2),
  arctanh: () => (/* reexport */ arctanh),
  argmax: () => (/* reexport */ argmax),
  argmin: () => (/* reexport */ argmin),
  argsort: () => (/* reexport */ argsort),
  argwhere: () => (/* reexport */ argwhere),
  around: () => (/* reexport */ around),
  array: () => (/* reexport */ array),
  array2string: () => (/* reexport */ array2string),
  array_equal: () => (/* reexport */ array_equal),
  array_equiv: () => (/* reexport */ array_equiv),
  array_repr: () => (/* reexport */ array_repr),
  array_split: () => (/* reexport */ array_split),
  array_str: () => (/* reexport */ array_str),
  asarray: () => (/* reexport */ asarray),
  ascontiguousarray: () => (/* reexport */ ascontiguousarray),
  assert: () => (/* reexport */ assert),
  atleast_1d: () => (/* reexport */ atleast_1d),
  atleast_2d: () => (/* reexport */ atleast_2d),
  atleast_3d: () => (/* reexport */ atleast_3d),
  average: () => (/* reexport */ average),
  bincount: () => (/* reexport */ bincount),
  bitwise_and: () => (/* reexport */ bitwise_and),
  bitwise_not: () => (/* reexport */ bitwise_not),
  bitwise_or: () => (/* reexport */ bitwise_or),
  bitwise_xor: () => (/* reexport */ bitwise_xor),
  broadcast: () => (/* reexport */ broadcast),
  broadcast_arrays: () => (/* reexport */ broadcast_arrays),
  broadcast_shapes: () => (/* reexport */ broadcast_shapes),
  broadcast_to: () => (/* reexport */ broadcast_to),
  cbrt: () => (/* reexport */ cbrt),
  ceil: () => (/* reexport */ ceil),
  choice: () => (/* reexport */ choice),
  clip: () => (/* reexport */ clip_clip),
  column_stack: () => (/* reexport */ column_stack),
  compile: () => (/* reexport */ compile),
  compress: () => (/* reexport */ compress),
  concatenate: () => (/* reexport */ concatenate),
  contiguous: () => (/* reexport */ contiguous),
  convolve: () => (/* reexport */ convolve),
  copy: () => (/* reexport */ copy),
  copysign: () => (/* reexport */ copysign),
  copyto: () => (/* reexport */ copyto),
  cos: () => (/* reexport */ cos),
  cosh: () => (/* reexport */ cosh),
  count_nonzero: () => (/* reexport */ count_nonzero),
  cross: () => (/* reexport */ cross),
  cumprod: () => (/* reexport */ cumprod),
  cumsum: () => (/* reexport */ cumsum),
  deg2rad: () => (/* reexport */ deg2rad),
  degrees: () => (/* reexport */ degrees),
  diag: () => (/* reexport */ diag),
  diagonal: () => (/* reexport */ diagonal),
  diff: () => (/* reexport */ diff),
  divide: () => (/* reexport */ divide),
  divmod: () => (/* reexport */ divmod),
  dot: () => (/* reexport */ dot),
  dsplit: () => (/* reexport */ dsplit),
  dstack: () => (/* reexport */ dstack),
  dtype: () => (/* reexport */ dtype),
  dtype_: () => (/* reexport */ dtype_),
  e: () => (/* reexport */ e),
  ediff1d: () => (/* reexport */ ediff1d),
  empty: () => (/* reexport */ empty),
  empty_like: () => (/* reexport */ empty_like),
  eq: () => (/* reexport */ eq),
  equal: () => (/* reexport */ equal),
  exp: () => (/* reexport */ exp),
  exp2: () => (/* reexport */ exp2),
  expand_dims: () => (/* reexport */ expand_dims),
  expm1: () => (/* reexport */ expm1),
  extract: () => (/* reexport */ extract),
  eye: () => (/* reexport */ eye),
  fix: () => (/* reexport */ fix),
  flatnonzero: () => (/* reexport */ flatnonzero),
  flip: () => (/* reexport */ flip),
  fliplr: () => (/* reexport */ fliplr),
  flipud: () => (/* reexport */ flipud),
  float_power: () => (/* reexport */ float_power),
  floor: () => (/* reexport */ floor),
  floor_divide: () => (/* reexport */ floor_divide),
  fmod: () => (/* reexport */ fmod),
  fromfunction: () => (/* reexport */ fromfunction),
  fromiter: () => (/* reexport */ fromiter),
  full: () => (/* reexport */ full),
  full_like: () => (/* reexport */ full_like),
  gcd: () => (/* reexport */ gcd),
  get: () => (/* reexport */ get),
  get_size: () => (/* reexport */ get_size),
  get_strides: () => (/* reexport */ get_strides),
  gradient: () => (/* reexport */ gradient),
  greater: () => (/* reexport */ greater),
  greater_equal: () => (/* reexport */ greater_equal),
  gt: () => (/* reexport */ gt),
  gte: () => (/* reexport */ gte),
  guessType: () => (/* reexport */ guessType),
  hsplit: () => (/* reexport */ hsplit),
  hstack: () => (/* reexport */ hstack),
  hypot: () => (/* reexport */ hypot),
  identity: () => (/* reexport */ identity),
  in1d: () => (/* reexport */ in1d),
  index_exp: () => (/* reexport */ index_exp),
  indices: () => (/* reexport */ indices),
  inf: () => (/* reexport */ inf),
  interp: () => (/* reexport */ interp),
  invert: () => (/* reexport */ invert),
  isclose: () => (/* reexport */ isclose),
  isfinite: () => (/* reexport */ isfinite),
  isinf: () => (/* reexport */ isinf),
  isnan: () => (/* reexport */ isnan),
  isneginf: () => (/* reexport */ isneginf),
  isposinf: () => (/* reexport */ isposinf),
  isscalar: () => (/* reexport */ isscalar),
  ix_: () => (/* reexport */ ix_),
  lcm: () => (/* reexport */ lcm),
  ldexp: () => (/* reexport */ ldexp),
  left_shift: () => (/* reexport */ left_shift),
  less: () => (/* reexport */ less),
  less_equal: () => (/* reexport */ less_equal),
  linspace: () => (/* reexport */ linspace),
  log: () => (/* reexport */ log),
  log10: () => (/* reexport */ log10),
  log1p: () => (/* reexport */ log1p),
  log2: () => (/* reexport */ log2),
  logaddexp: () => (/* reexport */ logaddexp),
  logaddexp2: () => (/* reexport */ logaddexp2),
  logical_and: () => (/* reexport */ logical_and),
  logical_not: () => (/* reexport */ logical_not),
  logical_or: () => (/* reexport */ logical_or),
  logical_xor: () => (/* reexport */ logical_xor),
  lt: () => (/* reexport */ lt),
  lte: () => (/* reexport */ lte),
  lu: () => (/* reexport */ lu),
  lu_factor: () => (/* reexport */ lu_factor),
  lu_factor_: () => (/* reexport */ lu_factor_),
  lu_solve: () => (/* reexport */ lu_solve),
  map: () => (/* reexport */ map),
  map2_: () => (/* reexport */ map2_),
  map_: () => (/* reexport */ map_),
  matmul: () => (/* reexport */ matmul),
  maximum: () => (/* reexport */ maximum),
  mean: () => (/* reexport */ mean),
  minimum: () => (/* reexport */ minimum),
  mod: () => (/* reexport */ mod),
  modf: () => (/* reexport */ modf),
  moveaxis: () => (/* reexport */ moveaxis),
  multiply: () => (/* reexport */ multiply),
  nan: () => (/* reexport */ nan),
  nan_to_num: () => (/* reexport */ nan_to_num),
  nancumprod: () => (/* reexport */ nancumprod),
  nancumsum: () => (/* reexport */ nancumsum),
  nanprod: () => (/* reexport */ nanprod),
  nansum: () => (/* reexport */ nansum),
  ndenumerate: () => (/* reexport */ ndenumerate),
  ndim: () => (/* reexport */ ndim),
  ndindex: () => (/* reexport */ ndindex),
  nditer: () => (/* reexport */ nditer),
  ndoffset: () => (/* reexport */ ndoffset),
  negative: () => (/* reexport */ negative),
  neq: () => (/* reexport */ neq),
  nonzero: () => (/* reexport */ nonzero),
  normalize_axes: () => (/* reexport */ map_normalize_axes),
  normalize_axis: () => (/* reexport */ normalize_axis),
  normalize_axis_index: () => (/* reexport */ normalize_axis_index),
  normalize_axis_tuple: () => (/* reexport */ normalize_axis_tuple),
  not: () => (/* reexport */ not),
  not_equal: () => (/* reexport */ not_equal),
  ogrid: () => (/* reexport */ ogrid),
  ones: () => (/* reexport */ ones),
  ones_like: () => (/* reexport */ ones_like),
  or: () => (/* reexport */ or),
  packbits: () => (/* reexport */ packbits),
  pi: () => (/* reexport */ pi),
  pick: () => (/* reexport */ pick),
  positive: () => (/* reexport */ positive),
  power: () => (/* reexport */ power),
  prod: () => (/* reexport */ prod),
  ptp: () => (/* reexport */ ptp),
  put: () => (/* reexport */ put),
  rad2deg: () => (/* reexport */ rad2deg),
  radians: () => (/* reexport */ radians),
  rand: () => (/* reexport */ rand),
  random: () => (/* reexport */ random),
  random_sample: () => (/* reexport */ random_sample),
  ranf: () => (/* reexport */ ranf),
  ravel: () => (/* reexport */ ravel),
  ravel_multi_index: () => (/* reexport */ ravel_multi_index),
  reciprocal: () => (/* reexport */ reciprocal),
  reduce: () => (/* reexport */ reduce),
  reduce_: () => (/* reexport */ reduce_),
  remainder: () => (/* reexport */ remainder),
  repeat: () => (/* reexport */ repeat),
  reshape: () => (/* reexport */ reshape),
  resize: () => (/* reexport */ resize),
  right_shift: () => (/* reexport */ right_shift),
  rint: () => (/* reexport */ rint),
  roll: () => (/* reexport */ roll),
  row_stack: () => (/* reexport */ row_stack),
  s_: () => (/* reexport */ s_),
  sample: () => (/* reexport */ sample),
  scatter: () => (/* reexport */ scatter),
  searchsorted: () => (/* reexport */ searchsorted),
  set: () => (/* reexport */ set),
  shallow_array_equal: () => (/* reexport */ shallow_array_equal),
  shape: () => (/* reexport */ shape),
  shape_: () => (/* reexport */ shape_),
  sign: () => (/* reexport */ sign),
  signbit: () => (/* reexport */ signbit),
  sin: () => (/* reexport */ sin),
  sinh: () => (/* reexport */ sinh),
  slice: () => (/* reexport */ slice),
  solve: () => (/* reexport */ solve),
  sort: () => (/* reexport */ sort),
  split: () => (/* reexport */ split),
  sqrt: () => (/* reexport */ sqrt),
  square: () => (/* reexport */ square),
  squeeze: () => (/* reexport */ squeeze),
  stack: () => (/* reexport */ stack),
  std: () => (/* reexport */ std),
  subtract: () => (/* reexport */ subtract),
  sum: () => (/* reexport */ sum),
  swapaxes: () => (/* reexport */ swapaxes),
  take: () => (/* reexport */ take),
  tan: () => (/* reexport */ tan),
  tanh: () => (/* reexport */ tanh),
  tester: () => (/* reexport */ tester),
  tile: () => (/* reexport */ tile),
  timeit: () => (/* reexport */ timeit),
  timeit2: () => (/* reexport */ timeit2),
  toArray: () => (/* reexport */ toArray),
  transpose: () => (/* reexport */ transpose),
  trapz: () => (/* reexport */ trapz),
  true_divide: () => (/* reexport */ true_divide),
  trunc: () => (/* reexport */ trunc),
  tupleType: () => (/* reexport */ tupleType),
  tuple_: () => (/* reexport */ tuple_),
  unique: () => (/* reexport */ unique),
  unpackbits: () => (/* reexport */ unpackbits),
  unravel_index: () => (/* reexport */ unravel_index),
  unwrap: () => (/* reexport */ unwrap),
  variance: () => (/* reexport */ variance),
  vsplit: () => (/* reexport */ vsplit),
  vstack: () => (/* reexport */ vstack),
  where: () => (/* reexport */ where),
  wrapper_: () => (/* reexport */ wrapper_),
  wrapper_accumulate: () => (/* reexport */ wrapper_accumulate),
  wrapper_map: () => (/* reexport */ wrapper_map),
  wrapper_map2: () => (/* reexport */ wrapper_map2),
  wrapper_reduce: () => (/* reexport */ wrapper_reduce),
  xor: () => (/* reexport */ xor),
  zeros: () => (/* reexport */ zeros),
  zeros_like: () => (/* reexport */ zeros_like)
});

;// CONCATENATED MODULE: ./core/test/Tester.mjs


function default_compare(a, b) {
	if (a == b) return true;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length != b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (!default_compare(a[i], b[i])) return false;
		}
		return true;
	}
	return array_equal(a, b, true);
	// if (typeof a == 'boolean' && typeof b == 'boolean') return a == b;
	// if (Number.isNaN(a) && Number.isNaN(b)) return true;
	// if (typeof a == 'number' && typeof b == 'number') return a == b;
	// if (typeof a == 'string' && typeof b == 'string') return a == b;

	// if (a?.toarray != undefined) return default_compare(a.toarray(), b);
	// if (b?.toarray != undefined) return default_compare(a, b.toarray());

	// if (a?.constructor != b?.constructor) return false;
	// let a_keys = Object.getOwnPropertyNames(a);
	// let b_keys = Object.getOwnPropertyNames(b);
	// if (a_keys.length != b_keys.length) return false;

	// for (let i = 0; i < a_keys.length; i++) {
	// 	if (!default_compare(a[a_keys[i]], b[b_keys[i]])) return false;
	// }
	// return true;
}

function _print(a) {
	if (a instanceof NDArray) {
		// console.log(a);
		a = a.valueOf();
	}
	// if (Array.isArray(a)) return JSON.stringify(a);
	return a;
}

class Tester {
	compare = default_compare;
	constructor() {
		this.tasks = {};
		this._onload = [];
	}
	onload(fn) {
		this._onload.push(fn);
	}
	add(name, test, expected, compare = this.compare) {
		if (typeof name == 'function') name = name.name;
		let tasks = this.tasks[name] ?? (this.tasks[name] = []);
		tasks.push({ test, expected, compare });
		return this;
	}
	run(name) {
		if (name == undefined) {
			let status = true;
			for (let name of Object.keys(this.tasks)) {
				status = this.run(name) && status;
			}
			let color = (status ? '\x1b[32m' : '\x1b[31m') + '%s\x1b[0m';
			console.log(color, `Status: ${status}, Total: ${Object.keys(this.tasks).length}`);

			this._onload.forEach(fn => fn());
			return status;
		}
		let tasks = this.tasks[name];
		if (tasks == undefined) throw 'no such name';
		let caseNo = 1;
		let n_passed = 0;
		let stored = [];
		for (let task of tasks) {
			let { test, expected, compare } = task;
			let passed = false;
			let a, b;
			let hasError = false;
			try {
				a = test();
			} catch (error) {
				a = `[Error]: ${error}`;
				console.log(error);
				hasError = true;
			}
			try {
				b = expected();
			} catch (error) {
				b = `[Error]: ${error}`;
				console.log(error);
				hasError = true;
			}
			if (!hasError) passed = compare(a, b);
			if (passed) n_passed++;
			let color = (passed ? '\x1b[32m' : '\x1b[31m') + '%s\x1b[0m';
			stored.push([
				color,
				`#${caseNo}: ${passed ? 'passed' : 'fail'}`,
				`\nTest=\n`,
				_print(a),
				`\nExpected=\n`,
				_print(b),
			]);
			caseNo++;
		}
		let color = (n_passed == tasks.length ? '\x1b[32m' : '\x1b[31m') + '%s\x1b[0m';
		console.log(color, `Testing ${name}: ${n_passed} / ${tasks.length} cases passed`);
		if (n_passed != tasks.length) {
			for (let msg of stored) {
				console.log(...msg);
			}
		}

		return n_passed == tasks.length;
	}
}

let tester = new Tester();
function timeit2(func, duration = 1000) {
	let start = performance.now();
	let end;
	let count = 0;
	while (true) {
		func();
		count++;
		end = performance.now();
		if (end - start >= duration) break;
	}
	let ops = count / ((end - start) / duration);
	console.log(`ops: ${ops} per sec`, func);
}

function timeit(
	run,
	{
		name = 'test',
		setup = null,
		duration = 1000,
		warmup = 100,
		cycle = 'auto',
		cycle_duration = 100,
		repeat = 'auto',
		verbose = false,
	} = {}
) {
	let out = setup?.();
	if (cycle_duration > duration) cycle_duration = duration;
	if (repeat == 'auto') {
		repeat = (duration / cycle_duration) | 0;
	}
	if (cycle == 'auto') {
		let n = 1;
		let interval;
		while (true) {
			let start = Date.now();
			for (let i = 0; i < n; i++) run(out);
			interval = Date.now() - start;
			if (interval > cycle_duration) break;
			n *= 2;
		}
		cycle = Math.max(((n / interval) * (duration / repeat)) | 0, 1);
	}
	let history = [];
	for (let i = 0; i < warmup; i++) run(out);
	for (let i = 0; i < repeat; i++) {
		let start = Date.now();
		for (let i = 0; i < cycle; i++) run(out);
		let ops = cycle / ((Date.now() - start) / 1000);
		history.push(ops);
	}
	let n = history.length;
	let mean = history.reduce((a, b) => a + b) / n;
	if (verbose) {
		let max = Math.max(...history);
		let min = Math.min(...history);
		let diff = Math.max(max - mean, mean - min);
		console.log(`#${name} ${mean | 0} ± ${((diff / mean) * 100).toFixed(2)}% ops/sec (${repeat} runs)`);
	}
	return mean;
}

;// CONCATENATED MODULE: ./core/dtype.mjs


class NumberArray extends Array {}
class StringArray extends Array {}
class BooleanArray extends Array {}

let Any = x => x;

let lookup = new WeakMap();

/**
 * @class
 */
class Dtype {
	#array;

	/**
	 *
	 * @param {Function} type
	 * @param {class} array
	 * @param {string} name
	 */
	constructor(type = Any, array = Array, name = `${type}`) {
		/** @member {string} */
		this.name = name;

		/** @member {Function} */
		this.type = type;

		this.#array = array;

		lookup.set(type, name);
		lookup.set(array, name);
	}

	new(size, data = null) {
		let array = new this.#array(size);
		if (data != null) {
			if (array.set != undefined) {
				array.set(data);
			} else {
				for (let i = 0; i < data.length; i++) {
					array[i] = data[i];
				}
			}
		}
		return array;
	}

	toString() {
		return `dtype('${this.name}')`;
	}

	valueOf() {
		return this.type;
	}
}

let dtypes = {
	int8: new Dtype(Number, Int8Array, 'int8'),
	uint8: new Dtype(Number, Uint8Array, 'uint8'),
	int16: new Dtype(Number, Int16Array, 'int16'),
	uint16: new Dtype(Number, Uint16Array, 'uint16'),
	int32: new Dtype(Number, Int32Array, 'int32'),
	uint32: new Dtype(Number, Uint32Array, 'uint32'),
	float32: new Dtype(Number, Float32Array, 'float32'),
	float64: new Dtype(Number, Float64Array, 'float64'),

	// this is just a hinted container. no data conversion is involved.
	boolean: new Dtype(Boolean, BooleanArray, 'boolean'),
	number: new Dtype(Number, NumberArray, 'number'),
	string: new Dtype(String, StringArray, 'string'),
	object: new Dtype(Any, Array, 'object'),
};

Object.assign(dtypes, {
	int: dtypes.number,
	float: dtypes.number,
});

/**
 * @param {Dtype|string|Function} dtype
 * @param {function} array
 * @param {string} name
 * @returns {Dtype}
 * @example
 * dtype('number') == dtype(Number) // by string or value type function
 * @example
 * dtype('int8') == dtype(Int8Array) // by string or TypedArray constructor
 * @example
 * dtype('object') == dtype(Array) // default type and container
 * @example
 * dtype(dtype('object')) == dtype('object') // wraps dtype
 * @example
 * dtype() or dtype(null) // throws an error
 */
function dtype(dtype = 'object', array = undefined, name = undefined) {
	// dtype ??= 'object';
	if (typeof dtype == 'string') {
		if (!Object.hasOwn(dtypes, dtype)) {
			throw new Error(`${dtype} is not supported`);
		}
		return dtypes[dtype];
	}
	if (dtype instanceof Dtype) return dtype;
	if (lookup.has(dtype)) return dtypes[lookup.get(dtype)];

	return (dtypes[name] = new Dtype(dtype, array, name));
}

const dtype_ = dtype;

process.env.PRODUCTION ||
	tester.add(
			dtype,
			() => dtype('number'),
			() => dtype('number')
		)
		.add(
			dtype,
			() => dtype(Number),
			() => dtype('number')
		)
		.add(
			dtype,
			() => dtype(Int16Array),
			() => dtype('int16')
		);

// EXTERNAL MODULE: util (ignored)
var util_ignored_ = __webpack_require__(460);
;// CONCATENATED MODULE: ./core/slice.mjs


/** @class */
class Slice {
	/** @member {null} */
	static newaxis = null;
	/** @member {Slice} */
	static ellipsis = new Slice();
	/** @member {Slice} */
	static colon = new Slice();

	/**
	 * @param {number|null} start
	 * @param {number|null} stop
	 * @param {number|null} step
	 */
	constructor(start, stop, step) {
		/** @member {number|null} */
		this.start = start;
		/** @member {number|null} */
		this.stop = stop;
		/** @member {number|null} */
		this.step = step;
	}

	/**
	 * Returns `{start, stop, step, slicelength}` given the length of a sequence.
	 *
	 * `this.stop` must be non-null if `length` is null.
	 *
	 * Refer to: https://svn.python.org/projects/python/branches/pep-0384/Objects/sliceobject.c.
	 *
	 * @param {number|null} [length]
	 * @returns {SliceIterator}
	 * @example
	 * // returns [0, 2, 4, 6]
	 * [...slice(0, 10, 2).indices(7)]
	 * @example
	 * // returns 4
	 * slice(0, 10, 2).indices(7).slicelength
	 */
	indices(length = null) {
		if (this == Slice.ellipsis) {
			throw new Error(`ellipsis does not support .indices()`);
		}

		let { start, stop, step } = this;

		step ??= 1;

		if (length == null) {
			start ??= 0;
			if (stop == null) throw new Error(`stop must be non-null`);
		} else {
			let defstart = step < 0 ? length - 1 : 0;
			let defstop = step < 0 ? -1 : length;

			if (start == null) {
				start = defstart;
			} else {
				if (start < 0) start += length;
				if (start < 0) start = step < 0 ? -1 : 0;
				if (start >= length) start = step < 0 ? length - 1 : length;
			}

			if (stop == null) {
				stop = defstop;
			} else {
				if (stop < 0) stop += length;
				if (stop < 0) stop = step < 0 ? -1 : 0;
				if (stop >= length) stop = step < 0 ? length - 1 : length;
			}
		}

		let slicelength;
		if (step == 0 || (step < 0 && stop >= start) || (step > 0 && start >= stop)) {
			slicelength = 0;
		} else if (step < 0) {
			slicelength = ((stop - start + 1) / step + 1) | 0;
		} else {
			slicelength = ((stop - start - 1) / step + 1) | 0;
		}

		return new SliceIterator(start, stop, step, slicelength);
	}

	toString() {
		if (this == Slice.ellipsis) return '...';
		if (this == Slice.colon) return ':';

		let { start, stop, step } = this;
		let str = `${start ?? ''}:${stop ?? ''}`;
		if (step != null) str += `:${step}`;
		return str;
	}
}


Slice.prototype[util_ignored_?.inspect?.custom] = function () {
	return this.toString();
};

/** @class */
class SliceIterator {
	/** @type {number} */
	#value;
	/** @type {boolean} */
	#done;
	/** @type {number} */
	#index;

	/**
	 * @param {number} start
	 * @param {number} stop
	 * @param {number} step
	 * @param {number} slicelength
	 */
	constructor(start, stop, step, slicelength) {
		/** @member {number} */
		this.start = start;
		/** @member {number} */
		this.stop = stop;
		/** @member {number} */
		this.step = step;
		/** @member {number} */
		this.slicelength = slicelength;
	}

	[Symbol.iterator]() {
		this.reset();
		return this;
	}

	reset() {
		let { start, slicelength } = this;
		this.#index = 0;
		this.#done = slicelength == 0;
		this.#value = start;
	}

	/**
	 * @typedef {Object} SliceIteratorResult
	 * @property {number} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {SliceIteratorResult}
	 */
	next() {
		if (this.#done) return { done: true };
		let { step, slicelength } = this;
		let value = this.#value;
		this.#value += step;
		this.#done = ++this.#index >= slicelength;
		return { value, done: false };
	}
}

let slice_lookup = Object.assign(Object.create(null), {
	['None']: Slice.newaxis,
	['...']: Slice.ellipsis,
	[':']: Slice.colon,
});

let _sliceArg = arg => {
	arg = arg.trim();
	return arg.length == 0 ? null : +arg;
};

let _normalize = (arg, argName) => {
	if (arg != null && !Number.isInteger((arg = +arg))) {
		throw new Error(`${argName} must be either null or able to convert to integer`);
	}
	return arg;
};

/**
 * Create a Slice instance
 * @param {number|string|null|Array<number|null>} [start]
 * @param {number} [stop]
 * @param {number} [step]
 * @returns {Slice}
 * @example
 * // returns Slice.ellipsis
 * slice('...')
 * @example
 * // returns Slice.colon
 * slice()
 * @example
 * // returns new Slice(1, null, null)
 * slice(1)
 * @example
 * // returns slice(null, null, -1)
 * slice('::-1')
 * @example
 * // returns slice(null, -1, 1)
 * slice(':-1')
 * @example
 * // returns slice(null, null, 1)
 * slice([,,1])
 */
function slice(start = null, stop = null, step = null) {
	if (typeof start == 'string') {
		if (Object.hasOwn(slice_lookup, start)) return slice_lookup[start];
		let args = start.split(':');

		if (args.length == 0 || args.length > 3) throw new Error(`invalid string slice representation ${start}`);

		start = _sliceArg(args[0]);
		stop = args.length > 1 ? _sliceArg(args[1]) : null;
		step = args.length > 2 ? _sliceArg(args[2]) : null;
	} else if (start && typeof start == 'object') {
		if (start[Symbol.iterator] != undefined) [start = null, stop = null, step = null] = start;
		else if (start.length != undefined) ({ 0: start = null, 1: stop = null, 2: step = null } = start);
		else ({ start = null, stop = null, step = null } = start);
	}

	if (start == null && stop == null && step == null) return Slice.colon;

	start = _normalize(start, 'start');
	stop = _normalize(stop, 'stop');
	step = _normalize(step, 'step');

	return new Slice(start, stop, step);
}

slice.newaxis = Slice.newaxis;
slice.ellipsis = Slice.ellipsis;
slice.colon = Slice.colon;

// tester.onload(() => {
// 	console.log([...slice(0, 10, 2).indices(7)]);
// 	console.log(slice(0, 10, 2).indices(7).slicelength);
// });

process.env.PRODUCTION ||
	tester.add(
			slice,
			() => slice(0, 1, 2).toString(),
			() => '0:1:2'
		)
		.add(
			slice,
			() => slice(null, 1, 2).toString(),
			() => ':1:2'
		)
		.add(
			slice,
			() => slice(0, null, 2).toString(),
			() => '0::2'
		)
		.add(
			slice,
			() => slice(null, null, -1).toString(),
			() => '::-1'
		)
		.add(
			slice,
			() => slice(null, null, null).toString(),
			() => ':'
		);

;// CONCATENATED MODULE: ./core/isscalar.mjs


/**
 * @param {any} element
 * @returns {boolean}
 */
function isscalar(element) {
	switch (typeof element) {
		case 'boolean':
		case 'function':
		case 'number':
		case 'string':
			return true;
	}
	return false;
}

process.env.PRODUCTION ||
	tester.add(
			'isscalar',
			() => isscalar(3.1),
			() => true
		)
		.add(
			'isscalar',
			() => isscalar(array(3.1)),
			() => false
		)
		.add(
			'isscalar',
			() => isscalar([3.1]),
			() => false
		)
		.add(
			'isscalar',
			() => isscalar(false),
			() => true
		)
		.add(
			'isscalar',
			() => isscalar('numpy'),
			() => true
		)
		.add(
			'isscalar',
			() => isscalar(Number()),
			() => true
		);

;// CONCATENATED MODULE: ./core/ndarray.mjs


function toArray(obj) {
	return obj instanceof NDArray ? obj.array() : obj;
}

/**
 * @class
 */
class NDArray {
	/**
	 * @param {number[]} shape
	 * @param {any[]} data
	 * @param {Dtype} dtype
	 * @param {NDArray} base
	 * @param {number[]} strides
	 * @param {number} offset
	 * @param {number} itemsize always 1
	 */
	constructor(shape, data = null, dtype = null, base = null, strides = null, offset = 0, itemsize = 1) {
		// https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html
		/** @member {number} */
		this.ndim = shape.length;
		/** @member {number} */
		this.size = get_size(shape);

		/** @member {number[]} */
		this.shape = shape;
		/** @member {any[]} */
		this.data = data ?? Array(this.size);
		/** @member {number} */
		this.itemsize = itemsize;
		/** @member {number[]} */
		this.strides = strides ?? get_strides(shape, this.ndim, itemsize);
		/** @member {number} */
		this.offset = offset;

		/** @member {Dtype} */
		this.dtype = dtype_(dtype ?? data.constructor);

		/** @member {NDArray|null} */
		this.base = base?.base ?? base;
	}

	/** @member {number} */
	get length() {
		let { ndim, shape } = this;
		if (ndim != 0) return shape[0];
	}

	/**
	 * @member {Flatiter}
	 * @type {Flatiter}
	 */
	get flat() {
		return new Flatiter(this);
	}

	set flat(value) {
		this.flat.set(':', value);
	}

	/** @member {NDArray} */
	get T() {
		return transpose(this);
	}

	set T(value) {
		this.T.set(value);
	}

	/**
	 * @returns {string}
	 */
	toString() {
		return array_str(this);
	}

	/**
	 * @returns {any|string}
	 */
	valueOf() {
		return this.ndim == 0 ? this.item() : array_repr(this);
	}

	*[Symbol.iterator]() {
		for (let i = 0; i < this.shape[0]; i++) {
			yield this.at(i);
		}
	}

	/**
	 * Returns a view with the given shape, strides, and offset.
	 *
	 * out.base = this.base ?? this
	 * @param {number[]} [shape]
	 * @param {number[]} [strides]
	 * @param {number} [offset] required as a ptr to the first item
	 * @returns {NDArray}
	 */
	as_strided(shape = this.shape, strides = this.strides, offset = this.offset) {
		let { data, dtype, base, itemsize } = this;
		return new NDArray(shape, data, dtype, base ?? this, strides, offset, itemsize);
	}

	/**
	 * Returns `ndoffset(this.shape, this.strides, this.offset)`.
	 *
	 * Useful when iterating `this.data[i]` or `this.item(i)` in a `for (let i of this.keys())` loop.
	 * @returns {NdoffsetIterator}
	 */
	keys() {
		let { shape, strides, offset } = this;
		return ndoffset(shape, strides, offset);
	}

	/**
	 * Returns `this.flat`.
	 * @returns {Flatiter}
	 */
	values() {
		return this.flat;
	}

	/**
	 * Converts NDArray index to .data[] index.
	 * @param {number|number[]|undefined} index
	 * @returns {number}
	 */
	idx(index) {
		let { shape, strides, ndim, size, offset } = this;

		if (index == 0) return offset;

		if (index == undefined) {
			if (size != 1) {
				throw new Error('index cannot be empty if size != 1');
			}
			return offset;
		}

		let indices = get_indices(index, shape, ndim, size);

		for (let i = 0; i < indices.length; i++) {
			let idx = indices[i];
			let dim = shape[i];
			if (idx < 0) idx += dim;
			if (idx < 0 || idx >= dim) {
				throw new Error(`index ${indices[i]} out of bound for dimension ${dim}`);
			}
			offset += idx * strides[i];
		}

		return offset;
	}

	// Array methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

	/**
	 * `.at(0)` is is equivalent to `.get([0])`
	 * @param  {...number|Slice|string|null|number[]|boolean[]|NDArray} indices
	 * @returns {NDArray}
	 */
	at(...indices) {
		return this.get(indices);
	}

	/**
	 *
	 * @param {number|null} [start = null]
	 * @param {number|null} [end = null]
	 * @returns {NDArray}
	 */
	slice(start = null, end = null) {
		return this.at(slice(start, end));
	}

	/**
	 * `.get(indices)` is is equivalent to `.at(...indices)`
	 * @param  {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
	 * @param {number} [axis = 0]
	 * @returns {NDArray}
	 */
	get(indices, axis = 0) {
		if (checkBasicIndexing(indices)) {
			return basicIndexing(this, indices, axis);
		}
		return scatter(this, indices, axis).get();
	}

	/**
	 * `.set(value)` is equivalent to `.set(['...'], value)`, but faster
	 * @param  {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
	 * @param  {any} [value]
	 * @returns {NDArray}
	 */
	set(indices, value) {
		if (arguments.length == 1) {
			copyto(this, indices);
		} else if (checkBasicIndexing(indices)) {
			copyto(basicIndexing(this, indices), value);
		} else {
			scatter(this, indices).set(value);
		}
		return this;
	}

	/**
	 * Returns an element of the array.
	 *
	 * if `index` is an integer, `index` is regarded as a flatten index.
	 *
	 * `index` can be undefined only if `a.size == 1`.
	 *
	 * @param {number|number[]|undefined} index
	 * @returns {any}
	 */
	item(index) {
		return this.data[this.idx(index)];
	}

	/**
	 * Sets an element of the array.
	 *
	 * index can be undefined only if a.size == 1.
	 * @param {number|number[]|undefined} index
	 * @param {any} scalar
	 * @returns {NDArray}
	 */
	itemset(index, scalar) {
		this.data[this.idx(index)] = scalar;
		return this;
	}

	/**
	 * @param {Dtype} dtype
	 * @param {boolean} [copy]
	 * @returns {NDArray}
	 */
	astype(dtype, copy = true) {
		dtype = dtype_(dtype);
		copy ||= this.dtype != dtype;

		if (!copy) return this;

		let { shape, size } = this;
		let data = dtype.new(size, [...this.flat]);
		return new NDArray(shape, data, dtype);
	}

	/**
	 * @returns {any[]|any}
	 */
	array() {
		let { ndim } = this;
		if (ndim == 0) {
			return this.data[this.offset];
		}

		let { shape, size } = this;
		let array;
		if (size == 0) {
			if (ndim == 1) return [];

			let length = 1;
			let axis = 0;
			for (let dim; axis < ndim && (dim = shape[axis]); axis++) {
				length *= dim;
			}
			ndim = axis;
			array = Array.from({ length }, () => []);
		} else {
			array = [...this.flat];
		}

		for (let i = ndim - 1; i > 0; i--) {
			let dim = shape[i];
			let nested = [];
			for (let j = 0; j < array.length; j += dim) {
				nested.push(array.slice(j, j + dim));
			}
			array = nested;
		}
		return array;
	}

	/**
	 * @returns {any[]|any}
	 */
	toarray() {
		return this.array();
	}

	/**
	 * Alias of .toarray()
	 * @returns {any[]|any}
	 */
	tolist() {
		return this.array();
	}

	/**
	 * `.reshape(1, 2)` is equivalent to `.reshape([1, 2])`
	 * @param  {...number|number[]} shape
	 * @returns {NDArray}
	 */
	reshape(...shape) {
		if (shape.length == 1 && typeof shape[0] == 'object') {
			shape = shape[0];
		}
		return reshape(this, shape);
	}

	// non-inplace

	/**
	 * Returns add(this, x, out)
	 * @function
	 * @param {NDArray} x
	 * @param {null|NDArray} [out = null]
	 * @returns {NDArray}
	 * @example
	 * x.add(a, x)
	 * // in-place add
	 */
	add(x, out = null) {
		return add(this, x, out);
	}

	/**
	 * Returns subtract(this, x, out)
	 * @function
	 * @param {NDArray} x
	 * @param {null|NDArray} [out = null]
	 * @returns {NDArray}
	 */
	sub(x, out = null) {
		return subtract(this, x, out);
	}

	/**
	 * Returns multiply(this, x, out)
	 * @function
	 * @param {NDArray} x
	 * @param {null|NDArray} [out = null]
	 * @returns {NDArray}
	 */
	mul(x, out = null) {
		return multiply(this, x, out);
	}

	/**
	 * Returns divide(this, x, out)
	 * @function
	 * @param {NDArray} x
	 * @param {null|NDArray} [out = null]
	 * @returns {NDArray}
	 */
	div(x, out = null) {
		return divide(this, x, out);
	}

	/**
	 * Returns mod(this, x, out)
	 * @function
	 * @param {NDArray} x
	 * @param {null|NDArray} [out = null]
	 * @returns {NDArray}
	 */
	mod(x, out = null) {
		return mod(this, x, out);
	}

	// ndarray.[]

	/**
	 * @param {number|number[]|null} axis
	 * @param {NDArray} out
	 * @param {boolean} keepdims
	 * @param {boolean} initial
	 * @param {boolean} return_scalar
	 * @returns {NDArray<boolean>|boolean}
	 */
	all(axis = null, out = null, keepdims = false, initial = true, return_scalar = true) {
		return logic_all(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number|number[]|null} axis
	 * @param {NDArray} out
	 * @param {boolean} keepdims
	 * @param {boolean} initial
	 * @param {boolean} return_scalar
	 * @returns {NDArray<boolean>|boolean}
	 */
	any(axis = null, out = null, keepdims = false, initial = false, return_scalar = true) {
		return any(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number|null} [axis = null]
	 * @param {NDArray|null} [out = null]
	 * @param {boolean} [keepdims = false]
	 * @returns {NDArray}
	 */
	argmax(axis = null, out = null, keepdims = false) {
		return argmax(this, axis, out, keepdims);
	}

	/**
	 * @param {number|null} [axis = null]
	 * @param {NDArray|null} [out = null]
	 * @param {boolean} [keepdims = false]
	 * @returns {NDArray}
	 */
	argmin(axis = null, out = null, keepdims = false) {
		return argmin(this, axis, out, keepdims);
	}

	argpartition(kth, axis = -1, kind = 'introselect', order = null) {
		throw `not implemented`;
	}

	/**
	 * @param {number} axis
	 * @param {function} [key]
	 * @returns {NDArray<number>}
	 */
	argsort(axis = -1, key = null) {
		return argsort(this, axis, key);
	}

	byteswap() {
		throw `not implemented`;
	}

	choose(choices, out = null, mode = 'raise') {
		throw `not implemented`;
	}

	/**
	 * @param {number|NDArray} a_min
	 * @param {number|NDArray} a_max
	 * @param {NDArray} out
	 * @returns {NDArray}
	 */
	clip(a_min, a_max, out = null) {
		return clip_clip(this, a_min, a_max, out);
	}

	/**
	 * @param {boolean[]} condition
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	compress(condition, axis = null, out = null) {
		return compress(condition, this, axis, out);
	}

	conj() {
		throw `not implemented`;
	}

	conjugate() {
		throw `not implemented`;
	}

	/**
	 * @returns {NDArray}
	 */
	copy() {
		return array(this);
	}

	/**
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	cumprod(axis, out) {
		return cumprod(this, axis, out);
	}

	/**
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	cumsum(axis, out) {
		return cumsum(this, axis, out);
	}

	/**
	 * @param {number} [offset]
	 * @param {number} [axis1]
	 * @param {number} [axis2]
	 * @returns {NDArray}
	 */
	diagonal(offset = 0, axis1 = 0, axis2 = 1) {
		return diagonal(this, offset, axis1, axis2);
	}

	dump() {
		throw `not implemented`;
	}

	dumps() {
		throw `not implemented`;
	}

	/**
	 * @param {any} value
	 * @returns {NDArray} this
	 */
	fill(value) {
		let { data, shape, strides, offset } = this;
		for (let idx of ndoffset(shape, strides, offset)) {
			data[idx] = value;
		}
		return this;
	}

	/**
	 * @returns {NDArray}
	 */
	flatten() {
		let { size, flat, dtype } = this;
		return new NDArray([size], [...flat], dtype);
	}

	getfield() {
		throw `not implemented`;
	}

	// item
	// itemset

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {any} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray<any>|any}
	 */
	max(axis = null, out = null, keepdims = false, initial = null, return_scalar = true) {
		return amax(this, axis, out, keepdims, initial, return_scalar);
	}

	mean(axis = null, out = null, keepdims = false) {
		return mean(this, axis, out, keepdims);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {any} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray|any}
	 */
	min(axis = null, out = null, keepdims = false, initial = null, return_scalar = true) {
		return amin(this, axis, out, keepdims, initial, return_scalar);
	}

	newbyteorder() {
		throw `not implemented`;
	}

	/**
	 * @returns {NDArray[]}
	 */
	nonzero() {
		return nonzero(this);
	}

	partition(kth, axis = -1, kind = 'introselect', order = null) {
		throw `not implemented`;
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {any} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray|any}
	 */
	prod(axis = null, out = null, keepdims = false, initial = 0, return_scalar = true) {
		return prod(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @returns {NDArray}
	 */
	ptp(axis = null, out = null, keepdims = false) {
		return ptp(this, axis, out, keepdims);
	}

	/**
	 * @param {number[]} indices
	 * @param {any[]} values
	 * @param {string} [mode]
	 * @returns {NDArray} this
	 */
	put(indices, values, mode = 'raise') {
		put(this, indices, values, mode);
		return this;
	}

	/**
	 * @returns {NDArray}
	 */
	ravel() {
		return ravel(this);
	}

	/**
	 * @param {number|number[]} repeats
	 * @param {number} [axis]
	 * @returns {NDArray}
	 */
	repeat(repeats, axis = null) {
		return repeat(this, repeats, axis);
	}

	// reshape

	/**
	 * inplace resize
	 * @param {number[]} new_shape
	 * @returns {NDArray} this
	 */
	resize(new_shape) {
		if (this.base != null) throw `cannot resize this array: it does not own its data`;
		if (!contiguous(this)) throw `resize only works on single-segment arrays`;
		let new_size = get_size(new_shape);
		if (new_size <= this.size) {
			this.data = [...this.data.slice(this.offset, new_size)];
		} else {
			this.data = [...this.data.slice(this.offset, new_size), ...Array(new_size - this.size).fill(0)];
		}
		this.shape = new_shape;
		this.ndim = new_shape.length;
		this.strides = get_strides(new_shape, this.ndim, this.itemsize);
		this.offset = 0;
		return this;
	}

	/**
	 * @param {number} [decimals]
	 * @param {NDArray} [out]
	 * @returns {NDArray}
	 */
	round(decimals = 0, out = null) {
		return around(this, decimals, out);
	}

	/**
	 * @param {any[]} v
	 * @param {string} [side]
	 * @returns {NDArray}
	 */
	searchsorted(v, side = 'left') {
		return searchsorted(this, v, side);
	}

	setfield() {
		throw `not implemented`;
	}

	setflags() {
		throw `not implemented`;
	}

	/**
	 * @param {number} [axis]
	 * @param {Function} [key]
	 * @returns {NDArray} this
	 */
	sort(axis = -1, key = null) {
		this.set(sort(this, axis, key));
		return this;
	}

	/**
	 * @param {number|number[]} axis
	 * @returns {NDArray}
	 */
	squeeze(axis = null) {
		return squeeze(this, axis);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {number} [ddof]
	 * @param {boolean} [keepdims]
	 * @returns {NDArray}
	 */
	std(axis = null, out = null, ddof = 0, keepdims = false) {
		return std(this, axis, out, ddof, keepdims);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {boolean} [keepdims]
	 * @param {number} [initial]
	 * @param {boolean} [return_scalar]
	 * @returns {NDArray|any}
	 */
	sum(axis = null, out = null, keepdims = false, initial = 0, return_scalar = true) {
		return sum(this, axis, out, keepdims, initial, return_scalar);
	}

	/**
	 * @param {number} axis1
	 * @param {number} axis2
	 * @returns {NDArray}
	 */
	swapaxes(axis1, axis2) {
		return swapaxes(this, axis1, axis2);
	}

	/**
	 * @param {number[]} indices
	 * @param {number} [axis]
	 * @param {NDArray} [out]
	 * @param {string} [mode]
	 * @returns {NDArray}
	 */
	take(indices, axis = null, out = null, mode = 'raise') {
		return take(this, indices, axis, out, mode);
	}

	tobytes() {
		throw `not implemented`;
	}

	tofile() {
		throw `not implemented`;
	}

	// tolist

	trace() {
		throw `not implemented`;
	}

	/**
	 * @param {number|number[]} [axes]
	 * @returns {NDArray}
	 */
	transpose(axes = null) {
		return transpose(this, axes);
	}

	/**
	 * @param {number|number[]} [axis]
	 * @param {NDArray} [out]
	 * @param {number} [ddof]
	 * @param {boolean} [keepdims]
	 * @returns {NDArray}
	 */
	variance(axis = null, out = null, ddof = 0, keepdims = false) {
		return variance(this, axis, out, ddof, keepdims);
	}
}


NDArray.prototype[util_ignored_?.inspect?.custom] = function () {
	return this.valueOf();
};

/**
 * @param {number[]} shape
 * @param {number} ndim
 * @param {number} itemsize
 * @returns {number[]}
 * @ignore
 */
function get_strides(shape, ndim, itemsize) {
	if (ndim == 0) return [];

	let strides = Array(ndim);
	strides[ndim - 1] = itemsize;
	for (let i = ndim - 1; i > 0; i--) {
		strides[i - 1] = strides[i] * shape[i];
	}
	return strides;
}

/**
 * @param {number[]} shape
 * @returns {number}
 * @ignore
 */
function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

/**
 * Converts flatten index to multi-dimensional indices.
 * @param {number|number[]} index
 * @param {number[]} shape
 * @param {number} ndim
 * @param {number} size
 * @returns {number[]}
 * @ignore
 */
function get_indices(index, shape, ndim, size) {
	if (Number.isInteger(index)) {
		let idx = index;
		if (idx < 0) idx += size;
		if (idx < 0 || idx >= size) {
			throw new Error(`index ${index} out of bound for size ${size}`);
		}

		if (ndim == 0) return [0];

		let indices = Array(ndim);
		for (let i = ndim - 1; i >= 0; i--) {
			indices[i] = idx % shape[i];
			idx = (idx / shape[i]) | 0;
		}
		return indices;
	}

	if (index.length != ndim) {
		throw new Error('incorrect number of indices for array');
	}

	return index;
}

/**
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {boolean}
 * @ignore
 */
function checkBasicIndexing(indices) {
	for (let index of indices) {
		if (index != null && typeof index == 'object' && index.length != undefined) {
			return false;
		}
	}
	return true;
}

/**
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null>} indices
 * @param {number} [axis = 0]
 * @returns {NDArray}
 * @ignore
 */

function basicIndexing(a, indices, axis = 0) {
	let { ndim, shape, strides, offset } = a;

	let newaxes = 0;
	let ellipsisIndex = -1;
	for (let i = 0; i < indices.length; i++) {
		let index = indices[i];
		if (index == Slice.ellipsis || index == '...') {
			if (ellipsisIndex != -1) {
				throw new Error(`can only have a single ellipsis '...'`);
			}
			ellipsisIndex = i;
		} else if (index == null) {
			newaxes++;
		}
	}

	let skipDims = 0;
	if (ellipsisIndex != -1) {
		skipDims = ndim - axis - (indices.length - newaxes - 1);
	}

	if (axis + (indices.length - newaxes - (ellipsisIndex != -1)) > ndim) {
		throw new Error(`too many indices`);
	}

	let outShape = [];
	let outStrides = [];

	for (let i = 0; i < axis; i++) {
		outShape.push(shape[i]);
		outStrides.push(strides[i]);
	}

	for (let index of indices) {
		if (index == null) {
			outShape.push(1);
			outStrides.push(0);
		} else {
			if (typeof index == 'string') index = slice(index);
			else if (!(index instanceof Slice)) {
				let _index = index;
				if (index < 0) index += shape[axis];
				if (index < 0 || index > shape[axis]) {
					throw new Error(`index ${_index} out of bound for dimension size ${shape[axis]}`);
				}
				offset += strides[axis] * index;
				axis++;
				continue;
			}

			if (index == Slice.ellipsis) {
				for (let i = 0; i < skipDims; i++) {
					outShape.push(shape[axis + i]);
					outStrides.push(strides[axis + i]);
				}
				axis += skipDims;
			} else if (index == Slice.colon) {
				outShape.push(shape[axis]);
				outStrides.push(strides[axis]);
				axis++;
			} else {
				let { start, step, slicelength } = index.indices(shape[axis]);
				offset += strides[axis] * start;
				outShape.push(slicelength);
				outStrides.push(strides[axis] * step);
				axis++;
			}
		}
	}

	for (let i = axis; i < ndim; i++) {
		outShape.push(shape[i]);
		outStrides.push(strides[i]);
	}

	return a.as_strided(outShape, outStrides, offset);
}

tester.onload(() => {
	// console.log(arange(0, 10));
	// console.log(array([0, 'strss', 6.3]));
	// console.log(array([false, 2.3, 3, 4, { ok: 5 }], 'int8'));
	// console.dir(array([false, true]).dtype == _dtype('boolean'));
	// console.log(
	// 	arange(2 * 3 * 4 * 5)
	// 		.reshape(2, 3, 4, 5)
	// 		.at(0, 0, 0, 0, null)
	// );
	// let a = {};
	// a[array(12)] = 55;
	// a[12] = 51;
	// console.log(a);
});

process.env.PRODUCTION ||
	tester.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(array([0, 2, 1]), slice(), [0, 2, 4], slice());
			},
			() =>
				array([
					[[0], [5], [10], [15], [20], [25]],
					[[62], [67], [72], [77], [82], [87]],
					[[34], [39], [44], [49], [54], [59]],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(array([0, 2, 1]), array([0, 2, 1]), slice(), slice());
			},
			() =>
				array([
					[[0], [1], [2], [3], [4]],
					[[70], [71], [72], [73], [74]],
					[[35], [36], [37], [38], [39]],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(slice(), array([0, 2, 1]), array([0, 2, 4]), slice());
			},
			() =>
				array([
					[[0], [12], [9]],
					[[30], [42], [39]],
					[[60], [72], [69]],
					[[90], [102], [99]],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(slice(), array([0, 2, 1]), slice(), [0, 0, 0]);
			},
			() =>
				array([
					[
						[0, 1, 2, 3, 4],
						[30, 31, 32, 33, 34],
						[60, 61, 62, 63, 64],
						[90, 91, 92, 93, 94],
					],
					[
						[10, 11, 12, 13, 14],
						[40, 41, 42, 43, 44],
						[70, 71, 72, 73, 74],
						[100, 101, 102, 103, 104],
					],
					[
						[5, 6, 7, 8, 9],
						[35, 36, 37, 38, 39],
						[65, 66, 67, 68, 69],
						[95, 96, 97, 98, 99],
					],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(slice(), slice(), array([0, 2, 1]), array([0, 0, 0]));
			},
			() =>
				array([
					[
						[0, 2, 1],
						[5, 7, 6],
						[10, 12, 11],
						[15, 17, 16],
						[20, 22, 21],
						[25, 27, 26],
					],
					[
						[30, 32, 31],
						[35, 37, 36],
						[40, 42, 41],
						[45, 47, 46],
						[50, 52, 51],
						[55, 57, 56],
					],
					[
						[60, 62, 61],
						[65, 67, 66],
						[70, 72, 71],
						[75, 77, 76],
						[80, 82, 81],
						[85, 87, 86],
					],
					[
						[90, 92, 91],
						[95, 97, 96],
						[100, 102, 101],
						[105, 107, 106],
						[110, 112, 111],
						[115, 117, 116],
					],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(array([0, 2, 1]), slice(), slice(), array([0, 0, 0]));
			},
			() =>
				array([
					[
						[0, 1, 2, 3, 4],
						[5, 6, 7, 8, 9],
						[10, 11, 12, 13, 14],
						[15, 16, 17, 18, 19],
						[20, 21, 22, 23, 24],
						[25, 26, 27, 28, 29],
					],
					[
						[60, 61, 62, 63, 64],
						[65, 66, 67, 68, 69],
						[70, 71, 72, 73, 74],
						[75, 76, 77, 78, 79],
						[80, 81, 82, 83, 84],
						[85, 86, 87, 88, 89],
					],
					[
						[30, 31, 32, 33, 34],
						[35, 36, 37, 38, 39],
						[40, 41, 42, 43, 44],
						[45, 46, 47, 48, 49],
						[50, 51, 52, 53, 54],
						[55, 56, 57, 58, 59],
					],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(array([0, 2, 1]), array([0, 2, 1]), slice(), 0);
			},
			() =>
				array([
					[0, 1, 2, 3, 4],
					[70, 71, 72, 73, 74],
					[35, 36, 37, 38, 39],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x = arange(120).reshape(4, 6, 5, 1);
				return x.at(array([0, 2, 1]), slice(), slice(), 0);
			},
			() =>
				array([
					[
						[0, 1, 2, 3, 4],
						[5, 6, 7, 8, 9],
						[10, 11, 12, 13, 14],
						[15, 16, 17, 18, 19],
						[20, 21, 22, 23, 24],
						[25, 26, 27, 28, 29],
					],
					[
						[60, 61, 62, 63, 64],
						[65, 66, 67, 68, 69],
						[70, 71, 72, 73, 74],
						[75, 76, 77, 78, 79],
						[80, 81, 82, 83, 84],
						[85, 86, 87, 88, 89],
					],
					[
						[30, 31, 32, 33, 34],
						[35, 36, 37, 38, 39],
						[40, 41, 42, 43, 44],
						[45, 46, 47, 48, 49],
						[50, 51, 52, 53, 54],
						[55, 56, 57, 58, 59],
					],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let a = new NDArray([2, 5], [...Array(10).keys()]);
				return a.at(slice(), slice([, , -1]));
			},
			() => [
				[4, 3, 2, 1, 0],
				[9, 8, 7, 6, 5],
			]
		)
		.add(
			'ndarray.get',
			() => {
				let a = new NDArray([2, 5], [...Array(10).keys()]);
				return a.at(slice(-1), 3);
			},
			() => [8]
		)
		.add(
			'ndarray.get',
			() => {
				let a = new NDArray([2, 5], [...Array(10).keys()]);
				return a.at(slice([, , -1]), slice([, , -1]));
			},
			() => [
				[9, 8, 7, 6, 5],
				[4, 3, 2, 1, 0],
			]
		)
		.add(
			'ndarray.get',
			() => {
				let x;
				x = array([
					[3, 0, 0],
					[0, 4, 0],
					[5, 6, 0],
				]).at(slice(), slice(), null);
				return x;
			},
			() =>
				array([
					[[3], [0], [0]],

					[[0], [4], [0]],

					[[5], [6], [0]],
				])
		)
		.add(
			'ndarray.get',
			() => {
				let x;
				x = array([
					[3, 0, 0],
					[0, 4, 0],
					[5, 6, 0],
				]).at(slice('...'), null);
				return x;
			},
			() =>
				array([
					[[3], [0], [0]],

					[[0], [4], [0]],

					[[5], [6], [0]],
				])
		)
		.add(
			'ndarray.get',
			() =>
				arange(2 * 3 * 4)
					.reshape(2, 3, 4)
					.at(null, '...', null),
			() =>
				array([
					[
						[
							[[0], [1], [2], [3]],
							[[4], [5], [6], [7]],
							[[8], [9], [10], [11]],
						],
						[
							[[12], [13], [14], [15]],
							[[16], [17], [18], [19]],
							[[20], [21], [22], [23]],
						],
					],
				])
		)
		.add(
			'ndarray.get',
			() =>
				arange(2 * 3 * 4)
					.reshape(2, 3, 4)
					.at(slice(':'), [0, 2], slice('::2')),
			() =>
				array([
					[
						[0, 2],
						[8, 10],
					],
					[
						[12, 14],
						[20, 22],
					],
				])
		)
		.add(
			'ndarray.get',
			() =>
				arange(2 * 3 * 4)
					.reshape(2, 3, 4)
					.at([1, 0], 0).shape,
			() => [2, 4]
		);

process.env.PRODUCTION ||
	tester.add(
		'ndarray.item',
		() => {
			let a = new NDArray([2, 5], [...Array(10).keys()]);
			return a.at(slice([, , -1]), slice([, , -1])).item(5);
		},
		() => 4
	);

process.env.PRODUCTION ||
	tester.add(
		'ndarray.itemset',
		() => {
			let x = new NDArray(
				[3, 3],
				[
					[2, 2, 6],
					[1, 3, 6],
					[1, 0, 1],
				].flat()
			);
			x.itemset(4, 0);
			x.itemset([2, 2], 9);
			return x;
		},
		() => [
			[2, 2, 6],
			[1, 0, 6],
			[1, 0, 9],
		]
	);

process.env.PRODUCTION ||
	tester.add(
			'ndarray.array',
			() => array(1).array(),
			() => 1
		)
		.add(
			'ndarray.array',
			() => array([1]).array(),
			() => [1]
		)
		.add(
			'ndarray.array',
			() => array([]).array(),
			() => []
		)
		.add(
			'ndarray.array',
			() => array([[[]]]).array(),
			() => [[[]]]
		)
		.add(
			'ndarray.array',
			() => array([[], [], []]).array(),
			() => [[], [], []]
		)
		.add(
			'ndarray.array',
			() => ones([2, 3, 0, 2, 1]).array(),
			() => [
				[[], [], []],
				[[], [], []],
			]
		);

process.env.PRODUCTION ||
	tester.add(
			'ndarray.set',
			() => {
				let a = new NDArray([2, 5], [...Array(10).keys()]);
				a.at(slice(), slice(1, -1)).set(10);
				return a;
			},
			() => [
				[0, 10, 10, 10, 4],
				[5, 10, 10, 10, 9],
			]
		)
		.add(
			'ndarray.set',
			() => {
				let a = arange(2 * 3 * 4).reshape(2, 3, 4);
				a.set([greater_equal(a, 10)], -1);
				return a;
			},
			() =>
				array([
					[
						[0, 1, 2, 3],
						[4, 5, 6, 7],
						[8, 9, -1, -1],
					],
					[
						[-1, -1, -1, -1],
						[-1, -1, -1, -1],
						[-1, -1, -1, -1],
					],
				])
		)
		.add(
			'ndarray.set',
			() => {
				let a = arange(2 * 3 * 4).reshape(2, 3, 4);
				a.set([':', [true, false, true]], [-1, -2, -3, -4]);
				return a;
			},
			() =>
				array([
					[
						[-1, -2, -3, -4],
						[4, 5, 6, 7],
						[-1, -2, -3, -4],
					],
					[
						[-1, -2, -3, -4],
						[16, 17, 18, 19],
						[-1, -2, -3, -4],
					],
				])
		)
		.add(
			'ndarray.set',
			() => {
				let a = arange(2 * 3 * 4).reshape(2, 3, 4);
				a.set(
					[
						':',
						[
							[true, false, true, false],
							[false, false, true, true],
							[false, true, true, true],
						],
					],
					[1, 2, 3, 4, 5, 6, 7]
				);
				return a;
			},
			() =>
				array([
					[
						[1, 1, 2, 3],
						[4, 5, 3, 4],
						[8, 5, 6, 7],
					],

					[
						[1, 13, 2, 15],
						[16, 17, 3, 4],
						[20, 5, 6, 7],
					],
				])
		)
		.add(
			'ndarray.set',
			() => {
				let a = arange(2 * 3 * 4).reshape(2, 3, 4);
				a.set(
					[
						':',
						[
							[true, false, true, false],
							[false, false, true, true],
							[false, true, true, true],
						],
					],
					-1
				);
				return a;
			},
			() =>
				array([
					[
						[-1, 1, -1, 3],
						[4, 5, -1, -1],
						[8, -1, -1, -1],
					],

					[
						[-1, 13, -1, 15],
						[16, 17, -1, -1],
						[20, -1, -1, -1],
					],
				])
		);

process.env.PRODUCTION ||
	tester.add(
		'ndarray.flatten',
		() =>
			array([
				[1, 2],
				[3, 4],
			]).flatten(),
		() => array([1, 2, 3, 4])
	);

process.env.PRODUCTION ||
	tester.add(
			'ndarray.flat.set',
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				x.flat = 3;
				return x;
			},
			() =>
				array([
					[3, 3, 3],
					[3, 3, 3],
				])
		)
		.add(
			'ndarray.flat.set',
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				x.flat = [7, 8, 9, 10];
				return x;
			},
			() =>
				array([
					[7, 8, 9],
					[10, 7, 8],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			'ndarray.copy',
			() => {
				let x = array([[1, 2, 3]]);
				return x.copy() == x;
			},
			() => false
		)
		.add(
			'ndarray.copy',
			() => {
				let x = array([[1, 2, 3]]);
				let y = x.copy();
				y.itemset(0, -1);
				return [x, y];
			},
			() => [array([[1, 2, 3]]), array([[-1, 2, 3]])]
		);

process.env.PRODUCTION ||
	tester.add(
			'ndarray.resize',
			() => {
				let a = array([
					[0, 1],
					[2, 3],
				]);
				a.resize([2, 1]);
				return a;
			},
			() => array([[0], [1]])
		)
		.add(
			'ndarray.resize',
			() => {
				let a = array([
					[0, 1],
					[2, 3],
				]);
				a.resize([2, 3]);
				return a;
			},
			() =>
				array([
					[0, 1, 2],
					[3, 0, 0],
				])
		)
		.add(
			'ndarray.resize',
			() => {
				let a = array([
					[0, 1],
					[2, 3],
				]);
				let c = a;
				a.resize([1, 1]);
				return [a, c];
			},
			() => [array([[0]]), array([[0]])]
		);

;// CONCATENATED MODULE: ./core/array.mjs


/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @param {boolean} [copy = true]
 * @param {number} [ndmin = 0]
 * @returns {NDArray}
 */
function array(a, dtype = undefined, copy = true, ndmin = 0) {
	if (a instanceof NDArray) {
		let { shape, ndim } = a;
		if (ndim < ndmin) {
			shape = Array(ndmin - ndim)
				.fill(1)
				.concat(shape);
			a = a.reshape(shape);
		}
		return a.astype(dtype ?? a.dtype, copy);
	}

	let shape = shape_(a);
	let data = [];

	flatten_with_shape(data, a, shape, 0);

	let ndim = shape.length;
	if (ndim < ndmin) {
		shape = Array(ndmin - ndim)
			.fill(1)
			.concat(shape);
	}
	dtype = dtype_(dtype ?? guessType(data));

	return new NDArray(shape, dtype.new(data.length, data), dtype);
}

/**
 * @param {any[]} data
 * @param {NDArray|any[]|any} array
 * @param {number[]} shape
 * @param {number} level
 * @returns {void}
 * @ignore
 */
function flatten_with_shape(data, array, shape, level = 0) {
	if (level < shape.length) {
		for (let i = 0; i < shape[level]; i++) {
			flatten_with_shape(data, array.at(i), shape, level + 1);
		}
	} else {
		if (typeof array?.toarray == 'function') array = array.toarray();
		data.push(array);
	}
}

/**
 * @param {any[]|any} array
 * @returns {string}
 * @ignore
 */
function guessType(array) {
	let type;
	if (typeof array == 'object' && array?.[Symbol.iterator]) {
		type = typeof array[0];
		for (let n of array) {
			if (type != typeof n) {
				type = 'object';
				break;
			}
		}
	} else {
		type = typeof array;
	}

	if (type == 'number' || type == 'string' || type == 'boolean') {
		return type;
	}
	return 'object';
}

process.env.PRODUCTION ||
	tester.add(
			'array',
			() => array([3.1, 9]),
			() => [3.1, 9]
		)
		.add(
			'array',
			() => array([[9, 6], 3.1, 9]).shape,
			() => [3]
		)
		.add(
			'array',
			() => array(5),
			() => 5
		);

;// CONCATENATED MODULE: ./core/shape.mjs


/**
 * Determine the shape of a nested array given the nested first element as the initial guess.
 * @param {*} a
 * @param {number[]} shape
 * @param {number} level
 * @returns {void}
 * @ignore
 */
function nested_shape(a, shape, level = 0) {
	for (let i = 0; i < a.length && level < shape.length; i++) {
		let item = a[i];
		if (item == null || typeof item != 'object' || item.length != shape[level]) {
			shape.length = level;
			break;
		}
		if (item instanceof NDArray) {
			for (let i = level, j = 0; i < shape.length && j < item.ndim; i++, j++) {
				if (shape[i] != item.shape[j]) {
					shape.length = i;
					break;
				}
			}
		} else if (level + 1 < shape.length) {
			nested_shape(item, shape, level + 1);
		}
	}
}

/**
 * Return the shape of an array without invoking array creation.
 * @param {*} a
 * @returns {number[]}
 */
function shape(a) {
	if (a == null || typeof a != 'object') return [];
	if (a.shape != undefined) return a.shape;

	let shape = [];
	let item = a;
	while (true) {
		if (item instanceof NDArray) {
			shape.push(...item.shape);
		} else if (typeof item == 'object' && item?.length != undefined) {
			shape.push(item.length);
			item = item[0];
			continue;
		}
		break;
	}
	if (shape.length > 1) nested_shape(a, shape, 1);
	return shape;
}

const _shape = shape;
const shape_ = shape;

process.env.PRODUCTION ||
	tester.add(
			'shape',
			() => shape([[[3, 9]], [[3, 9, 3]], [[3, 9]]]),
			() => [3, 1]
		)
		.add(
			'shape',
			() => shape([1, 2, 3, [1, 3]]),
			() => [4]
		)
		.add(
			'shape',
			() => shape([0]),
			() => [1]
		)
		.add(
			'shape',
			() => shape(0),
			() => []
		)
		.add(
			'shape',
			() =>
				shape([
					arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
					arange(1 * 2 * 3 * 4).reshape(1, 2, 3 * 4),
					arange(1 * 2 * 3 * 4).reshape(1, 2, 3 * 4),
				]),
			() => [3, 1, 2]
		)
		.add(
			'shape',
			() =>
				shape([
					arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
					arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
					arange(1 * 2 * 3 * 4).reshape(1, 2, 3, 4),
				]),
			() => [3, 1, 2, 3, 4]
		);

;// CONCATENATED MODULE: ./core/broadcast_to.mjs


/**
 * @param {NDArray} a array-like
 * @param {number[]} shape
 * @returns {NDArray}
 */
function broadcast_to(a, shape) {
	a = asarray(a);
	let { strides, ndim } = a;

	if (ndim > shape.length) {
		throw new Error('broadcast shape has less dimensions than input array');
	}

	let new_strides = [];
	for (let i = shape.length - 1, j = a.shape.length - 1; i >= 0; i--, j--) {
		if (j >= 0 && !(a.shape[j] == 1 || a.shape[j] == shape[i])) {
			throw new Error('operands could not be broadcast together');
		}
		new_strides[i] = j < 0 || a.shape[j] == 1 ? 0 : strides[j];
	}

	return a.as_strided(shape, new_strides);
}

/**
 * @param  {...NDArray} arrays
 * @returns {NDArray[]}
 */
function broadcast_arrays(...arrays) {
	arrays = arrays.map(a => asarray(a));
	let shape = broadcast_shapes(...arrays.map(a => a.shape));
	return arrays.map(a => broadcast_to(a, shape));
}

process.env.PRODUCTION ||
	tester.add(
		'broadcast_to',
		() => broadcast_to(array([1, 2, 3]).reshape(3), [3, 3]).array(),
		() => [
			[1, 2, 3],
			[1, 2, 3],
			[1, 2, 3],
		]
	);

process.env.PRODUCTION ||
	tester.add(
		'broadcast_to',
		() => broadcast_to(array([1, 2, 3]).reshape(1, 3, 1), [2, 3, 4]).array(),
		() => [
			[
				[1, 1, 1, 1],
				[2, 2, 2, 2],
				[3, 3, 3, 3],
			],
			[
				[1, 1, 1, 1],
				[2, 2, 2, 2],
				[3, 3, 3, 3],
			],
		]
	);

;// CONCATENATED MODULE: ./core/copyto.mjs


/**
 * @param {NDArray} dst
 * @param {NDArray} src array-like
 * @returns {void}
 */
function copyto(dst, src) {
	src = asarray(src);
	if (src.size == 1) {
		dst.fill(src.item());
	} else {
		let flat = broadcast_to(src, dst.shape).flat[Symbol.iterator]();
		let { data, shape, strides, offset } = dst;
		for (let idx of ndoffset(shape, strides, offset)) {
			data[idx] = flat.next().value;
		}
	}
}

process.env.PRODUCTION ||
	tester.add(
			'copyto',
			() => {
				let A = asarray([4, 5, 6]);
				let B = [1, 2, 3];
				copyto(A, B);
				return A;
			},
			() => [1, 2, 3]
		)
		.add(
			'copyto',
			() => {
				let A = asarray([
					[1, 2, 3],
					[4, 5, 6],
				]);
				let B = [
					[4, 5, 6],
					[7, 8, 9],
				];
				copyto(A, B);
				return A;
			},
			() => [
				[4, 5, 6],
				[7, 8, 9],
			]
		)
		.add(
			'copyto',
			() => {
				let b = asarray([
					[0, 1, 2],
					[3, 4, 5],
				]);
				copyto(b.at(slice(), 1), [-1, -2]);
				return b;
			},
			() => [
				[0, -1, 2],
				[3, -2, 5],
			]
		);

;// CONCATENATED MODULE: ./core/ndindex.mjs


/**
 * @param {number[]} shape
 * @returns {NdindexIterator}
 */
function ndindex(shape) {
	return new NdindexIterator(shape);
}

/** @class */
class NdindexIterator {
	/**
	 * @param {number[]} shape
	 */
	constructor(shape) {
		/** @member {number} */
		this.ndim = shape.length;
		/** @member {number} */
		this.size = get_size(shape);
		/** @member {number[]} */
		this.shape = shape;

		/** @member {number[]} */
		this.coords = Array(this.ndim);
		/** @member {number} */
		this.index;
		/** @member {boolean} */
		this.done;

		this[Symbol.iterator]();
	}

	[Symbol.iterator]() {
		this.coords.fill(0);
		this.index = 0;
		this.done = this.size == 0;
		return this;
	}

	/**
	 * @typedef {Object} NdindexResult
	 * @property {number[]} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {NdindexResult}
	 */
	next() {
		if (this.done) return { done: true };

		let { coords, size, index } = this;
		if (index != 0) {
			let { shape, ndim } = this;

			let ptr = ndim - 1;
			let carry = true;
			while (ptr >= 0) {
				let dim = shape[ptr];
				if (dim == 1) {
					ptr--;
				} else if (dim == coords[ptr]) {
					coords[ptr--] = 0;
					carry = true;
				} else {
					if (!carry) break;
					coords[ptr]++;
					carry = false;
				}
			}
		}

		this.done = ++this.index >= size;

		return { value: coords, done: false };
	}
}

;// CONCATENATED MODULE: ./core/asarray.mjs


/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function asarray(a, dtype = undefined) {
	if (a instanceof NDArray) {
		if (dtype == undefined) return a;
		return a.astype(dtype, false);
	}
	return array(a, dtype);
}

process.env.PRODUCTION ||
	tester.add(
			'asarray',
			() => {
				let a = array([
					[1, 2],
					[3, 4],
				]);
				return asarray(a) === a;
			},
			() => true
		)
		.add(
			'asarray',
			() =>
				asarray([
					[1, 2],
					[3, 4],
				]),
			() => [
				[1, 2],
				[3, 4],
			]
		);

;// CONCATENATED MODULE: ./core/empty.mjs


/**
 * empty(2) is equivalent to empty([2])
 * @param {number|number[]} shape empty([]) for a scalar ndarray
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function empty(shape, dtype = undefined) {
	shape = tuple_(shape);
	dtype = dtype_(dtype);
	return new NDArray(shape, dtype.new(get_size(shape)), dtype);
}

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function empty_like(a, dtype = undefined) {
	a = asarray(a);
	return empty(a.shape, dtype ?? a.dtype);
}

/**
 * Returns an array-like object
 * @param {any} value
 * @returns {any[]}
 * @ignore
 */
function tuple_(value) {
	// all falsy values are scalars
	if (!value) return [value];

	// object that supports .toarray() method
	if (typeof value.toarray == 'function') value = value.toarray();

	// array-like object
	if (typeof value == 'object' && value.length != undefined) return value;

	return [value];
}

process.env.PRODUCTION ||
	tester.add(
			'empty',
			() => empty([2, 2]),
			() => [
				[, ,],
				[, ,],
			]
		)
		.add(
			'empty',
			() => empty(0),
			() => []
		)
		.add(
			'empty',
			() => empty([]),
			() => undefined
		);

process.env.PRODUCTION ||
	tester.add(
			'empty_like',
			() =>
				empty_like([
					[1, 2, 3],
					[4, 5, 6],
				]),
			() => [
				[, , ,],
				[, , ,],
			]
		)
		.add(
			'empty_like',
			() => empty_like([1, 2, 3, [1, 3]]),
			() => [, , , ,]
		);

;// CONCATENATED MODULE: ./core/reshape.mjs


/**
 * @param {NDArray} a array-like
 * @param {number[]} newshape
 * @returns {NDArray}
 */
function reshape(a, newshape) {
	a = asarray(a);
	newshape = tuple_(newshape);

	let unknown = -1;
	let rest = 1;
	for (let i = 0; i < newshape.length; i++) {
		if (newshape[i] == -1) {
			if (unknown != -1) {
				throw new Error('can only specify one unknown dimension');
			}
			unknown = i;
		} else {
			rest *= newshape[i];
		}
	}
	if (unknown != -1) {
		if (a.size % rest != 0) {
			throw new Error(`cannot reshape array of size ${a.size} into shape [${newshape.join(', ')}]`);
		}
		newshape[unknown] = rest == 0 ? 0 : a.size / rest;
	}
	if (a.size != get_size(newshape)) {
		throw new Error(`cannot reshape array of size ${a.size} into shape [${newshape.join(', ')}]`);
	}
	if (a.base == undefined) {
		return a.as_strided(newshape, get_strides(newshape, newshape.length, a.itemsize));
	}

	// check (1, 1, x, -1, y, 1) to (x, y)
	// or backward
	if (true) {
		let compatible = true;
		let j = 0;
		for (let i = 0; i < newshape.length; i++) {
			if (newshape[i] == 1) continue;
			for (; j < a.shape.length && a.shape[j] == 1; j++);
			if (j >= a.shape.length || newshape[i] != a.shape[j]) {
				compatible = false;
				break;
			}
			j++;
		}
		if (j != a.shape.length) compatible = false;
		// console.log(a.shape, compatible, newshape, a.data);
		if (compatible) {
			let strides = [];
			for (let i = 0, j = 0; i < newshape.length; i++) {
				if (newshape[i] != 1) {
					for (; j < a.shape.length && a.shape[j] == 1; j++);
				}
				strides.push(j < a.shape.length ? a.strides[j++] : 1);
			}

			return a.as_strided(newshape, strides);
		}
	}

	// for reshape(a, [-1])
	let strides = null;

	if (newshape.length == 1 && even_strides(a.shape, a.strides, a.ndim)) {
		strides = [a.strides[0]];
	} else if (newshape.length != 0) {
		a = array(a);
	}

	return a.as_strided(newshape, strides);
}

/**
 * Determines whether the array can `.reshape(-1)` without creating a copy.
 *
 * i.e.: can iterate using a constant stride (without using a `[i, j, k]` indices)
 * @param {number[]} shape
 * @param {number[]} strides
 * @param {number} ndim
 * @returns {boolean}
 * @ignore
 */
function even_strides(shape, strides, ndim) {
	let lastindex;
	for (let i = ndim - 1; i > 0; i--) {
		if (shape[i] > 1) {
			lastindex = i;
			break;
		}
	}
	for (let i = lastindex - 1; i >= 0; i--) {
		if (shape[i] > 1) {
			if (strides[i] != strides[lastindex] * shape[lastindex]) return false;
			lastindex = i;
		}
	}
	return true;
}

process.env.PRODUCTION ||
	tester.add(
			reshape,
			() => {
				let a = array([1, 2, 3, 4, 5]);
				return reshape(a.at(slice('::-2')), -1);
			},
			() => array([5, 3, 1])
		)
		.add(
			reshape,
			() => {
				let a = array([1]);
				return reshape(a, []);
			},
			() => array(1)
		)
		.add(
			reshape,
			() => {
				let a = array(1);
				return reshape(a, 1);
			},
			() => array([1])
		)
		.add(
			reshape,
			() => {
				let a = array(1);
				return reshape(a, -1);
			},
			() => array([1])
		)
		.add(
			'reshape',
			() => {
				let a = asarray([
					[0, 1],
					[2, 3],
					[4, 5],
				]);

				return reshape(a, [2, 3]);
			},
			() => [
				[0, 1, 2],
				[3, 4, 5],
			]
		)
		.add(
			'reshape',
			() => {
				let a = asarray([[[[0, 1]]]]);
				return reshape(a, [2, -1]);
			},
			() => [[0], [1]]
		)
		.add(
			'reshape',
			() => {
				let a = asarray([[[[0, 1]]]]);
				return reshape(a, [2, -1]).base === a;
			},
			() => true
		)
		.add(
			'reshape',
			() => {
				let a = asarray([[[[0, 1]]]]).at(0);
				return reshape(a, [2, -1]).base === a;
			},
			() => false
		)
		.add(
			'reshape',
			() =>
				reshape(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					[-1]
				),
			() => array([1, 2, 3, 4, 5, 6])
		)
		.add(
			'reshape',
			() => {
				`
			b = np.arange(30)
			a = b.reshape((10, 3))[::2]
			c = a.reshape(a.shape)
			a, a.reshape((1, 1, 5, -1, 3)).base is b, a.base is b, a.reshape(-1).base is b, c is a, c.base is b
			`;
				let b = arange(30);
				let a = b.reshape([10, 3]).at(slice('::2'));
				let c = a.reshape(a.shape);
				return [
					a.toarray(),
					reshape(a, [1, 1, 5, -1, 3]).base === b,
					a.base === b,
					a.reshape(-1).base === b,
					c === a,
					c.base === b,
				];
			},
			() => [
				array([
					[0, 1, 2],
					[6, 7, 8],
					[12, 13, 14],
					[18, 19, 20],
					[24, 25, 26],
				]).array(),
				true,
				true,
				false,
				false,
				true,
			]
		);

;// CONCATENATED MODULE: ./core/full.mjs


/**
 * @param {number[]} shape
 * @param {any} fill_value
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function full(shape, fill_value, dtype = undefined) {
	let out = empty(shape, dtype ?? guessType(fill_value));
	copyto(out, fill_value);
	return out;
}

/**
 * @param {NDArray} a array-like
 * @param {any} fill_value
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function full_like(a, fill_value, dtype = undefined) {
	return full(shape(a), fill_value, dtype);
}

process.env.PRODUCTION ||
	tester.add(
			'full',
			() => full([2, 2], Infinity),
			() => [
				[Infinity, Infinity],
				[Infinity, Infinity],
			]
		)
		.add(
			'full',
			() => full([2, 2], 10),
			() => [
				[10, 10],
				[10, 10],
			]
		)
		.add(
			'full',
			() => full([2, 2], [1, 2]),
			() => [
				[1, 2],
				[1, 2],
			]
		)
		.add(
			'full',
			() => full(2, -1),
			() => [-1, -1]
		);

process.env.PRODUCTION ||
	tester.add(
			full_like,
			() => full_like([1], 2),
			() => [2]
		)
		.add(
			full_like,
			() => full_like(1, 99),
			() => 99
		)
		.add(
			full_like,
			() =>
				array_equal(
					full_like(
						[
							[0, 1],
							[2, 3],
						],
						[1.1, 2.2],
						'int8'
					),
					array([
						[1, 2],
						[1, 2],
					])
				),
			() => true
		);

;// CONCATENATED MODULE: ./core/broadcast_shapes.mjs


/**
 * @param  {...number[]} shapes
 * @returns {number[]}
 */
function broadcast_shapes(...shapes) {
	let ndim = 0;
	for (let shape of shapes) ndim = Math.max(ndim, shape.length);
	if (ndim == 0) return [];

	let broadcasted = Array(ndim).fill(1);
	for (let shape of shapes) {
		for (let i = shape.length - 1, j = ndim - 1; i >= 0; i--, j--) {
			let dim = shape[i];
			if (dim == 1) continue;
			if (broadcasted[j] == 1) broadcasted[j] = dim;
			else if (broadcasted[j] != dim) {
				throw new Error('shape mismatch');
			}
		}
	}
	return broadcasted;
}

process.env.PRODUCTION ||
	tester.add(
		'broadcast_shapes',
		() => broadcast_shapes([1, 2], [3, 1], [3, 2]),
		() => [3, 2]
	);
process.env.PRODUCTION ||
	tester.add(
		'broadcast_shapes',
		() => broadcast_shapes([6, 7], [5, 6, 1], [7], [5, 1, 7]),
		() => [5, 6, 7]
	);

;// CONCATENATED MODULE: ./core/arange.mjs


/**
 * The parameters can be either float or integer numbers.
 * @param {number} start
 * @param {number} [stop]
 * @param {number} [step]
 * @returns {NDArray}
 * @example
 * arange(2) // array([0, 1])
 * @example
 * arange(1, 3) // array([1, 2])
 * @example
 * arange(0, 6, 2) // array([0, 2, 4])
 */
function arange(start, stop = undefined, step = 1) {
	if (stop == undefined) {
		stop = start;
		start = 0;
	}
	let size = Math.max(0, ((stop - start) / step) | 0);

	let out = empty([size], 'number');
	let { data } = out;
	for (let i = 0; i < size; i++) {
		data[i] = start + i * step;
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			'arange',
			() => arange(3),
			() => array([0, 1, 2])
		)
		.add(
			'arange',
			() => arange(-10, 10),
			() => array([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
		)
		.add(
			'arange',
			() => arange(-10, 10, -1),
			() => array([])
		)
		.add(
			'arange',
			() => arange(3, 7, 2),
			() => array([3, 5])
		)
		.add(
			'arange',
			() => arange(0, -10, -1),
			() => array([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
		);

;// CONCATENATED MODULE: ./core/linspace.mjs


/**
 * @param {number} start
 * @param {number} stop
 * @param {number} [num]
 * @param {boolean} [endpoint]
 * @param {boolean} [retstep]
 * @returns {NDArray}
 */
function linspace(start, stop, num = 50, endpoint = true, retstep = false) {
	let step = (stop - start) / (endpoint ? num - 1 : num);
	let data = [];
	for (let i = 0; i < num; i++) {
		data[i] = start + i * step;
	}
	let out = array(data);
	if (retstep) return [out, step];
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			'linspace',
			() => linspace(2, 3, 5),
			() => array([2, 2.25, 2.5, 2.75, 3])
		)
		.add(
			'linspace',
			() => linspace(2, 3, 5, false),
			() => array([2, 2.2, 2.4, 2.6, 2.8])
		)
		.add(
			'linspace',
			() => linspace(2.0, 3.0, 5, true, true),
			() => [array([2, 2.25, 2.5, 2.75, 3]), 0.25]
		)
		.add(
			'linspace',
			() => linspace(2.0, 3.0, 5, false, true),
			() => [array([2, 2.2, 2.4, 2.6, 2.8]), 0.2]
		)
		.add(
			'linspace',
			() => linspace(1, 10, 10, false),
			() => array([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])
		);

;// CONCATENATED MODULE: ./core/take.mjs


/**
 *
 * @param {NDArray} a
 * @param {any[]} indices
 * @param {null|number} [axis]
 * @param {NDArray} [out]
 * @param {string} [mode]
 * @returns {NDArray}
 */
function take(a, indices, axis = null, out = null, mode = 'raise') {
	a = asarray(a);
	indices = array(indices);
	if (axis == null) {
		indices.data = _indices(indices.data, mode, a.size);

		let newshape = indices.shape;

		if (out == null) out = empty(newshape);
		else if (!shallow_array_equal(out.shape, newshape))
			throw 'output array does not match result of ndarray.take';

		for (let i = 0; i < indices.size; i++) {
			out.data[i] = a.item(indices.data[i]);
		}

		return out;
	} else {
		if (axis < 0) axis += a.ndim;

		indices.data = _indices(indices.data, mode, a.shape[axis]);

		let newshape = a.shape.slice();
		newshape.splice(axis, 1, ...indices.shape);

		if (out == null) out = empty(newshape);
		else if (!shallow_array_equal(out.shape, newshape))
			throw 'output array does not match result of ndarray.take';

		let rest = Array(axis).fill(slice());
		for (let index of ndindex(indices.shape)) {
			out.get(rest.concat(index)).set(a.get([...rest, indices.item(index)]));
		}

		return out;
	}
}

function clip(n, min, max) {
	return n < min ? min : n > max ? max : n;
}

function _indices(indices, mode, size) {
	let newindices = [];
	if (mode == 'wrap') {
		for (let index of indices) {
			index = index % size;
			index = index < 0 ? index + size : index;
			newindices.push(index);
		}
	} else if (mode == 'clip') {
		for (let index of indices) {
			index = clip(index, 0, size - 1);
			newindices.push(index);
		}
	} else if (mode == 'raise') {
		for (let index of indices) {
			if (index < -size || index >= size)
				throw `index ${index} is out of bounds for axis 0 with size ${size}`;
			index = index < 0 ? index + a.size : index;
			newindices.push(index);
		}
	} else throw `unexpected mode = ${mode}`;
	return newindices;
}

process.env.PRODUCTION ||
	tester.add(
			'take',
			() => {
				let a = [4, 3, 5, 7, 6, 8];
				let indices = [0, 1, 4];
				return take(a, indices);
			},
			() => array([4, 3, 6])
		)
		.add(
			'take',
			() => {
				let a = [4, 3, 5, 7, 6, 8];
				return take(a, [
					[0, 1],
					[2, 3],
				]);
			},
			() =>
				array([
					[4, 3],
					[5, 7],
				])
		)
		.add(
			'take',
			() => {
				let a = array([
					[1, 2],
					[3, 4],
					[5, 6],
					[7, 8],
				]);
				return take(
					a,
					[
						[0, 1],
						[2, 3],
					],
					0
				);
			},
			() =>
				array([
					[
						[1, 2],
						[3, 4],
					],

					[
						[5, 6],
						[7, 8],
					],
				])
		)
		.add(
			'take',
			() => {
				let a = array([
					[1, 2],
					[3, 4],
					[5, 6],
					[7, 8],
				]);
				return take(
					a,
					array([
						[
							[
								[0, 1],
								[0, 1],
							],
						],
					]),
					1
				);
			},
			() =>
				array([
					[
						[
							[
								[1, 2],
								[1, 2],
							],
						],
					],

					[
						[
							[
								[3, 4],
								[3, 4],
							],
						],
					],

					[
						[
							[
								[5, 6],
								[5, 6],
							],
						],
					],

					[
						[
							[
								[7, 8],
								[7, 8],
							],
						],
					],
				])
		)
		.add(
			'take',
			() => {
				let a = [
					[5, 6, 2, 7, 1],
					[4, 9, 2, 9, 3],
				];
				let indices = [0, 4];
				return take(a, indices, 1);
			},
			() => [
				[5, 1],
				[4, 3],
			]
		);

;// CONCATENATED MODULE: ./core/ones.mjs


/**
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function ones(shape, dtype = undefined) {
	return full(shape, 1, dtype);
}

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function ones_like(a, dtype = undefined) {
	return full_like(a, 1, dtype);
}

;// CONCATENATED MODULE: ./core/zeros.mjs


/**
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function zeros(shape, dtype = undefined) {
	return full(shape, 0, dtype);
}

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function zeros_like(a, dtype = undefined) {
	return full_like(a, 0, dtype);
}

;// CONCATENATED MODULE: ./core/ascontiguousarray.mjs


/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function ascontiguousarray(a, dtype = undefined) {
	a = asarray(a, dtype);
	return contiguous(a) ? a : array(a);
}

/**
 * Always returns `false` if `ndim == 0`
 * @param {NDArray} a
 * @returns {boolean}
 * @ignore
 */
function contiguous(a) {
	let { strides, shape, ndim, itemsize } = a;
	if (ndim == 0) return false;

	for (let i = ndim - 1; i >= 0; i--) {
		if (shape[i] > 1) {
			if (itemsize != strides[i]) return false;
			itemsize *= shape[i];
		}
	}
	return true;
}

process.env.PRODUCTION ||
	tester.add(
			ascontiguousarray,
			() => {
				let a = ones([3, 1, 5]).at(slice(), slice([, , 3]), slice());
				// console.log(a.shape, a.strides, a.itemsize);
				return ascontiguousarray(a) === a;
			},
			() => true
		)
		.add(
			ascontiguousarray,
			() => {
				let a = ones([3, 4, 5]).at(slice(), slice([, , 1]), slice());
				return ascontiguousarray(a) === a;
			},
			() => true
		)
		.add(
			ascontiguousarray,
			() => {
				let a = ones([3, 4, 5]).at(slice(), slice(), slice(1));
				return ascontiguousarray(a) === a;
			},
			() => false
		)
		.add(
			ascontiguousarray,
			() => {
				let a = ones([3]).at(slice([, , -3]));
				return ascontiguousarray(a) === a;
			},
			() => true
		)
		.add(
			ascontiguousarray,
			() => {
				let a = ones([2]).at(slice([, , 2]));
				return ascontiguousarray(a) === a;
			},
			() => true
		)
		.add(
			ascontiguousarray,
			() => {
				let a = ones([3]).at(slice([, , 2]));
				return ascontiguousarray(a) === a;
			},
			() => false
		)
		.add(
			ascontiguousarray,
			() => {
				let a = ones([3]).at(slice([1, 2]));
				return ascontiguousarray(a) === a;
			},
			() => true
		)
		.add(
			ascontiguousarray,
			() => {
				let x, y;
				x = array([]);
				y = ascontiguousarray(x);
				return x === y;
			},
			() => true
		)
		.add(
			ascontiguousarray,
			() => {
				let x, y;
				x = array(5);
				y = ascontiguousarray(x);
				return x === y;
			},
			() => false
		);

;// CONCATENATED MODULE: ./core/swapaxes.mjs


/**
 * @param {NDArray} a
 * @param {number} axis1
 * @param {number} axis2
 * @returns {NDArray}
 */
function swapaxes(a, axis1, axis2) {
	a = asarray(a);

	let axes = [...Array(a.ndim).keys()];
	[axes[axis1], axes[axis2]] = [axes[axis2], axes[axis1]];

	return transpose(a, axes);
}

process.env.PRODUCTION ||
	tester.add(
			swapaxes,
			() => {
				let x = array([[1, 2, 3]]);
				return swapaxes(x, 0, 1);
			},
			() => array([[1], [2], [3]])
		)
		.add(
			swapaxes,
			() => {
				let x = array([
					[
						[0, 1],
						[2, 3],
					],
					[
						[4, 5],
						[6, 7],
					],
				]);
				return swapaxes(x, 0, 2);
			},
			() =>
				array([
					[
						[0, 4],
						[2, 6],
					],
					[
						[1, 5],
						[3, 7],
					],
				])
		);

;// CONCATENATED MODULE: ./core/transpose.mjs


/**
 * @param {NDArray} a
 * @param {null|number[]} [axes]
 * @returns {NDArray}
 */
function transpose(a, axes = null) {
	a = asarray(a);

	let { ndim, shape, strides } = a;
	let newshape, newstrides;
	if (axes == null) {
		newshape = shape.slice().reverse();
		newstrides = strides.slice().reverse();
	} else {
		axes = normalize_axes(axes, ndim);
		newshape = Array(ndim);
		newstrides = Array(ndim);
		for (let i = 0; i < ndim; i++) {
			newshape[i] = shape[axes[i]];
			newstrides[i] = strides[axes[i]];
		}
	}

	return a.as_strided(newshape, newstrides);
}

/**
 * @param {number[]} axes
 * @param {number} ndim
 * @returns {number[]}
 * @ignore
 */
function normalize_axes(axes, ndim) {
	if (axes.length != ndim) {
		throw new Error(`axes don't match array`);
	}
	let newaxes = [];
	let unique = {};
	for (let i = 0; i < ndim; i++) {
		let axis = axes[i];
		if (axis < 0) axis += ndim;
		if (axis < 0 || ndim <= axis) {
			throw new Error(`axis ${axis} is out of bounds for array of dimension ${i + 1}`);
		}
		if (unique[axis]) {
			throw new Error('repeated axis in transpose');
		}
		unique[axis] = true;
		newaxes[i] = axis;
	}
	return newaxes;
}

process.env.PRODUCTION ||
	tester.add(
			transpose,
			() => {
				let x = arange(4).reshape([2, 2]);
				return transpose(x);
			},
			() =>
				array([
					[0, 2],
					[1, 3],
				])
		)
		.add(
			transpose,
			() => {
				let x = ones([1, 2, 3]);
				return transpose(x, [1, 0, 2]);
			},
			() => array([[[1, 1, 1]], [[1, 1, 1]]])
		)
		.add(
			transpose,
			() => {
				let x = ones([2, 3, 4, 5]);
				return transpose(x).shape;
			},
			() => [5, 4, 3, 2]
		);

;// CONCATENATED MODULE: ./core/atleast.mjs


/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_1d(1.0) // array([1])
 * @example
 * atleast_1d(1, [3, 4]) // [array([1]), array([3, 4])]
 */
function atleast_1d(...arrays) {
	if (arrays.length != 1) {
		return arrays.map(a => atleast_1d(a));
	}

	let a = asarray(arrays[0]);
	let { ndim } = a;

	if (ndim >= 1) return a;

	return a.copy().reshape([1]);
}

/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_2d(1.0) // array([[1]])
 * @example
 * atleast_2d(1, [3, 4]) // [array([[1]]), array([[3, 4]])]
 */
function atleast_2d(...arrays) {
	if (arrays.length != 1) {
		return arrays.map(a => atleast_2d(a));
	}

	let a = asarray(arrays[0]);
	let { ndim, shape } = a;

	if (ndim >= 2) return a;

	if (ndim == 1) return a.reshape([1, shape[0]]);

	return a.copy().reshape([1, 1]);
}

/**
 * Returns a NDArray if only one argument is passed, otherwise returns an array of NDArrays
 * @param  {...NDArray} arrays
 * @returns {NDArray|NDArray[]}
 * @example
 * atleast_3d(1.0) // array([[[1]]])
 * @example
 * atleast_3d(1, [3, 4]) // [array([[[1]]]), array([[[3], [4]]])]
 */
function atleast_3d(...arrays) {
	if (arrays.length != 1) {
		return arrays.map(a => atleast_3d(a));
	}

	let a = asarray(arrays[0]);
	let { ndim, shape } = a;

	if (ndim >= 3) return a;

	if (ndim == 2) return a.reshape([shape[0], shape[1], 1]);

	if (ndim == 1) return a.reshape([1, shape[0], 1]);

	return a.copy().reshape([1, 1, 1]);
}

process.env.PRODUCTION ||
	tester.add(
			atleast_1d,
			() => atleast_1d(1.0),
			() => array([1])
		)
		.add(
			atleast_1d,
			() => atleast_1d(1, [3, 4]),
			() => [array([1]), array([3, 4])]
		)
		.add(
			atleast_1d,
			() => atleast_1d(arange(9.0).reshape([3, 3])),
			() =>
				array([
					[0, 1, 2],
					[3, 4, 5],
					[6, 7, 8],
				])
		)
		.add(
			atleast_1d,
			() => {
				let x = array([1]);
				let y = x.at(0);
				let z = atleast_1d(y);
				z.set([0], -96);
				return [x.array(), y.array(), z.array(), x.base === null, y.base === null, z.base != y, z.base];
			},
			() => [array([1]), 1, array([-96]), true, false, true, array(-96)]
		);

process.env.PRODUCTION ||
	tester.add(
			atleast_2d,
			() => atleast_2d(3.0),
			() => array([[3]])
		)
		.add(
			atleast_2d,
			() => {
				let x = arange(3.0);
				return [atleast_2d(x), atleast_2d(x).base === x];
			},
			() => [array([[0, 1, 2]]), true]
		)
		.add(
			atleast_2d,
			() => atleast_2d(1, [1, 2], [[1, 2]]),
			() => [array([[1]]), array([[1, 2]]), array([[1, 2]])]
		);

process.env.PRODUCTION ||
	tester.add(
			atleast_3d,
			() => atleast_3d(3.0),
			() => array([[[3]]])
		)
		.add(
			atleast_3d,
			() => atleast_3d(arange(3.0)).shape,
			() => [1, 3, 1]
		)
		.add(
			atleast_3d,
			() => {
				let x = arange(12.0).reshape(4, 3);
				return [atleast_3d(x).shape, atleast_3d(x).base === x.base];
			},
			() => [[4, 3, 1], true]
		)
		.add(
			atleast_3d,
			() => atleast_3d([1, 2], [[1, 2]], [[[1, 2]]]),
			() => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]
		);

;// CONCATENATED MODULE: ./core/broadcast.mjs


/**
 * @param  {...NDArray} arrays
 * @returns {Broadcast}
 */
function broadcast(...arrays) {
	return new Broadcast(arrays.map(a => asarray(a)));
}

/**
 * @class
 */
class Broadcast {
	/**
	 * @param {NDArray[]} arrays
	 */
	constructor(arrays) {
		/** @member {number[]} */
		this.shape = broadcast_shapes(...arrays.map(array => array.shape));

		/** @member {NDArray[]} */
		this.arrays = arrays.map(array => broadcast_to(array, this.shape));

		/** @member {number} */
		this.ndim = this.shape.length;

		/** @member {number} */
		this.size = get_size(this.shape);

		this.reset();
	}

	[Symbol.iterator]() {
		if (this.index != 0) this.reset();
		return this;
	}

	/**
	 * @typedef {Object} BroadcastResult
	 * @property {any} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {BroadcastResult}
	 */
	next() {
		let value = this.iters.map(iter => iter.next().value);
		let done = this.index >= this.size;
		this.index++;
		return { value, done };
	}

	reset() {
		/** @member {Flatiter[]} */
		this.iters = this.arrays.map(array => array.flat);

		/** @member {number} */
		this.index = 0;
	}
}

process.env.PRODUCTION ||
	tester.add(
			broadcast,
			() => {
				`
        out = np.empty(b.shape)
        out.flat = [u+v for (u,v) in b]
        out
        array([[5.,  6.,  7.],
               [6.,  7.,  8.],
               [7.,  8.,  9.]])
        `;
				let x = array([[1], [2], [3]]),
					y = array([4, 5, 6]),
					b = broadcast(x, y);
				let out = empty(b.shape);
				let flat = [];
				for (let [u, v] of b) {
					flat.push(u + v);
				}
				out.flat = flat;
				return out;
			},
			() =>
				array([
					[5, 6, 7],
					[6, 7, 8],
					[7, 8, 9],
				])
		)
		.add(
			broadcast,
			() => {
				`
            >>> x = np.array([1, 2, 3])
            >>> y = np.array([[4], [5], [6]])
            >>> b = np.broadcast(x, y)
            >>> b.index
            0
            >>> next(b), next(b), next(b)
            ((1, 4), (2, 4), (3, 4))
            >>> b.index
            3
            >>> b.reset()
            >>> b.index
            0
            `;
				let out = [];
				let x = array([1, 2, 3]),
					y = array([[4], [5], [6]]),
					b = broadcast(x, y);
				out.push(b.index);
				out.push(b.next().value, b.next().value, b.next().value);
				out.push(b.index);
				b.reset();
				out.push(b.index);
				return out;
			},
			() => [0, [1, 4], [2, 4], [3, 4], 3, 0]
		);

;// CONCATENATED MODULE: ./core/eye.mjs


/**
 * @param {NDArray} N
 * @param {number} [M]
 * @param {number} [k]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function eye(N, M = N, k = 0, dtype = 'number') {
	let out = zeros([N, M], dtype);
	let { data, size } = out;
	for (let i = k + Math.ceil(-k / (M + 1)) * (M + 1); i < size; i += M + 1) {
		data[i] = 1;
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			'eye',
			() => eye(2),
			() => [
				[1, 0],
				[0, 1],
			]
		)
		.add(
			'eye',
			() => eye(3, 3, 1),
			() => [
				[0, 1, 0],
				[0, 0, 1],
				[0, 0, 0],
			]
		)
		.add(
			'eye',
			() => eye(4, 5, -1),
			() => [
				[0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0],
				[0, 1, 0, 0, 0],
				[0, 0, 1, 0, 0],
			]
		);

;// CONCATENATED MODULE: ./core/identity.mjs


/**
 * @param {number} n
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function identity(n, dtype = 'number') {
	return eye(n, n, 0, dtype);
}

process.env.PRODUCTION ||
	tester.add(
			'identity',
			() => identity(3),
			() => [
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1],
			]
		)
		.add(
			'identity',
			() => identity(0),
			() => array([]).reshape([0, 0])
		);

;// CONCATENATED MODULE: ./core/ndim.mjs


/**
 * Return the ndim of an array without invoking array creation.
 * @param {any} a
 * @returns {number}
 */
function ndim(a) {
	if (a == null || typeof a != 'object') return 0;
	if (a.ndim != undefined) return a.ndim;

	return shape(a).length;
}

const _ndim = ndim;

process.env.PRODUCTION ||
	tester.add(
			'ndim',
			() =>
				ndim([
					[1, 2, 3],
					[4, 5, 6],
				]),
			() => 2
		)
		.add(
			'ndim',
			() =>
				ndim(
					asarray([
						[1, 2, 3],
						[4, 5, 6],
					])
				),
			() => 2
		)
		.add(
			'ndim',
			() => ndim(1),
			() => 0
		)
		.add(
			'ndim',
			() => ndim(null),
			() => 0
		);

;// CONCATENATED MODULE: ./core/expand_dims.mjs


/**
 * @param {NDArray} a
 * @param {number|number[]} axis
 * @returns {NDArray}
 */
function expand_dims(a, axis) {
	a = asarray(a);

	if (typeof axis == 'number') axis = [axis];

	let newndim = a.ndim + axis.length;
	axis = normalize_axis_tuple(axis, newndim, false);

	let newshape = [];
	for (let i = 0, j = 0; i < newndim; i++) {
		newshape.push(axis.includes(i) ? 1 : a.shape[j++]);
	}
	return a.reshape(newshape);
}

process.env.PRODUCTION ||
	tester.add(
			expand_dims,
			() => expand_dims(array([1, 2]), 0),
			() => array([[1, 2]])
		)
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), 1),
			() => array([[1], [2]])
		)
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), [0, 1]),
			() => array([[[1, 2]]])
		)
		.add(
			expand_dims,
			() => expand_dims(array([1, 2]), [2, 0]),
			() => array([[[1], [2]]])
		)
		.add(
			expand_dims,
			() => {
				let x = array([1, 2]);
				return expand_dims(x, [2, 0]).base === x;
			},
			() => true
		);

;// CONCATENATED MODULE: ./core/squeeze.mjs


/**
 * @param {NDArray} a
 * @param {null|number|number[]} axis
 * @returns {NDArray}
 */
function squeeze(a, axis = null) {
	a = asarray(a);
	if (axis != null) {
		axis = normalize_axis_tuple(axis);
	}
	let { shape, ndim } = a;
	let newshape = [];
	for (let i = 0; i < ndim; i++) {
		if (axis ? axis.includes(i) : shape[i] == 1) continue;
		newshape.push(shape[i]);
	}

	return a.reshape(newshape);
}

process.env.PRODUCTION ||
	tester.add(
			squeeze,
			() => squeeze(array([[[0], [1], [2]]])).shape,
			() => [3]
		)
		.add(
			squeeze,
			() => squeeze(array([[[0], [1], [2]]]), 0).shape,
			() => [3, 1]
		)
		.add(
			squeeze,
			() => squeeze(array([[[0], [1], [2]]]), 2).shape,
			() => [1, 3]
		)
		.add(
			squeeze,
			() => squeeze(array([[1234]])),
			() => array(1234)
		)
		.add(
			squeeze,
			() => {
				`
x = np.arange(20)
y = x.reshape((5, -1))
z = y[::-1]
a = np.ascontiguousarray(z)
b = a.reshape((5, 1, 1, -1))
b.reshape((5, -1)).base is a, b.reshape(-1).base is a, np.squeeze(b).base is a, x, y, z, np.squeeze(b)
`;
				let x, y, z, a, b;
				x = arange(20);
				y = x.reshape([5, -1]);
				z = y.at(slice([, , -1]));
				a = ascontiguousarray(z);
				b = a.reshape([5, 1, 1, -1]);
				return [
					b.reshape([5, -1]).base === a,
					b.reshape(-1).base === a,
					squeeze(b).base === a,
					x,
					y,
					z,
					squeeze(b),
				];
			},
			() => [
				true,
				true,
				true,
				array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
				array([
					[0, 1, 2, 3],
					[4, 5, 6, 7],
					[8, 9, 10, 11],
					[12, 13, 14, 15],
					[16, 17, 18, 19],
				]),
				array([
					[16, 17, 18, 19],
					[12, 13, 14, 15],
					[8, 9, 10, 11],
					[4, 5, 6, 7],
					[0, 1, 2, 3],
				]),
				array([
					[16, 17, 18, 19],
					[12, 13, 14, 15],
					[8, 9, 10, 11],
					[4, 5, 6, 7],
					[0, 1, 2, 3],
				]),
			]
		);

;// CONCATENATED MODULE: ./core/copy.mjs


/**
 * @param {NDArray} a array-like
 * @returns {NDArray}
 */
function copy(a) {
	return array(a);
}

process.env.PRODUCTION ||
	tester.add(
		copy,
		() => {
			let x, y, z;
			x = array([1, 2, 3]);
			y = x;
			z = copy(x);
			x.set([0], 10);
			return [x.item(0) == y.item(0), x.item(0) == z.item(0)];
		},
		() => [true, false]
	);

;// CONCATENATED MODULE: ./core/fromfunction.mjs


/**
 * @param {Function} func
 * @param {number[]} shape
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function fromfunction(func, shape, dtype = undefined) {
	let data = [];
	for (let index of ndindex(shape)) {
		data.push(func(index));
	}
	return array(data, dtype ?? guessType(data)).reshape(shape);
}

process.env.PRODUCTION ||
	tester.add(
			fromfunction,
			() => {
				return fromfunction(([i, j]) => i, [2, 2]);
			},
			() =>
				array([
					[0, 0],
					[1, 1],
				])
		)
		.add(
			fromfunction,
			() => {
				return fromfunction(([i, j]) => j, [2, 2]);
			},
			() =>
				array([
					[0, 1],
					[0, 1],
				])
		)
		.add(
			fromfunction,
			() => {
				return fromfunction(([i, j]) => i == j, [3, 3]);
			},
			() =>
				array([
					[true, false, false],
					[false, true, false],
					[false, false, true],
				])
		)
		.add(
			fromfunction,
			() => {
				return fromfunction(([i, j]) => i + j, [3, 3]);
			},
			() =>
				array([
					[0, 1, 2],
					[1, 2, 3],
					[2, 3, 4],
				])
		);

;// CONCATENATED MODULE: ./core/fromiter.mjs


/**
 * @param {Iterable} iter
 * @param {number} [count]
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
function fromiter(iter, count = -1, dtype = undefined) {
	let a;
	if (count == -1) a = [...iter];
	else {
		a = [];
		let i = 0;
		if (i < count) {
			for (let value of iter) {
				a.push(value);
				i++;
				if (i >= count) break;
			}
		}
	}
	return array(a, dtype ?? guessType(a));
}

process.env.PRODUCTION ||
	tester.add(
			fromiter,
			() => {
				return fromiter({
					*[Symbol.iterator]() {
						for (let x = 0; x < 5; x++) yield x * x;
					},
				});
			},
			() => array([0, 1, 4, 9, 16])
		)
		.add(
			fromiter,
			() => {
				return fromiter({
					*[Symbol.iterator]() {
						for (let x = 0; x < 5; x++) yield [x + 1, x + 2];
					},
				});
			},
			() =>
				array([
					[1, 2],
					[2, 3],
					[3, 4],
					[4, 5],
					[5, 6],
				])
		);

;// CONCATENATED MODULE: ./core/nonzero.mjs


/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
function nonzero(a) {
	a = atleast_1d(a);
	let { ndim } = a;
	let indices = [];
	for (let i = 0; i < ndim; i++) indices.push([]);
	for (let [index, value] of ndenumerate(a)) {
		if (value) {
			for (let i = 0; i < ndim; i++) {
				indices[i].push(index[i]);
			}
		}
	}
	return indices.map(a => asarray(a));
}

process.env.PRODUCTION ||
	tester.add(
			nonzero,
			() => {
				let x;
				x = array([
					[3, 0, 0],
					[0, 4, 0],
					[5, 6, 0],
				]).at(slice('...'), null);
				return nonzero(x);
			},
			() => [array([0, 1, 2, 2]), array([0, 1, 0, 1]), array([0, 0, 0, 0])]
		)
		.add(
			nonzero,
			() => {
				return nonzero(
					array([
						[false, false, false],
						[true, true, true],
						[true, true, true],
					])
				);
			},
			() => [array([1, 1, 1, 2, 2, 2]), array([0, 1, 2, 0, 1, 2])]
		)
		.add(
			nonzero,
			() => {
				return nonzero(55);
			},
			() => [array([0])]
		);

;// CONCATENATED MODULE: ./core/argwhere.mjs


/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
function argwhere(a) {
	if (ndim(a) == 0) {
		a = atleast_1d(a);
		return argwhere(a).at(slice(), slice(null, 0));
	}
	return transpose(nonzero(a));
}

process.env.PRODUCTION ||
	tester.add(
			argwhere,
			() => argwhere(55).shape,
			() => [1, 0]
		)
		.add(
			argwhere,
			() => argwhere(greater(arange(6).reshape(2, 3), 1)),
			() =>
				array([
					[0, 2],
					[1, 0],
					[1, 1],
					[1, 2],
				])
		);

;// CONCATENATED MODULE: ./core/compress.mjs


/**
 * @param {boolean[]} condition
 * @param {NDArray} a
 * @param {number} [axis]
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
function compress(condition, a, axis = null, out = null) {
	condition = asarray(condition);
	if (condition.ndim != 1) throw 'condition must be a 1-d array';
	return take(a, nonzero(condition)[0], axis, out);
}

process.env.PRODUCTION ||
	tester.add(
			compress,
			() => {
				return compress(
					[0, 1],
					array([
						[1, 2],
						[3, 4],
						[5, 6],
					]),
					0
				);
			},
			() => array([[3, 4]])
		)
		.add(
			compress,
			() => {
				return compress(
					[false, true, true],
					array([
						[1, 2],
						[3, 4],
						[5, 6],
					]),
					0
				);
			},
			() =>
				array([
					[3, 4],
					[5, 6],
				])
		)
		.add(
			compress,
			() => {
				return compress(
					[false, true],
					array([
						[1, 2],
						[3, 4],
						[5, 6],
					]),
					1
				);
			},
			() => array([[2], [4], [6]])
		)
		.add(
			compress,
			() => {
				return compress(
					[false, true],
					array([
						[1, 2],
						[3, 4],
						[5, 6],
					])
				);
			},
			() => array([2])
		);

;// CONCATENATED MODULE: ./core/ravel.mjs


/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
function ravel(a) {
	a = ascontiguousarray(a);
	let { size, base, offset, itemsize } = a;
	a = a.as_strided([size], get_strides([size], 1, itemsize), offset);
	a.base = base;
	return a;
}

process.env.PRODUCTION ||
	tester.add(
			ravel,
			() =>
				ravel(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				),
			() => array([1, 2, 3, 4, 5, 6])
		)
		.add(
			ravel,
			() =>
				ravel(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]).T
				),
			() => array([1, 4, 2, 5, 3, 6])
		)
		.add(
			ravel,
			() => ravel(arange(12).reshape(2, 3, 2).swapaxes(1, 2)),
			() => array([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])
		)
		.add(
			ravel,
			() => {
				let x, y;
				x = arange(40).reshape([5, -1]).copy();
				y = x.at(null, slice(':'), null, null, slice('::2'), null);
				return [y.reshape(-1).base == x, ravel(y).base];
			},
			() => [true, null]
		)
		.add(
			ravel,
			() => {
				let x, y;
				x = arange(40).reshape([5, -1]).copy();
				y = x.at(null, slice(':'), null, null, slice('::3'), null);
				return [y.reshape(-1).base == x, ravel(y).base];
			},
			() => [false, null]
		);

;// CONCATENATED MODULE: ./core/extract.mjs


/**
 *
 * @param {NDArray} condition
 * @param {NDArray} a
 * @returns {NDArray}
 */
function extract(condition, a) {
	return compress(ravel(condition), ravel(a));
}

process.env.PRODUCTION ||
	tester.add(
		extract,
		() => {
			let arr, condition;
			arr = arange(12).reshape([3, 4]);
			condition = array([
				[true, false, false, true],
				[false, false, true, false],
				[false, true, false, false],
			]);
			return extract(condition, arr);
		},
		() => array([0, 3, 6, 9])
	);

;// CONCATENATED MODULE: ./core/flatnonzero.mjs


/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
function flatnonzero(a) {
	return nonzero(ravel(a))[0];
}

process.env.PRODUCTION ||
	tester.add(
		flatnonzero,
		() => {
			let x;
			x = arange(-2, 3);
			return flatnonzero(x);
		},
		() => array([0, 1, 3, 4])
	);

;// CONCATENATED MODULE: ./core/count_nonzero.mjs


/**
 *
 * @param {NDArray} a
 * @param {null|number|number[]} [axis]
 * @param {boolean} [keepdims]
 * @returns {NDArray}
 */
function count_nonzero(a, axis = null, keepdims = false) {
	return sum(not_equal(a, 0), axis, null, keepdims);
}

process.env.PRODUCTION ||
	tester.add(
			count_nonzero,
			() => {
				let x;
				x = ones([2, 3, 4, 5]);
				return count_nonzero(x);
			},
			() => 120
		)
		.add(
			count_nonzero,
			() => {
				let x;
				x = ones([2, 3, 4, 5]);
				return count_nonzero(x, 0);
			},
			() =>
				array([
					[
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
					],

					[
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
					],

					[
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
						[2, 2, 2, 2, 2],
					],
				])
		)
		.add(
			count_nonzero,
			() => {
				let x;
				x = ones([2, 3, 4, 5]);
				return count_nonzero(x, 1);
			},
			() =>
				array([
					[
						[3, 3, 3, 3, 3],
						[3, 3, 3, 3, 3],
						[3, 3, 3, 3, 3],
						[3, 3, 3, 3, 3],
					],

					[
						[3, 3, 3, 3, 3],
						[3, 3, 3, 3, 3],
						[3, 3, 3, 3, 3],
						[3, 3, 3, 3, 3],
					],
				])
		)
		.add(
			count_nonzero,
			() => {
				let x;
				x = ones([2, 3, 4, 5]);
				return count_nonzero(x, -1);
			},
			() =>
				array([
					[
						[5, 5, 5, 5],
						[5, 5, 5, 5],
						[5, 5, 5, 5],
					],

					[
						[5, 5, 5, 5],
						[5, 5, 5, 5],
						[5, 5, 5, 5],
					],
				])
		)
		.add(
			count_nonzero,
			() => {
				let x;
				x = ones([2, 3, 4, 5]);
				return count_nonzero(x, [0, -1]);
			},
			() =>
				array([
					[10, 10, 10, 10],
					[10, 10, 10, 10],
					[10, 10, 10, 10],
				])
		)
		.add(
			count_nonzero,
			() => {
				let x;
				x = ones([2, 3, 4, 5]);
				return count_nonzero(x, [0, -1], true);
			},
			() =>
				array([
					[
						[[10], [10], [10], [10]],

						[[10], [10], [10], [10]],

						[[10], [10], [10], [10]],
					],
				])
		);

;// CONCATENATED MODULE: ./core/numeric.mjs


function normalize_axis(axis, ndim, allow_duplicate = false) {
	// https://github.com/numpy/numpy/blob/857c64a95339bd937fbcc5398246fd2dcf78f3ab/numpy/core/numeric.py#L1331
	if (!Array.isArray(axis)) axis = [axis];
	axis = axis.map(axis => normalize_axis_index(axis, ndim));
	if (!allow_duplicate && new Set(axis).size != axis.length) throw `repeated axis`;
	return axis;
}

const normalize_axis_tuple = normalize_axis;

/** @class */
class Nditer {
	constructor(a, axis = null) {
		this.array = asarray(a);
		let { ndim, shape } = a;
		if (axis != null) axis = normalize_axis(axis, ndim);
		this.axis = axis;
		if (axis != null) {
			let ndshape = [];
			let indices = [];
			let mask = [];
			for (let i = 0; i < ndim; i++) {
				if ((mask[i] = !axis.includes(i))) {
					indices[i] = 0;
					ndshape.push(shape[i]);
				} else {
					indices[i] = slice[":"];
				}
			}
			this.shape = ndshape;
			this.indices = indices;
			this.mask = mask;
		} else {
			this.shape = [a.size];
			this.indices = [0];
			this.mask = null;
		}
	}
	*[Symbol.iterator]() {
		let { array, axis } = this;
		if (axis == null) {
			yield* array.flat;
			return;
		}
		let { shape, mask, indices } = this;
		for (let index of ndindex(shape)) {
			for (let i = 0, j = 0; i < array.ndim; i++) {
				if (mask[i]) {
					indices[i] = index[j++];
				}
			}
			// console.log(indices);
			yield [index, array.get(indices)];
		}
	}
}

/**
 * @param {NDArray} a
 * @param {null|number|number[]} axis
 * @returns {Nditer}
 */
function nditer(a, axis = null) {
	// no. this is not like numpy.iter
	return new Nditer(a, axis);
}

;// CONCATENATED MODULE: ./core/array_equal.mjs


/**
 * @param {NDArray} a1 array-like
 * @param {NDArray} a2 array-like
 * @param {boolean} [equal_nan]
 * @returns {boolean}
 */
function array_equal(a1, a2, equal_nan = false) {
	a1 = asarray(a1);
	a2 = asarray(a2);
	if (!shallow_array_equal(a1.shape, a2.shape)) {
		return false;
	}
	if (equal_nan) {
		return logic_all(equal_nan_map(a1, a2));
	}
	return logic_all(equal(a1, a2));
}

/**
 * @param {NDArray} a1 array-like
 * @param {NDArray} a2 array-like
 * @returns {boolean}
 */
function array_equiv(a1, a2) {
	a1 = asarray(a1);
	a2 = asarray(a2);
	if (!broadcastable(a1.shape, a2.shape)) return false;
	return logic_all(equal(a1, a2));
}

/**
 * @param {any[]} a
 * @param {any[]} b
 * @returns {boolean}
 * @ignore
 */
function shallow_array_equal(a, b) {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}

const equal_nan_map = wrapper_map2(
	'nan_equal',
	(x1, x2) => x1 == x2 || (Number.isNaN(x1) && Number.isNaN(x2))
);

function broadcastable(...shapes) {
	let ndim = 0;
	for (let shape of shapes) ndim = Math.max(ndim, shape.length);

	for (let i = 0; i < ndim; i++) {
		let dim = -1;
		for (let shape of shapes) {
			let idx = shape.length - i - 1;
			if (idx < 0) continue;
			if (dim == -1) dim = shape[idx];
			else if (dim != 1 && dim != shape[idx]) return false;
		}
	}
	return true;
}

process.env.PRODUCTION ||
	tester.add(
			array_equal,
			() => array_equal([1, 2], [1, 2]),
			() => true
		)
		.add(
			array_equal,
			() => array_equal(array([1, 2]), array([1, 2])),
			() => true
		)
		.add(
			array_equal,
			() => array_equal([1, 2], [1, 2, 3]),
			() => false
		)
		.add(
			array_equal,
			() => array_equal([1, 2], [1, 4]),
			() => false
		)
		.add(
			array_equal,
			() => {
				let a = array([1, NaN]);
				return array_equal(a, a);
			},
			() => false
		)
		.add(
			array_equal,
			() => {
				let a = array([1, NaN]);
				return array_equal(a, a, true);
			},
			() => true
		);

process.env.PRODUCTION ||
	tester.add(
			array_equiv,
			() => array_equiv([1, 2], [1, 2]),
			() => true
		)
		.add(
			array_equiv,
			() => array_equiv([1, 2], [1, 3]),
			() => false
		)
		.add(
			array_equiv,
			() =>
				array_equiv(
					[1, 2],
					[
						[1, 2],
						[1, 2],
					]
				),
			() => true
		)
		.add(
			array_equiv,
			() =>
				array_equiv(
					[1, 2],
					[
						[1, 2, 1, 2],
						[1, 2, 1, 2],
					]
				),
			() => false
		)
		.add(
			array_equiv,
			() =>
				array_equiv(
					[1, 2],
					[
						[1, 2],
						[1, 3],
					]
				),
			() => false
		);

;// CONCATENATED MODULE: ./core/concatenate.mjs


/**
 * @param {NDArray[]} arrays
 * @param {null|number} [axis]
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
function concatenate(arrays, axis = 0, out = undefined) {
	if (arrays.length == 0) throw new Error('need at least one array to concatenate');

	arrays = arrays.map(a => asarray(a));
	if (axis == null) {
		arrays = arrays.map(a => ravel(a));
		axis = 0;
	}
	let { ndim, shape } = arrays[0];
	if (ndim == 0) throw new Error('zero-dimensional arrays cannot be concatenated');

	for (let i = 1; i < arrays.length; i++) {
		let array = arrays[i];
		if (array.ndim != ndim) {
			throw new Error(
				`all the input arrays must have same number of dimensions, but the array at index 0 has ${ndim} dimension(s) and the array at index ${i} has ${arrays[i].ndim} dimension(s)`
			);
		}
		for (let j = 0; j < ndim; j++) {
			if (j != axis && array.shape[j] != shape[j]) {
				throw new Error(
					`all the input array dimensions for the concatenation axis must match exactly, but along dimension ${j}, the array at index 0 has size ${shape[j]} and the array at index ${i} has size ${arrays[i].shape[j]}`
				);
			}
		}
	}

	axis = normalize_axis_index(axis, ndim);

	let outshape = shape.slice();
	outshape[axis] = arrays.reduce((a, b) => a + b.shape[axis], 0);

	if (out == null) out = empty(outshape);
	else if (out.ndim != ndim) throw new Error('output array has wrong dimensionality');
	else if (!shallow_array_equal(out.shape, outshape)) throw new Error('output array is the wrong shape');

	let slices = Array(ndim).fill(slice(':'));
	let cumsum = 0;
	for (let array of arrays) {
		slices[axis] = slice(cumsum, (cumsum += array.shape[axis]));
		out.set(slices, array);
	}

	return out;
}

process.env.PRODUCTION ||
	tester.add(
		concatenate,
		() => {
			let a = array([
				[1, 2],
				[3, 4],
			]);
			let b = array([[5, 6]]);
			return [concatenate([a, b], 0), concatenate([a, b.T], 1), concatenate([a, b], null)];
		},
		() => [
			array([
				[1, 2],
				[3, 4],
				[5, 6],
			]),
			array([
				[1, 2, 5],
				[3, 4, 6],
			]),
			array([1, 2, 3, 4, 5, 6]),
		]
	);

;// CONCATENATED MODULE: ./core/moveaxis.mjs


/**
 * @param {NDArray} a
 * @param {number|number[]} src
 * @param {number|number[]} dst
 * @returns {NDArray}
 */
function moveaxis(a, src, dst) {
	a = asarray(a);

	let { ndim } = a;
	src = normalize_axis_tuple(src, ndim);
	dst = normalize_axis_tuple(dst, ndim);

	if (src.length != dst.length) {
		throw new Error(`'src' and 'dst' arguments must have the same number of elements`);
	}

	let order = [...Array(ndim).keys()].filter(x => !src.includes(x));

	for (let i = 0; i < src.length; i++) {
		order.splice(dst[i], 0, src[i]);
	}

	return transpose(a, order);
}

process.env.PRODUCTION ||
	tester.add(
			moveaxis,
			() => moveaxis(zeros([3, 4, 5]), 0, -1).shape,
			() => [4, 5, 3]
		)
		.add(
			moveaxis,
			() => moveaxis(zeros([3, 4, 5]), -1, 0).shape,
			() => [5, 3, 4]
		);

;// CONCATENATED MODULE: ./core/arithmetic.mjs
/**
 * @module math/arithmetic
 */



/**
 * x1 + x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const add = wrapper_map2('add', (x1, x2) => x1 + x2);

/**
 * 1 / x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const reciprocal = wrapper_map('reciprocal', x => 1 / x);

/**
 * +x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const positive = wrapper_map('positive', x => +x);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const negative = wrapper_map('negative', x => -x);

/**
 * x1 * x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const multiply = wrapper_map2('multiply', (x1, x2) => x1 * x2);

/**
 * x1 / x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const divide = wrapper_map2('divide', (x1, x2) => x1 / x2);

/**
 * x1 ** x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const power = wrapper_map2('power', (x1, x2) => x1 ** x2);

/**
 * x1 - x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const subtract = wrapper_map2('subtract', (x1, x2) => x1 - x2);

/**
 * Alias of {@link divide}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const true_divide = divide;

/**
 * (x1 / x2) | 0
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const floor_divide = wrapper_map2('floor_divide', (x1, x2) => (x1 / x2) | 0);

/**
 * Alias of {@link power}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const float_power = power;

/**
 * x1 - ((x1 / x2) | 0) * x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const fmod = wrapper_map2('fmod', (x1, x2) => x1 - ((x1 / x2) | 0) * x2);

/**
 * ((x1 % x2) + x2) % x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const mod = wrapper_map2('mod', (x1, x2) => ((x1 % x2) + x2) % x2);

/**
 * [x % 1, x | 0]
 * @function
 * @param {NDArray} x
 * @param {Array<null|NDArray>} [out = [null, null]]
 * @returns {NDArray[]}
 */
function modf(x, out = [null, null]) {
	return [map_(modf_frac, x, out[0]), map_(modf_int, x, out[1])];
}

const modf_frac = x => x % 1;
const modf_int = x => x | 0;

/**
 * Alias of {@link mod}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const remainder = mod;

/**
 * [x % 1, x | 0]
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {Array<null|NDArray>} [out = [null, null]]
 * @returns {NDArray[]}
 */
function divmod(x1, x2, out = [null, null]) {
	return [floor_divide(x1, x2, out[0]), mod(x1, x2, out[1])];
}

process.env.PRODUCTION ||
	tester.add(
		divmod,
		() => divmod(arange(5), 3),
		() => [array([0, 0, 0, 1, 1]), array([0, 1, 2, 0, 1])]
	);

process.env.PRODUCTION ||
	tester.add(
			modf,
			() => modf([0, 3.5]),
			() => [array([0, 0.5]), array([0, 3])]
		)
		.add(
			modf,
			() => modf(-0.5),
			() => [-0.5, -0]
		);

process.env.PRODUCTION ||
	tester.add(
			fmod,
			() => fmod([-3, -2, -1, 1, 2, 3], 2),
			() => array([-1, 0, -1, 1, 0, 1])
		)
		.add(
			fmod,
			() => remainder([-3, -2, -1, 1, 2, 3], 2),
			() => array([1, 0, 1, 1, 0, 1])
		);

process.env.PRODUCTION ||
	tester.add(
		add,
		() => add(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[0, 2, 4],
				[3, 5, 7],
				[6, 8, 10],
			])
	);

process.env.PRODUCTION ||
	tester.add(
			subtract,
			() => subtract(1.0, 4.0),
			() => -3.0
		)
		.add(
			subtract,
			() => subtract(arange(9.0).reshape([3, 3]), arange(3.0)),
			() =>
				array([
					[0, 0, 0],
					[3, 3, 3],
					[6, 6, 6],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			multiply,
			() => multiply(2.0, 4.0),
			() => 8.0
		)
		.add(
			subtract,
			() => multiply(arange(9.0).reshape([3, 3]), arange(3.0)),
			() =>
				array([
					[0, 1, 4],
					[0, 4, 10],
					[0, 7, 16],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			divide,
			() => divide(2.0, 4.0),
			() => 0.5
		)
		.add(
			divide,
			() => divide(arange(9.0).reshape([3, 3]), arange(3.0)),
			() =>
				array([
					[NaN, 1, 1],
					[Infinity, 4, 2.5],
					[Infinity, 7, 4],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			mod,
			() => mod([4, 7], [2, 3]),
			() => array([0, 1])
		)
		.add(
			mod,
			() => mod(arange(7), 5),
			() => array([0, 1, 2, 3, 4, 0, 1])
		);

process.env.PRODUCTION ||
	tester.add(
			power,
			() => power(arange(6), 3),
			() => array([0, 1, 8, 27, 64, 125])
		)
		.add(
			power,
			() => power(arange(6), [1.0, 2.0, 3.0, 3.0, 2.0, 1.0]),
			() => array([0, 1, 8, 27, 16, 5])
		)
		.add(
			power,
			() =>
				power(
					arange(6),
					array([
						[1, 2, 3, 3, 2, 1],
						[1, 2, 3, 3, 2, 1],
					])
				),
			() =>
				array([
					[0, 1, 8, 27, 16, 5],
					[0, 1, 8, 27, 16, 5],
				])
		)
		.add(
			power,
			() => power(arange(6), array([1, 2, 3, 3, 2, 1])),
			() => array([0, 1, 8, 27, 16, 5])
		);

;// CONCATENATED MODULE: ./core/logic.mjs
/**
 * @module logic
 */



/**
 * x1 && x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const logical_and = wrapper_map2('logical_and', (x1, x2) => x1 && x2, { dtype: 'boolean' });

/**
 * Alias of {@link logical_and}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const and = logical_and;

/**
 * x1 || x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const logical_or = wrapper_map2('logical_or', (x1, x2) => x1 || x2, { dtype: 'boolean' });

/**
 * Alias of {@link logical_or}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const or = logical_or;

/**
 * !x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const logical_not = wrapper_map('logical_not', x => !x, { dtype: 'boolean' });

/**
 * Alias of {@link logical_not}
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const not = logical_not;

/**
 * !x1 != !x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const logical_xor = wrapper_map2('logical_xor', (x1, x2) => !x1 != !x2, { dtype: 'boolean' });

/**
 * Alias of {@link logical_xor}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const xor = logical_xor;

/**
 * accum && !!value
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const logic_all = wrapper_reduce('all', (accum, value) => accum && !!value, true);

/**
 * accum || !!value
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const any = wrapper_reduce('any', (accum, value) => accum || !!value, false);

/**
 * Number.isFinite
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const isfinite = wrapper_map('isfinite', Number.isFinite);

/**
 * n == Infinity || n == -Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const isinf = wrapper_map('isinf', n => n == Infinity || n == -Infinity);

/**
 * Number.isNaN
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const isnan = wrapper_map('isnan', Number.isNaN);

/**
 * n == -Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const isneginf = wrapper_map('isneginf', n => n == -Infinity);

/**
 * n == Infinity
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const isposinf = wrapper_map('isposinf', n => n == Infinity);

process.env.PRODUCTION ||
	tester.add(
			logical_and,
			() => logical_and(true, false),
			() => false
		)
		.add(
			logical_and,
			() => logical_and([true, false], [false, false]),
			() => array([false, false])
		)
		.add(
			logical_and,
			() => {
				let x = arange(5);
				return logical_and(greater(x, 1), less(x, 4));
			},
			() => array([false, false, true, true, false])
		)
		.add(
			logical_and,
			() => logical_and(array([true, false]), array([false, false])),
			() => array([false, false])
		);

process.env.PRODUCTION ||
	tester.add(
			logic_all,
			() =>
				logic_all([
					[true, false],
					[true, true],
				]) == false,
			() => true
		)
		.add(
			logic_all,
			() =>
				logic_all(
					[
						[true, false],
						[true, true],
					],
					0
				),
			() => array([true, false])
		)
		.add(
			logic_all,
			() => logic_all([-1, 4, 5]),
			() => true
		)
		.add(
			logic_all,
			() => {
				let o = array(false);
				return [logic_all([-1, 4, 5], null, o) == o, o];
			},
			() => [true, array(true)]
		)
		.add(
			logic_all,
			() => logic_all([]),
			() => true
		);

process.env.PRODUCTION ||
	tester.add(
			any,
			() =>
				any([
					[true, false],
					[true, true],
				]),
			() => true
		)
		.add(
			any,
			() =>
				any(
					[
						[true, false],
						[false, false],
					],
					0
				),
			() => array([true, false])
		)
		.add(
			any,
			() => any([-1, 0, 5]),
			() => true
		)
		.add(
			any,
			() => any(NaN),
			() => false
		);

;// CONCATENATED MODULE: ./core/math.mjs
/**
 * @module math
 */



/** @type {number} */
const e = Math.E;

/** @type {number} */
const nan = NaN;

/** @type {number} */
const pi = Math.PI;

/** @type {number} */
const inf = Infinity;

/** @type {number} */
const NINF = -Infinity;

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const sin = wrapper_map('sin', Math.sin);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const cos = wrapper_map('cos', Math.cos);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const tan = wrapper_map('tan', Math.tan);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arcsin = wrapper_map('arcsin', Math.asin);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arccos = wrapper_map('arccos', Math.acos);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arctan = wrapper_map('arctan', Math.atan);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const hypot = wrapper_map('hypot', Math.hypot);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arctan2 = wrapper_map('arctan2', Math.atan2);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const degrees = wrapper_map('degrees', x => (x * 180) / pi);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const radians = wrapper_map('radians', x => (x / 180) * pi);

/**
 * @param {NDArray} p
 * @param {number} [period]
 * @param {number} [discont]
 * @returns {NDArray}
 */
function unwrap(p, period = 2 * pi, discont = period / 2) {
	p = asarray(p);
	if (p.ndim != 1) throw 'unwrap currently only supports 1d arrays';

	let unwrapped = [p.data[p.offset]];
	let lastAngle = p.data[p.offset];

	let first = true;
	for (let offset of ndoffset(p.shape, p.strides)) {
		if (first) {
			first = false;
			continue;
		}
		let delta = p.data[p.offset + offset] - lastAngle;
		if (delta > discont) {
			delta -= period;
		} else if (delta < -discont) {
			delta += period;
		}
		let angle = lastAngle + delta;
		unwrapped.push(angle);
		lastAngle = angle;
	}

	return asarray(unwrapped);
}

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const rad2deg = wrapper_map('rad2deg', x => (x * 180) / pi);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const deg2rad = wrapper_map('deg2rad', x => (x / 180) * pi);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const sinh = wrapper_map('sinh', Math.sinh);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const cosh = wrapper_map('cosh', Math.cosh);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const tanh = wrapper_map('tanh', Math.tanh);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arcsinh = wrapper_map('arcsinh', Math.asinh);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arccosh = wrapper_map('arccosh', Math.acosh);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const arctanh = wrapper_map('arctanh', Math.atanh);

/**
 * @param {NDArray} x
 * @param {number} [decimals = 0]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
function around(x, decimals = 0, out = null) {
	x = asarray(x);
	if (out == null) {
		out = empty(x.shape);
	} else if (!shallow_array_equal(out.shape, x.shape)) {
		throw new Error('shape does not match');
	}

	let i = 0;
	for (let value of x.flat) {
		let multiplier = 10 ** decimals;
		let n = value * multiplier;
		let m = Math.round(n);
		let fraction = n % 1;
		if (fraction == 0.5 || fraction == -0.5) {
			m = m % 2 ? m - 1 : m;
		}
		out.itemset(i++, m / multiplier);
	}

	return out;
}

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const rint = wrapper_map('rint', x => {
	let fraction = x % 1;
	let n = Math.round(x);
	if (fraction == 0.5 || fraction == -0.5) {
		n = n % 2 ? n - 1 : n;
	}
	return n;
});

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const fix = wrapper_map('fix', x => Math.sign(x) * Math.floor(Math.abs(x)));

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const floor = wrapper_map('floor', Math.floor);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const ceil = wrapper_map('ceil', Math.ceil);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const trunc = wrapper_map('trunc', Math.trunc);

/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const prod = wrapper_reduce('prod', (x1, x2) => x1 * x2, 1);

/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const sum = wrapper_reduce('sum', (x1, x2) => x1 + x2, 0);

/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const nanprod = wrapper_reduce('nanprod', (x1, x2) => x1 * (isNaN(x2) ? 1 : x2), 1);

/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const nansum = wrapper_reduce('nansum', (x1, x2) => x1 + (isNaN(x2) ? 0 : x2), 0);

/**
 * @function
 * @param {NDArray} a
 * @param {number} [n]
 * @param {number} [axis]
 * @returns {NDArray}
 */
function diff(a, n = 1, axis = -1) {
	a = asarray(a);

	let { ndim } = a;
	axis = normalize_axis_index(axis, ndim);

	let slices1 = Array(ndim).fill(slice());
	let slices2 = Array(ndim).fill(slice());
	slices1[axis] = slice(1, null);
	slices2[axis] = slice(null, -1);

	for (let i = 0; i < n; i++) a = subtract(a.get(slices1), a.get(slices2));

	return a;
}

/**
 * @param {NDArray} a
 * @param {null|NDArray} [to_end]
 * @param {null|NDArray} [to_begin]
 * @returns {NDArray}
 */
function ediff1d(a, to_end = null, to_begin = null) {
	a = diff(reshape(a, -1));

	if (to_begin != null || to_end != null) {
		let arrays = [];
		if (to_begin != null) arrays.push(to_begin);
		arrays.push(a);
		if (to_end != null) arrays.push(to_end);
		a = concatenate(arrays, null);
	}
	return a;
}

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const exp = wrapper_map('exp', Math.exp, 1);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const expm1 = wrapper_map('expm1', x => Math.exp(x) - 1);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const exp2 = wrapper_map('exp2', x => 2 ** x);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const log = wrapper_map('log', Math.log);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const log10 = wrapper_map('log10', Math.log10);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const log2 = wrapper_map('log2', Math.log2);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const log1p = wrapper_map('log1p', Math.log1p);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const logaddexp = wrapper_map2('logaddexp', (x1, x2) => Math.log(Math.exp(x1) + Math.exp(x2)));

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const logaddexp2 = wrapper_map2('logaddexp2', (x1, x2) => Math.log2(2 ** x1 + 2 ** x2));

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const signbit = wrapper_map('signbit', x => x < 0);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const copysign = wrapper_map2('copysign', (x1, x2) => (x2 < 0 ? -Math.abs(x1) : Math.abs(x1)));

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const ldexp = wrapper_map2('ldexp', (x1, x2) => x1 * 2 ** x2);

function _gcd(a, b) {
	while (b != 0) {
		let tmp = b;
		b = a % b;
		a = tmp;
	}
	return a;
}

function _lcm(a, b) {
	return (a * b) / _gcd(a, b);
}

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const lcm = wrapper_map2('lcm', _lcm);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const gcd = wrapper_map2('gcd', _gcd);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const maximum = wrapper_map2('maximum', Math.max);

/**
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const minimum = wrapper_map2('minimum', Math.min);

/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const amax = wrapper_reduce('amax', Math.max, -inf);

/**
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @param {boolean} [keepdims = false]
 * @param {any} [initial = undefined]
 * @param {boolean} [return_scalar = true]
 * @returns {NDArray}
 */
const amin = wrapper_reduce('amin', Math.min, inf);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const sqrt = wrapper_map('sqrt', Math.sqrt);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const cbrt = wrapper_map('cbrt', Math.cbrt);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const square = wrapper_map('square', x => x ** 2);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const abs = wrapper_map('abs', Math.abs),
	absolute = abs;

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const sign = wrapper_map('sign', Math.sign);

/**
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const nan_to_num = wrapper_map('nan_to_num', x => {
	if (isNaN(x)) return 0;
	if (x == Infinity) return Number.MAX_VALUE;
	if (x == -Infinity) return Number.MIN_VALUE;
	return x;
});

process.env.PRODUCTION ||
	tester.add(
			amax,
			() => amax(arange(4).reshape(2, 2)),
			() => 3
		)
		.add(
			amax,
			() => amax(arange(4).reshape(2, 2), 0),
			() => array([2, 3])
		)
		.add(
			amax,
			() => amax(arange(4).reshape(2, 2), 1),
			() => array([1, 3])
		);

process.env.PRODUCTION ||
	tester.add(
			maximum,
			() => maximum([2, 3, 4], [1, 5, 2]),
			() => array([2, 5, 4])
		)
		.add(
			maximum,
			() => maximum(eye(2), [0.5, 2]),
			() =>
				array([
					[1, 2],
					[0.5, 2],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			gcd,
			() => gcd(12, 20),
			() => 4
		)
		.add(
			gcd,
			() => gcd(arange(6), 20),
			() => array([20, 1, 2, 1, 4, 5])
		);

process.env.PRODUCTION ||
	tester.add(
			lcm,
			() => lcm(12, 20),
			() => 60
		)
		.add(
			lcm,
			() => lcm(arange(6), 20),
			() => array([0, 20, 20, 60, 20, 20])
		);

process.env.PRODUCTION ||
	tester.add(
			copysign,
			() => copysign(1.3, -1),
			() => -1.3
		)
		.add(
			copysign,
			() => 1 / copysign(0, 1),
			() => Infinity
		)
		.add(
			copysign,
			() => 1 / copysign(0, -1),
			() => -Infinity
		);

process.env.PRODUCTION ||
	tester.add(
			signbit,
			() => signbit(-1.2),
			() => true
		)
		.add(
			signbit,
			() => signbit(array([1, -2.3, 2.1])),
			() => array([false, true, false])
		);

process.env.PRODUCTION ||
	tester.add(
		logaddexp,
		() => {
			let prob1 = log(1e-50);
			let prob2 = log(2.5e-50);
			let prob12 = logaddexp(prob1, prob2);
			return prob12;
		},
		() => -113.87649168120691
	);

process.env.PRODUCTION ||
	tester.add(
			unwrap,
			() => unwrap([0, 1, 2, -1, 0], 4),
			() => array([0, 1, 2, 3, 4])
		)
		.add(
			unwrap,
			() => unwrap([1, 2, 3, 4, 5, 6, 1, 2, 3], 6),
			() => array([1, 2, 3, 4, 5, 6, 7, 8, 9])
		)
		.add(
			unwrap,
			() => unwrap([2, 3, 4, 5, 2, 3, 4, 5], 4),
			() => array([2, 3, 4, 5, 6, 7, 8, 9])
		);

process.env.PRODUCTION ||
	tester.add(
			around,
			() => around([0.37, 1.64]),
			() => array([0, 2])
		)
		.add(
			around,
			() => around([0.37, 1.64], 1),
			() => array([0.4, 1.6])
		)
		.add(
			around,
			() => around([0.5, 1.5, 2.5, 3.5, 4.5]),
			() => array([0, 2, 2, 4, 4])
		)
		.add(
			around,
			() => around([5, 15, 25, 35, 45], -1),
			() => array([0, 20, 20, 40, 40])
		)
		.add(
			around,
			() => around([-5, -15, -25, -35, -45], -1),
			() => array([0, -20, -20, -40, -40])
		)
		.add(
			around,
			() => around([1, 2, 3, 11], 1),
			() => array([1, 2, 3, 11])
		)
		.add(
			around,
			() => around([1, 2, 3, 11], -1),
			() => array([0, 0, 0, 10])
		);

process.env.PRODUCTION ||
	tester.add(
		rint,
		() => rint(array([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0])),
		() => array([-2, -2, -0, 0, 2, 2, 2])
	);

process.env.PRODUCTION ||
	tester.add(
			fix,
			() => fix(3.14),
			() => 3
		)
		.add(
			fix,
			() => fix(3),
			() => 3
		)
		.add(
			fix,
			() => fix([2.1, 2.9, -2.1, -2.9]),
			() => array([2, 2, -2, -2])
		);

process.env.PRODUCTION ||
	tester.add(
			prod,
			() => prod([]),
			() => 1
		)
		.add(
			prod,
			() => prod([1, 2]),
			() => 2.0
		)
		.add(
			prod,
			() =>
				prod(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 24.0
		)
		.add(
			prod,
			() =>
				prod(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([2, 12])
		)
		.add(
			prod,
			() =>
				prod(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([3, 8])
		)
		.add(
			prod,
			() => prod([1, 2], null, null, null, 5),
			() => 10
		);

process.env.PRODUCTION ||
	tester.add(
			sum,
			() => sum([0.5, 1.5]),
			() => 2.0
		)
		.add(
			sum,
			() =>
				sum([
					[0, 1],
					[0, 5],
				]),
			() => 6
		)
		.add(
			sum,
			() =>
				sum(
					[
						[0, 1],
						[0, 5],
					],
					0
				),
			() => array([0, 6])
		)
		.add(
			sum,
			() =>
				sum(
					[
						[0, 1],
						[0, 5],
					],
					1
				),
			() => array([1, 5])
		)
		.add(
			sum,
			() => sum([10], null, null, null, 5),
			() => 15
		)
		.add(
			sum,
			// a = np.arange(100).reshape(5, -1, 1)[::-2, 2:7]
			// np.sum(a, (0, -1))
			() => sum(arange(100).reshape(5, -1, 1).at(slice('::-2'), slice('2:7')), [0, -1]),
			() => array([126, 129, 132, 135, 138])
		)
		.add(
			sum,
			// a = np.arange(100).reshape(5, -1, 1)[::-2, 2:7]
			// np.sum(a, (0, -1))
			() => {
				let a = arange(100);
				a = a.at(slice(20, -20)).reshape([2, 1, -1, 2]).at(slice('...'), slice('::-1'));
				return sum(a, [1, -2], null, true, -99);
			},
			() => array([[[[426, 411]]], [[[876, 861]]]])
		);

process.env.PRODUCTION ||
	tester.add(
			nanprod,
			() => nanprod(1),
			() => 1
		)
		.add(
			nanprod,
			() => nanprod([1]),
			() => 1
		)
		.add(
			nanprod,
			() => nanprod([1, nan]),
			() => 1.0
		)
		.add(
			nanprod,
			() =>
				nanprod(
					array([
						[1, 2],
						[3, nan],
					])
				),
			() => 6.0
		)
		.add(
			nanprod,
			() =>
				nanprod(
					array([
						[1, 2],
						[3, nan],
					]),
					0
				),
			() => array([3, 2])
		);

process.env.PRODUCTION ||
	tester.add(
			nansum,
			() => nansum(1),
			() => 1
		)
		.add(
			nansum,
			() => nansum([1]),
			() => 1
		)
		.add(
			nansum,
			() => nansum([1, nan]),
			() => 1.0
		)
		.add(
			nansum,
			() =>
				nansum(
					array([
						[1, 1],
						[1, nan],
					])
				),
			() => 3.0
		)
		.add(
			nansum,
			() =>
				nansum(
					array([
						[1, 1],
						[1, nan],
					]),
					0
				),
			() => array([2, 1])
		)
		.add(
			nansum,
			() => nansum([1, nan, inf]),
			() => inf
		)
		.add(
			nansum,
			() => nansum([1, nan, NINF]),
			() => -inf
		);

process.env.PRODUCTION ||
	tester.add(
			diff,
			() => diff(array([1, 2, 4, 7, 0])),
			() => array([1, 2, 3, -7])
		)
		.add(
			diff,
			() => diff(array([1, 2, 4, 7, 0]), 2),
			() => array([1, 1, -10])
		)
		.add(
			diff,
			() =>
				diff(
					array([
						[1, 3, 6, 10],
						[0, 5, 6, 8],
					])
				),
			() =>
				array([
					[2, 3, 4],
					[5, 1, 2],
				])
		)
		.add(
			diff,
			() =>
				diff(
					array([
						[1, 3, 6, 10],
						[0, 5, 6, 8],
					]),
					1,
					0
				),
			() => array([[-1, 2, 0, -2]])
		);

process.env.PRODUCTION ||
	tester.add(
			ediff1d,
			() => ediff1d(array([1, 2, 4, 7, 0])),
			() => array([1, 2, 3, -7])
		)
		.add(
			ediff1d,
			() => ediff1d(array([1, 2, 4, 7, 0]), array([88, 99]), -99),
			() => array([-99, 1, 2, 3, -7, 88, 99])
		)
		.add(
			ediff1d,
			() =>
				ediff1d([
					[1, 2, 4],
					[1, 6, 24],
				]),
			() => array([1, 2, -3, 5, 18])
		);

process.env.PRODUCTION ||
	tester.add(
		abs,
		() => abs(array([-1.2, 1.2])),
		() => array([1.2, 1.2])
	);

process.env.PRODUCTION ||
	tester.add(
		sin,
		() => sin(arange(30).reshape(2, 5, 1, -1, 1)).shape,
		() =>
			array([
				[
					[[[0.0], [0.8414709848078965], [0.9092974268256817]]],
					[[[0.1411200080598672], [-0.7568024953079282], [-0.9589242746631385]]],
					[[[-0.27941549819892586], [0.6569865987187891], [0.9893582466233818]]],
					[[[0.4121184852417566], [-0.5440211108893698], [-0.9999902065507035]]],
					[[[-0.5365729180004349], [0.4201670368266409], [0.9906073556948704]]],
				],
				[
					[[[0.6502878401571168], [-0.2879033166650653], [-0.9613974918795568]]],
					[[[-0.7509872467716762], [0.14987720966295234], [0.9129452507276277]]],
					[[[0.8366556385360561], [-0.008851309290403876], [-0.8462204041751706]]],
					[[[-0.9055783620066238], [-0.13235175009777303], [0.7625584504796028]]],
					[[[0.956375928404503], [0.27090578830786904], [-0.6636338842129675]]],
				],
			]).shape
	);

// console.log(add2.toString(), add.toString());

// let x1, x2, out;
// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// x2 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = Array(x1.length);
// timeit(() => {
// 	for (let i = 0; i < x1.length; i++) {
// 		out[i] = x1[i] + x2[i];
// 	}
// }, 3000);
// // x1 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// // x2 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// x1 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// x2 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// // x1 = ones([121, 40]);
// // x2 = ones([121, 40]);
// out = empty(x1.shape);
// timeit(() => {
// 	add2(x1, x2, out);
// }, 3000);

// out = empty(x1.shape);
// timeit(() => {
// 	add(x1, x2, out);
// }, 3000);

// out = empty(x1.shape);
// timeit(() => {
// 	add3(x1, x2, out);
// }, 3000);

// out = empty(x1.shape);
// timeit(() => {
// 	sum(x1);
// }, 3000);

// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = Array(x1.length);
// timeit(() => {
// 	for (let i = 0; i < x1.length; i++) out[i] = Math.sin(x1[i]);
// });

// x1 = array(x1);
// out = empty(x1.shape);
// sum(x1);
// timeit(() => {
// 	return sin(x1, out);
// });

// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = [];
// timeit(() => {
// 	let sum = 0;
// 	for (let i = 0; i < x1.length; i++) sum = sum + x1[i];
// 	out[0] = sum;
// });
// x1 = array(Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1));
// out = empty([]);
// sum(x1, null, out);
// timeit(() => {
// 	sum(x1, null, out, 0);
// });
// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = [];
// timeit(() => {
// 	let sum = 0;
// 	for (let i = 0; i < x1.length; i++) sum = sum + x1[i];
// 	out[0] = sum;
// });

// tester
// 	.add(
// 		add,
// 		() => add([1.0], [4.0]),
// 		() => 5.0
// 	)
// 	.add(
// 		add,
// 		() => {
// 			let x1, x2;
// 			x1 = arange(9.0).reshape(3, 3);
// 			x2 = arange(3.0);
// 			return add(x1, x2);
// 		},
// 		() =>
// 			array([
// 				[0, 2, 4],
// 				[3, 5, 7],
// 				[6, 8, 10],
// 			])
// 	)
// 	.add(
// 		add,
// 		() => {
// 			let out;
// 			out = empty([2, 2]);
// 			add([1, 2], [3, 4], out);
// 			return out;
// 		},
// 		() =>
// 			array([
// 				[4, 6],
// 				[4, 6],
// 			])
// 	);

;// CONCATENATED MODULE: ./core/bitwise.mjs
/**
 * @module bitwise
 */



/**
 * x1 & x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const bitwise_and = wrapper_map2('bitwise_and', (x1, x2) => x1 & x2);

/**
 * x1 | x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const bitwise_or = wrapper_map2('bitwise_or', (x1, x2) => x1 | x2);

/**
 * x1 ^ x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const bitwise_xor = wrapper_map2('bitwise_xor', (x1, x2) => x1 ^ x2);

/**
 * ~x
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const bitwise_not = wrapper_map('bitwise_not', x => ~x);

/**
 * Alias of {@link bitwise_not}
 * @function
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const invert = bitwise_not;

/**
 * x1 << x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const left_shift = wrapper_map2('left_shift', (x1, x2) => x1 << x2);

/**
 * x1 >> x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const right_shift = wrapper_map2('right_shift', (x1, x2) => x1 >> x2);

process.env.PRODUCTION ||
	tester.add(
			invert,
			() => invert([13]),
			() => array([-14])
		)
		.add(
			bitwise_and,
			() => bitwise_and(13, 17),
			() => 1
		)
		.add(
			bitwise_and,
			() => bitwise_and([11, 7], [4, 25]),
			() => array([0, 1])
		)
		.add(
			bitwise_and,
			() => bitwise_and(array([2, 5, 255]), array([3, 14, 16])),
			() => array([2, 4, 16])
		)
		.add(
			bitwise_and,
			() => bitwise_and([true, true], [false, true]),
			() => array([false, true])
		);

process.env.PRODUCTION ||
	tester.add(
		bitwise_or,
		() => bitwise_or([33, 4], 1),
		() => array([33, 5])
	);

process.env.PRODUCTION ||
	tester.add(
		bitwise_xor,
		() => {
			// xor swap
			let a = [1, 2, 3];
			let b = [4, 5, 6];
			a = bitwise_xor(a, b);
			b = bitwise_xor(a, b);
			a = bitwise_xor(a, b);
			return [a, b];
		},
		() => [
			[4, 5, 6],
			[1, 2, 3],
		]
	);

process.env.PRODUCTION ||
	tester.add(
		left_shift,
		() => left_shift(5, [1, 2, 3]),
		() => array([10, 20, 40])
	);

process.env.PRODUCTION ||
	tester.add(
		right_shift,
		() => right_shift(10, [1, 2, 3]),
		() => array([5, 2, 1])
	);

;// CONCATENATED MODULE: ./core/comparison.mjs
/**
 * @module comparison
 */



/**
 * x1 == x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const equal = wrapper_map2('equal', (x1, x2) => x1 == x2, { dtype: 'boolean' });

/**
 * x1 != x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const not_equal = wrapper_map2('not_equal', (x1, x2) => x1 != x2, { dtype: 'boolean' });

/**
 * x1 < x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const less = wrapper_map2('less', (x1, x2) => x1 < x2, { dtype: 'boolean' });

/**
 * x1 <= x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const less_equal = wrapper_map2('less_equal', (x1, x2) => x1 <= x2, { dtype: 'boolean' });

/**
 * x1 > x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const greater = wrapper_map2('greater', (x1, x2) => x1 > x2, { dtype: 'boolean' });

/**
 * x1 >= x2
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const greater_equal = wrapper_map2('greater_equal', (x1, x2) => x1 >= x2, { dtype: 'boolean' });

/**
 * Alias of {@link equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const eq = equal;

/**
 * Alias of {@link not_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const neq = not_equal;

/**
 * Alias of {@link less}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const lt = less;

/**
 * Alias of {@link less_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const lte = less_equal;

/**
 * Alias of {@link greater}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const gt = greater;

/**
 * Alias of {@link greater_equal}
 * @function
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const gte = greater_equal;

process.env.PRODUCTION ||
	tester.add(
			equal,
			() => equal([0, 1, 3], arange(3)),
			() => array([true, true, false])
		)
		.add(
			equal,
			() => equal(1, ones(1)),
			() => array([true])
		)
		.add(
			equal,
			() => equal(array([2, 4, 6]), array([2, 4, 2])),
			() => array([true, true, false])
		);

process.env.PRODUCTION ||
	tester.add(
			not_equal,
			() => not_equal([1, 2], [1, 3]),
			() => array([false, true])
		)
		.add(
			not_equal,
			() =>
				not_equal(
					[1, 2],
					[
						[1, 3],
						[1, 4],
					]
				),
			() =>
				array([
					[false, true],
					[false, true],
				])
		);

process.env.PRODUCTION ||
	tester.add(
		less_equal,
		() => less_equal([4, 2, 1], [2, 2, 2]),
		() => array([false, true, true])
	);

process.env.PRODUCTION ||
	tester.add(
		less,
		() => less([1, 2], [2, 2]),
		() => array([true, false])
	);

process.env.PRODUCTION ||
	tester.add(
		greater_equal,
		() => greater_equal([4, 2, 1], [2, 2, 2]),
		() => array([true, true, false])
	);

process.env.PRODUCTION ||
	tester.add(
		greater,
		() => greater([4, 2], [2, 2]),
		() => array([true, false])
	);

;// CONCATENATED MODULE: ./core/gradient.mjs


// TBD

function gradient(f, varargs, axis = null, edge_order = 1) {
	throw new Error();
}

;// CONCATENATED MODULE: ./core/cross.mjs


/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [axis]
 * @param {number} [axisa]
 * @param {number} [axisb]
 * @param {number} [axisc]
 * @returns {NDArray}
 */
function cross(a, b, axis = -1, axisa = axis, axisb = axis, axisc = axis) {
	a = asarray(a);
	b = asarray(b);

	axisa = normalize_axis_index(axisa, a.ndim);
	axisb = normalize_axis_index(axisb, b.ndim);

	a = moveaxis(a, axisa, -1);
	b = moveaxis(b, axisb, -1);

	let lasta = a.shape.at(-1);
	let lastb = b.shape.at(-1);
	if ((lasta != 2 && lasta != 3) || (lastb != 2 && lastb != 3)) {
		throw `incompatible dimensions for cross product (dimension must be 2 or 3)`;
	}

	let shape = broadcast_shapes(a.shape.slice(0, -1), b.shape.slice(0, -1));

	if (a.shape.at(-1) == 3 || b.shape.at(-1) == 3) {
		shape = [...shape, 3];
		axisc = normalize_axis_index(axisc, shape.length);
	}

	let cp = empty(shape);

	let a0, a1, a2;
	let b0, b1, b2;
	let cp0, cp1, cp2;

	a0 = a.at('...', 0);
	a1 = a.at('...', 1);
	if (a.shape.at(-1) == 3) a2 = a.at('...', 2);

	b0 = b.at('...', 0);
	b1 = b.at('...', 1);
	if (b.shape.at(-1) == 3) b2 = b.at('...', 2);
	if (cp.ndim != 0 && cp.shape.at(-1) == 3) {
		cp0 = cp.at('...', 0);
		cp1 = cp.at('...', 1);
		cp2 = cp.at('...', 2);
	}

	if (a.shape.at(-1) == 2) {
		if (b.shape.at(-1) == 2) {
			multiply(a0, b1, cp);
			subtract(cp, multiply(a1, b0), cp);
			return cp;
		} else {
			if (b.shape.at(-1) != 3) throw 'b.shape.at(-1) != 3';
			multiply(a1, b2, cp0);
			multiply(a0, b2, cp1);
			negative(cp1, cp1);
			multiply(a0, b1, cp2);
			subtract(cp2, multiply(a1, b0), cp2);
		}
	} else {
		if (a.shape.at(-1) != 3) throw 'a.shape.at(-1) != 3';
		if (b.shape.at(-1) == 3) {
			multiply(a1, b2, cp0);
			let tmp = multiply(a2, b1);
			subtract(cp0, tmp, cp0);
			multiply(a2, b0, cp1);
			multiply(a0, b2, tmp);
			subtract(cp1, tmp, cp1);
			multiply(a0, b1, cp2);
			multiply(a1, b0, tmp);
			subtract(cp2, tmp, cp2);
		} else {
			if (b.shape.at(-1) != 2) throw 'b.shape.at(-1) != 2';
			multiply(a2, b1, cp0);
			negative(cp0, cp0);
			multiply(a2, b0, cp1);
			multiply(a0, b1, cp2);
			subtract(cp2, multiply(a1, b0), cp2);
		}
	}

	return moveaxis(cp, -1, axisc);
}

process.env.PRODUCTION ||
	tester.add(
			cross,
			() => cross([1, 2, 3], [4, 5, 6]),
			() => array([-3, 6, -3])
		)
		.add(
			cross,
			() => cross([1, 2], [4, 5, 6]),
			() => array([12, -6, -3])
		)
		.add(
			cross,
			() => cross([1, 2, 0], [4, 5, 6]),
			() => array([12, -6, -3])
		)
		.add(
			cross,
			() => cross([1, 2], [4, 5]),
			() => array(-3)
		)
		.add(
			cross,
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				let y = array([
					[4, 5, 6],
					[1, 2, 3],
				]);
				return cross(x, y);
			},
			() =>
				array([
					[-3, 6, -3],
					[3, -6, 3],
				])
		)
		.add(
			cross,
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				let y = array([
					[4, 5, 6],
					[1, 2, 3],
				]);
				return cross(x, y, undefined, undefined, undefined, 0);
			},
			() =>
				array([
					[-3, 3],
					[6, -6],
					[-3, 3],
				])
		)
		.add(
			cross,
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				]);
				let y = array([
					[7, 8, 9],
					[4, 5, 6],
					[1, 2, 3],
				]);
				return [cross(x, y), cross(x, y, undefined, 0, 0)];
			},
			() => [
				array([
					[-6, 12, -6],
					[0, 0, 0],
					[6, -12, 6],
				]),
				array([
					[-24, 48, -24],
					[-30, 60, -30],
					[-36, 72, -36],
				]),
			]
		);

;// CONCATENATED MODULE: ./core/trapz.mjs


/**
 *
 * @param {NDArray} y
 * @param {null|NDArray} [x]
 * @param {number} [dx]
 * @param {number} [axis]
 * @returns {NDArray}
 */
function trapz(y, x = null, dx = 1.0, axis = -1) {
	y = asarray(y);
	let { ndim } = y;
	axis = normalize_axis_index(axis, ndim);
	let d = dx;
	if (x != null) {
		x = asarray(x);
		if (x.ndim == 1) {
			d = diff(x);
			let shape = Array(ndim).fill(1);
			shape[axis] = d.shape[0];
			d = d.reshape(shape);
		} else {
			d = diff(x, null, axis);
		}
	}
	let slice1 = Array(ndim).fill(slice());
	let slice2 = Array(ndim).fill(slice());
	slice1[axis] = slice(1, null);
	slice2[axis] = slice(null, -1);
	let tmp;
	tmp = add(y.get(slice1), y.get(slice2));
	multiply(d, tmp, tmp);
	divide(tmp, 2.0, tmp);

	return sum(tmp, axis);
}

process.env.PRODUCTION ||
	tester.add(
			trapz,
			() => trapz([1, 2, 3]),
			() => 4.0
		)
		.add(
			trapz,
			() => trapz([1, 2, 3], [4, 6, 8]),
			() => 8.0
		)
		.add(
			trapz,
			() => trapz([1, 2, 3], null, 2),
			() => 8.0
		)
		.add(
			trapz,
			() => trapz([1, 2, 3], [8, 6, 4]),
			() => -8.0
		)
		.add(
			trapz,
			() => trapz(arange(6).reshape(2, 3), undefined, undefined, 0),
			() => array([1.5, 2.5, 3.5])
		)
		.add(
			trapz,
			() => trapz(arange(6).reshape(2, 3), undefined, undefined, 1),
			() => array([2, 8])
		);

;// CONCATENATED MODULE: ./core/convolve.mjs


/**
 * @param {NDArray} a
 * @param {NDArray} v
 * @param {string} [mode]
 * @returns {NDArray}
 */
function convolve(a, v, mode = 'full') {
	a = atleast_1d(a);
	v = atleast_1d(v);
	if (a.size == 0) throw 'a cannot be empty';
	if (v.size == 0) throw 'v cannot be empty';
	if (a.ndim > 1 || v.ndim > 1) throw 'object too deep for desired array';
	if (v.ndim > a.ndim) {
		let tmp = a;
		a = v;
		v = tmp;
	}
	let length = a.size;
	if (mode == 'valid') length += 1 - v.size;
	else if (mode == 'full') length += v.size - 1;
	else if (mode != 'same') throw `mode must be one of 'valid', 'same', or 'full' (got '${mode}')`;
	let data = Array(length);
	let ind = 0;
	if (mode != 'valid') {
		for (let i = 0; i < v.size - 1; i++) {
			let sum = 0;
			for (let j = i + 1, k = 0; j--; k++) {
				sum += a.item(k) * v.item(j);
			}
			data[ind++] = sum;
		}
	}
	for (let i = 0; i < a.size + 1 - v.size; i++) {
		let sum = 0;
		for (let j = 0, k = v.size - 1; j < v.size; j++, k--) sum += a.item(i + j) * v.item(k);
		data[ind++] = sum;
	}
	if (mode != 'valid') {
		for (let i = 0; i < v.size - 1; i++) {
			let sum = 0;
			for (let j = 0; j < v.size - 1 - i; j++) {
				sum += a.item(a.size - v.size + 1 + i + j) * v.item(v.size - 1 - j);
			}
			data[ind++] = sum;
		}
	}
	if (mode == 'same') data = data.slice(((v.size - 1) / 2) | 0, (((v.size - 1) / 2) | 0) + length);
	return array(data);
}

process.env.PRODUCTION ||
	tester.add(
			convolve,
			() => convolve([1, 2, 3], [0, 1, 0.5]),
			() => array([0, 1, 2.5, 4, 1.5])
		)
		.add(
			convolve,
			() => convolve([1, 2, 3], [1, 0.5], 'full'),
			() => array([1, 2.5, 4, 1.5])
		)
		.add(
			convolve,
			() => convolve([1, 2, 3], [0, 1, 0.5], 'same'),
			() => array([1, 2.5, 4])
		)
		.add(
			convolve,
			() => convolve([1, 2, 3], [0, 1, 0.5], 'valid'),
			() => array([2.5])
		);

;// CONCATENATED MODULE: ./core/clip.mjs


/**
 * @param {NDArray} a array-like
 * @param {NDArray} a_min array-like
 * @param {NDArray} a_max array-like
 * @param {NDArray} out
 * @returns {NDArray}
 */
function clip_clip(a, a_min, a_max, out = null) {
	a = asarray(a);
	if (out == null) out = empty_like(a);
	else if (!shallow_array_equal(a.shape, out.shape)) throw `out shape does not match input shape`;
	if (isscalar(a_min) && isscalar(a_max)) {
		let a_offset = ndoffset(a.shape, a.strides)[Symbol.iterator]();
		for (let offset of ndoffset(out.shape, out.strides)) {
			out.data[offset] = Math.min(Math.max(a_min, a.data[a_offset.next().value]), a_max);
		}
		return out;
	}
	a_min = broadcast_to(a_min, a.shape);
	a_max = broadcast_to(a_max, a.shape);
	let a_offset = ndoffset(a.shape, a.strides)[Symbol.iterator]();
	let a_min_offset = ndoffset(a_min.shape, a_min.strides)[Symbol.iterator]();
	let a_max_offset = ndoffset(a_max.shape, a_max.strides)[Symbol.iterator]();
	for (let offset of ndoffset(out.shape, out.strides)) {
		out.data[offset] = Math.min(
			Math.max(a_min.data[a_min_offset.next().value], a.data[a_offset.next().value]),
			a_max.data[a_max_offset.next().value]
		);
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			clip_clip,
			() => clip_clip(arange(10), 1, 8),
			() => array([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])
		)
		.add(
			clip_clip,
			() => clip_clip(arange(10), 8, 1),
			() => array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
		)
		.add(
			clip_clip,
			() => {
				let a = arange(10);

				return [clip_clip(a, 3, 6, a), a];
			},
			() => [array([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), array([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]
		)
		.add(
			clip_clip,
			() => clip_clip(arange(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8),
			() => array([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])
		);

;// CONCATENATED MODULE: ./core/argsort.mjs


/**
 * @param {NDArray} a
 * @param {number} axis
 * @param {Function} key
 * @returns {NDArray}
 */
function argsort(a, axis = -1, key = null) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let out = empty_like(a);

	// let Ni = a.shape.slice(0, axis);
	// let M = a.shape[axis];
	// let Nk = a.shape.slice(axis + 1);

	// let Si = a.strides.slice(0, axis);
	// let T = a.strides[axis];
	// let Sk = a.strides.slice(axis + 1);

	// let _Si = out.strides.slice(0, axis);
	// let _T = out.strides[axis];
	// let _Sk = out.strides.slice(axis + 1);

	let tmp = Array(a.shape[axis]);
	let indices = Array(a.shape[axis]);
	let cmp = (i, j) => tmp[i] - tmp[j];

	let shape = a.shape.slice();
	shape[axis] = 1;

	for (let ii of ndindex(shape)) {
		// for (let ii of ndindex(Ni)) {
		// 	for (let kk of ndindex(Nk)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		// for (let i = 0; i < Si.length; i++) {
		// 	offset += ii[i] * Si[i];
		// 	_offset += ii[i] * _Si[i];
		// }
		// for (let i = 0; i < Sk.length; i++) {
		// 	offset += ii[i + Si.length + 1] * Sk[i];
		// 	_offset += ii[i + Si.length + 1] * _Sk[i];
		// }
		for (let i = 0; i < a.shape[axis]; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			tmp[i] = key != null ? key(value) : value;
			indices[i] = i;
		}
		indices.sort(cmp);
		for (let i = 0; i < a.shape[axis]; i++) {
			out.data[_offset + i * out.strides[axis]] = indices[i];
		}
	}
	// }

	return out;
}

argsort(
	array([
		[
			[0, 3],
			[2, 2],
			[2, 2],
		],
		[
			[8, 5],
			[4, 1],
			[6, -2],
		],
	]),
	0
);

process.env.PRODUCTION ||
	tester.add(
			argsort,
			() => argsort([3, 1, 2]),
			() => array([1, 2, 0])
		)
		.add(
			argsort,
			() =>
				argsort(
					array([
						[0, 3],
						[2, 2],
					]),
					0
				),
			() =>
				array([
					[0, 1],
					[1, 0],
				])
		)
		.add(
			argsort,
			() =>
				argsort(
					array([
						[0, 3],
						[2, 2],
					]),
					1
				),
			() =>
				array([
					[0, 1],
					[0, 1],
				])
		)
		.add(
			argsort,
			() =>
				argsort(
					array([
						[
							[0, 3],
							[2, 2],
							[2, 2],
						],
						[
							[8, 5],
							[4, 1],
							[6, -2],
						],
					]),
					0
				),
			() =>
				array([
					[
						[0, 0],
						[0, 1],
						[0, 1],
					],

					[
						[1, 1],
						[1, 0],
						[1, 0],
					],
				])
		)
		.add(
			argsort,
			() =>
				argsort(
					array([
						[
							[0, 3],
							[2, 2],
							[2, 2],
						],
						[
							[8, 5],
							[4, 1],
							[6, -2],
						],
					]),
					1
				),
			() =>
				array([
					[
						[0, 1],
						[1, 2],
						[2, 0],
					],

					[
						[1, 2],
						[2, 1],
						[0, 0],
					],
				])
		)
		.add(
			argsort,
			() =>
				argsort(
					array([
						[
							[0, 3],
							[2, 2],
							[2, 2],
						],
						[
							[8, 5],
							[4, 1],
							[6, -2],
						],
					]),
					2
				),
			() =>
				array([
					[
						[0, 1],
						[0, 1],
						[0, 1],
					],

					[
						[1, 0],
						[1, 0],
						[1, 0],
					],
				])
		);

;// CONCATENATED MODULE: ./core/sort.mjs


/**
 * @param {NDArray} a
 * @param {null|number} axis
 * @param {Function} key
 * @returns {NDArray}
 */
function sort(a, axis = -1, key = null) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let out = empty_like(a);
	let tmp = Array(a.shape[axis]);
	let cmp = (a, b) => a - b;

	let shape = a.shape.slice();
	shape[axis] = 1;

	for (let ii of ndindex(shape)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		for (let i = 0; i < a.shape[axis]; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			tmp[i] = key != null ? key(value) : value;
		}
		tmp.sort(cmp);
		for (let i = 0; i < a.shape[axis]; i++) {
			out.data[_offset + i * out.strides[axis]] = tmp[i];
		}
	}

	return out;
}

process.env.PRODUCTION ||
	tester.add(
			sort,
			() =>
				sort(
					array([
						[1, 4],
						[3, 1],
					])
				),
			() =>
				array([
					[1, 4],
					[1, 3],
				])
		)
		.add(
			sort,
			() =>
				sort(
					array([
						[1, 4],
						[3, 1],
					]),
					null
				),
			() => array([1, 1, 3, 4])
		)
		.add(
			sort,
			() =>
				sort(
					array([
						[1, 4],
						[3, 1],
					]),
					0
				),
			() =>
				array([
					[1, 1],
					[3, 4],
				])
		);

;// CONCATENATED MODULE: ./core/interp.mjs


/**
 * @param {NDArray} x
 * @param {NDArray} xp
 * @param {NDArray} fp
 * @param {null|number} [left]
 * @param {null|number} [right]
 * @param {null|number} [period]
 * @returns {NDArray}
 */
function interp(x, xp, fp, left = null, right = null, period = null) {
	// not going to very strict check
	[x, xp, fp] = [x, xp, fp].map(a => asarray(a));
	if (xp.ndim != 1 || fp.ndim != 1) throw `Data points must be 1-D sequences`;
	if (xp.shape[0] != fp.shape[0]) throw `fp and xp are not of the same length`;

	if (period != null) {
		x = mod(x, period);
		xp = mod(xp, period);
		let asort_xp = argsort(xp);
		// console.log(xp, asort_xp);
		xp = xp.at(asort_xp);
		fp = fp.at(asort_xp);
		xp = concatenate([subtract(xp.at(slice(-1)), period), xp, add(xp.at(slice(0, 1)), period)]);
		fp = concatenate([fp.at(slice(-1)), fp, fp.at(slice(0, 1))]);
	}

	left ??= fp.item(0);
	right ??= fp.item(-1);

	let data = Array(x.size);
	let i = 0;
	let lower = xp.item(0);
	let upper = xp.item(-1);
	for (let value of x.flat) {
		let y;
		if (value < lower) {
			y = left;
		} else if (value > upper) {
			y = right;
		} else {
			let i = 1;
			for (; i < xp.length && value > xp.item(i); i++);
			let x1 = xp.item(i - 1);
			if (value == x1) {
				y = fp.item(i - 1);
			} else {
				let x2 = xp.item(i);
				if (value == x2) {
					y = fp.item(i);
				} else {
					let y1 = fp.item(i - 1);
					let y2 = fp.item(i);

					y = ((value - x1) * (y2 - y1)) / (x2 - x1) + y1;
				}
			}
		}
		data[i++] = y;
	}

	return array(data).reshape(x.shape);
}

process.env.PRODUCTION ||
	tester.add(
			interp,
			() => interp(2.5, [1, 2, 3], [3, 2, 0]),
			() => 1.0
		)
		.add(
			interp,
			() => interp(4.5, [6, 4, 5], [3, 2, 0]),
			() => 3
		)
		.add(
			interp,
			() => interp([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]),
			() => array([3, 3, 2.5, 1.0, 0])
		)
		.add(
			interp,
			() =>
				interp(
					[-180, -170, -185, 185, -10, -5, 0, 365],
					[190, -190, 350, -350],
					[5, 10, 3, 4],
					null,
					null,
					360
				),
			() => array([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75])
		);
// .add(
// 	interp,
// 	() => interp(3.14, [1, 2, 3], [3, 2, 0], null, -99.0),
// 	() => -99.0
// )
// .add(
// 	interp,
// 	() =>
// 		interp(
// 			[-180, -170, -185, 185, -10, -5, 0, 365],
// 			[190, -190, 350, -350],
// 			[5, 10, 3, 4],
// 			null,
// 			null,
// 			360
// 		),
// 	() => array([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75])
// );

;// CONCATENATED MODULE: ./core/random.pick.mjs
function accum_sum(p) {
	// O(n)
	let accum = Array(p.length);
	let prev = (accum[0] = p[0]);
	for (let i = 1; i < p.length; i++) accum[i] = prev += p[i];
	return accum;
}

function random_pick_sum(arr) {
	// O(n)
	let sum = 0;
	for (let i = 0; i < arr.length; i++) sum += arr[i];
	return sum;
}

function direct_linear_search(p, sum, rand) {
	// O(n)
	let r = rand() * sum;
	let n = p.length - 1;
	for (let i = 0; i < n; i++) {
		r -= p[i];
		if (r < 0) return i;
	}
	return n;
}

function cumsum_binary_search(cumsum, sum, rand) {
	// O(log n)
	let n = rand() * sum;
	let left = 0;
	let right = cumsum.length - 1;
	while (left < right) {
		let middle = (left + right) >> 1;
		if (n > cumsum[middle]) left = middle + 1;
		else right = middle;
	}
	return left;
}

function vose_alias_table(p) {
	// O(n)
	// https://www.keithschwarz.com/darts-dice-coins/
	let n = p.length;
	let small = [];
	let large = [];
	let scale = n / random_pick_sum(p);
	p = p.map(x => x * scale);
	for (let i = 0; i < n; i++) {
		if (p[i] < 1) small.push(i);
		else large.push(i);
	}

	let prob = Array(n);
	let alias = Array(n);
	while (small.length > 0 && large.length > 0) {
		let l = small.pop();
		let g = large.pop();
		prob[l] = p[l];
		alias[l] = g;
		p[g] = p[g] + p[l] - 1;
		if (p[g] < 1) small.push(g);
		else large.push(g);
	}

	while (large.length > 0) {
		prob[large.pop()] = 1;
	}

	while (small.length > 0) {
		prob[small.pop()] = 1;
	}

	return { n, prob, alias };
}

function sample_table(n, prob, alias, rand) {
	// O(1)
	let i = (rand() * n) | 0;
	return rand() < prob[i] ? i : alias[i];
}

function sum_tree(p) {
	// O(nlog n)
	let n = p.length;

	let level = Math.ceil(Math.log2(n));
	let size = 1 << level;
	let tree = Array(size * 2 - 1);
	let offset = size - 1;
	for (let i = 0; i < n; i++) tree[offset + i] = p[i];
	for (let i = n; i < size; i++) tree[offset + i] = 0;

	let parent = offset;
	while (size > 1) {
		let leaf = parent;
		parent -= size >>= 1;
		for (let i = 0; i < size; i++) {
			tree[parent + i] = tree[leaf] + tree[leaf + 1];
			leaf += 2;
		}
	}

	return { tree, level, offset };
}

function set_tree(tree, offset, i, value) {
	// O(log n)
	i += offset;
	let diff = value - tree[i];
	while (i >= 0) {
		tree[i] += diff;
		i = (i - 1) >> 1;
	}
}

function sample_tree(tree, level, offset, rand) {
	// O(log n)
	let r = rand() * tree[0];
	let i = 1;
	while (--level) {
		if (r > tree[i]) r -= tree[i++];
		i = i * 2 + 1;
	}
	if (r > tree[i]) i++;
	return i - offset;
}

/**
 * @param {number} size
 * @param {null|number[]} [p]
 * @param {boolean} [replace]
 * @param {string} [method]
 * @param {any[]} [data]
 * @param {Function} [rand]
 * @returns {any[]}
 */
function pick(
	size,
	p = null,
	replace = true,
	method = 'auto',
	data = Array(size),
	rand = Math.random
) {
	// big-O complexity is obvious but constants still affect the running time
	// method = 'auto' chooses either {linear, binary, alias, sumtree} based on size and n = p.length
	let n = p.length;
	replace ||= size == 1;
	if (replace) {
		if (method == 'auto') {
			if (size == 1 || size * n < 600) method = 'linear';
			else if (size > (n > 100 ? n * 2 : 50)) method = 'alias';
			else method = 'binary';
		}

		switch (method) {
			case 'linear': {
				let s = random_pick_sum(p);
				for (let i = 0; i < size; i++) {
					data[i] = direct_linear_search(p, s, rand);
				}
				break;
			}
			case 'binary': {
				let cumsum = accum_sum(p);
				let s = cumsum.at(-1);
				for (let i = 0; i < size; i++) {
					data[i] = cumsum_binary_search(cumsum, s, rand);
				}
				break;
			}
			case 'alias': {
				let { n, prob, alias } = vose_alias_table(p);
				for (let i = 0; i < size; i++) {
					data[i] = sample_table(n, prob, alias, rand);
				}
				break;
			}
			case 'sumtree': {
				let { tree, level, offset } = sum_tree(p);
				for (let i = 0; i < size; i++) {
					data[i] = sample_tree(tree, level, offset, rand);
				}
				break;
			}
			default:
				throw `unexpected method '${method}'`;
		}
	} else {
		if (size > p) throw `size > p is not allowed when replace = true`;
		if (method == 'auto') {
			if (n + size < 150) method = 'linear';
			else if (n + size < 200) method = 'binary';
			else method = 'sumtree';
		}

		switch (method) {
			case 'linear': {
				let s = random_pick_sum(p);
				p = p.slice();
				for (let i = 0; i < size; i++) {
					let ind = (data[i] = direct_linear_search(p, s, rand));
					s -= p[ind];
					p[ind] = 0;
				}
				break;
			}
			case 'binary': {
				let cumsum = accum_sum(p);
				let sum = cumsum.at(-1);
				for (let i = 0; i < size; i++) {
					let ind = (data[i] = cumsum_binary_search(cumsum, sum, rand));
					let value = p[i];
					for (let i = ind; i < cumsum.length; i++) cumsum[i] -= value;
					sum -= value;
				}
				break;
			}
			case 'alias': {
				p = p.slice();
				for (let i = 0; i < size; i++) {
					let { n, prob, alias } = vose_alias_table(p);
					let ind = (data[i] = sample_table(n, prob, alias, rand));
					p[ind] = 0;
				}
				break;
			}
			case 'sumtree': {
				let { tree, level, offset } = sum_tree(p);
				for (let i = 0; i < size; i++) {
					let ind = (data[i] = sample_tree(tree, level, offset, rand));
					set_tree(tree, offset, ind, 0);
				}
				break;
			}
			default:
				throw `unexpected method '${method}'`;
		}
	}
	return data;
}

// [0, 1, 2, 3, (4)[0 + 1], (5)[2 + 3], (6)[4 + 5]];

// tester.onload(() => {
// 	let p = [5, 1, 0, 3, 2, 4];
// 	// p = [5, 1];
// 	// let accum = accum_sum([0.5, 0.1, 0, 0.1, 0.2, 0.3]);
// 	// console.log(accum);

// 	// console.log(binary_search(accum, 0.51), binary_search(accum, 0.5));
// 	// console.log('vose_alias_table', vose_alias_table([0.5, 0.1, 0, 0.1, 0.2, 0.3]));
// 	// console.log('pick', pick(200, [0.5, 0.1, 0, 0.1, 0.2, 0.3]));

// 	// console.log(sumtree([0.5, 0.1, 0, 0.1, 0.2, 0.3]));
// 	// console.log(sumtree([1, 2, 3, 4, 5, 6, 7, 8]));

// 	// let { tree, level, offset } = sumtree(p);
// 	// // set(tree, 7, 6);
// 	// console.log(tree);
// 	// console.log(sample_tree(tree, level, offset));
// 	// console.log(
// 	// 	Array(4)
// 	// 		.fill()
// 	// 		.map(() => {
// 	// 			let i = sample_tree(tree, level, offset);
// 	// 			// set_tree(tree, offset, i, 0);
// 	// 			return i;
// 	// 		})
// 	// );
// 	// console.log(tree);

// 	// let { n, prob, alias } = vose_alias_table(p);
// 	// console.log(
// 	// 	Array(100)
// 	// 		.fill()
// 	// 		.map(() => sample_table(n, prob, alias))
// 	// );

// 	// console.log(
// 	// 	Array(100)
// 	// 		.fill()
// 	// 		.map(() => direct_linear_search(p))
// 	// );

// 	// let cumsum = accum_sum(p),
// 	// 	sum = cumsum.at(-1);

// 	// console.log(
// 	// 	Array(100)
// 	// 		.fill()
// 	// 		.map(() => cumsum_binary_search(cumsum, sum))
// 	// );

// 	{
// 		let p = [0.01, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 		let hist = {};
// 		for (let i of pick(sum(p) * 100000, p, true, 'auto')) {
// 			hist[i] ??= 0;
// 			hist[i]++;
// 		}
// 		console.log(hist);
// 	}

// 	let N = 150;
// 	let SIZE = 150;
// 	let options = {
// 		duration: 1000,
// 		cycle: 'auto',
// 		setup: () =>
// 			Array(N)
// 				.fill()
// 				.map(() => Math.random()),
// 		verbose: true,
// 		warmup: 1000,
// 	};

// 	timeit(
// 		p => {
// 			pick(SIZE, p, true);
// 		},
// 		{ ...options, name: 'pick' }
// 	);

// 	timeit(
// 		p => {
// 			let cumsum = accum_sum(p);
// 			let sum = cumsum.at(-1);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => cumsum_binary_search(cumsum, sum));
// 		},
// 		{ ...options, name: 'cumsum_binary_search' }
// 	);

// 	timeit(
// 		p => {
// 			let s = sum(p);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => direct_linear_search(p, s));
// 		},
// 		{ ...options, name: 'direct_linear_search' }
// 	);

// 	timeit(
// 		p => {
// 			let { n, prob, alias } = vose_alias_table(p);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => sample_table(n, prob, alias));
// 		},
// 		{ ...options, name: 'vose_alias_table' }
// 	);

// 	timeit(
// 		p => {
// 			let { tree, level, offset } = sumtree(p);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => sample_tree(tree, level, offset));
// 		},
// 		{ ...options, name: 'sumtree' }
// 	);

// 	timeit(
// 		p => {
// 			let cumsum = accum_sum(p);
// 			let sum = cumsum.at(-1);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => {
// 					let i = cumsum_binary_search(cumsum, sum);
// 					let value = p[i];
// 					for (let j = i; j < cumsum.length; j++) cumsum[j] -= value;
// 					sum -= value;
// 					return i;
// 				});
// 		},
// 		{ ...options, name: 'replace.cumsum_binary_search' }
// 	);

// 	timeit(
// 		p => {
// 			p = p.slice();
// 			let s = sum(p);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => {
// 					let i = direct_linear_search(p, s);
// 					s -= p[i];
// 					p[i] = 0;
// 					return i;
// 				});
// 		},
// 		{ ...options, name: 'replace.direct_linear_search' }
// 	);

// 	timeit(
// 		p => {
// 			p = p.slice();
// 			Array(SIZE)
// 				.fill()
// 				.map(() => {
// 					let { n, prob, alias } = vose_alias_table(p);
// 					let i = sample_table(n, prob, alias);
// 					p[i] = 0;
// 					return i;
// 				});
// 		},
// 		{ ...options, name: 'replace.vose_alias_table' }
// 	);

// 	timeit(
// 		p => {
// 			let { tree, level, offset } = sumtree(p);
// 			Array(SIZE)
// 				.fill()
// 				.map(() => {
// 					let i = sample_tree(tree, level, offset);
// 					set_tree(tree, offset, i, 0);
// 					return i;
// 				});
// 		},
// 		{ ...options, name: 'replace.sumtree' }
// 	);

// 	timeit(
// 		p => {
// 			pick(SIZE, p, false);
// 		},
// 		{ ...options, name: 'replace.pick' }
// 	);
// });

// tester
// 	.add(
// 		tester,
// 		() => 0,
// 		() => 1
// 	)
// 	.add(
// 		tester,
// 		() => 0,
// 		() => 1
// 	)
// 	.add(
// 		tester,
// 		() => 0,
// 		() => 1
// 	);

;// CONCATENATED MODULE: ./core/random.choice.mjs



function random_choice_get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

// function _choice(accum, upper = 1) {
// 	let r = Math.random() * upper;
// 	for (let i = 1; i < accum.length; i++) {
// 		if (r < accum[i]) return i - 1;
// 	}
// 	return accum.length - 1;
// }

// function _accum(p, accum) {
// 	accum[0] = 0;
// 	for (let i = 1; i < p.length; i++) {
// 		accum[i] = accum[i - 1] + p[i - 1];
// 	}
// 	return accum;
// }

function choice(a, shape = null, replace = true, p = null) {
	if (typeof a == 'number') a = arange(a);
	else a = asarray(a);

	if (a.ndim != 1) throw `'p' must be 1-dimensional`;
	if (a.size == 0) throw `'a' cannot be empty unless no samples are taken`;

	if (p == null) {
		p = Array(a.size).fill(1 / a.size);
	} else {
		p = asarray(p);
		if (p.ndim != 1) throw `'p' must be 1-dimensional`;
		if (p.size != a.size) throw `'a' and 'p' must have same size`;
		p = p.toarray();
	}

	a = a.toarray();

	if (shape == null) return a[pick(1, p)[0]];
	if (typeof shape == 'number') shape = [shape];

	let size = random_choice_get_size(shape);

	if (count_nonzero(p) < size) throw `Fewer non-zero entries in p than size`;

	let data = pick(size, p, replace).map(i => a[i]);

	return array(data).reshape(shape);
}

// tester
// 	.add(
// 		choice,
// 		() => choice(5, 3),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, null, true, [0.2, 0.1, 0.6, 1.2, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 3, true, [0.2, 0.1, 0.6, 1.2, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 3, true, [0.2, 0.1, 0.6, 0, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 3, true, [0.2, 0.1, 0, 0.5, 0]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 5, false, [0.2, 0.1, 0.6, 0, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, 4, false, [0.2, 0.1, 0.8, 0.22, 0.5]),
// 		() => 0
// 	)
// 	.add(
// 		choice,
// 		() => choice(5, null, false, [0.2, 0.1, 0.8, 0.22, 0.5]),
// 		() => 0
// 	);

;// CONCATENATED MODULE: ./core/random.random_sample.mjs


function random_random_sample_get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

function random_sample(shape = null) {
	if (shape == null) return Math.random();
	if (typeof shape == 'number') shape = [shape];
	let size = random_random_sample_get_size(shape);
	let data = Array(size);
	for (let i = 0; i < size; i++) {
		data[i] = Math.random();
	}
	return array(data).reshape(shape);
}

// export const random = random_sample;
const ranf = random_sample;
const sample = random_sample;

// console.log(random_sample([3, 2]));

;// CONCATENATED MODULE: ./core/random.rand.mjs


function rand(...shape) {
	return random_sample(shape);
}

;// CONCATENATED MODULE: ./core/random.Generator.mjs


function from(func, size = null, out = null, return_scalar = true) {
	if (out != null) {
		if (!contiguous(out)) throw `output array must be contiguous`;
		if (size == null) size = out.shape;
	}

	let shape;
	if (size == null) {
		if (return_scalar) return func();
		shape = [];
		size = 1;
	} else {
		if (typeof size == 'number') {
			shape = [size];
		} else {
			shape = size;
			size = get_size(shape);
		}
	}

	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape)) throw `size must match out.shape when used together`;

	let { data, offset } = out;
	for (let i = 0; i < size; i++) data[offset + i] = func();
	return out;
}

/**
 * @class
 */
class Generator {
	constructor(rand = Math.random) {
		this.rand = rand;
	}

	/**
	 * @param {number} low
	 * @param {number} [high]
	 * @param {number} [size]
	 * @param {boolean} [endpoint]
	 * @returns {NDArray}
	 */
	integers(low, high = null, size = null, endpoint = false) {
		if (high == null) {
			high = low;
			low = 0;
		}
		let range = high - low;
		if (endpoint) range += 1;

		return from(() => (this.rand() * range + low) | 0, size);
	}

	/**
	 *
	 * @param {*} size
	 * @param {*} out
	 * @returns {NDArray}
	 */
	random(size = null, out = null) {
		return from(() => this.rand(), size, out);
	}

	/**
	 *
	 * @param {*} a
	 * @param {*} size
	 * @param {*} replace
	 * @param {*} p
	 * @param {*} axis
	 * @returns {NDArray}
	 */
	choice(a, size = null, replace = true, p = null, axis = 0 /*, shuffle = true*/) {
		if (typeof a == 'number') {
			if (a <= 0) throw `a must be a positive integer unless no samples are taken`;
			a = arange(a);
		} else {
			a = asarray(a);
			if (a.size == 0) throw `a cannot be empty unless no samples are taken`;
		}

		if (p == null) {
			p = Array(a.shape[axis]).fill(1 / a.shape[axis]);
		} else {
			p = asarray(p);
			if (p.ndim != 1) throw `p must be 1-dimensional`;
			if (p.size != a.shape[axis]) throw `a and p must have same size`;
			p = p.toarray();
		}

		let slices = Array(axis).fill(slice());

		if (size == null) {
			slices[axis] = pick(1, p, undefined, undefined, undefined, this.rand)[0];
			return a._getview(slices).copy();
		}

		let shape = size;
		if (typeof size == 'number') shape = [size];
		size = get_size(shape);

		if (p.length < size) throw `Cannot take a larger sample than population when replace is false`;
		if (count_nonzero(p) < size) throw `Fewer non-zero entries in p than size`;

		let outshape = [...a.shape];
		outshape.splice(axis, 1, ...shape);
		let outslices = Array(axis).fill(slice());
		let out = empty(outshape);

		let indices = pick(size, p, replace, undefined, undefined, this.rand);

		let i = 0;
		for (let index of ndindex(shape)) {
			for (let i = 0; i < index.length; i++) outslices[axis + i] = index[i];
			slices[axis] = indices[i++];
			// console.log(out.shape, outslices, slices, size);
			out.set(outslices, a._getview(slices));
		}

		return out;
	}

	/**
	 *
	 * @param {*} a
	 * @param {*} axis
	 */
	shuffle(a, axis = 0) {
		// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
		a = asarray(a);
		axis = normalize_axis_index(axis, a.ndim);
		let slices = Array(axis + 1).fill(slice(':'));

		let { shape } = a;
		let n = shape[axis];
		let tmp = empty([...shape.slice(0, axis), ...shape.slice(axis + 1)]);

		for (let i = 0; i < n - 2; i++) {
			let j = (this.rand() * (n - i) + i) | 0;

			slices[axis] = i;
			// console.log(tmp, a.shape, slices);
			// always view
			let view1 = a._getview(slices);
			slices[axis] = j;
			let view2 = a._getview(slices);

			tmp.set(view1);
			view1.set(view2);
			view2.set(tmp);
		}
	}

	/**
	 *
	 * @param {*} a
	 * @param {*} axis
	 * @param {*} out
	 * @returns {NDArray}
	 */
	permuted(a, axis = null, out = null) {
		a = asarray(a);
		axis = normalize_axis_index(axis, a.ndim);
		let shape = [...a.shape];
		shape[axis] = 1;

		if (out == null) out = empty_like(a);
		for (let index of ndindex(shape)) {
			index[axis] = slice();
			let flat = a._getview(index).flatten();
			this.shuffle(flat);
			out.set(index, flat);
		}

		return out;
	}

	/**
	 *
	 * @param {*} a
	 * @param {*} axis
	 * @returns {NDArray}
	 */
	permutation(a, axis = 0) {
		if (typeof a == 'number') a = arange(a);
		else a = array(a);
		this.shuffle(a, axis);
		return a;
	}

	/**
	 *
	 * @param {*} low
	 * @param {*} high
	 * @param {*} size
	 * @returns {NDArray}
	 */
	uniform(low = 0.0, high = 1.0, size = null) {
		return from(() => {
			return this.rand() * (high - low) + low;
		}, size);
	}

	/**
	 * @param {number} [loc]
	 * @param {number} [scale]
	 * @param {null|number} [size]
	 * @returns {NDArray}
	 */
	normal(loc = 0.0, scale = 1.0, size = null) {
		// https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
		return from(() => {
			let u1 = this.rand();
			let u2 = this.rand();
			let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
			return loc + scale * z0;
		}, size);
	}
}

/**
 * @type {Generator}
 */
const random = new Generator();

// tester
// 	.add(
// 		Generator.prototype.integers,
// 		() => random.integers(10, null, 10),
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.integers,
// 		() => random.integers(10, null),
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.random,
// 		() => {
// 			let out = arange(20).reshape([-1, 2]);
// 			let out2 = random.random([5, 2], out.get(slice(0, 5)));
// 			return [out.toarray(), out2.toarray()];
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.random,
// 		() => random.random([1, 2, 1]),
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.shuffle,
// 		() => {
// 			let a = arange(27).reshape(3, 3, 3);
// 			random.shuffle(a, -1);
// 			return a;
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.shuffle,
// 		() => {
// 			let a = arange(9).reshape(3, 3);
// 			random.shuffle(a, 1);
// 			return a;
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.choice,
// 		() => {
// 			return random.choice(
// 				[
// 					[0, 1, 2],
// 					[3, 4, 5],
// 					[6, 7, 8],
// 				],
// 				2,
// 				false
// 			);
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.choice,
// 		() => {
// 			return random.choice(5, 3, false, [0.1, 0, 0.3, 0.6, 0]);
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.choice,
// 		() => {
// 			return random.choice(5, 3, true, [0.1, 0, 0.3, 0.6, 0]);
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.choice,
// 		() => {
// 			return random.choice(5, [2, 2], false, [0.1, 0.2, 0.3, 0.3, 0.1]);
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.permuted,
// 		() => {
// 			return random.permuted(arange(12).reshape(3, 4), 0);
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.permuted,
// 		() => {
// 			let a = arange(9).reshape(3, 3);
// 			a = random.permuted(a, 1);
// 			return a;
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.uniform,
// 		() => {
// 			return random.uniform(-1, 0, 10);
// 		},
// 		() => {}
// 	)
// 	.add(
// 		Generator.prototype.normal,
// 		() => {
// 			return random.normal(0, 0.1, 10);
// 		},
// 		() => {}
// 	);

// function hashToInt(x) {
// 	x = ((x >> 16) ^ x) * 0x45d9f3b;
// 	x = ((x >> 16) ^ x) * 0x45d9f3b;
// 	x = (x >> 16) ^ x;

// 	return 1 / ((x % 137) + 1.1);
// }

// let dummy_rand = (i = 1) => {
// 	return () => hashToInt(i++);
// };

// tester.onload(() => {
// 	let a = arange(10);
// 	console.log(String.fromCharCode(91, 253, 124, 99));
// 	// console.log(contiguous(a.get(slice(1, null, -1))));
// 	// let rand = dummy_rand(),
// 	// 	_rand = dummy_rand();

// 	// let rng = new Generator(rand);
// 	// for (let i = 0; i < 100; i++) console.log(rng.integers(10, 102, null));
// });

;// CONCATENATED MODULE: ./core/random.mjs
// lagacy RandomState






;// CONCATENATED MODULE: ./core/where.mjs


/**
 * @param {NDArray} condition
 * @param {null|NDArray} [x]
 * @param {null|NDArray} [y]
 * @returns {NDArray}
 */
function where(condition, x = null, y = null) {
	if (x == null && y == null) return nonzero(condition);
	let b = broadcast(condition, x, y);
	let out = empty(b.shape);
	let i = 0;
	for (let [condition, x, y] of b) {
		out.data[i++] = condition ? x : y;
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			where,
			() => {
				let a = arange(10);
				return where(less(a, 5), a, multiply(10, a));
			},
			() => array([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])
		)
		.add(
			where,
			() =>
				where(
					[
						[true, false],
						[true, true],
					],
					[
						[1, 2],
						[3, 4],
					],
					[
						[9, 8],
						[7, 6],
					]
				),
			() =>
				array([
					[1, 8],
					[3, 4],
				])
		)
		.add(
			where,
			() => {
				let [x, y] = ogrid(slice(':3'), slice(null, 4));
				return where(less(x, y), x, add(10, y));
			},
			() =>
				array([
					[10, 0, 0, 0],
					[10, 11, 1, 1],
					[10, 11, 12, 2],
				])
		)
		.add(
			where,
			() => {
				let a = array([
					[0, 1, 2],
					[0, 2, 4],
					[0, 3, 6],
				]);
				return where(less(a, 4), a, -1);
			},
			() =>
				array([
					[0, 1, 2],
					[0, 2, -1],
					[0, 3, -1],
				])
		);

;// CONCATENATED MODULE: ./core/ogrid.mjs


/**
 * @param  {...Slice} slices
 * @returns {NDArray}
 */
function ogrid(...slices) {
	let out = [];
	for (let i = 0; i < slices.length; i++) {
		let { start, stop, step, slicelength } = slices[i].indices();
		let data = Array(slicelength);
		for (let i = 0; i < slicelength; i++) {
			data[i] = start + i * step;
		}
		let shape = Array(slices.length).fill(1);
		shape[i] = slicelength;
		out.push(array(data).reshape(shape));
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			ogrid,
			() => ogrid(slice('0:5'), slice('0:5')),
			() => [array([[0], [1], [2], [3], [4]]), array([[0, 1, 2, 3, 4]])]
		)
		.add(
			ogrid,
			() => ogrid(slice('3:5'), slice('0:-5'), slice('0:1')),
			() => [array([[[3]], [[4]]]), array([]).reshape([1, 0, 1]), array([[[0]]])]
		);

;// CONCATENATED MODULE: ./core/statistics.mjs


/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} keepdims
 * @returns {NDArray}
 */
function ptp(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let shape = [...a.shape.slice(0, axis), ...(keepdims ? [1] : []), ...a.shape.slice(axis + 1)];

	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape))
		throw `out must have the same shape as the expected output`;

	subtract(amax(a, axis, null, keepdims), amin(a, axis, null, keepdims), out);

	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} weights
 * @param {*} returned
 * @param {*} keepdims
 * @returns {NDArray}
 */
function average(a, axis = null, weights = null, returned = false, keepdims = false) {
	a = asarray(a);

	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	if (weights != null) weights = asarray(weights);

	let sum_of_weights;
	if (weights != null) {
		sum_of_weights = sum(weights);
		if (sum_of_weights == 0) throw `sum(weights) must not be 0`;
		if (weights.ndim == 1) {
			weights = weights.reshape([...Array(axis).fill(1), a.shape[axis]]);
		} else if (shallow_array_equal(weights.shape, a.shape)) {
		} else throw `weights.shape and a.shape do not match`;
		a = multiply(a, weights);
	} else {
		sum_of_weights = a.shape[axis];
	}

	let out = divide(sum(a, axis, null, keepdims), sum_of_weights);

	if (returned) return [out, sum_of_weights];
	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} keepdims
 * @returns {NDArray}
 */
function mean(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);

	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let shape = [...a.shape.slice(0, axis), ...(keepdims ? [1] : []), ...a.shape.slice(axis + 1)];
	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape))
		throw `out must have the same shape as the expected output`;

	divide(sum(a, axis, null, keepdims), a.shape[axis], out);

	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} ddof
 * @param {*} keepdims
 * @returns {NDArray}
 */
function variance(a, axis = null, out = null, ddof = 0, keepdims = false) {
	a = asarray(a);

	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let shape = [...a.shape.slice(0, axis), ...(keepdims ? [1] : []), ...a.shape.slice(axis + 1)];
	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape))
		throw `out must have the same shape as the expected output`;

	mean(square(subtract(a, divide(sum(a, axis, null, true), a.shape[axis] - ddof))), axis, out, keepdims);

	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} ddof
 * @param {*} keepdims
 * @returns {NDArray}
 */
function std(a, axis = null, out = null, ddof = 0, keepdims = false) {
	out = variance(a, axis, out, ddof, keepdims);
	sqrt(out, out);
	return out;
}

/**
 *
 * @param {*} a
 * @param {*} weights
 * @param {*} minlength
 * @returns {NDArray}
 */
function bincount(a, weights = null, minlength = 0) {
	a = asarray(a);
	if (a.ndim != 1) throw `a.dim != 1`;
	if (amin(a) < 0) throw `amin(a) < 0`;
	if (minlength < 0) throw `minlength < 0`;

	if (weights != null) {
		weights = asarray(weights);
		if (!shallow_array_equal(weights.shape, a.shape)) throw `weights.shape != a.shape`;
		weights = weights.toarray();
	}

	let data = Array(Math.max(amax(a) + 1, minlength)).fill(0);
	let i = 0;
	for (let n of a.flat) {
		data[n] += weights != null ? weights[i] : 1;
		i++;
	}

	return array(data);
}

process.env.PRODUCTION ||
	tester.add(
			ptp,
			() =>
				ptp(
					array([
						[4, 9, 2, 10],
						[6, 9, 7, 12],
					]),
					1
				),
			() => array([8, 6])
		)
		.add(
			ptp,
			() =>
				ptp(
					array([
						[4, 9, 2, 10],
						[6, 9, 7, 12],
					]),
					0
				),
			() => array([2, 0, 5, 2])
		)
		.add(
			ptp,
			() =>
				ptp(
					array([
						[4, 9, 2, 10],
						[6, 9, 7, 12],
					])
				),
			() => 10
		)
		.add(
			ptp,
			() => ptp(power(arange(10, 40), 2).reshape(5, 2, 3), 0, null, true),
			() =>
				array([
					[
						[1056, 1104, 1152],
						[1200, 1248, 1296],
					],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			average,
			() => average(arange(1, 5)),
			() => 2.5
		)
		.add(
			average,
			() => average(arange(1, 11), undefined, arange(10, 0, -1)),
			() => 4.0
		)
		.add(
			average,
			() => average(arange(6).reshape(3, 2), 1, [1 / 4, 3 / 4]),
			() => array([0.75, 2.75, 4.75])
		)
		.add(
			average,
			() => average(arange(6).reshape(3, 2), 1, undefined, undefined, true),
			() => array([[0.5], [2.5], [4.5]])
		);

process.env.PRODUCTION ||
	tester.add(
			mean,
			() =>
				mean(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 2.5
		)
		.add(
			mean,
			() =>
				mean(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([2, 3])
		)
		.add(
			mean,
			() =>
				mean(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([1.5, 3.5])
		);

process.env.PRODUCTION ||
	tester.add(
			variance,
			() =>
				variance(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 1.25
		)
		.add(
			variance,
			() =>
				variance(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([1, 1])
		)
		.add(
			variance,
			() =>
				variance(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([0.25, 0.25])
		);

process.env.PRODUCTION ||
	tester.add(
			std,
			() =>
				std(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 1.118033988749895
		)
		.add(
			std,
			() =>
				std(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([1, 1])
		)
		.add(
			std,
			() =>
				std(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([0.5, 0.5])
		);

process.env.PRODUCTION ||
	tester.add(
			bincount,
			() => bincount(arange(5)),
			() => array([1, 1, 1, 1, 1])
		)
		.add(
			bincount,
			() => bincount(array([0, 1, 1, 3, 2, 1, 7])),
			() => array([1, 3, 1, 1, 0, 0, 0, 1])
		)
		.add(
			bincount,
			() => bincount(array([0, 1, 1, 2, 2, 2]), array([0.3, 0.5, 0.2, 0.7, 1, -0.6])),
			() => array([0.3, 0.7, 1.1])
		);

;// CONCATENATED MODULE: ./core/indices.mjs


/**
 * @param {number[]} dimensions
 * @param {boolean} [sparse]
 * @returns {NDArray}
 */
function indices(dimensions, sparse = false) {
	let N = dimensions.length;
	let shape = Array(N).fill(1);

	let res;
	if (sparse) res = [];
	else res = empty([N, ...dimensions]);

	for (let i = 0; i < dimensions.length; i++) {
		let dim = dimensions[i];
		let idx = arange(dim).reshape([...shape.slice(0, i), dim, ...shape.slice(i + 1)]);
		if (sparse) res.push(idx);
		else res.set([i], idx);
	}

	return res;
}

process.env.PRODUCTION ||
	tester.add(
			indices,
			() => indices([2, 3]),
			() =>
				array([
					[
						[0, 0, 0],
						[1, 1, 1],
					],
					[
						[0, 1, 2],
						[0, 1, 2],
					],
				])
		)
		.add(
			indices,
			() => indices([2, 3], true),
			() => [array([[0], [1]]), array([[0, 1, 2]])]
		);

;// CONCATENATED MODULE: ./core/ix_.mjs


/**
 * @param  {...number[]|boolean[]} args
 * @returns {NDArray[]}
 */
function ix_(...args) {
	let out = [];
	let nd = args.length;
	for (let k = 0; k < nd; k++) {
		let idx = args[k];
		idx = asarray(idx);
		if (idx.ndim != 1) {
			`cross index must be 1 dimensional`;
		}
		if (typeof idx.item(0) == 'boolean') {
			[idx] = nonzero(idx);
		}
		idx = idx.reshape([...Array(k).fill(1), idx.size, ...Array(nd - k - 1).fill(1)]);
		out.push(idx);
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			ix_,
			() => ix_([0, 1], [2, 4]),
			() => [array([[0], [1]]), array([[2, 4]])]
		)
		.add(
			ix_,
			() => ix_([true, true], [2, 4]),
			() => [array([[0], [1]]), array([[2, 4]])]
		)
		.add(
			ix_,
			() => ix_([true, true], [false, false, true, false, true]),
			() => [array([[0], [1]]), array([[2, 4]])]
		);

;// CONCATENATED MODULE: ./core/in1d.mjs


function in1d(arr1, arr2, assume_unique = false, invert = false, kind = 'table') {
	throw new Error();
}

// tester
// 	.add(
// 		tester,
// 		() => 0,
// 		() => 1
// 	)
// 	.add(
// 		tester,
// 		() => 0,
// 		() => 1
// 	)
// 	.add(
// 		tester,
// 		() => 0,
// 		() => 1
// 	);

;// CONCATENATED MODULE: ./core/packbits.mjs
/**
 * @module bitwise/packing
 */



/**
 * @param {NDArray} a
 * @param {null|number} [axis]
 * @param {string} [bitorder]
 * @returns {NDArray}
 */
function packbits(a, axis = null, bitorder = 'big') {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let outshape = a.shape.slice();
	outshape[axis] = Math.ceil(outshape[axis] / 8);
	let out = empty(outshape);

	let shape = a.shape.slice();
	shape[axis] = 1;

	let tmp = Array(outshape[axis] * 8);

	for (let ii of ndindex(shape)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		tmp.fill(0);
		for (let i = 0; i < a.shape[axis]; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			tmp[i] = value;
		}

		let idx = 0;
		for (let i = 0; i < tmp.length; i += 8) {
			let n = 0;
			if (bitorder == 'big') {
				for (let j = 0; j < 8; j++) {
					n += tmp[i + j] << (7 - j);
				}
			} else if (bitorder == 'little') {
				for (let j = 0; j < 8; j++) {
					n += tmp[i + j] << j;
				}
			} else throw `bitorder can be either big or little`;
			out.data[_offset + idx * out.strides[axis]] = n;
			idx++;
		}
	}

	return out;
}

/**
 * @param {NDArray} a
 * @param {null|number} [axis]
 * @param {null|number} [count]
 * @param {string} [bitorder]
 * @returns {NDArray}
 */
function unpackbits(a, axis = null, count = null, bitorder = 'big') {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let start = 0;
	let end = 8;
	if (count != null)
		if (count < 0) start = 8 - count;
		else end = count;

	let outshape = a.shape.slice();
	outshape[axis] = outshape[axis] * (end - start);
	let out = empty(outshape);

	let tmp = Array(8);

	for (let ii of ndindex(a.shape)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < a.shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		let value = a.data[offset];

		_unpackbits(value, tmp, bitorder);
		for (let i = start, j = 0; i < end; i++, j++) out.data[_offset + j * out.strides[axis]] = tmp[i];
	}

	return out;
}

function _unpackbits(n, out = [], bitorder = 'big') {
	if (bitorder == 'big') {
		for (let i = 7; i >= 0; i--) {
			out[i] = n % 2;
			n = (n / 2) | 0;
		}
	} else {
		for (let i = 0; i <= 7; i++) {
			out[i] = n % 2;
			n = (n / 2) | 0;
		}
	}
	return out;
}

process.env.PRODUCTION ||
	tester.add(
			packbits,
			() =>
				packbits(
					array([
						[
							[1, 0, 1],
							[0, 1, 0],
						],
						[
							[1, 1, 0],
							[0, 0, 1],
						],
					]),
					-1
				),
			() =>
				array([
					[[160], [64]],
					[[192], [32]],
				])
		)
		.add(
			packbits,
			() =>
				packbits(
					array([
						[
							[1, 0, 1],
							[0, 1, 0],
						],
						[
							[1, 1, 0],
							[0, 0, 1],
						],
					])
				),
			() => array([171, 16])
		)
		.add(
			packbits,
			() => packbits(array([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1),
			() => array([[[160, 0]]])
		);

process.env.PRODUCTION ||
	tester.add(
			unpackbits,
			() => unpackbits(array([[2], [7], [23]]), 1),
			() =>
				array([
					[0, 0, 0, 0, 0, 0, 1, 0],
					[0, 0, 0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 0, 1, 1, 1],
				])
		)
		.add(
			unpackbits,
			() => {
				let b = array([
					[0, 0, 0, 0, 0, 0, 1, 0],
					[0, 0, 0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 0, 1, 1, 1],
				]);
				let p = packbits(b, 0);

				return [unpackbits(p, 0), array_equal(b, unpackbits(p, 0, b.shape[0]))];
			},
			() => [
				array([
					[0, 0, 0, 0, 0, 0, 1, 0],
					[0, 0, 0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 0, 1, 1, 1],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
				]),
				true,
			]
		);

;// CONCATENATED MODULE: ./core/stack.mjs


/**
 * @param {NDArray[]} arrays
 * @param {number} [axis]
 * @param {null|NDArray} [out]
 * @returns {NDArray}
 */
function stack(arrays, axis = 0, out = null) {
	arrays = arrays.map(a => asarray(a));

	if (arrays.length == 0) {
		throw `need at least one array to stack`;
	}
	for (let i = 1; i < arrays.length; i++) {
		if (!shallow_array_equal(arrays[0], arrays[i])) {
			throw `all input arrays must have the same shape`;
		}
	}

	let result_ndim = arrays[0].ndim + 1;
	axis = normalize_axis_index(axis, result_ndim);

	let sl = [...Array(axis).fill(Slice.colon), Slice.newaxis];

	let expanded_arrays = arrays.map(arr => arr.get(sl));

	return concatenate(expanded_arrays, axis, out);
}

process.env.PRODUCTION ||
	tester.add(
			stack,
			() => {
				let arrays = Array(10)
					.fill()
					.map(() => random.normal(0, 1, [3, 4]));
				return stack(arrays, 0).shape;
			},
			() => [10, 3, 4]
		)
		.add(
			stack,
			() => {
				let arrays = Array(10)
					.fill()
					.map(() => random.normal(0, 1, [3, 4]));
				return stack(arrays, 1).shape;
			},
			() => [3, 10, 4]
		)
		.add(
			stack,
			() => {
				let arrays = Array(10)
					.fill()
					.map(() => random.normal(0, 1, [3, 4]));
				return stack(arrays, 2).shape;
			},
			() => [3, 4, 10]
		)
		.add(
			stack,
			() => {
				let a = array([1, 2, 3]);
				let b = array([4, 5, 6]);
				return stack([a, b]);
			},
			() =>
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
		)
		.add(
			stack,
			() => {
				let a = array([1, 2, 3]);
				let b = array([4, 5, 6]);
				return stack([a, b], -1);
			},
			() =>
				array([
					[1, 4],
					[2, 5],
					[3, 6],
				])
		);

;// CONCATENATED MODULE: ./core/vstack.mjs


/**
 * @param {NDArray[]} arrays
 * @returns {NDArray}
 */
function vstack(arrays) {
	arrays = atleast_2d(...arrays);
	if (!Array.isArray(arrays)) arrays = [arrays];
	return concatenate(arrays, 0);
}

process.env.PRODUCTION ||
	tester.add(
			vstack,
			() => {
				let a = array([1, 2, 3]);
				let b = array([4, 5, 6]);
				return vstack([a, b]);
			},
			() =>
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
		)
		.add(
			vstack,
			() => {
				let a = array([[1], [2], [3]]);
				let b = array([[4], [5], [6]]);
				return vstack([a, b]);
			},
			() => array([[1], [2], [3], [4], [5], [6]])
		);

;// CONCATENATED MODULE: ./core/hstack.mjs


/**
 * @param {NDArray[]} arrays
 * @returns {NDArray}
 */
function hstack(arrays) {
	arrays = atleast_1d(...arrays);
	if (!Array.isArray(arrays)) arrays = [arrays];
	if (arrays.length > 0 && arrays[0].ndim == 1) return concatenate(arrays, 0);
	return concatenate(arrays, 1);
}

process.env.PRODUCTION ||
	tester.add(
			hstack,
			() => {
				let a = array([1, 2, 3]);
				let b = array([4, 5, 6]);
				return hstack([a, b]);
			},
			() => array([1, 2, 3, 4, 5, 6])
		)
		.add(
			hstack,
			() => {
				let a = array([[1], [2], [3]]);
				let b = array([[4], [5], [6]]);
				return hstack([a, b]);
			},
			() =>
				array([
					[1, 4],
					[2, 5],
					[3, 6],
				])
		);

;// CONCATENATED MODULE: ./core/dstack.mjs


/**
 * @param {NDArray[]} arrays
 * @returns {NDArray}
 */
function dstack(arrays) {
	arrays = atleast_3d(...arrays);
	if (!Array.isArray(arrays)) arrays = [arrays];
	return concatenate(arrays, 2);
}

process.env.PRODUCTION ||
	tester.add(
			dstack,
			() => {
				let a = array([1, 2, 3]);
				let b = array([2, 3, 4]);
				return dstack([a, b]);
			},
			() =>
				array([
					[
						[1, 2],
						[2, 3],
						[3, 4],
					],
				])
		)
		.add(
			dstack,
			() => {
				let a = array([[1], [2], [3]]);
				let b = array([[2], [3], [4]]);
				return dstack([a, b]);
			},
			() => array([[[1, 2]], [[2, 3]], [[3, 4]]])
		);

;// CONCATENATED MODULE: ./core/column_stack.mjs


/**
 * @param {NDArray[]} arrs
 * @returns {NDArray}
 */
function column_stack(arrs) {
	let arrays = [];
	for (let arr of arrs) {
		arr = asarray(arr);
		if (arr.ndim < 2) arr = array(arr, null, false, 2).T;
		arrays.push(arr);
	}
	return concatenate(arrays, 1);
}

process.env.PRODUCTION ||
	tester.add(
		column_stack,
		() => {
			let a = array([1, 2, 3]);
			let b = array([2, 3, 4]);
			return column_stack([a, b]);
		},
		() =>
			array([
				[1, 2],
				[2, 3],
				[3, 4],
			])
	);

;// CONCATENATED MODULE: ./core/row_stack.mjs


/**
 * @param {NDArray[]} arrs
 * @returns {NDArray}
 */
function row_stack(arrs) {
	arrs = atleast_2d(...arrs);
	if (!Array.isArray(arrs)) arrs = [arrs];
	return concatenate(arrs, 0);
}

process.env.PRODUCTION ||
	tester.add(
			row_stack,
			() => {
				let a = array([1, 2, 3]);
				let b = array([4, 5, 6]);
				return row_stack([a, b]);
			},
			() =>
				array([
					[1, 2, 3],
					[4, 5, 6],
				])
		)
		.add(
			row_stack,
			() => {
				let a = array([[1], [2], [3]]);
				let b = array([[4], [5], [6]]);
				return row_stack([a, b]);
			},
			() => array([[1], [2], [3], [4], [5], [6]])
		);

;// CONCATENATED MODULE: ./core/array_split.mjs


/**
 * @param {NDArray} a
 * @param {number|number[]} indices_or_sections
 * @param {number} [axis]
 * @returns {NDArray}
 */
function array_split(a, indices_or_sections, axis = 0) {
	let n_total, n_sections, div_points;
	if (a.shape != null) {
		axis = normalize_axis_index(axis, a.ndim);
		n_total = a.shape[axis];
	} else {
		n_total = a.length;
	}

	if (typeof indices_or_sections == 'number') {
		n_sections = indices_or_sections | 0;
		if (n_sections <= 0) {
			throw `number sections must be larger than 0.`;
		}
		let n_each_section = (n_total / n_sections) | 0;
		let extras = n_total % n_sections;
		let section_sizes = [
			0,
			...Array(extras).fill(n_each_section + 1),
			...Array(n_sections - extras).fill(n_each_section),
		];

		div_points = array(section_sizes).cumsum().array();
	} else {
		n_sections = indices_or_sections.length + 1;
		div_points = [0, ...indices_or_sections, n_total];
	}

	let sub_arys = [];
	let sary = swapaxes(a, axis, 0);
	for (let i = 0; i < n_sections; i++) {
		let st = div_points[i];
		let end = div_points[i + 1];
		sub_arys.push(swapaxes(sary.at(slice(st, end)), axis, 0));
	}

	return sub_arys;
}

process.env.PRODUCTION ||
	tester.add(
			array_split,
			() => array_split(arange(8.0), 3),
			() => [array([0, 1, 2]), array([3, 4, 5]), array([6, 7])]
		)
		.add(
			array_split,
			() => array_split(arange(9), 4),
			() => [array([0, 1, 2]), array([3, 4]), array([5, 6]), array([7, 8])]
		);

;// CONCATENATED MODULE: ./core/split.mjs


/**
 *
 * @param {NDArray} ary
 * @param {NDArray} indices_or_sections
 * @param {number} [axis]
 * @returns {NDArray}
 */
function split(ary, indices_or_sections, axis = 0) {
	ary = asarray(ary);
	axis = normalize_axis_index(axis, ary.ndim);
	if (indices_or_sections.shape != null) indices_or_sections = indices_or_sections.array();

	if (indices_or_sections.length == undefined) {
		let sections = indices_or_sections;
		let N = ary.shape[axis];
		if (N % sections) throw `array split does not result in an equal division`;
	}

	return array_split(ary, indices_or_sections, axis);
}

function dsplit(ary, indices_or_sections) {
	if (ndim(ary) < 3) throw `dsplit only works on arrays of 3 or more dimensions`;
	return split(ary, indices_or_sections, 2);
}

function hsplit(ary, indices_or_sections) {
	if (ndim(ary) == 0) throw `hsplit only works on arrays of 1 or more dimensions`;
	return split(ary, indices_or_sections, ndim(ary) > 1 ? 1 : 0);
}

function vsplit(ary, indices_or_sections) {
	if (ndim(ary) < 2) throw `vsplit only works on arrays of 2 or more dimensions`;
	return split(ary, indices_or_sections, 0);
}

process.env.PRODUCTION ||
	tester.add(
			split,
			() => split(arange(9.0), 3),
			() => [array([0, 1, 2]), array([3, 4, 5]), array([6, 7, 8])]
		)
		.add(
			split,
			() => split(arange(8.0), [3, 5, 6, 10]),
			() => [array([0, 1, 2]), array([3, 4]), array([5]), array([6, 7]), array([])]
		);

process.env.PRODUCTION ||
	tester.add(
			dsplit,
			() => dsplit(arange(16.0).reshape(2, 2, 4), 2),
			() => [
				array([
					[
						[0, 1],
						[4, 5],
					],
					[
						[8, 9],
						[12, 13],
					],
				]),
				array([
					[
						[2, 3],
						[6, 7],
					],
					[
						[10, 11],
						[14, 15],
					],
				]),
			]
		)
		.add(
			dsplit,
			() => dsplit(arange(16.0).reshape(2, 2, 4), array([3, 6])),
			() => [
				array([
					[
						[0, 1, 2],
						[4, 5, 6],
					],
					[
						[8, 9, 10],
						[12, 13, 14],
					],
				]),
				array([
					[[3], [7]],
					[[11], [15]],
				]),
				empty([2, 2, 0]),
			]
		);

process.env.PRODUCTION ||
	tester.add(
			hsplit,
			() => hsplit(arange(16.0).reshape(4, 4), 2),
			() => [
				array([
					[0, 1],
					[4, 5],
					[8, 9],
					[12, 13],
				]),
				array([
					[2, 3],
					[6, 7],
					[10, 11],
					[14, 15],
				]),
			]
		)
		.add(
			hsplit,
			() => hsplit(arange(16.0).reshape(4, 4), array([3, 6])),
			() => [
				array([
					[0, 1, 2],
					[4, 5, 6],
					[8, 9, 10],
					[12, 13, 14],
				]),
				array([[3], [7], [11], [15]]),
				empty([4, 0]),
			]
		)
		.add(
			hsplit,
			() => hsplit(arange(8.0).reshape(2, 2, 2), 2),
			() => [array([[[0, 1]], [[4, 5]]]), array([[[2, 3]], [[6, 7]]])]
		)
		.add(
			hsplit,
			() => hsplit(array([0, 1, 2, 3, 4, 5]), 2),
			() => [array([0, 1, 2]), array([3, 4, 5])]
		);

process.env.PRODUCTION ||
	tester.add(
			vsplit,
			() => vsplit(arange(16.0).reshape(4, 4), 2),
			() => [
				array([
					[0, 1, 2, 3],
					[4, 5, 6, 7],
				]),
				array([
					[8, 9, 10, 11],
					[12, 13, 14, 15],
				]),
			]
		)
		.add(
			vsplit,
			() => vsplit(arange(16.0).reshape(4, 4), array([3, 6])),
			() => [
				array([
					[0, 1, 2, 3],
					[4, 5, 6, 7],
					[8, 9, 10, 11],
				]),
				array([[12, 13, 14, 15]]),
				empty([0, 4]),
			]
		)
		.add(
			vsplit,
			() => vsplit(arange(8.0).reshape(2, 2, 2), 2),
			() => [
				array([
					[
						[0, 1],
						[2, 3],
					],
				]),
				array([
					[
						[4, 5],
						[6, 7],
					],
				]),
			]
		);

;// CONCATENATED MODULE: ./core/repeat.mjs


/**
 *
 * @param {NDArray} a
 * @param {number} repeats
 * @param {null|number} [axis]
 * @returns {NDArray}
 */
function repeat(a, repeats, axis = null) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let outshape = a.shape.slice();
	let isNumber = typeof repeats == 'number';
	if (isNumber) {
		outshape[axis] *= repeats;
	} else if (repeats.length == 1) {
		repeats = repeats[0];
		outshape[axis] *= repeats;
		isNumber = true;
	} else if (outshape[axis] == repeats.length) {
		outshape[axis] = repeats.reduce((a, b) => a + b);
	} else {
		throw `operands could not be broadcast together with shape (${outshape[axis]},) (${repeats.length},)`;
	}

	let out = empty(outshape);
	let outstrides = out.strides.slice();
	outstrides.splice(axis, 1);

	let shape = a.shape.slice();
	shape.splice(axis, 1);

	let strides = a.strides.slice();
	strides.splice(axis, 1);

	let n = outshape[axis];
	for (let idx of ndindex(shape)) {
		let offset = 0;
		let outoffset = 0;
		for (let i = 0; i < idx.length; i++) {
			offset += idx[i] * strides[i];
			outoffset += idx[i] * outstrides[i];
		}

		let ii = 0;
		for (let i = 0; i < n; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			let m = isNumber ? repeats : repeats[i];
			for (let j = 0; j < m; j++, ii++) {
				out.data[outoffset + ii * out.strides[axis]] = value;
			}
		}
	}

	return out.astype(a.dtype);
}

process.env.PRODUCTION ||
	tester.add(
			repeat,
			() => repeat(3, 4),
			() => array([3, 3, 3, 3])
		)
		.add(
			repeat,
			() =>
				repeat(
					array([
						[1, 2],
						[3, 4],
					]),
					2
				),
			() => array([1, 1, 2, 2, 3, 3, 4, 4])
		)
		.add(
			repeat,
			() =>
				repeat(
					array([
						[1, 2],
						[3, 4],
					]),
					3,
					1
				),
			() =>
				array([
					[1, 1, 1, 2, 2, 2],
					[3, 3, 3, 4, 4, 4],
				])
		)
		.add(
			repeat,
			() =>
				repeat(
					array([
						[1, 2],
						[3, 4],
					]),
					[1, 2],
					0
				),
			() =>
				array([
					[1, 2],
					[3, 4],
					[3, 4],
				])
		);

;// CONCATENATED MODULE: ./core/tile.mjs


/**
 * @param {NDArray} a
 * @param {number} reps
 * @returns {NDArray}
 */
function tile(a, reps) {
	if (typeof reps == 'number') reps = [reps];
	let d = reps.length;

	if (reps.every(x => x == 1) && a instanceof NDArray) {
		return array(a, a.dtype, true, d);
	}
	let c = array(a, a.dtype, false, d);
	if (d < c.ndim) {
		reps = [...Array(c.ndim - d).fill(1), ...reps];
	}
	let outshape = c.shape.map((s, i) => s * reps[i]);
	let n = c.size;
	if (n > 0) {
		let { ndim, shape } = c;
		for (let i = 0; i < ndim; i++) {
			let dim_in = shape[i];
			let nrep = reps[i];
			if (nrep != 1) {
				c = c.reshape(-1, n).repeat(nrep, 0);
			}
			n = (n / dim_in) | 0;
		}
	}

	return c.reshape(outshape);
}

process.env.PRODUCTION ||
	tester.add(
			tile,
			() => {
				let a = array([0, 1, 2]);
				return [tile(a, 2), tile(a, [2, 2]), tile(a, [2, 1, 2])];
			},
			() => [
				array([0, 1, 2, 0, 1, 2]),
				array([
					[0, 1, 2, 0, 1, 2],
					[0, 1, 2, 0, 1, 2],
				]),
				array([[[0, 1, 2, 0, 1, 2]], [[0, 1, 2, 0, 1, 2]]]),
			]
		)
		.add(
			tile,
			() => {
				let b = array([
					[1, 2],

					[3, 4],
				]);
				return [tile(b, 2), tile(b, [2, 1])];
			},
			() => [
				array([
					[1, 2, 1, 2],
					[3, 4, 3, 4],
				]),
				array([
					[1, 2],
					[3, 4],
					[1, 2],
					[3, 4],
				]),
			]
		)
		.add(
			tile,
			() => {
				let c = array([1, 2, 3, 4]);
				return tile(c, [4, 1]);
			},
			() =>
				array([
					[1, 2, 3, 4],
					[1, 2, 3, 4],
					[1, 2, 3, 4],
					[1, 2, 3, 4],
				])
		);

;// CONCATENATED MODULE: ./core/diagonal.mjs


/**
 * @param {NDArray} a
 * @param {number} [offset]
 * @param {number} [axis1]
 * @param {number} [axis2]
 * @returns {NDArray}
 */
function diagonal(a, offset = 0, axis1 = 0, axis2 = 1) {
	a = asarray(a);
	let { ndim } = a;
	if (ndim < 2) throw `array.ndim must be >= 2`;

	axis1 = normalize_axis_index(axis1, ndim);
	axis2 = normalize_axis_index(axis2, ndim);

	let axes = Array(ndim);
	axes[ndim - 2] = axis1;
	axes[ndim - 1] = axis2;
	for (let i = 0, j = 0; i < ndim; i++) {
		if (i == axis1 || i == axis2) continue;
		axes[j++] = i;
	}

	a = transpose(a, axes);

	// https://github.com/numpy/numpy-refactor/blob/6de313865ec3f49bcdd06ccbc879f27e65acf818/numpy/core/src/multiarray/item_selection.c
	// view only
	// writable, no need to d.setflags(write=True)

	let n1 = a.shape[ndim - 2];
	let n2 = a.shape[ndim - 1];
	let step = n2 + 1;
	let start, stop;
	if (offset < 0) {
		start = -n2 * offset;
		stop = Math.min(n2, n1 + offset) * (n2 + 1) - n2 * offset;
	} else {
		start = offset;
		stop = Math.min(n1, n2 - offset) * (n2 + 1) + offset;
	}

	let count = Math.ceil((stop - start) / step);

	return a.as_strided(
		[...a.shape.slice(0, -2), count],
		[...a.strides.slice(0, -2), step * a.strides[ndim - 1]],
		a.offset + start
	);
}

process.env.PRODUCTION ||
	tester.add(
			diagonal,
			() => diagonal(arange(4).reshape(2, 2)),
			() => array([0, 3])
		)
		.add(
			diagonal,
			() => diagonal(arange(4).reshape(2, 2), 1),
			() => array([1])
		)
		.add(
			diagonal,
			() => diagonal(arange(8).reshape(2, 2, 2), 0, 0, 1),
			() =>
				array([
					[0, 6],
					[1, 7],
				])
		)
		.add(
			diagonal,
			() => diagonal(arange(8).reshape(2, 2, 2).at(slice(':'), slice(':'), 0), 0, 0, 1),
			() => array([0, 6])
		)
		.add(
			diagonal,
			() => diagonal(arange(8).reshape(2, 2, 2).at(slice(':'), slice(':'), 1), 0, 0, 1),
			() => array([1, 7])
		)
		.add(
			diagonal,
			() => {
				let a = arange(8);
				diagonal(a.reshape(2, 2, 2), 0, 0, 1).set(-1);
				return a;
			},
			() => array([-1, -1, 2, 3, 4, 5, -1, -1])
		);

;// CONCATENATED MODULE: ./core/diag.mjs


/**
 * @param {NDArray} v
 * @param {number} [k]
 * @returns {NDArray}
 */
function diag(v, k = 0) {
	v = asarray(v);
	let s = v.shape;
	if (s.length == 1) {
		let n = s[0] + Math.abs(k);
		let res = zeros([n, n]);
		let i = k >= 0 ? k : -k * n;
		let view = res.at(slice(null, n - k));
		for (let j = 0; j < v.size; j++, i += n + 1) {
			view.itemset(i, v.item(j));
		}
		return res;
	}
	if (s.length != 2) throw `Input must be 1- or 2-d.`;
	return diagonal(v, k);
}

process.env.PRODUCTION ||
	tester.add(
			diag,
			() => diag(arange(9).reshape([3, 3])),
			() => array([0, 4, 8])
		)
		.add(
			diag,
			() => diag(arange(9).reshape([3, 3]), 1),
			() => array([1, 5])
		)
		.add(
			diag,
			() => diag(arange(9).reshape([3, 3]), -1),
			() => array([3, 7])
		)
		.add(
			diag,
			() => diag(diag(arange(9).reshape([3, 3]))),
			() =>
				array([
					[0, 0, 0],
					[0, 4, 0],
					[0, 0, 8],
				])
		);

;// CONCATENATED MODULE: ./core/flip.mjs


/**
 * @param {NDArray} a
 * @param {null|number|number[]} [axis]
 * @returns {NDArray}
 */
function flip(a, axis = null) {
	a = asarray(a);
	let indexer;
	if (axis == null) {
		indexer = Array(a.ndim).fill(slice('::-1'));
	} else {
		axis = normalize_axis_tuple(axis, a.ndim);
		indexer = Array(a.ndim).fill(slice(':'));
		for (let ax of axis) {
			indexer[ax] = slice('::-1');
		}
	}
	return a.get(indexer);
}

/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
function fliplr(a) {
	a = asarray(a);
	if (a.ndim < 2) throw `Input must be >= 2-d.`;
	return a.get(index_exp(':', '::-1'));
}

/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
function flipud(a) {
	a = asarray(a);
	if (a.ndim < 1) throw `Input must be >= 1-d.`;
	return a.at(slice('::-1'));
}

process.env.PRODUCTION ||
	tester.add(
			flip,
			() => {
				let A = arange(8).reshape([2, 2, 2]);
				return [A, flip(A, 0), flip(A, 1), flip(A), flip(A, [0, 2])];
			},
			() => [
				array([
					[
						[0, 1],
						[2, 3],
					],
					[
						[4, 5],
						[6, 7],
					],
				]),
				array([
					[
						[4, 5],
						[6, 7],
					],
					[
						[0, 1],
						[2, 3],
					],
				]),
				array([
					[
						[2, 3],
						[0, 1],
					],
					[
						[6, 7],
						[4, 5],
					],
				]),
				array([
					[
						[7, 6],
						[5, 4],
					],
					[
						[3, 2],
						[1, 0],
					],
				]),
				array([
					[
						[5, 4],
						[7, 6],
					],
					[
						[1, 0],
						[3, 2],
					],
				]),
			]
		)
		.add(
			flip,
			() => {
				let A = random.normal(0, 1, [3, 4, 5]);
				return logic_all(equal(flip(A, 2), A.at(slice(':'), slice(':'), slice('::-1'), slice('...'))));
			},
			() => true
		);

process.env.PRODUCTION ||
	tester.add(
			fliplr,
			() => fliplr(diag([1, 2, 3])),
			() =>
				array([
					[0, 0, 1],
					[0, 2, 0],
					[3, 0, 0],
				])
		)
		.add(
			fliplr,
			() => {
				let A = random.normal(0, 1, [2, 4, 5]);
				return logic_all(equal(fliplr(A), A.at(slice(':'), slice('::-1'), slice('...'))));
			},
			() => true
		);

process.env.PRODUCTION ||
	tester.add(
			flipud,
			() => flipud(diag([1, 2, 3])),
			() =>
				array([
					[0, 0, 3],
					[0, 2, 0],
					[1, 0, 0],
				])
		)
		.add(
			flipud,
			() => {
				let A = random.normal(0, 1, [2, 3, 5]);
				return logic_all(equal(flipud(A), A.at(slice('::-1'), slice('...'))));
			},
			() => true
		)
		.add(
			flipud,
			() => flipud([1, 2]),
			() => array([2, 1])
		);

;// CONCATENATED MODULE: ./core/s_.mjs


let _index_exp = arg => {
	if (typeof arg == 'number') return arg;
	if (arg instanceof Slice) return arg;
	return slice(arg);
};

const tupleType = Symbol('tupleType');

/**
 * @param  {...null|number|Slice|string} args
 * @returns {Array<null|number|Slice|string>}
 */
function index_exp(...args) {
	let tup = args.map(_index_exp);
	tup[tupleType] = true;
	return tup;
}

/**
 * @param  {...null|number|Slice|string|Array<null|number|Slice|string>} args
 * @returns {Array<null|number|Slice|string>}
 */
function s_(...args) {
	if (args.length == 1) {
		return _index_exp(args[0]);
	}
	return index_exp(...args);
}

process.env.PRODUCTION ||
	tester.add(
		s_,
		() =>
			arange(8)
				.reshape(2, 2, -1)
				.get(s_(0, [0, -1], '::-1')),
		() => array([[1, 0]])
	);

;// CONCATENATED MODULE: ./core/put.mjs


/**
 * @param {NDArray} a array-like
 * @param {number|number[]} ind
 * @param {any[]} v
 * @param {string} [mode]
 */
function put(a, ind, v, mode = 'raise') {
	if (typeof ind == 'number') ind = [ind];
	if (typeof v == 'number') v = [v];

	ind = _normalize_indices(ind, mode, a.size, 0);
	let flat = a.flat;
	let n = v.length;
	for (let i = 0; i < ind.length; i++) {
		flat.set(ind[i], v[i % n]);
	}
}

function _normalize_indices_raise(indices, size, throw_axis) {
	let out = Array(indices.length);
	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i];
		if (idx < 0) idx += size;
		if (idx < 0 || idx >= size) {
			throw `index ${indices[i]} is out of bounds for axis ${throw_axis} with size ${size}`;
		}
		out[i] = idx;
	}
	return out;
}

function _normalize_indices_wrap(indices, size) {
	let out = Array(indices.length);
	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i] % size;
		if (idx < 0) idx += size;
		out[i] = idx;
	}
	return out;
}

function _normalize_indices_clip(indices, size) {
	let out = Array(indices.length);
	for (let i = 0; i < indices.length; i++) {
		let idx = indices[i];
		out[i] = Math.max(0, Math.min(idx, size - 1));
	}
	return out;
}

function _normalize_indices(indices, mode, size, throw_axis) {
	if (mode == 'raise') return _normalize_indices_raise(indices, size, throw_axis);
	if (mode == 'wrap') return _normalize_indices_wrap(indices, size);
	if (mode == 'clip') return _normalize_indices_clip(indices, size);

	throw `unexpected mode ${mode}`;
}

process.env.PRODUCTION ||
	tester.add(
			put,
			() => {
				let a = arange(5);
				put(a, [0, 2], [-44, -55]);
				return a;
			},
			() => array([-44, 1, -55, 3, 4])
		)
		.add(
			put,
			() => {
				let a = arange(5);
				put(a, 22, -5, 'clip');
				return a;
			},
			() => array([0, 1, 2, 3, -5])
		);

;// CONCATENATED MODULE: ./core/resize.mjs


/**
 * @param {NDArray} a
 * @param {number[]} new_shape
 * @returns {NDArray}
 */
function resize(a, new_shape) {
	if (typeof new_shape == 'number') new_shape = [new_shape];

	a = ravel(a);

	let new_size = 1;
	for (let dim of new_shape) {
		if (dim < 0) throw `all elements of 'new_shape' must be non-negative`;
		new_size *= dim;
	}

	if (a.size == 0 || new_size == 0) {
		return zeros(new_shape);
	}

	let repeats = Math.ceil(new_size / a.size);
	a = concatenate(Array(repeats).fill(a)).at(slice(0, new_size));

	return reshape(a, new_shape);
}

process.env.PRODUCTION ||
	tester.add(
			resize,
			() =>
				resize(
					array([
						[0, 1],
						[2, 3],
					]),
					[2, 3]
				),
			() =>
				array([
					[0, 1, 2],
					[3, 0, 1],
				])
		)
		.add(
			resize,
			() =>
				resize(
					array([
						[0, 1],
						[2, 3],
					]),
					[1, 4]
				),
			() => array([[0, 1, 2, 3]])
		)

		.add(
			resize,
			() =>
				resize(
					array([
						[0, 1],
						[2, 3],
					]),
					[2, 4]
				),
			() =>
				array([
					[0, 1, 2, 3],
					[0, 1, 2, 3],
				])
		);

;// CONCATENATED MODULE: ./core/searchsorted.mjs


/**
 * @param {NDArray} a
 * @param {NDArray} v
 * @param {string} [side]
 * @returns {NDArray}
 */
function searchsorted(a, v, side = 'left') {
	if (a instanceof NDArray) a = a.array();

	v = asarray(v);

	let out = empty_like(v);
	let i = 0;
	let _bisect = side == 'left' ? _bisectLeft : _bisectRight;
	for (let x of v.flat) {
		out.data[i++] = _bisect(a, x);
	}

	return out;
}

function _bisectLeft(arr, x) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = (left + right) >> 1;
		if (arr[mid] < x) left = mid + 1;
		else right = mid - 1;
	}
	return left;
}

function _bisectRight(arr, x) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = (left + right) >> 1;
		if (arr[mid] > x) right = mid - 1;
		else left = mid + 1;
	}
	return left;
}

process.env.PRODUCTION ||
	tester.add(
			searchsorted,
			() => searchsorted([1, 2, 3, 4, 5], 3),
			() => 2
		)
		.add(
			searchsorted,
			() => searchsorted([1, 2, 3, 4, 5], 3, 'right'),
			() => 3
		)
		.add(
			searchsorted,
			() => searchsorted([1, 2, 3, 4, 5], [-10, 10, 2, 3]),
			() => array([0, 5, 1, 2])
		);

;// CONCATENATED MODULE: ./core/roll.mjs


/**
 * @param {NDArray} a
 * @param {number} shift
 * @param {null|number|number[]} [axis]
 * @returns {NDArray}
 */
function roll(a, shift, axis = null) {
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

		let rolls = Array(a.ndim).fill([[slice(null), slice(null)]]);

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
		// console.log('rolls', rolls);
		for (let indices of new Product(rolls)) {
			let arr_index = indices.map(idx => idx[0]);
			let res_index = indices.map(idx => idx[1]);
			// for (let idx of indices) {
			// 	// console.log('idx', idx);
			// 	// if (!idx[0] || !idx[1]) break;
			// 	arr_index.push(idx[0]);
			// 	res_index.push(idx[1]);
			// }

			// console.log('?', res_index, arr_index);
			result.set(res_index, a.get(arr_index));
		}
		return result;
	}
}

class Product {
	constructor(iterables) {
		this.length = iterables.length;
		this.elements = iterables.map(iterable => Array.from(iterable));
		this.lengths = this.elements.map(element => element.length);
		this.size = this.lengths.reduce((a, b) => a * b);

		this.coords = Array(this.length);
		this.done = this.index = undefined;
		this.reset();
	}

	[Symbol.iterator]() {
		return this.reset();
	}

	reset() {
		this.coords.fill(0);
		this.index = 0;
		this.done = this.size == 0;
		return this;
	}

	next() {
		if (this.done) return { done: true };

		let { elements, coords, length, lengths } = this;

		let value = elements.map((e, i) => e[coords[i]]);

		let ptr = length - 1;
		let carry = true;
		loop: while (ptr >= 0) {
			switch (lengths[ptr]) {
				case 1:
					ptr--;
					break;
				case coords[ptr]:
					coords[ptr--] = 0;
					carry = true;
					break;
				default:
					if (!carry) break loop;
					coords[ptr] += 1;
					carry = false;
			}
		}

		this.index++;
		this.done = this.index >= this.size;

		return { value, done: false };
	}
}

process.env.PRODUCTION ||
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

;// CONCATENATED MODULE: ./core/map.mjs


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
function map(ndarray, callback) {
	return map_(callback, ndarray);
}

/**
 *
 * @param {NDArray} a
 * @param {reduceCallback} callback
 * @returns {NDArray}
 */
function reduce(a, callback) {
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

function wrapper_(name, fn, ...args) {
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
function wrapper_map(name, fn, args = null) {
	return Object.defineProperty(map_.bind(args, fn), 'name', { value: name });
}

/**
 * @param {string} name
 * @param {map2Callback} fn
 * @param {Object} [args = null]
 * @returns {map2WrappedFunction}
 * @ignore
 */
function wrapper_map2(name, fn, args = null) {
	return Object.defineProperty(map2_.bind(args, fn), 'name', { value: name });
}

/**
 * @param {string} name
 * @param {reduceCallback} fn
 * @param {any} [defaultinitial = undefined]
 * @returns {reduceWrappedFunction}
 * @ignore
 */
function wrapper_reduce(name, fn, defaultinitial = undefined) {
	return Object.defineProperty(reduce_.bind({ defaultinitial }, fn), 'name', { value: name });
}

/**
 * @param {string} name
 * @param {accumulateCallback} fn
 * @param {Object} [args = null]
 * @returns {accumulateWrappedFunction}
 * @ignore
 */
function wrapper_accumulate(name, fn, args = null) {
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
function map_(fn, x, out = null, dtype = this?.dtype) {
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
function map2_(fn, x1, x2, out = null, dtype = this?.dtype) {
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
function reduce_(
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
	let axes = map_normalize_axes(axis, x.ndim);
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
function accumulate_(fn, x, axis = null, out = null, dtype = this?.dtype) {
	x = asarray(x);

	if (axis == null) {
		x = ravel(x);
	}

	let axes = map_normalize_axes(axis, x.ndim);

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
function map_normalize_axes(axis, ndim, allow_duplicate = false) {
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
function normalize_axis_index(axis, ndim) {
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

process.env.PRODUCTION ||
	tester.add(
		map,
		() => map(arange(10).reshape(-1, 2), element => element ** 2),
		() => power(arange(10).reshape(-1, 2), 2)
	);

process.env.PRODUCTION ||
	tester.add(
		reduce,
		() => reduce_((x1, x2) => x1 * x2, arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3], null, false),
		() => prod(arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3])
	);

process.env.PRODUCTION ||
	tester.add(
		reduce,
		() => accumulate_((x1, x2) => x1 * x2, arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3], null),
		() => cumprod(arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [1, 3])
	);

;// CONCATENATED MODULE: ./core/matmul.mjs


/**
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
function matmul(x1, x2, out = null) {
	x1 = asarray(x1);
	x2 = asarray(x2);

	assert(x1.ndim > 0, `x1 does not have enough dimensions`);
	assert(x2.ndim > 0, `x2 does not have enough dimensions`);

	let x11d = x1.ndim == 1;
	let x21d = x2.ndim == 1;
	let any1d = x11d || x21d;

	if (x11d) x1 = x1.at(null, slice(':'));

	if (x21d) x2 = x2.at(slice(':'), null);

	if (x1.ndim == 2 && x2.ndim == 2) {
		assert(x1.shape[1] == x2.shape[0], `input shape mismatch`);

		let n = x1.shape[0];
		let m = x2.shape[1];

		let _shape = [n, m];
		let shape = any1d ? _shape.slice(x11d ? 1 : 0, x21d ? -1 : undefined) : _shape;

		if (out == null) out = empty(shape);
		else assert(shallow_array_equal(shape, out.shape), `out shape mismatch`);

		let _out = any1d ? out.reshape(_shape) : out;

		let x2T = x2.T;
		for (let [i, j] of ndindex(_shape)) {
			_out.set([i, j], dot(x1.at(i), x2T.at(j)));
		}

		return out;
	}

	let _shape = broadcast_shapes(x1.shape.slice(0, -2), x2.shape.slice(0, -2));
	x1 = broadcast_to(x1, [..._shape, ...x1.shape.slice(-2)]);
	x2 = broadcast_to(x2, [..._shape, ...x2.shape.slice(-2)]);

	assert(x1.shape.at(-1) == x2.shape.at(-2), `input shape mismatch`);

	let n = x1.shape.at(-2);
	let m = x2.shape.at(-1);
	let shape = [..._shape, n, m];

	if (out == null) out = empty(shape);
	else assert(shallow_array_equal(shape, out.shape), `out shape mismatch`);

	for (let index of ndindex(_shape)) {
		matmul(x1.get(index), x2.get(index), out.get(index));
	}

	return out;
}

process.env.PRODUCTION ||
	tester.add(
			matmul,
			() => {
				let a = array([
					[1, 0],
					[0, 1],
				]);
				let b = array([
					[4, 1],
					[2, 2],
				]);
				return matmul(a, b);
			},
			() =>
				array([
					[4, 1],
					[2, 2],
				])
		)
		.add(
			matmul,
			() => {
				let a = array([
					[1, 0],
					[0, 1],
				]);
				let b = array([1, 2]);
				return [matmul(a, b), matmul(b, a)];
			},
			() => [array([1, 2]), array([1, 2])]
		)
		.add(
			matmul,
			() => {
				let a = arange(2 * 2 * 4).reshape([2, 2, 4]);
				let b = arange(2 * 2 * 4).reshape([2, 4, 2]);
				return matmul(a, b);
			},
			() =>
				array([
					[
						[28, 34],
						[76, 98],
					],
					[
						[428, 466],
						[604, 658],
					],
				])
		);

;// CONCATENATED MODULE: ./core/dot.mjs


function assert(cond, msg) {
	if (!cond) {
		throw new Error(msg);
	}
}

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {null|NDArray} [out]
 * @returns {NDArray}
 */
function dot(a, b, out = null) {
	a = asarray(a);
	b = asarray(b);

	if (a.ndim == 1 && b.ndim == 1) return sum(multiply(a, b), 0, out);

	if (a.ndim == 2 && b.ndim == 2) return matmul(a, b, out);

	if (a.ndim == 0 || b.ndim == 0) return multiply(a, b, out);

	if (b.ndim == 1) {
		assert(a.shape.at(-1) == b.shape[0], `shapes ${a.shape} and ${b.shape} not aligned`);

		let shape = a.shape.slice(0, -1);
		if (out == null) out = empty(shape);
		else assert(shallow_array_equal(shape, out.shape), `out shape mismatch`);

		for (let index of ndindex(shape)) {
			dot(a.get(index), b, out.at(slice('...'), ...index));
		}

		return out;
	}
}

process.env.PRODUCTION ||
	tester.add(
			dot,
			() => dot(3, 4),
			() => 12
		)
		.add(
			dot,
			() =>
				dot(
					[
						[1, 2],
						[3, 4],
					],
					[4, 1]
				),
			() => array([6, 16])
		)
		.add(
			dot,
			() =>
				dot(
					[
						[1, 0],
						[0, 1],
					],
					[
						[4, 1],
						[2, 2],
					]
				),
			() =>
				array([
					[4, 1],
					[2, 2],
				])
		);

;// CONCATENATED MODULE: ./core/array2string.mjs


/**
 *
 * @param {NDArray} a
 * @param {FormatOptions} options
 * @returns {string}
 */
function array2string(a, options = null) {
	options = options != null ? Object.assign(Object.create(_formatOptions), options) : _formatOptions;

	let { separator, prefix } = options;

	if (a.size == 0) return `[]`;

	return _array2string(a, options, separator, prefix);
}

/**
 *
 * @param {NDArray} a
 * @param {number} linewidth
 * @param {number} precision
 * @returns {string}
 */
function array_str(a, linewidth = null, precision = null) {
	linewidth ??= _formatOptions.linewidth;
	precision ??= _formatOptions.precision;

	if (a.ndim == 0) return `${a.item()}`;

	return array2string(a, { linewidth, precision });
}

/**
 *
 * @param {NDArray} a
 * @param {number} linewidth
 * @param {number} precision
 * @returns {string}
 */
function array_repr(a, linewidth = null, precision = null) {
	linewidth ??= _formatOptions.linewidth;
	precision ??= _formatOptions.precision;

	if (a.ndim == 0) return `${a.item()}`;

	let class_name = a instanceof NDArray ? 'array' : typeof a;

	let skipdtype = dtype_is_implied(a.dtype) && a.size > 0;

	let prefix = class_name + '(';
	let suffix = skipdtype ? ')' : ',';

	let lst;
	if (a.size > 0 || shallow_array_equal(a.shape, [0])) {
		lst = array2string(a, { linewidth, precision, separator: ', ', prefix });
	} else {
		lst = `[], shape=[${a.shape.join(', ')}]`;
	}

	let arr_str = prefix + lst + suffix;

	if (skipdtype) return arr_str;

	let dtype_str = `dtype=${a.dtype.name})`;

	let last_line_len = arr_str.length - (arr_str.lastIndexOf('\n') + 1);
	let spacer = ' ';

	if (last_line_len + dtype_str.length + 1 > linewidth) {
		spacer = '\n' + ' '.repeat((class_name + '(').length);
	}

	return arr_str + spacer + dtype_str;
}

/**
 * @typedef {Object} FormatOptions
 * @property {number} edgeitems
 * @property {number} threshold
 * @property {number|undefined} precision
 * @property {number} linewidth
 * @property {number|null} formatter
 * @property {string} separator
 * @property {string} prefix
 */

/**
 * @type {FormatOptions}
 * @ignore
 */
let _formatOptions = {
	edgeitems: 3,
	threshold: 1000,
	linewidth: 75,
	precision: undefined,
	formatter: null,
	separator: ' ',
	prefix: '',
};

/**
 *
 * @param {NDArray} a
 * @param {number} edgeitems
 * @param {Array<number|Slice>} index
 * @returns {NDArray}
 * @ignore
 */
function _leading_trailing(a, edgeitems, index = []) {
	let axis = index.length;
	if (axis == a.ndim) return a.get(index);

	if (a.shape[axis] > 2 * edgeitems) {
		let leftIndex = index.concat(index_exp([, edgeitems]));
		let rightIndex = index.concat(index_exp([-edgeitems]));
		return concatenate(
			[_leading_trailing(a, edgeitems, leftIndex), _leading_trailing(a, edgeitems, rightIndex)],
			axis
		);
	}

	return _leading_trailing(a, edgeitems, index.concat(index_exp(':')));
}

/**
 * @class
 * @ignore
 */
class Callable {
	get __call__() {
		return this.call.bind(null, this);
	}
}

/**
 * @class
 * @ignore
 */
class IntegerFormat extends Callable {
	/**
	 *
	 * @param {NDArray} data
	 */
	constructor(data) {
		super();
		this.padLeft = data.size > 0 ? Math.max(String(data.max()).length, String(data.min()).length) : 0;
	}

	/**
	 *
	 * @param {{padLeft: number}} thisArg
	 * @param {number} x
	 */
	call({ padLeft } = this, x) {
		let str = String(x);
		return ' '.repeat(padLeft - str.length) + str;
	}
}

/**
 *
 * @param {number} x
 * @param {number|undefined} precision
 * @returns {string}
 * @ignore
 */
function scientific(x, precision) {
	return x.toExponential(precision);
}

/**
 *
 * @param {number} x
 * @param {number|undefined} precision
 * @returns {string}
 * @ignore
 */
function positional(x, precision) {
	return precision != undefined ? x.toFixed(precision) : String(x);
}

/**
 * @class
 * @ignore
 */
class FloatingFormat extends Callable {
	/**
	 *
	 * @param {NDArray} data
	 * @param {number} precision
	 */
	constructor(data, precision = undefined) {
		super();
		this.precision = precision;

		let exp_format = false;
		{
			let min_val = data.item(0);
			let max_val = min_val;
			let any_non_zero_finite = false;

			for (let x of data.flat) {
				if (Number.isFinite(x)) {
					if (x != 0) {
						x = Math.abs(x);
						min_val = Math.min(min_val, x);
						max_val = Math.max(max_val, x);
						any_non_zero_finite = true;
					}
				}
			}

			if (any_non_zero_finite && (max_val >= 1e8 || min_val < 0.0001 || max_val / min_val > 1000)) {
				exp_format = true;
			}
		}
		this.exp_format = exp_format;

		let max_len = 0;
		if (this.exp_format) {
			for (let x of data.flat) {
				max_len = Math.max(max_len, scientific(x, precision).length);
			}
		} else {
			for (let x of data.flat) {
				max_len = Math.max(max_len, positional(x, precision).length);
			}
		}
		this.padLeft = max_len;
	}

	/**
	 *
	 * @param {{padLeft: number, exp_format: boolean, precision: number|undefined}} thisArg
	 * @param {number} x
	 */
	call({ padLeft, exp_format, precision } = this, x) {
		let str = exp_format ? scientific(x, precision) : positional(x, precision);
		return ' '.repeat(padLeft - str.length) + str;
	}
}

/**
 * @param {*} x
 * @ignore
 */
function default_format(x) {
	if (typeof x == 'string') return `'${x}'`;
	return `${x}`;
}

/**
 * @param {*} x
 * @ignore
 */
let indirect = x => () => x;

/**
 * @param {NDArray} data
 * @param {FormatOptions} options
 * @ignore
 */
function _get_formatdict(data, options) {
	let formatdict = {
		int: () => new IntegerFormat(data).__call__,
		float: () => new FloatingFormat(data, options.precision).__call__,
		object: () => default_format,
	};

	let { formatter } = options;

	if (formatter != null) {
		for (let key of Object.keys(formatter)) {
			formatdict[key] = indirect(formatter[key]);
		}
	}

	return formatdict;
}

function all_integer(array) {
	for (let n of array) {
		if (!Number.isInteger(n)) return false;
	}
	return true;
}

function _get_format_function(data, options) {
	let formatdict = _get_formatdict(data, options);
	let array = data.flat.copy().data;
	let type = guessType(array);
	let dtype = dtype_(type) == dtype_('number') ? (all_integer(array) ? 'int' : 'float') : 'object';
	return formatdict[dtype](options);
}

/**
 * @param {string} s
 * @param {string} line
 * @param {string} word
 * @param {number} line_width
 * @param {string} next_line_prefix
 * @param {number} legacy
 * @returns {string[]}
 * @ignore
 */
function _extendLine(s, line, word, line_width, next_line_prefix, legacy) {
	let needs_wrap = line.length + word.length > line_width;
	if (legacy > 113) {
		if (line.length <= next_line_prefix.length) {
			needs_wrap = false;
		}
	}

	if (needs_wrap) {
		s += line.trimEnd() + '\n';
		line = next_line_prefix;
	}
	line += word;
	return [s, line];
}

/**
 * @param {string} s
 * @param {string} line
 * @param {string} word
 * @param {number} line_width
 * @param {string} next_line_prefix
 * @param {number} legacy
 * @returns {string[]}
 * @ignore
 */
function _extendLine_pretty(s, line, word, line_width, next_line_prefix, legacy) {
	let words = word.split(/\r?\n/);
	if (words.length === 1 || legacy <= 113) {
		return _extendLine(s, line, word, line_width, next_line_prefix, legacy);
	}

	let max_word_length = Math.max(...words.map(w => w.length));
	let indent;
	if (line.length + max_word_length > line_width && line.length > next_line_prefix.length) {
		s += line.trimEnd() + '\n';
		line = next_line_prefix + words[0];
		indent = next_line_prefix;
	} else {
		indent = ' '.repeat(line.length);
		line += words[0];
	}

	for (let i = 1; i < words.length; i++) {
		s += line.trimEnd() + '\n';
		line = indent + words[i];
	}

	let suffix_length = max_word_length - words.at(-1).length;
	line += ' '.repeat(suffix_length);

	return [s, line];
}

function _formatArray(
	a,
	format_function,
	line_width,
	next_line_prefix,
	separator,
	edge_items,
	summary_insert,
	legacy
) {
	/**
	 *
	 * @param {Array<number|Slice>} index
	 * @param {string} hanging_indent
	 * @param {number} curr_width
	 * @returns {string}
	 */
	function recurser(index, hanging_indent, curr_width) {
		let axis = index.length;
		let axes_left = a.ndim - axis;

		if (axes_left === 0) {
			return format_function(a.item(index));
		}

		let next_hanging_indent = hanging_indent + ' ';
		let next_width;
		if (legacy <= 113) {
			next_width = curr_width;
		} else {
			next_width = curr_width - ']'.length;
		}

		let a_len = a.shape[axis];
		let show_summary = summary_insert && 2 * edge_items < a_len;
		let leading_items, trailing_items;

		if (show_summary) {
			leading_items = edge_items;
			trailing_items = edge_items;
		} else {
			leading_items = 0;
			trailing_items = a_len;
		}

		let s = '';

		if (axes_left === 1) {
			let elem_width;
			let seqlen = separator.trimEnd().length;
			if (legacy <= 113) {
				elem_width = curr_width - seqlen;
			} else {
				elem_width = curr_width - Math.max(seqlen, ']'.length);
			}

			let line = hanging_indent;
			for (let i = 0; i < leading_items; i++) {
				let word = recurser([...index, i], next_hanging_indent, next_width);
				[s, line] = _extendLine_pretty(s, line, word, elem_width, hanging_indent, legacy);
				line += separator;
			}

			if (show_summary) {
				[s, line] = _extendLine(s, line, summary_insert, elem_width, hanging_indent, legacy);
				if (legacy <= 113) line += ', ';
				else line += separator;
			}

			for (let i = trailing_items; i > 1; i--) {
				let word = recurser([...index, -i], next_hanging_indent, next_width);
				[s, line] = _extendLine_pretty(s, line, word, elem_width, hanging_indent, legacy);
				line += separator;
			}

			if (legacy <= 113) elem_width = curr_width;
			let word = recurser([...index, -1], next_hanging_indent, next_width);
			[s, line] = _extendLine_pretty(s, line, word, elem_width, hanging_indent, legacy);

			s += line;
		} else {
			s = '';
			let line_sep = separator.trimEnd() + '\n'.repeat(axes_left - 1);

			for (let i = 0; i < leading_items; i++) {
				let nested = recurser([...index, i], next_hanging_indent, next_width);
				s += hanging_indent + nested + line_sep;
			}

			if (show_summary) {
				s += hanging_indent + summary_insert;
				if (legacy <= 113) s += ', \n';
				else s += line_sep;
			}

			let i = trailing_items;
			for (; i > 1; i--) {
				let nested = recurser([...index, -i], next_hanging_indent, next_width);
				s += hanging_indent + nested + line_sep;
			}

			let nested = recurser([...index, -i], next_hanging_indent, next_width);
			s += hanging_indent + nested;
		}

		s = '[' + s.slice(hanging_indent.length) + ']';
		return s;
	}

	try {
		return recurser([], next_line_prefix, line_width);
	} finally {
		recurser = null;
	}
}

/**
 * @param {NDArray} a
 * @param {FormatOptions} options
 * @param {string} separator
 * @param {string} prefix
 * @returns {string}
 * @ignore
 */
function _array2string(a, options = _formatOptions, separator = ' ', prefix = '') {
	let data = asarray(a);
	if (a.ndim == 0) a = data;

	let summary_insert;
	if (a.size > options.threshold) {
		summary_insert = '...';
		data = _leading_trailing(data, options.edgeitems);
	} else {
		summary_insert = '';
	}

	let format_function = _get_format_function(data, options);

	let next_line_prefix = ' ' + ' '.repeat(prefix.length);

	let lst = _formatArray(
		a,
		format_function,
		options.linewidth,
		next_line_prefix,
		separator,
		options.edgeitems,
		summary_insert,
		options.legacy
	);

	return lst;
}

function dtype_is_implied(dtype) {
	return ['number', 'boolean'].includes(dtype.name);
}

process.env.PRODUCTION ||
	tester.add(
			array2string,
			() => array2string(arange(3 * 4 * 5 * 6 * 7).reshape(3, 4, 5 * 6 * 7)),
			() =>
				'[[[   0    1    2 ...  207  208  209]\n  [ 210  211  212 ...  417  418  419]\n  [ 420  421  422 ...  627  628  629]\n  [ 630  631  632 ...  837  838  839]]\n\n [[ 840  841  842 ... 1047 1048 1049]\n  [1050 1051 1052 ... 1257 1258 1259]\n  [1260 1261 1262 ... 1467 1468 1469]\n  [1470 1471 1472 ... 1677 1678 1679]]\n\n [[1680 1681 1682 ... 1887 1888 1889]\n  [1890 1891 1892 ... 2097 2098 2099]\n  [2100 2101 2102 ... 2307 2308 2309]\n  [2310 2311 2312 ... 2517 2518 2519]]]'
		)
		.add(
			array2string,
			() => array2string(array([0.1, 100, 50, -9000])),
			() => '[ 1e-1  1e+2  5e+1 -9e+3]'
		)
		.add(
			array2string,
			() => array2string(array([1.1, 100.2, 50.6])),
			() => '[  1.1 100.2  50.6]'
		);

process.env.PRODUCTION ||
	tester.add(
			array_repr,
			() => array_repr(array([1.1, 100.2, 50.6])),
			() => 'array([  1.1, 100.2,  50.6])'
		)
		.add(
			array_repr,
			() => '' + array([1.1, 100.2, 50.6]),
			() => 'array([  1.1, 100.2,  50.6])'
		);

// tester.onload(() => {
// 	console.log(array([10.22, 12.9, 66.3]).valueOf());
// 	console.log(array(99));
// });

;// CONCATENATED MODULE: ./core/ndoffset.mjs


/** @class */
class NdoffsetIterator {
	/**
	 * @param {number[]} shape
	 * @param {number[]} strides
	 * @param {number} initial
	 */
	constructor(shape, strides, initial) {
		/** @member {number} */
		this.ndim = shape.length;
		/** @member {number} */
		this.size = get_size(shape);
		/** @member {number[]} */
		this.shape = shape;

		/** @member {number[]} */
		this.strides = strides;
		let dim_strides = Array(this.ndim);
		for (let i = 0; i < this.ndim; i++) dim_strides[i] = shape[i] * strides[i];
		/** @member {number[]} */
		this.dim_strides = dim_strides;
		/** @member {number} */
		this.initial = initial;

		/** @member {number} */
		this.offset;

		/** @member {number[]} */
		this.coords = Array(this.ndim);
		/** @member {number} */
		this.index;
		/** @member {boolean} */
		this.done;

		this[Symbol.iterator]();
	}

	[Symbol.iterator]() {
		this.index = 0;
		this.done = this.size == 0;
		this.coords.fill(0);
		this.offset = this.initial;
		return this;
	}

	/**
	 * @typedef {Object} NdoffsetResult
	 * @property {number} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {NdoffsetResult}
	 */
	next() {
		if (this.done) return { done: true };

		let { offset, coords, size, index } = this;
		if (index != 0) {
			let { shape, strides, ndim, dim_strides } = this;

			let ptr = ndim - 1;
			let carry = true;
			while (ptr >= 0) {
				let dim = shape[ptr];
				if (dim == 1) {
					ptr--;
				} else if (dim == coords[ptr]) {
					offset -= dim_strides[ptr];
					coords[ptr--] = 0;
					carry = true;
				} else {
					if (!carry) break;
					offset += strides[ptr];
					coords[ptr]++;
					carry = false;
				}
			}
			this.offset = offset;
		}

		this.done = ++this.index >= size;

		return { value: offset, done: false };
	}
}

/**
 *
 * @param {number[]} shape
 * @param {number[]} strides
 * @param {number} [initial = 0]
 * @returns {NdoffsetIterator}
 */
function ndoffset(shape, strides, initial = 0) {
	return new NdoffsetIterator(shape, strides, initial);
}

process.env.PRODUCTION ||
	tester.add(
		ndoffset,
		() => {
			let a = arange(100);
			a = a.at(slice(20, -20)).reshape([2, 1, -1, 2]).at(slice('...'), slice('::-1'));
			// console.log(a.shape, a.strides, a.offset, a.data, [...ndoffset(a.shape, a.strides)]);
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

// tester.onload(() => {
// 	let a = arange(100);
// 	a = a.get(slice(20, -20)).reshape([2, 1, -1, 2]).get(slice('...'), slice('::-1'));

// 	console.log(ndoffset(a.shape, a.strides, a.offset));
// 	console.log([...ndoffset(a.shape, a.strides, a.offset)]);
// });

;// CONCATENATED MODULE: ./core/flat.mjs


/**
 * @class
 * @extends {NdoffsetIterator}
 */
class Flatiter extends NdoffsetIterator {
	/**
	 * @param {NDArray} base
	 */
	constructor(base) {
		let { shape, strides, offset } = base;
		super(shape, strides, offset);

		/** @member {NDArray} */
		this.base = base;
	}

	/**
	 * @typedef {Object} FlatiterResult
	 * @property {any} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {FlatiterResult}
	 */
	next() {
		if (this.done) return { done: true };
		return { value: this.base.data[super.next().value], done: false };
	}

	/**
	 * @param {number|Slice|string|number[]} index
	 * @returns {NDArray}
	 */
	at(index) {
		return this.get(index);
	}

	/**
	 * @param {number|Slice|string|number[]} index
	 * @returns {NDArray}
	 */
	get(index) {
		let { base } = this;
		if (typeof index == 'number') {
			return array(base.item(index), base.dtype);
		}
		if (typeof index == 'string') index = slice(index);

		let it, out;
		if (index instanceof Slice) {
			it = index.indices(base.size);
			out = empty([it.slicelength], base.dtype);
		} else {
			it = asarray(index).flat;
			out = empty_like(index);
		}

		let i = 0;
		for (let idx of it) {
			out.data[i++] = base.item(idx);
		}
		return out;
	}

	/**
	 * `Flatiter.set` repeats and flattens `value` to match the number of elements being set.
	 *
	 * `NDArray.set` broadcasts the value to match the shape of the selection
	 * @param {number|Slice|string|number[]} index
	 * @param {any[]|any} value
	 * @returns {Flatiter} this
	 */
	set(index, value) {
		let { base } = this;
		if (typeof index == 'number') {
			base.itemset(index, value);
			return this;
		}
		if (typeof index == 'string') index = slice(index);

		if (value instanceof Flatiter) {
			value = [...value];
		} else {
			value = asarray(value).flatten().data;
		}

		let it = index instanceof Slice ? index.indices(base.size) : asarray(index).flat;

		let i = 0;
		for (let idx of it) {
			base.itemset(idx, value[i++ % value.length]);
		}
		return this;
	}

	/**
	 * Returns a copy of the flatten array
	 * @returns {NDArray}
	 */
	copy() {
		return this.base.flatten();
	}
}

process.env.PRODUCTION ||
	tester.add(
		'Flatiter',
		() => {
			let arr = array([0, 1, 2, 3, 4, 5]).reshape(2, 3);
			let a = new Flatiter(arr);
			let out = [];
			// console.log(a.next());
			for (let item of a) {
				out.push(item);
			}
			return out;
		},
		() => [0, 1, 2, 3, 4, 5]
	);

process.env.PRODUCTION ||
	tester.add(
			'Flatiter.get',
			() =>
				new Flatiter(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				).at(3),
			() => 4
		)
		.add(
			'Flatiter.get',
			() =>
				new Flatiter(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				).at(slice(2, -2)),
			() => array([3, 4])
		)
		.add(
			'Flatiter.get',
			() =>
				new Flatiter(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				).get([3, 4, -1]),
			() => [4, 5, 6]
		);

process.env.PRODUCTION ||
	tester.add(
			'Flatiter.set',
			() => {
				let x = array([
					[3, 3, 3],
					[3, 3, 3],
				]);
				new Flatiter(x).set([1, -1], [[1], [2]]);
				return x;
			},
			() => [
				[3, 1, 3],
				[3, 3, 2],
			]
		)
		.add(
			'Flatiter.set',
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				x.flat.set(
					[1, 0, 1],
					[
						[1, 2, 3],
						[5, 6, 7],
					]
				);
				return x;
			},
			() =>
				array([
					[2, 3, 3],
					[4, 5, 6],
				])
		)
		.add(
			'Flatiter.set',
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				x.flat.set(slice(1, -1), [
					[1, 2, 3],
					[5, 6, 7],
				]);
				return x;
			},
			() =>
				array([
					[1, 1, 2],
					[3, 5, 6],
				])
		)
		.add(
			'Flatiter.set',
			() => {
				let x = array([
					[1, 2, 3],
					[4, 5, 6],
				]);
				x.flat.set(':', [[1, 2]]);
				return x;
			},
			() =>
				array([
					[1, 2, 1],
					[2, 1, 2],
				])
		);

process.env.PRODUCTION ||
	tester.add(
		'Flatiter.copy',
		() =>
			new Flatiter(
				array([0, 1, 2, 3, 4, 5])
					.reshape(2, 3)
					.at(slice([, , -1]))
			).copy(),
		() => [3, 4, 5, 0, 1, 2]
	);

;// CONCATENATED MODULE: ./core/ndenumerate.mjs


/**
 * @param {NDArray} a
 * @returns {NdenumerateIterator}
 */
function ndenumerate(a) {
	a = asarray(a);
	return new NdenumerateIterator(a);
}

/**
 * @class
 * @extends {Flatiter}
 */
class NdenumerateIterator extends Flatiter {
	/**
	 * @param {NDArray} base
	 */
	constructor(base) {
		super(base);
	}

	/**
	 * @typedef {Object} NdenumerateResult
	 * @property {Array.<number[], any>} value
	 * @property {boolean} done
	 */

	/**
	 * @returns {NdenumerateResult}
	 */
	next() {
		if (this.done) return { done: true };
		let value = super.next().value;
		return { value: [this.coords, value], done: false };
	}
}

process.env.PRODUCTION ||
	tester.add(
		ndenumerate,
		() => {
			{
				let a;
				a = array([
					[1, 2],
					[3, 4],
				]);
				let out = [];
				for (let [index, x] of ndenumerate(a)) {
					out.push(index.slice(), x);
				}
				return out;
			}
		},
		() => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]
	);

;// CONCATENATED MODULE: ./core/unravel_index.mjs


/**
 * Expects non-negative indices
 * @param {NDArray} indices array-like
 * @param {number[]} shape
 * @returns {NDArray[]}
 * @example
 * unravel_index([22, 41, 37], [7, 6])
 * // [array([3, 6, 6]), array([4, 5, 1])]
 * @example
 * unravel_index(1621, [6, 7, 8, 9])
 * // [3, 1, 4, 1]
 */
function unravel_index(indices, shape) {
	indices = asarray(indices);

	let ndim = shape.length;
	let size = get_size(shape);
	let out = empty([].concat(indices.shape, ndim));

	let i = 0;
	for (let idx of indices.flat) {
		if (idx < 0 || idx >= size) {
			throw new Error(`index ${idx} is out of bounds for array with size ${size}`);
		}
		for (let axis = ndim; axis--; ) {
			out.data[i + axis] = idx % shape[axis];
			idx = (idx / shape[axis]) | 0;
		}
		i += ndim;
	}

	let unraveled_coords = Array(ndim)
		.fill()
		.map((_, i) => i)
		.map(i => out.at('...', i));

	return unraveled_coords;
}

process.env.PRODUCTION ||
	tester.add(
			unravel_index,
			() => unravel_index([22, 41, 37], [7, 6]),
			() => [array([3, 6, 6]), array([4, 5, 1])]
		)
		.add(
			unravel_index,
			() => unravel_index(1621, [6, 7, 8, 9]),
			() => [3, 1, 4, 1]
		);

;// CONCATENATED MODULE: ./core/ravel_multi_index.mjs


/**
 * One mode per index is not supported yet
 * @param {NDArray[]} multi_index array-like array
 * @param {number[]} shape
 * @param {string} [mode] {'raise', 'wrap', 'clip'}
 * @example
 * ravel_multi_index([[3, 6, 6], [4, 5, 1]], [4, 6], 'clip')
 * // array([22, 23, 19])
 * @example
 * ravel_multi_index([3, 1, 4, 1], [6, 7, 8, 9])
 * // array(1621)
 */
function ravel_multi_index(multi_index, shape, mode = 'raise') {
	// slower implementation (?) as it depends on many library functions
	let indices = asarray(multi_index).T;
	indices = atleast_2d(indices);

	if (mode == 'raise') {
		if (any(less(indices, 0)) || any(greater(indices, shape))) {
			throw new Error(`index is out of bounds for array with shape ${shape}`);
		}
	} else if (mode == 'wrap') {
		indices = mod(add(mod(indices, shape), shape), shape);
	} else if (mode == 'clip') {
		indices = clip_clip(indices, zeros(shape.length), subtract(shape, 1));
	} else {
		throw new Error(`unsupported mode '${mode}'`);
	}

	let out = empty(shape_(multi_index).slice(1));
	let strides = concatenate([cumprod(shape.slice(1).reverse()).at('::-1'), [1]]);
	let i = 0;
	for (let coords of indices) {
		out.itemset(i++, sum(multiply(coords, strides)));
	}

	return out;
}

process.env.PRODUCTION ||
	tester.add(
			ravel_multi_index,
			() =>
				ravel_multi_index(
					array([
						[3, 6, 6],
						[4, 5, 1],
					]),
					[7, 6]
				),
			() => array([22, 41, 37])
		)
		.add(
			ravel_multi_index,
			() =>
				ravel_multi_index(
					[
						[3, 6, 6],
						[4, 5, 1],
					],
					[4, 6],
					'clip'
				),
			() => array([22, 23, 19])
		)
		.add(
			ravel_multi_index,
			() =>
				ravel_multi_index(
					array([
						[3, 6, 6],
						[4, 5, 1],
					]),
					[4, 4],
					'wrap'
				),
			() => array([12, 9, 9])
		)
		.add(
			ravel_multi_index,
			() => ravel_multi_index([3, 1, 4, 1], [6, 7, 8, 9]),
			() => 1621
		);

;// CONCATENATED MODULE: ./core/evaluate.mjs


function compile(fn, params = {}) {
	console.log(fn.toString());
}

// process.env.PRODUCTION || tester(
// 	compile,
// 	() => {
// 		console.log([...ndoffset([1, 2, 3], [-2, -1, 1], 0)]);
// 		compile(({ x }) => x * 5 + 1);
// 		compile(function fn({ x }) {
// 			return x * 5 + 1;
// 		});
// 	},
// 	() => 1
// );

;// CONCATENATED MODULE: ./core/cumulative.mjs


/**
 * x1 * x2
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const cumprod = wrapper_accumulate('cumprod', (x1, x2) => x1 * x2);

/**
 * x1 + x2
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const cumsum = wrapper_accumulate('cumsum', (x1, x2) => x1 + x2);

let nan1 = x => (Number.isNaN(x) ? 1 : x);

/**
 * nan1(x1) * nan1(x2)
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const nancumprod = wrapper_accumulate('nancumprod', (x1, x2) => nan1(x1) * nan1(x2));

let nan0 = x => (Number.isNaN(x) ? 0 : x);

/**
 * nan0(x1) + nan0(x2)
 * @function
 * @param {NDArray} x
 * @param {null|number|number[]} [axis = null]
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
const nancumsum = wrapper_accumulate('nancumsum', (x1, x2) => nan0(x1) + nan0(x2));

process.env.PRODUCTION ||
	tester.add(
			cumprod,
			() => cumprod(0),
			() => array([0])
		)
		.add(
			cumprod,
			() => cumprod([]),
			() => array([])
		)
		.add(
			cumprod,
			() => cumprod(array([1, 2, 3])),
			() => array([1, 2, 6])
		)
		.add(
			cumprod,
			() =>
				cumprod(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				),
			() => array([1, 2, 6, 24, 120, 720])
		)
		.add(
			cumprod,
			() =>
				cumprod(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					0
				),
			() =>
				array([
					[1, 2, 3],
					[4, 10, 18],
				])
		)
		.add(
			cumprod,
			() =>
				cumprod(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					1
				),
			() =>
				array([
					[1, 2, 6],
					[4, 20, 120],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			cumsum,
			() =>
				cumsum(
					array([
						[1, 2, 3],
						[4, 5, 6],
					])
				),
			() => array([1, 3, 6, 10, 15, 21])
		)
		.add(
			cumsum,
			() =>
				cumsum(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					0
				),
			() =>
				array([
					[1, 2, 3],
					[5, 7, 9],
				])
		)
		.add(
			cumsum,
			() =>
				cumsum(
					array([
						[1, 2, 3],
						[4, 5, 6],
					]),
					1
				),
			() =>
				array([
					[1, 3, 6],
					[4, 9, 15],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			nancumprod,
			() => nancumprod(1),
			() => array([1])
		)
		.add(
			nancumprod,
			() => nancumprod([1]),
			() => array([1])
		)
		.add(
			nancumprod,
			() => nancumprod([1, NaN]),
			() => array([1, 1])
		)
		.add(
			nancumprod,
			() =>
				nancumprod(
					array([
						[1, 2],
						[3, NaN],
					])
				),
			() => array([1, 2, 6, 6])
		)
		.add(
			nancumprod,
			() =>
				nancumprod(
					array([
						[1, 2],
						[3, NaN],
					]),
					0
				),
			() =>
				array([
					[1, 2],
					[3, 2],
				])
		)
		.add(
			nancumprod,
			() =>
				nancumprod(
					array([
						[1, 2],
						[3, NaN],
					]),
					1
				),
			() =>
				array([
					[1, 2],
					[3, 3],
				])
		);

process.env.PRODUCTION ||
	tester.add(
			nancumsum,
			() => nancumsum(1),
			() => array([1])
		)
		.add(
			nancumsum,
			() => nancumsum([1]),
			() => array([1])
		)
		.add(
			nancumsum,
			() => nancumsum([1, NaN]),
			() => array([1, 1])
		)
		.add(
			nancumsum,
			() =>
				nancumsum(
					array([
						[1, 2],
						[3, NaN],
					])
				),
			() => array([1, 3, 6, 6])
		)
		.add(
			nancumsum,
			() =>
				nancumsum(
					array([
						[1, 2],
						[3, NaN],
					]),
					0
				),
			() =>
				array([
					[1, 2],
					[4, 2],
				])
		)
		.add(
			nancumsum,
			() =>
				nancumsum(
					array([
						[1, 2],
						[3, NaN],
					]),
					1
				),
			() =>
				array([
					[1, 3],
					[3, 3],
				])
		);

;// CONCATENATED MODULE: ./core/isclose.mjs


/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [rtol = 1e-5]
 * @param {number} [atol = 1e-8]
 * @param {boolean} [equal_nan = false]
 * @returns {NDArray}
 */
function isclose(a, b, rtol = 1e-5, atol = 1e-8, equal_nan = false) {
	a = asarray(a);
	b = asarray(b);

	let afin = isfinite(a);
	let bfin = isfinite(b);
	if (logic_all(afin) && logic_all(bfin)) {
		return within_tol(a, b, atol, rtol);
	}

	[a, b] = broadcast_arrays(a, b);

	let finite = logical_and(afin, bfin);
	let infinite = not(finite);
	let cond = zeros_like(finite);

	// console.log(a, b, within_tol(a.at(finite), b.at(finite), atol, rtol), finite, a.at(finite), b.at(finite));

	cond.set([finite], within_tol(a.at(finite), b.at(finite), atol, rtol));
	cond.set([infinite], equal(a.at(infinite), b.at(infinite)));

	// console.log(use_advanced_indexing([[true, false]]), finite, a.at([true, false]), b.at(finite), atol, rtol);

	if (equal_nan) {
		let both_nan = logical_and(isnan(a), isnan(b));
		cond.set([both_nan], both_nan.at(both_nan));
	}

	// console.log(cond, cond.at());
	return cond;
}

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} atol
 * @param {number} rtol
 * @returns {NDArray}
 * @ignore
 */
function within_tol(a, b, atol, rtol) {
	return less_equal(abs(subtract(a, b)), add(atol, multiply(rtol, abs(b))));
}

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @param {number} [rtol = 1e-5]
 * @param {number} [atol = 1e-8]
 * @param {boolean} [equal_nan = false]
 * @returns {boolean}
 */
function allclose(a, b, rtol = 1e-5, atol = 1e-8, equal_nan = false) {
	return logic_all(isclose(a, b, rtol, atol, equal_nan));
}

process.env.PRODUCTION ||
	tester.add(
			isclose,
			() => isclose([1e10, 1e-7], [1.00001e10, 1e-8]),
			() => [true, false]
		)
		.add(
			isclose,
			() => isclose([1e10, 1e-8], [1.00001e10, 1e-9]),
			() => [true, true]
		)
		.add(
			isclose,
			() => isclose([1e10, 1e-8], [1.0001e10, 1e-9]),
			() => [false, true]
		)
		.add(
			isclose,
			() => isclose([1.0, NaN], [1.0, NaN]),
			() => [true, false]
		)
		.add(
			isclose,
			() => isclose([1.0, NaN], [1.0, NaN], undefined, undefined, true),
			() => [true, true]
		)
		.add(
			isclose,
			() => isclose([1e-8, 1e-7], [0.0, 0.0]),
			() => [true, false]
		)
		.add(
			isclose,
			() => isclose([1e-100, 1e-7], [0.0, 0.0], undefined, 0.0),
			() => [false, false]
		)
		.add(
			isclose,
			() => isclose([1e-10, 1e-10], [1e-20, 0.0]),
			() => [true, true]
		)
		.add(
			isclose,
			() => isclose([1e-10, 1e-10], [1e-20, 0.999999e-10], undefined, 0.0),
			() => [false, true]
		);

;// CONCATENATED MODULE: ./core/linalg.mjs


/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @returns {NDArray}
 */
function solve(a, b) {
	return lu_solve(lu_factor(a), b);
}

/**
 * @param {number[][]} a
 * @returns {number[][][]}
 */
function lu(a) {
	let n = a.length;
	let p = Array(n)
		.fill()
		.map(() => Array(n).fill(0));

	for (let i = 0; i < n; i++) p[i][i] = 1;

	for (let i = 0; i < n; i++) {
		let maxValue = 0;
		let maxIndex = -1;
		for (let j = i; j < n; j++) {
			let value = Math.abs(a[j][i]);
			if (value > maxValue) {
				maxIndex = j;
				maxValue = value;
			}
		}
		if (maxIndex != i) {
			for (let j = 0; j < n; j++) {
				[p[j][i], p[j][maxIndex]] = [p[j][maxIndex], p[j][i]];
			}
			[a[i], a[maxIndex]] = [a[maxIndex], a[i]];
		}
		for (let j = i + 1; j < n; j++) {
			let factor = (a[j][i] /= a[i][i]);
			for (let k = i + 1; k < n; k++) {
				a[j][k] -= factor * a[i][k];
			}
		}
	}

	let l = Array(n)
		.fill()
		.map(() => Array(n).fill(0));
	let u = Array(n)
		.fill()
		.map(() => Array(n).fill(0));

	for (let i = 0; i < n; i++) {
		l[i][i] = 1;
		for (let j = 0; j < n; j++) {
			if (j < i) {
				l[i][j] = a[i][j];
			} else {
				u[i][j] = a[i][j];
			}
		}
	}

	return [p, l, u];
}

/**
 * @param {number[][]} a (M, N) array
 * @returns {Array<number[][], number[]>}
 */
function lu_factor(a) {
	let [M, N] = [a.length, a[0].length];
	let [lu, piv] = lu_factor_(a.flat(), M, N);
	lu = reshape(lu, [M, N]).array();
	return [lu, piv];
	// let n = a.length;
	// let piv = Array(n)
	// 	.fill()
	// 	.map((_, i) => i);

	// let lu = a.map(row => row.slice());

	// for (let i = 0; i < n; i++) {
	// 	let maxValue = 0;
	// 	let maxIndex = -1;
	// 	for (let j = i; j < n; j++) {
	// 		let value = Math.abs(lu[j][i]);
	// 		if (value > maxValue) {
	// 			maxIndex = j;
	// 			maxValue = value;
	// 		}
	// 	}
	// 	piv[i] = maxIndex;
	// 	if (maxIndex != i) {
	// 		// console.log('maxIndex', maxIndex);
	// 		[lu[i], lu[maxIndex]] = [lu[maxIndex], lu[i]];
	// 		// console.log(lu, piv);
	// 	}
	// 	for (let j = i + 1; j < n; j++) {
	// 		let factor = (lu[j][i] /= lu[i][i]);
	// 		for (let k = i + 1; k < n; k++) {
	// 			lu[j][k] -= factor * lu[i][k];
	// 		}
	// 	}
	// }

	// return [lu, piv];
}

/**
 * @param {number[][]} a (M, N) array
 * @param {number} M
 * @param {number} N
 * @returns {Array<number[][], number[]>}
 */
function lu_factor_(a, M, N) {
	let lu = a.slice();
	let piv = Array(N);

	for (let j = 0; j < N; j++) {
		let maxValue = -1;
		let maxIndex = -1;
		for (let i = j; i < M; i++) {
			let value = Math.abs(lu[i * N + j]);
			if (value > maxValue) {
				maxIndex = i;
				maxValue = value;
			}
		}
		if (maxIndex == -1) {
			piv[j] = j;
			continue;
		}
		piv[j] = maxIndex;
		if (maxIndex != j) {
			for (let k = 0; k < N; k++) {
				let s = j * N + k,
					t = maxIndex * N + k;
				let tmp = lu[s];
				lu[s] = lu[t];
				lu[t] = tmp;
			}
		}
		for (let i = j + 1; i < M; i++) {
			let factor = (lu[i * N + j] /= lu[j * N + j]);
			for (let k = j + 1; k < N; k++) {
				lu[i * N + k] -= factor * lu[j * N + k];
			}
		}
	}

	return [lu, piv];
}

/**
 * @param {Array<number[][], number[]>} lu_piv
 * @param {number[]} b
 * @returns {number[]}
 */
function lu_solve(lu_piv, b) {
	let [lu, piv] = lu_piv;
	let n = lu.length;

	let x = b.slice();

	for (let i = 0; i < n; i++) {
		if (piv[i] !== i) {
			[x[i], x[piv[i]]] = [x[piv[i]], x[i]];
		}
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			x[i] -= lu[i][j] * x[j];
		}
	}

	for (let i = n - 1; i >= 0; i--) {
		for (let j = i + 1; j < n; j++) {
			x[i] -= lu[i][j] * x[j];
		}
		x[i] /= lu[i][i];
	}

	return x;
}

process.env.PRODUCTION ||
	tester.add(
		lu_factor,
		() => {
			let [lu, piv] = lu_factor([
				[2, 5, 8, 7],
				[5, 2, 2, 8],
				[7, 5, 6, 6],
				[5, 4, 4, 8],
			]);
			return [
				allclose(lu, [
					[7, 5, 6, 6],
					[0.28571429, 3.57142857, 6.28571429, 5.28571429],
					[0.71428571, 0.12, -1.04, 3.08],
					[0.71428571, -0.44, -0.46153846, 7.46153846],
				]),
				allclose(piv, [2, 2, 3, 3]),
			];
		},
		() => [true, true]
	);

// tester
// 	.add(
// 		lu_factor_,
// 		() => {
// 			let [lu, piv] = lu_factor_(
// 				array([
// 					[2, 5, 8, 7],
// 					[0, 0, 0, 0],
// 					[5, 2, 2, 8],
// 					[7, 5, 6, 6],
// 				])
// 					.flatten()
// 					.toarray(),
// 				4,
// 				4
// 			);
// 			console.log(lu, piv);
// 		},
// 		() => [true, true]
// 	)
// 	.add(
// 		lu_factor_,
// 		() => {
// 			let [lu, piv] = lu_factor_(
// 				array([
// 					[2, 5, 8, 7],
// 					[5, 2, 2, 8],
// 					[7, 5, 6, 6],
// 					[5, 4, 4, 8],
// 				])
// 					.flatten()
// 					.toarray(),
// 				4,
// 				4
// 			);
// 			console.log(lu, piv);
// 		},
// 		() => [true, true]
// 	)
// 	.add(
// 		lu_factor_,
// 		() => {
// 			let [lu, piv] = lu_factor_(
// 				array([
// 					[2, 5, 8, 7],
// 					[5, 2, 2, 8],
// 					[7, 5, 6, 6],
// 					[5, 4, 4, 8],
// 					[5, 4, 4, 8],
// 				])
// 					.flatten()
// 					.toarray(),
// 				5,
// 				4
// 			);
// 			console.log(lu, piv);
// 		},
// 		() => [true, true]
// 	)
// 	.add(
// 		lu_factor_,
// 		() => {
// 			let [lu, piv] = lu_factor_(
// 				array([
// 					[2, 5, 8, 7],
// 					[5, 2, 2, 8],
// 					[7, 5, 6, 6],
// 				])
// 					.flatten()
// 					.toarray(),
// 				3,
// 				4
// 			);
// 			console.log(lu, piv);
// 		},
// 		() => [true, true]
// 	);

process.env.PRODUCTION ||
	tester.add(
			solve,
			() => {
				let a = [
					[3, 2, 0],
					[1, -1, 0],
					[0, 5, 1],
				];
				let b = [2, 4, -1];
				let x = solve(a, b);
				return allclose(x, [2, -2, 9]);
			},
			() => true
		)
		.add(
			solve,
			() => {
				let a = [
					[1, 2],
					[3, 5],
				];
				let b = [1, 2];
				let x = solve(a, b);
				return allclose(x, [-1, 1]);
			},
			() => true
		);

process.env.PRODUCTION ||
	tester.add(
		lu_solve,
		() => {
			let A = [
				[2, 5, 8, 7],
				[5, 2, 2, 8],
				[7, 5, 6, 6],
				[5, 4, 4, 8],
			];
			let b = [1, 1, 1, 1];
			let [lu, piv] = lu_factor(A);
			let x = lu_solve([lu, piv], b);
			return allclose(x, [0.05154639, -0.08247423, 0.08247423, 0.09278351]);
		},
		() => true
	);

process.env.PRODUCTION ||
	tester.add(
		lu,
		() =>
			allclose(
				lu([
					[2, 5, 8, 7],
					[5, 2, 2, 8],
					[7, 5, 6, 6],
					[5, 4, 4, 8],
				]),
				[
					array([
						[0, 1, 0, 0],
						[0, 0, 0, 1],
						[1, 0, 0, 0],
						[0, 0, 1, 0],
					]),
					array([
						[1, 0, 0, 0],
						[0.28571429, 1, 0, 0],
						[0.71428571, 0.12, 1, 0],
						[0.71428571, -0.44, -0.46153846, 1],
					]),
					array([
						[7, 5, 6, 6],
						[0, 3.57142857, 6.28571429, 5.28571429],
						[0, 0, -1.04, 3.08],
						[0, 0, 0, 7.46153846],
					]),
				]
			),
		() => true
	);

;// CONCATENATED MODULE: ./core/scatter.mjs


/**
 *
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @param {number} [axis = 0]
 * @returns {ViewIterator}
 */
function scatter(a, indices, axis = 0) {
	a = asarray(a);

	let mask = [];

	let shapes = [];
	let newIndices = [];
	for (let index of indices) {
		if (index == null) {
			newIndices.push(null);
			mask.push(false);
		} else if (typeof index == 'string') {
			newIndices.push(slice(index));
			mask.push(false);
		} else if (index instanceof Slice) {
			newIndices.push(index);
			mask.push(false);
		} else {
			index = asarray(index);
			if (index.dtype == dtype('boolean')) {
				for (let ind of index.nonzero()) {
					shapes.push(ind.shape);
					newIndices.push(ind);
					mask.push(true);
				}
			} else {
				shapes.push(index.shape);
				newIndices.push(index);
				mask.push(true);
			}
		}
	}
	let n = mask.length;

	let shape = broadcast_shapes(...shapes);
	for (let i = 0; i < n; i++) {
		if (mask[i]) newIndices[i] = broadcast_to(newIndices[i], shape);
	}

	let adjacent = true;
	let lastIndex = -1;
	for (let i = 0; i < n; i++) {
		if (mask[i]) {
			if (lastIndex === -1) lastIndex = i;
			else if (i !== lastIndex + 1) {
				adjacent = false;
				break;
			}
			lastIndex = i;
		}
	}

	let outer = [];
	let outShape = [];
	if (adjacent) {
		// advanced indexes are all adjacent
		for (let i = 0; i < n; ) {
			if (mask[i]) {
				axis += i;
				outShape.push(...shape);
				i = lastIndex + 1;
			} else {
				let dim = newIndices[i].indices(a.shape[i]).slicelength;
				outer.push(dim);
				outShape.push(dim);
				i++;
			}
		}
	} else {
		outShape.push(...shape);
		for (let i = 0; i < n; i++) {
			if (!mask[i]) {
				if (newIndices[i] == null) {
					outer.push(1);
					outShape.push(1);
				} else {
					let dim = newIndices[i].indices(a.shape[i]).slicelength;
					outer.push(dim);
					outShape.push(dim);
				}
			}
		}
	}

	for (let i = n; i < a.ndim; i++) {
		let dim = a.shape[i];
		outShape.push(dim);
		outer.push(dim);
	}

	return new ViewIterator(a, shape, newIndices, axis, outShape);
}

/**
 * @class
 * @extends {NdindexIterator}
 */
class ViewIterator extends NdindexIterator {
	/**
	 * @param {NDArray} base
	 * @param {number[]} shape
	 * @param {Array<Slice|NDArray>} indices
	 * @param {number} axis
	 * @param {number[]} outShape
	 */
	constructor(base, shape, indices, axis, outShape) {
		super(shape);
		this.base = asarray(base);
		this.indices = indices;
		this.axis = axis;
		this.outShape = outShape;
		this._indices = [...indices];
	}

	/**
	 * @returns {{value: NDArray, done: boolean}}
	 */
	next() {
		if (this.done) return { done: true };
		let { base, indices, index, _indices } = this;

		for (let i = 0; i < indices.length; i++) {
			if (indices[i] instanceof NDArray) {
				_indices[i] = indices[i].item(index);
			}
		}

		let value = base.get(_indices);

		super.next();
		return { value, done: false };
	}

	/**
	 * @returns {NDArray}
	 */
	get() {
		let { axis, coords, outShape, base } = this;
		let out = empty(outShape, base.dtype);

		for (let view of this) {
			copyto(out.get(coords, axis), view);
		}

		return out;
	}

	/**
	 * @param {NDArray} value array-like
	 */
	set(value) {
		let { axis, coords, outShape } = this;
		value = broadcast_to(value, outShape);

		for (let view of this) {
			copyto(view, value.get(coords, axis));
		}
	}
}

/**
 * @param {NDArray} a array-like
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {NDArray}
 */
function get(a, indices) {
	return scatter(a, indices).get();
}

function set(a, indices, value) {
	return scatter(a, indices).set(value);
}

process.env.PRODUCTION ||
	tester.add(
			get,
			() => get(arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [[0, 0], ':1', [0, 0], ':']),
			() => array([[[0, 1, 2, 3, 4]], [[0, 1, 2, 3, 4]]])
		)
		.add(
			get,
			() =>
				get(arange(2 * 3 * 4).reshape(2, 3, 4), [
					[[1], [1]],
					[true, false, true],
				]),
			() =>
				array([
					[
						[12, 13, 14, 15],
						[20, 21, 22, 23],
					],
					[
						[12, 13, 14, 15],
						[20, 21, 22, 23],
					],
				])
		)
		.add(
			get,
			() =>
				get(arange(2 * 3 * 4).reshape(2, 3, 4), [
					':',
					[
						[true, false, true, true],
						[true, false, true, true],
						[true, false, true, true],
					],
				]),
			() =>
				array([
					[0, 2, 3, 4, 6, 7, 8, 10, 11],
					[12, 14, 15, 16, 18, 19, 20, 22, 23],
				])
		)
		.add(
			get,
			() =>
				get(arange(2 * 3 * 4).reshape(2, 3, 4), [
					[0, 0, 0, 1, 1, 1, 1, 1, 0],
					':',
					[0, 2, 3, 0, 2, 3, 0, 2, 3],
				]),
			() =>
				array([
					[0, 4, 8],
					[2, 6, 10],
					[3, 7, 11],
					[12, 16, 20],
					[14, 18, 22],
					[15, 19, 23],
					[12, 16, 20],
					[14, 18, 22],
					[3, 7, 11],
				])
		)
		.add(
			get,
			() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [[1, 0], 0]),
			() =>
				array([
					[12, 13, 14, 15],
					[0, 1, 2, 3],
				])
		)
		.add(
			get,
			() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [':', [false, false, true], ':-1']),
			() => array([[[8, 9, 10]], [[20, 21, 22]]])
		)
		.add(
			get,
			() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [':', [[0], [1]], [2]]),
			() =>
				array([
					[[2], [6]],
					[[14], [18]],
				])
		);

;// CONCATENATED MODULE: ./core/argmax.mjs


/**
 * @param {NDArray} a array-like
 * @param {number|null} [axis = null]
 * @param {NDArray|null} [out = null]
 * @param {boolean} [keepdims = false]
 * @returns {NDArray}
 */
function argmax(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);
	if (a.size == 0) {
		throw new Error(`attempt to get argmax of an empty sequence`);
	}

	if (axis == null) {
		let maxIndex,
			maxValue = Number.MIN_VALUE;
		let i = 0;
		for (let value of a.flat) {
			if (value > maxValue) {
				maxIndex = i;
				maxValue = value;
			}
			i++;
		}
		let shape = keepdims ? Array(a.ndim).fill(1) : [];
		if (out == null) out = empty(shape, 'number');
		else if (!shallow_array_equal(out.shape, shape)) {
			throw new Error('out shape does not match');
		}
		out.itemset(0, maxIndex);
		return out;
	}

	axis = normalize_axis_index(axis, a.ndim);

	if (a.ndim == 0) return 0;
	if (a.ndim == 1) return argmax(a, null, out, keepdims);

	let shape = [...a.shape];
	if (keepdims) {
		shape.splice(axis, 1, 1);
	} else {
		shape.splice(axis, 1);
	}

	if (out == null) out = empty(shape, 'number');
	else if (!shallow_array_equal(out.shape, shape)) {
		throw new Error('out shape does not match');
	}

	let _out = out;

	let _shape = [...a.shape];
	_shape.splice(axis, 1);
	out = out.reshape(_shape);

	for (let indices of ndindex(_shape)) {
		let _indices = [...indices];
		_indices.splice(axis, 0, ':');
		argmax(a.get(_indices), null, out.get(indices));
	}

	out = _out;

	return out;
}

/**
 * @param {NDArray} a array-like
 * @param {number|null} [axis = null]
 * @param {NDArray|null} [out = null]
 * @param {boolean} [keepdims = false]
 * @returns {NDArray}
 */
function argmin(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);
	if (a.size == 0) {
		throw new Error(`attempt to get argmax of an empty sequence`);
	}

	if (axis == null) {
		let minIndex,
			minValue = Number.MAX_VALUE;
		let i = 0;
		for (let value of a.flat) {
			if (value < minValue) {
				minIndex = i;
				minValue = value;
			}
			i++;
		}
		let shape = keepdims ? Array(a.ndim).fill(1) : [];
		if (out == null) out = empty(shape, 'number');
		else if (!shallow_array_equal(out.shape, shape)) {
			throw new Error('out shape does not match');
		}
		out.itemset(0, minIndex);
		return out;
	}

	axis = normalize_axis_index(axis, a.ndim);

	if (a.ndim == 0) return 0;
	if (a.ndim == 1) return argmin(a, null, out, keepdims);

	let shape = [...a.shape];
	if (keepdims) {
		shape.splice(axis, 1, 1);
	} else {
		shape.splice(axis, 1);
	}

	if (out == null) out = empty(shape, 'number');
	else if (!shallow_array_equal(out.shape, shape)) {
		throw new Error('out shape does not match');
	}

	let _out = out;

	let _shape = [...a.shape];
	_shape.splice(axis, 1);
	out = out.reshape(_shape);

	for (let indices of ndindex(_shape)) {
		let _indices = [...indices];
		_indices.splice(axis, 0, ':');
		argmin(a.get(_indices), null, out.get(indices));
	}

	out = _out;

	return out;
}

process.env.PRODUCTION ||
	tester.add(
			argmax,
			() => argmax(arange(6).reshape(2, 3)),
			() => 5
		)
		.add(
			argmax,
			() => argmax(arange(6).reshape(2, 3), 0),
			() => array([1, 1, 1])
		)
		.add(
			argmax,
			() => argmax(arange(6).reshape(2, 3), 1),
			() => array([2, 2])
		)
		.add(
			argmax,
			() => argmax(array([0, 5, 2, 3, 4, 5])),
			() => 1
		)
		.add(
			argmax,
			() => argmax(arange(24).reshape(2, 3, 4), 1, null, true),
			() => array([[[2, 2, 2, 2]], [[2, 2, 2, 2]]])
		);

process.env.PRODUCTION ||
	tester.add(
			argmin,
			() => argmin(arange(6).reshape(2, 3)),
			() => 0
		)
		.add(
			argmin,
			() => argmin(arange(6).reshape(2, 3), 0),
			() => array([0, 0, 0])
		)
		.add(
			argmin,
			() => argmin(arange(6).reshape(2, 3), 1),
			() => array([0, 0])
		)
		.add(
			argmin,
			() => argmin(array([0, 5, 2, 3, 4, 5])),
			() => 0
		)
		.add(
			argmin,
			() => argmin(arange(24).reshape(2, 3, 4), 1, null, true),
			() => array([[[0, 0, 0, 0]], [[0, 0, 0, 0]]])
		);

;// CONCATENATED MODULE: ./core/unique.mjs


/**
 * @param {NDArray} a array-like
 * @returns {NDArray}
 */
function unique(a) {
	a = asarray(a);
	return array([...new Set(a.flat)].sort());
}

process.env.PRODUCTION ||
	tester.add(
			unique,
			() => unique([1, 1, 2, 2, 3, 3]),
			() => array([1, 2, 3])
		)
		.add(
			unique,
			() =>
				unique(
					array([
						[1, 1],
						[2, 3],
					])
				),
			() => array([1, 2, 3])
		)
		.add(
			unique,
			() => unique(array([1, 2, 6, 4, 2, 3, 2])),
			() => array([1, 2, 3, 4, 6])
		);

;// CONCATENATED MODULE: ./core/core.mjs



























































































































;// CONCATENATED MODULE: ./index.mjs



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(220);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;