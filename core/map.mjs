import {
	tester,
	arange,
	array,
	asarray,
	NDArray,
	ndoffset,
	empty,
	empty_like,
	broadcast_to,
} from './core.mjs';

/**
 *
 * @param {NDArray} ndarray
 * @param {function(any, number): any} callback
 * @param {any} thisArg
 * @returns {NDArray}
 */
export function map(ndarray, callback, thisArg = null) {
	return map_(callback, ndarray);
	// ndarray = asarray(ndarray);
	// let { shape, strides, offset, data } = ndarray;

	// let out = empty(shape);
	// let i = 0;
	// for (let index of ndoffset(shape, strides, offset)) {
	// 	out.data[i++] = callback.call(thisArg, data[index], index, data);
	// }

	// return out;
}

/**
 * @callback mapCallback
 * @param {any} value
 * @returns {any}
 */

function cache(builder) {
	let generated = Object.create(null);
	return (...args) => {
		return generated[args] ?? (generated[args] = builder(...args));
	};
}

let mapfunc = cache(function (ndim) {
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
});

/**
 *
 * @param {mapCallback} fn
 * @param {NDArray} x
 * @param {null|NDArray} [out = null]
 * @returns {NDArray}
 */
function map_(fn, x, out = null) {
	x = asarray(x);
	if (out == null) {
		out = empty_like(x);
	} else {
		x = broadcast_to(x, out.shape);
	}
	mapfunc(out.ndim)(fn, x, out);
	return out;
}

tester.onload(() => {
	let x = empty(100).reshape(10, 10);
	console.log(map_(x => x ** 2, arange(10), x));
});

/**
 * @param {mapCallback} fn
 * @param {NDArray} x
 * @param {NDArray} out
 * @returns {void}
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

tester.add(
	map,
	() => map(arange(10).reshape(-1, 2), element => element ** 2),
	() =>
		array([
			[0, 1],
			[4, 9],
			[16, 25],
			[36, 49],
			[64, 81],
		])
);
