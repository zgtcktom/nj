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
	ravel,
	normalize_axis_index,
	empty,
	shallow_array_equal,
	ndindex,
	ndoffset,
	amin,
	power,
	subtract,
	sum,
	multiply,
	divide,
	square,
	sqrt,
} from './core.mjs';

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function ptp(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let shape = [...a.shape.slice(0, axis), ...(keepdims ? [1] : []), ...a.shape.slice(axis + 1)];

	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape))
		throw `out must have the same shape as the expected output`;

	subtract(amax(a, axis, null, keepdims), amin(a, axis, null, keepdims), out);

	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} weights
 * @param {*} returned
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function average(a, axis = null, weights = null, returned = false, keepdims = false) {
	a = asarray(a);

	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	if (weights != null) weights = asarray(weights);

	let sum_of_weights;
	if (weights != null) {
		sum_of_weights = sum(weights);
		if (sum_of_weights == 0) throw `sum(weights) must not be 0`;
		if (weights.ndim == 1) {
			weights = weights.reshape([...Array(axis).fill(1), a.shape[axis]]);
		} else if (shallow_array_equal(weights.shape, a.shape)) {
		} else throw `weights.shape and a.shape do not match`;
		a = multiply(a, weights);
	} else {
		sum_of_weights = a.shape[axis];
	}

	let out = divide(sum(a, axis, null, keepdims), sum_of_weights);

	if (returned) return [out, sum_of_weights];
	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function mean(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);

	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let shape = [...a.shape.slice(0, axis), ...(keepdims ? [1] : []), ...a.shape.slice(axis + 1)];
	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape))
		throw `out must have the same shape as the expected output`;

	divide(sum(a, axis, null, keepdims), a.shape[axis], out);

	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} ddof
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function variance(a, axis = null, out = null, ddof = 0, keepdims = false) {
	a = asarray(a);

	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let shape = [...a.shape.slice(0, axis), ...(keepdims ? [1] : []), ...a.shape.slice(axis + 1)];
	if (out == null) out = empty(shape);
	else if (!shallow_array_equal(shape, out.shape))
		throw `out must have the same shape as the expected output`;

	mean(square(subtract(a, divide(sum(a, axis, null, true), a.shape[axis] - ddof))), axis, out, keepdims);

	return out;
}

/**
 *
 * @param {*} a
 * @param {*} axis
 * @param {*} out
 * @param {*} ddof
 * @param {*} keepdims
 * @returns {NDArray}
 */
export function std(a, axis = null, out = null, ddof = 0, keepdims = false) {
	out = variance(a, axis, out, ddof, keepdims);
	sqrt(out, out);
	return out;
}

/**
 *
 * @param {*} a
 * @param {*} weights
 * @param {*} minlength
 * @returns {NDArray}
 */
export function bincount(a, weights = null, minlength = 0) {
	a = asarray(a);
	if (a.ndim != 1) throw `a.dim != 1`;
	if (amin(a) < 0) throw `amin(a) < 0`;
	if (minlength < 0) throw `minlength < 0`;

	if (weights != null) {
		weights = asarray(weights);
		if (!shallow_array_equal(weights.shape, a.shape)) throw `weights.shape != a.shape`;
		weights = weights.toarray();
	}

	let data = Array(Math.max(amax(a) + 1, minlength)).fill(0);
	let i = 0;
	for (let n of a.flat) {
		data[n] += weights != null ? weights[i] : 1;
		i++;
	}

	return array(data);
}

process.env.PRODUCTION ||
	tester
		.add(
			ptp,
			() =>
				ptp(
					array([
						[4, 9, 2, 10],
						[6, 9, 7, 12],
					]),
					1
				),
			() => array([8, 6])
		)
		.add(
			ptp,
			() =>
				ptp(
					array([
						[4, 9, 2, 10],
						[6, 9, 7, 12],
					]),
					0
				),
			() => array([2, 0, 5, 2])
		)
		.add(
			ptp,
			() =>
				ptp(
					array([
						[4, 9, 2, 10],
						[6, 9, 7, 12],
					])
				),
			() => 10
		)
		.add(
			ptp,
			() => ptp(power(arange(10, 40), 2).reshape(5, 2, 3), 0, null, true),
			() =>
				array([
					[
						[1056, 1104, 1152],
						[1200, 1248, 1296],
					],
				])
		);

process.env.PRODUCTION ||
	tester
		.add(
			average,
			() => average(arange(1, 5)),
			() => 2.5
		)
		.add(
			average,
			() => average(arange(1, 11), undefined, arange(10, 0, -1)),
			() => 4.0
		)
		.add(
			average,
			() => average(arange(6).reshape(3, 2), 1, [1 / 4, 3 / 4]),
			() => array([0.75, 2.75, 4.75])
		)
		.add(
			average,
			() => average(arange(6).reshape(3, 2), 1, undefined, undefined, true),
			() => array([[0.5], [2.5], [4.5]])
		);

process.env.PRODUCTION ||
	tester
		.add(
			mean,
			() =>
				mean(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 2.5
		)
		.add(
			mean,
			() =>
				mean(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([2, 3])
		)
		.add(
			mean,
			() =>
				mean(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([1.5, 3.5])
		);

process.env.PRODUCTION ||
	tester
		.add(
			variance,
			() =>
				variance(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 1.25
		)
		.add(
			variance,
			() =>
				variance(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([1, 1])
		)
		.add(
			variance,
			() =>
				variance(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([0.25, 0.25])
		);

process.env.PRODUCTION ||
	tester
		.add(
			std,
			() =>
				std(
					array([
						[1, 2],
						[3, 4],
					])
				),
			() => 1.118033988749895
		)
		.add(
			std,
			() =>
				std(
					array([
						[1, 2],
						[3, 4],
					]),
					0
				),
			() => array([1, 1])
		)
		.add(
			std,
			() =>
				std(
					array([
						[1, 2],
						[3, 4],
					]),
					1
				),
			() => array([0.5, 0.5])
		);

process.env.PRODUCTION ||
	tester
		.add(
			bincount,
			() => bincount(arange(5)),
			() => array([1, 1, 1, 1, 1])
		)
		.add(
			bincount,
			() => bincount(array([0, 1, 1, 3, 2, 1, 7])),
			() => array([1, 3, 1, 1, 0, 0, 0, 1])
		)
		.add(
			bincount,
			() => bincount(array([0, 1, 1, 2, 2, 2]), array([0.3, 0.5, 0.2, 0.7, 1, -0.6])),
			() => array([0.3, 0.7, 1.1])
		);
