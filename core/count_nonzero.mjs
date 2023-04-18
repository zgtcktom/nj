import {
	normalize_axis,
	array,
	asarray,
	empty,
	NDArray,
	ndindex,
	ones,
	ravel,
	slice,
	tester,
	even_strides,
	timeit,
} from './core.mjs';

export function axisfunc(func, array, axis /*: nonNull*/, keepdims, out) {
	// func(...) : scalar
	let { strides, ndim, shape } = array;
	axis = normalize_axis(axis, ndim);
	let mask = Array(ndim)
		.fill()
		.map((_, i) => axis.includes(i));

	let outshape = [];
	let indices = [];
	for (let i = 0, j = 0; i < ndim; i++) {
		if (mask[i]) {
			indices[i] = slice(':');
			if (keepdims) outshape[j++] = 1;
		} else {
			outshape[j++] = shape[i];
		}
	}

	if (out == null) out = empty(outshape);

	for (let index of ndindex(outshape)) {
		for (let i = 0, j = 0; i < ndim; i++) {
			if (mask[i]) continue;
			indices[i] = index[j++];
		}
		// console.log(indices);
		out.itemset(index, func(array.get(...indices)));
	}

	return out;
}

export function count_nonzero(a, axis = null, keepdims = false) {
	a = asarray(a);
	if (axis != null) return axisfunc(count_nonzero, a, axis, keepdims);
	// if (axis != null) {
	// 	let iter = nditer(a, axis);
	// 	// let ret = empty(iter.shape);
	// 	// for (let [index, value] of iter) {
	// 	// 	ret.set(index, count_nonzero(value));
	// 	// }
	// 	// console.log('check count_nonzero', a.shape);
	// 	let data = [];
	// 	for (let [index, value] of iter) {
	// 		// console.log('index', index);
	// 		data.push(count_nonzero(value));
	// 		// ret.set(index, count_nonzero(value));
	// 	}
	// 	return new NDArray(iter.shape, data);
	// 	return ret;
	// }
	let count = 0;
	for (let value of a.flat) {
		if (value) count++;
	}
	return count;
}

// let x;
// x = ones([2, 3, 4, 5]);
// timeit(() => count_nonzero(x));

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
