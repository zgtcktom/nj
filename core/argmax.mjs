import {
	tester,
	arange,
	array,
	asarray,
	NDArray,
	empty,
	shallow_array_equal,
	normalize_axis_index,
	ndindex,
} from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {number|null} [axis = null]
 * @param {NDArray|null} [out = null]
 * @param {boolean} [keepdims = false]
 * @returns {NDArray}
 */
export function argmax(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);
	if (a.size == 0) {
		throw new Error(`attempt to get argmax of an empty sequence`);
	}

	if (axis == null) {
		let maxIndex,
			maxValue = Number.MIN_VALUE;
		let i = 0;
		for (let value of a.flat) {
			if (value > maxValue) {
				maxIndex = i;
				maxValue = value;
			}
			i++;
		}
		let shape = keepdims ? Array(a.ndim).fill(1) : [];
		if (out == null) out = empty(shape, 'number');
		else if (!shallow_array_equal(out.shape, shape)) {
			throw new Error('out shape does not match');
		}
		out.itemset(0, maxIndex);
		return out;
	}

	axis = normalize_axis_index(axis, a.ndim);

	if (a.ndim == 0) return 0;
	if (a.ndim == 1) return argmax(a, null, out, keepdims);

	let shape = [...a.shape];
	if (keepdims) {
		shape.splice(axis, 1, 1);
	} else {
		shape.splice(axis, 1);
	}

	if (out == null) out = empty(shape, 'number');
	else if (!shallow_array_equal(out.shape, shape)) {
		throw new Error('out shape does not match');
	}

	let _out = out;

	let _shape = [...a.shape];
	_shape.splice(axis, 1);
	out = out.reshape(_shape);

	for (let indices of ndindex(_shape)) {
		let _indices = [...indices];
		_indices.splice(axis, 0, ':');
		argmax(a.get(_indices), null, out.get(indices));
	}

	out = _out;

	return out;
}

/**
 * @param {NDArray} a array-like
 * @param {number|null} [axis = null]
 * @param {NDArray|null} [out = null]
 * @param {boolean} [keepdims = false]
 * @returns {NDArray}
 */
export function argmin(a, axis = null, out = null, keepdims = false) {
	a = asarray(a);
	if (a.size == 0) {
		throw new Error(`attempt to get argmax of an empty sequence`);
	}

	if (axis == null) {
		let minIndex,
			minValue = Number.MAX_VALUE;
		let i = 0;
		for (let value of a.flat) {
			if (value < minValue) {
				minIndex = i;
				minValue = value;
			}
			i++;
		}
		let shape = keepdims ? Array(a.ndim).fill(1) : [];
		if (out == null) out = empty(shape, 'number');
		else if (!shallow_array_equal(out.shape, shape)) {
			throw new Error('out shape does not match');
		}
		out.itemset(0, minIndex);
		return out;
	}

	axis = normalize_axis_index(axis, a.ndim);

	if (a.ndim == 0) return 0;
	if (a.ndim == 1) return argmin(a, null, out, keepdims);

	let shape = [...a.shape];
	if (keepdims) {
		shape.splice(axis, 1, 1);
	} else {
		shape.splice(axis, 1);
	}

	if (out == null) out = empty(shape, 'number');
	else if (!shallow_array_equal(out.shape, shape)) {
		throw new Error('out shape does not match');
	}

	let _out = out;

	let _shape = [...a.shape];
	_shape.splice(axis, 1);
	out = out.reshape(_shape);

	for (let indices of ndindex(_shape)) {
		let _indices = [...indices];
		_indices.splice(axis, 0, ':');
		argmin(a.get(_indices), null, out.get(indices));
	}

	out = _out;

	return out;
}

tester
	.add(
		argmax,
		() => argmax(arange(6).reshape(2, 3)),
		() => 5
	)
	.add(
		argmax,
		() => argmax(arange(6).reshape(2, 3), 0),
		() => array([1, 1, 1])
	)
	.add(
		argmax,
		() => argmax(arange(6).reshape(2, 3), 1),
		() => array([2, 2])
	)
	.add(
		argmax,
		() => argmax(array([0, 5, 2, 3, 4, 5])),
		() => 1
	)
	.add(
		argmax,
		() => argmax(arange(24).reshape(2, 3, 4), 1, null, true),
		() => array([[[2, 2, 2, 2]], [[2, 2, 2, 2]]])
	);

tester
	.add(
		argmin,
		() => argmin(arange(6).reshape(2, 3)),
		() => 0
	)
	.add(
		argmin,
		() => argmin(arange(6).reshape(2, 3), 0),
		() => array([0, 0, 0])
	)
	.add(
		argmin,
		() => argmin(arange(6).reshape(2, 3), 1),
		() => array([0, 0])
	)
	.add(
		argmin,
		() => argmin(array([0, 5, 2, 3, 4, 5])),
		() => 0
	)
	.add(
		argmin,
		() => argmin(arange(24).reshape(2, 3, 4), 1, null, true),
		() => array([[[0, 0, 0, 0]], [[0, 0, 0, 0]]])
	);
