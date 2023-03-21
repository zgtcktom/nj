import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

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

function direct_linear_search(p, sum, rand = Math.random) {
	// O(n)
	let r = rand() * sum;
	let n = p.length - 1;
	for (let i = 0; i < n; i++) {
		r -= p[i];
		if (r < 0) return i;
	}
	return n;
}

function cumsum_binary_search(cumsum, sum, rand = Math.random) {
	// O(log n)
	return binary_search(cumsum, rand() * sum);
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

export function pick(size, p = null, replace = true, method = 'auto', data = Array(size)) {
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
				let s = sum(p);
				for (let i = 0; i < size; i++) {
					data[i] = direct_linear_search(p, s);
				}
				break;
			}
			case 'binary': {
				let cumsum = accum_sum(p);
				let s = cumsum.at(-1);
				for (let i = 0; i < size; i++) {
					data[i] = cumsum_binary_search(cumsum, s);
				}
				break;
			}
			case 'alias': {
				let { n, prob, alias } = vose_alias_table(p);
				for (let i = 0; i < size; i++) {
					data[i] = sample_table(n, prob, alias);
				}
				break;
			}
			case 'sumtree': {
				let { tree, level, offset } = sumtree(p);
				for (let i = 0; i < size; i++) {
					data[i] = sample_tree(tree, level, offset);
				}
				break;
			}
			default:
				throw `unexpected method '${method}'`;
		}
	} else {
		if (method == 'auto') {
			if (n + size < 200) method = 'linear';
			else method = 'sumtree';
		}

		switch (method) {
			case 'linear': {
				let s = sum(p);
				p = p.slice();
				for (let i = 0; i < size; i++) {
					let ind = (data[i] = direct_linear_search(p, s));
					s -= p[ind];
					p[ind] = 0;
				}
				break;
			}
			case 'binary': {
				let cumsum = accum_sum(p);
				let sum = cumsum.at(-1);
				for (let i = 0; i < size; i++) {
					let ind = (data[i] = cumsum_binary_search(cumsum, sum));
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
					let ind = (data[i] = sample_table(n, prob, alias));
					p[ind] = 0;
				}
				break;
			}
			case 'sumtree': {
				let { tree, level, offset } = sumtree(p);
				for (let i = 0; i < size; i++) {
					let ind = (data[i] = sample_tree(tree, level, offset));
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

function sumtree(p) {
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
	i += offset;
	let diff = value - tree[i];
	while (i >= 0) {
		tree[i] += diff;
		i = (i - 1) >> 1;
	}
}

function sample_tree(tree, level, offset, rand = Math.random) {
	let r = rand() * tree[0];
	let i = 1;
	while (--level) {
		if (r > tree[i]) r -= tree[i++];
		i = i * 2 + 1;
	}
	if (r > tree[i]) i++;
	return i - offset;
}

// [0, 1, 2, 3, (4)[0 + 1], (5)[2 + 3], (6)[4 + 5]];

tester.onload(() => {
	let p = [5, 1, 0, 3, 2, 4];
	// p = [5, 1];
	// let accum = accum_sum([0.5, 0.1, 0, 0.1, 0.2, 0.3]);
	// console.log(accum);

	// console.log(binary_search(accum, 0.51), binary_search(accum, 0.5));
	// console.log('vose_alias_table', vose_alias_table([0.5, 0.1, 0, 0.1, 0.2, 0.3]));
	// console.log('pick', pick(200, [0.5, 0.1, 0, 0.1, 0.2, 0.3]));

	// console.log(sumtree([0.5, 0.1, 0, 0.1, 0.2, 0.3]));
	// console.log(sumtree([1, 2, 3, 4, 5, 6, 7, 8]));

	// let { tree, level, offset } = sumtree(p);
	// // set(tree, 7, 6);
	// console.log(tree);
	// console.log(sample_tree(tree, level, offset));
	// console.log(
	// 	Array(4)
	// 		.fill()
	// 		.map(() => {
	// 			let i = sample_tree(tree, level, offset);
	// 			// set_tree(tree, offset, i, 0);
	// 			return i;
	// 		})
	// );
	// console.log(tree);

	// let { n, prob, alias } = vose_alias_table(p);
	// console.log(
	// 	Array(100)
	// 		.fill()
	// 		.map(() => sample_table(n, prob, alias))
	// );

	// console.log(
	// 	Array(100)
	// 		.fill()
	// 		.map(() => direct_linear_search(p))
	// );

	// let cumsum = accum_sum(p),
	// 	sum = cumsum.at(-1);

	// console.log(
	// 	Array(100)
	// 		.fill()
	// 		.map(() => cumsum_binary_search(cumsum, sum))
	// );

	{
		let p = [0.01, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		let hist = {};
		for (let i of pick(sum(p) * 100000, p, true, 'auto')) {
			hist[i] ??= 0;
			hist[i]++;
		}
		console.log(hist);
	}

	let N = 200;
	let SIZE = 100;
	let options = {
		duration: 1000,
		cycle: 'auto',
		setup: () =>
			Array(N)
				.fill()
				.map(() => Math.random()),
		verbose: true,
	};

	timeit(
		p => {
			pick(SIZE, p, true);
		},
		{ ...options, name: 'pick' }
	);

	timeit(
		p => {
			let cumsum = accum_sum(p);
			let sum = cumsum.at(-1);
			Array(SIZE)
				.fill()
				.map(() => cumsum_binary_search(cumsum, sum));
		},
		{ ...options, name: 'cumsum_binary_search' }
	);

	timeit(
		p => {
			let s = sum(p);
			Array(SIZE)
				.fill()
				.map(() => direct_linear_search(p, s));
		},
		{ ...options, name: 'direct_linear_search' }
	);

	timeit(
		p => {
			let { n, prob, alias } = vose_alias_table(p);
			Array(SIZE)
				.fill()
				.map(() => sample_table(n, prob, alias));
		},
		{ ...options, name: 'vose_alias_table' }
	);

	timeit(
		p => {
			let { tree, level, offset } = sumtree(p);
			Array(SIZE)
				.fill()
				.map(() => sample_tree(tree, level, offset));
		},
		{ ...options, name: 'sumtree' }
	);

	timeit(
		p => {
			pick(SIZE, p, false);
		},
		{ ...options, name: 'replace.pick' }
	);

	timeit(
		p => {
			let cumsum = accum_sum(p);
			let sum = cumsum.at(-1);
			Array(SIZE)
				.fill()
				.map(() => {
					let i = cumsum_binary_search(cumsum, sum);
					let value = p[i];
					for (let j = i; j < cumsum.length; j++) cumsum[j] -= value;
					sum -= value;
					return i;
				});
		},
		{ ...options, name: 'replace.cumsum_binary_search' }
	);

	timeit(
		p => {
			p = p.slice();
			let s = sum(p);
			Array(SIZE)
				.fill()
				.map(() => {
					let i = direct_linear_search(p, s);
					s -= p[i];
					p[i] = 0;
					return i;
				});
		},
		{ ...options, name: 'replace.direct_linear_search' }
	);

	timeit(
		p => {
			p = p.slice();
			Array(SIZE)
				.fill()
				.map(() => {
					let { n, prob, alias } = vose_alias_table(p);
					let i = sample_table(n, prob, alias);
					p[i] = 0;
					return i;
				});
		},
		{ ...options, name: 'replace.vose_alias_table' }
	);

	timeit(
		p => {
			let { tree, level, offset } = sumtree(p);
			Array(SIZE)
				.fill()
				.map(() => {
					let i = sample_tree(tree, level, offset);
					set_tree(tree, offset, i, 0);
					return i;
				});
		},
		{ ...options, name: 'replace.sumtree' }
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
