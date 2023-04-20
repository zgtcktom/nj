import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	shallow_array_equal,
	contiguous,
	empty,
	Slice,
	normalize_axis_index,
	count_nonzero,
	ndindex,
	empty_like,
	get_size,
	pick,
} from './core.mjs';

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
export class Generator {
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
export const random = new Generator();

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
