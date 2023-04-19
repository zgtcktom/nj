import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	amax,
	multiply,
	empty,
	shallow_array_equal,
	array_equal,
	ndoffset,
	sum,
	matmul,
	ndindex,
} from './core.mjs';

export function assert(cond, msg) {
	if (!cond) {
		throw new Error(msg);
	}
}

export function dot(a, b, out = null) {
	a = asarray(a);
	b = asarray(b);

	if (a.ndim == 1 && b.ndim == 1) return sum(multiply(a, b), 0, out);

	if (a.ndim == 2 && b.ndim == 2) return matmul(a, b, out);

	if (a.ndim == 0 || b.ndim == 0) return multiply(a, b, out);

	if (b.ndim == 1) {
		assert(a.shape.at(-1) == b.shape[0], `shapes ${a.shape} and ${b.shape} not aligned`);

		let shape = a.shape.slice(0, -1);
		if (out == null) out = empty(shape);
		else assert(shallow_array_equal(shape, out.shape), `out shape mismatch`);

		for (let index of ndindex(shape)) {
			dot(a.get(index), b, out.at(slice('...'), ...index));
		}

		return out;
	}
}

tester
	.add(
		dot,
		() => dot(3, 4),
		() => 12
	)
	.add(
		dot,
		() =>
			dot(
				[
					[1, 2],
					[3, 4],
				],
				[4, 1]
			),
		() => array([6, 16])
	)
	.add(
		dot,
		() =>
			dot(
				[
					[1, 0],
					[0, 1],
				],
				[
					[4, 1],
					[2, 2],
				]
			),
		() =>
			array([
				[4, 1],
				[2, 2],
			])
	);
