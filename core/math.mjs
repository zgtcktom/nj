import { arange, array, broadcast, broadcastable_to, empty, map, ones, tester, timeit } from './core.mjs';

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
export var add2 = map('add', _add);
export var sin = map('sin', Math.sin);
console.log(sin);

tester.add(
	sin,
	() => sin(arange(30).reshape(2, 5, 1, -1, 1)),
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
		])
);

console.log(add2.toString());

let x1, x2, out;
x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
x2 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
out = Array(x1.length);
timeit(() => {
	for (let i = 0; i < x1.length; i++) {
		out[i] = x1[i] + x2[i];
	}
});
// x1 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// x2 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
x1 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
x2 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// x1 = ones([121, 40]);
// x2 = ones([121, 40]);
out = empty(x1.shape);
timeit(() => {
	add(x1, x2, out);
});

out = empty(x1.shape);
timeit(() => {
	add2(x1, x2, out);
});

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
