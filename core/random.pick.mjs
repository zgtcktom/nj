import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

function accum_sum(p) {
	// O(n)
	let accum = Array(p.length);
	let prev = (accum[0] = p[0]);
	for (let i = 1; i < p.length; i++) accum[i] = prev += p[i];
	return accum;
}

function binary_search(arr, n) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let middle = (left + right) >> 1;
		if (n > arr[middle]) left = middle + 1;
		else right = middle;
	}
	return left;
}

function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) sum += arr[i];
	return sum;
}

function direct_linear_search(p, rand = Math.random) {
	// O(n)
	let r = rand() * sum(p);
	let n = p.length - 1;
	for (let i = 0; i < n; i++) {
		r -= p[i];
		if (r < 0) return i;
	}
	return n;
}

function cumsum_binary_search(cumsum, sum = cumsum.at(-1), rand = Math.random) {
	// O(log n)
	return binary_search(cumsum, rand() * sum);
}

function _single_pick(p, rand = Math.random) {
	let accum = accum_sum(p);
	return binary_search(accum, rand() * accum.at(-1));
}

function vose_alias_table(p) {
	// O(n)
	// https://www.keithschwarz.com/darts-dice-coins/
	let n = p.length;
	let small = [];
	let large = [];
	let scale = n / sum(p);
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

function sample_table(n, prob, alias, rand = Math.random) {
	// O(1)
	let i = (rand() * n) | 0;
	return rand() < prob[i] ? i : alias[i];
}

export function pick(size = null, p = null, replace = true) {}

tester.onload(() => {
	let p = [0.5, 0.1, 0, 0.1, 0.2, 0.3];
	let accum = accum_sum([0.5, 0.1, 0, 0.1, 0.2, 0.3]);
	console.log(accum);

	console.log(_single_pick([0.1, 0, 0.3, 0.6, 0]));
	console.log(_single_pick([0, 0, 0, 0, 1]));
	console.log(binary_search(accum, 0.51), binary_search(accum, 0.5));
	console.log('vose_alias_table', vose_alias_table([0.5, 0.1, 0, 0.1, 0.2, 0.3]));

	let { n, prob, alias } = vose_alias_table(p);
	console.log(
		Array(100)
			.fill()
			.map(() => sample_table(n, prob, alias))
	);

	console.log(
		Array(100)
			.fill()
			.map(() => direct_linear_search(p))
	);

	let cumsum = accum_sum(p),
		sum = cumsum.at(-1);

	console.log(
		Array(100)
			.fill()
			.map(() => cumsum_binary_search(cumsum, sum))
	);
});

tester
	.add(
		tester,
		() => 0,
		() => 1
	)
	.add(
		tester,
		() => 0,
		() => 1
	)
	.add(
		tester,
		() => 0,
		() => 1
	);
