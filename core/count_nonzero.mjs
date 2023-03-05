import { arange, array, asarray, empty, NDArray, ones, ravel, tester } from './core.mjs';
import { nditer } from './numeric.mjs';

export function count_nonzero(a, axis = null) {
	a = asarray(a);
	if (axis == null) {
		let count = 0;
		for (let value of a.flat) {
			if (value) count++;
		}
		return count;
	}
	let iter = nditer(a, axis);
	// let ret = empty(iter.shape);
	// for (let [index, value] of iter) {
	// 	ret.set(index, count_nonzero(value));
	// }
	let data = [];
	for (let [index, value] of iter) {
		data.push(count_nonzero(value));
		// ret.set(index, count_nonzero(value));
	}
	console.log('check count_nonzero');
	return new NDArray(iter.shape, data);
	return ret;
}

tester
	.add(
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
	);
