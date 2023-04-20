import { tester, NDArray, Dtype, dtype_, shape_ } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @param {boolean} [copy]
 * @param {number} [ndmin]
 * @returns {NDArray}
 */
export function array(a, dtype = undefined, copy = true, ndmin = 0) {
	if (a instanceof NDArray) {
		let { shape, ndim } = a;
		if (ndim < ndmin) {
			shape = Array(ndmin - ndim)
				.fill(1)
				.concat(shape);
			a = a.reshape(shape);
		}
		return a.astype(dtype ?? a.dtype, copy);
	}

	let shape = shape_(a);
	let data = [];

	flatten_with_shape(data, a, shape, 0);

	let ndim = shape.length;
	if (ndim < ndmin) {
		shape = Array(ndmin - ndim)
			.fill(1)
			.concat(shape);
	}
	dtype = dtype_(dtype ?? guessType(data));

	return new NDArray(shape, dtype.new(data.length, data), dtype);
}

/**
 * @param {any[]} data
 * @param {NDArray|any[]|any} array
 * @param {number[]} shape
 * @param {number} level
 * @returns {void}
 * @ignore
 */
function flatten_with_shape(data, array, shape, level = 0) {
	if (level < shape.length) {
		for (let i = 0; i < shape[level]; i++) {
			flatten_with_shape(data, array.at(i), shape, level + 1);
		}
	} else {
		if (typeof array?.toarray == 'function') array = array.toarray();
		data.push(array);
	}
}

/**
 * @param {any[]|any} array
 * @returns {string}
 * @ignore
 */
export function guessType(array) {
	let type;
	if (typeof array == 'object' && array?.[Symbol.iterator]) {
		type = typeof array[0];
		for (let n of array) {
			if (type != typeof n) {
				type = 'object';
				break;
			}
		}
	} else {
		type = typeof array;
	}

	if (type == 'number' || type == 'string' || type == 'boolean') {
		return type;
	}
	return 'object';
}

tester
	.add(
		'array',
		() => array([3.1, 9]),
		() => [3.1, 9]
	)
	.add(
		'array',
		() => array([[9, 6], 3.1, 9]).shape,
		() => [3]
	)
	.add(
		'array',
		() => array(5),
		() => 5
	);
