import { arange, array, broadcast, broadcastable_to, empty, ones, tester, timeit } from './core.mjs';

function tuple_eq(a, b) {
	if (a.length != b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] != b[i]) return false;
	return true;
}

function _binary_func(func, x1, x2, out) {
	let b = broadcast(x1, x2);
	if (out == null) {
		out = empty(b.shape);
		let i = 0;
		for (let [x1, x2] of b) {
			out.data[i++] = func(x1, x2);
		}
		return out;
	}
	if (tuple_eq(b.shape, out.shape)) {
		let i = 0;
		for (let [x1, x2] of b) {
			out.itemset(i++, func(x1, x2));
		}
		return out;
	}
	if (!broadcastable_to(b.shape, out.shape))
		throw `non-broadcastable output operand with shape [${out.shape}] doesn't match the broadcast shape [${b.shape}]`;

	out.set(_binary_func(func, x1, x2, null));
	return out;
}

export function binary_func(func) {
	return (x1, x2, out = null) => _binary_func(func, x1, x2, out);
}

function _add(x1, x2) {
	return x1 + x2;
}

export var add = binary_func(_add);

// let x1, x2, out;
// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// x2 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = Array(x1.length);
// timeit(() => {
// 	for (let i = 0; i < x1.length; i++) {
// 		out[i] = x1[i] + x2[i];
// 	}
// });
// // x1 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// // x2 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// x1 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// x2 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// // x1 = ones([121, 40]);
// // x2 = ones([121, 40]);
// out = empty(x1.shape);
// timeit(() => {
// 	add(x1, x2, out);
// });

tester
	.add(
		add,
		() => add([1.0], [4.0]),
		() => 5.0
	)
	.add(
		add,
		() => {
			let x1, x2;
			x1 = arange(9.0).reshape(3, 3);
			x2 = arange(3.0);
			return add(x1, x2);
		},
		() =>
			array([
				[0, 2, 4],
				[3, 5, 7],
				[6, 8, 10],
			])
	)
	.add(
		add,
		() => {
			let out;
			out = empty([2, 2]);
			add([1, 2], [3, 4], out);
			return out;
		},
		() =>
			array([
				[4, 6],
				[4, 6],
			])
	);
