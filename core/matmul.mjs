import {
	tester,
	arange,
	array,
	asarray,
	slice,
	empty,
	assert,
	shallow_array_equal,
	ndindex,
	dot,
	broadcast_to,
	broadcast_shapes,
	NDArray,
} from './core.mjs';

/**
 * @param {NDArray} x1
 * @param {NDArray} x2
 * @param {NDArray} [out]
 * @returns {NDArray}
 */
export function matmul(x1, x2, out = null) {
	x1 = asarray(x1);
	x2 = asarray(x2);

	assert(x1.ndim > 0, `x1 does not have enough dimensions`);
	assert(x2.ndim > 0, `x2 does not have enough dimensions`);

	let x11d = x1.ndim == 1;
	let x21d = x2.ndim == 1;
	let any1d = x11d || x21d;

	if (x11d) x1 = x1.at(null, slice(':'));

	if (x21d) x2 = x2.at(slice(':'), null);

	if (x1.ndim == 2 && x2.ndim == 2) {
		assert(x1.shape[1] == x2.shape[0], `input shape mismatch`);

		let n = x1.shape[0];
		let m = x2.shape[1];

		let _shape = [n, m];
		let shape = any1d ? _shape.slice(x11d ? 1 : 0, x21d ? -1 : undefined) : _shape;

		if (out == null) out = empty(shape);
		else assert(shallow_array_equal(shape, out.shape), `out shape mismatch`);

		let _out = any1d ? out.reshape(_shape) : out;

		let x2T = x2.T;
		for (let [i, j] of ndindex(_shape)) {
			_out.set([i, j], dot(x1.at(i), x2T.at(j)));
		}

		return out;
	}

	let _shape = broadcast_shapes(x1.shape.slice(0, -2), x2.shape.slice(0, -2));
	x1 = broadcast_to(x1, [..._shape, ...x1.shape.slice(-2)]);
	x2 = broadcast_to(x2, [..._shape, ...x2.shape.slice(-2)]);

	assert(x1.shape.at(-1) == x2.shape.at(-2), `input shape mismatch`);

	let n = x1.shape.at(-2);
	let m = x2.shape.at(-1);
	let shape = [..._shape, n, m];

	if (out == null) out = empty(shape);
	else assert(shallow_array_equal(shape, out.shape), `out shape mismatch`);

	for (let index of ndindex(_shape)) {
		matmul(x1.get(index), x2.get(index), out.get(index));
	}

	return out;
}

process.env.PRODUCTION ||
	tester
		.add(
			matmul,
			() => {
				let a = array([
					[1, 0],
					[0, 1],
				]);
				let b = array([
					[4, 1],
					[2, 2],
				]);
				return matmul(a, b);
			},
			() =>
				array([
					[4, 1],
					[2, 2],
				])
		)
		.add(
			matmul,
			() => {
				let a = array([
					[1, 0],
					[0, 1],
				]);
				let b = array([1, 2]);
				return [matmul(a, b), matmul(b, a)];
			},
			() => [array([1, 2]), array([1, 2])]
		)
		.add(
			matmul,
			() => {
				let a = arange(2 * 2 * 4).reshape([2, 2, 4]);
				let b = arange(2 * 2 * 4).reshape([2, 4, 2]);
				return matmul(a, b);
			},
			() =>
				array([
					[
						[28, 34],
						[76, 98],
					],
					[
						[428, 466],
						[604, 658],
					],
				])
		);
