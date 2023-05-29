import { NDArray, array_equal } from '../core.mjs';

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

export let tester = new Tester();
export function timeit2(func, duration = 1000) {
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

export function timeit(
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
