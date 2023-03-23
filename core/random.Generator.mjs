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
	use_advanced_indexing,
	normalize_axis_index,
} from './core.mjs';

function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

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

export class Generator {
	constructor(rand = Math.random) {
		this.rand = rand;
	}

	integers(low, high = null, size = null, endpoint = false) {
		if (high == null) {
			high = low;
			low = 0;
		}
		let range = high - low;
		if (endpoint) range += 1;

		return from(() => (this.rand() * range + low) | 0, size);
	}

	random(size = null, out = null) {
		return from(() => this.rand(), size, out);
	}

	choice(a, size = null, replace = true, p = null, axis = 0 /*, shuffle = true*/) {}

	shuffle(a, axis = 0) {
		// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
		a = asarray(a);
		axis = normalize_axis_index(axis, a.ndim);
		let slices = Array(axis + 1).fill(slice(':'));
		// always view
		slices.push(Slice.ellipsis);

		let { shape } = a;
		let n = shape[axis];
		let tmp = empty([...shape.slice(0, axis), ...shape.slice(axis + 1)]);

		for (let i = 0; i < n - 2; i++) {
			let j = (this.rand() * (n - i) + i) | 0;

			slices[axis] = i;
			// console.log(tmp, a.shape, slices);
			let view1 = a.get(...slices);
			slices[axis] = j;
			let view2 = a.get(...slices);

			tmp.set(view1);
			view1.set(view2);
			view2.set(tmp);
		}
	}
}

tester
	.add(
		Generator.prototype.integers,
		() => new Generator().integers(10, null, 10),
		() => {}
	)
	.add(
		Generator.prototype.integers,
		() => new Generator().integers(10, null),
		() => {}
	)
	.add(
		Generator.prototype.random,
		() => {
			let out = arange(20).reshape([-1, 2]);
			let out2 = new Generator().random([5, 2], out.get(slice(0, 5)));
			return [out.toarray(), out2.toarray()];
		},
		() => {}
	)
	.add(
		Generator.prototype.random,
		() => new Generator().random([1, 2, 1]),
		() => {}
	)
	.add(
		Generator.prototype.shuffle,
		() => {
			let a = arange(27).reshape(3, 3, 3);
			new Generator().shuffle(a, -1);
			return a;
		},
		() => {}
	);

function hashToInt(x) {
	x = ((x >> 16) ^ x) * 0x45d9f3b;
	x = ((x >> 16) ^ x) * 0x45d9f3b;
	x = (x >> 16) ^ x;

	return 1 / ((x % 137) + 1.1);
}

let dummy_rand = (i = 1) => {
	return () => hashToInt(i++);
};

tester.onload(() => {
	let a = arange(10);
	// console.log(contiguous(a.get(slice(1, null, -1))));
	// let rand = dummy_rand(),
	// 	_rand = dummy_rand();

	// let rng = new Generator(rand);
	// for (let i = 0; i < 100; i++) console.log(rng.integers(10, 102, null));
});
