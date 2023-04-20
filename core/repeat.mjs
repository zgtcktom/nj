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
	isscalar,
	ndindex,
	ndoffset,
	empty,
} from './core.mjs';

/**
 *
 * @param {NDArray} a
 * @param {number} repeats
 * @param {null|number} [axis]
 * @returns {NDArray}
 */
export function repeat(a, repeats, axis = null) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else axis = normalize_axis_index(axis, a.ndim);

	let outshape = a.shape.slice();
	let isNumber = typeof repeats == 'number';
	if (isNumber) {
		outshape[axis] *= repeats;
	} else if (repeats.length == 1) {
		repeats = repeats[0];
		outshape[axis] *= repeats;
		isNumber = true;
	} else if (outshape[axis] == repeats.length) {
		outshape[axis] = repeats.reduce((a, b) => a + b);
	} else {
		throw `operands could not be broadcast together with shape (${outshape[axis]},) (${repeats.length},)`;
	}

	let out = empty(outshape);
	let outstrides = out.strides.slice();
	outstrides.splice(axis, 1);

	let shape = a.shape.slice();
	shape.splice(axis, 1);

	let strides = a.strides.slice();
	strides.splice(axis, 1);

	let n = outshape[axis];
	for (let idx of ndindex(shape)) {
		let offset = 0;
		let outoffset = 0;
		for (let i = 0; i < idx.length; i++) {
			offset += idx[i] * strides[i];
			outoffset += idx[i] * outstrides[i];
		}

		let ii = 0;
		for (let i = 0; i < n; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			let m = isNumber ? repeats : repeats[i];
			for (let j = 0; j < m; j++, ii++) {
				out.data[outoffset + ii * out.strides[axis]] = value;
			}
		}
	}

	return out;
}

tester
	.add(
		repeat,
		() => repeat(3, 4),
		() => array([3, 3, 3, 3])
	)
	.add(
		repeat,
		() =>
			repeat(
				array([
					[1, 2],
					[3, 4],
				]),
				2
			),
		() => array([1, 1, 2, 2, 3, 3, 4, 4])
	)
	.add(
		repeat,
		() =>
			repeat(
				array([
					[1, 2],
					[3, 4],
				]),
				3,
				1
			),
		() =>
			array([
				[1, 1, 1, 2, 2, 2],
				[3, 3, 3, 4, 4, 4],
			])
	)
	.add(
		repeat,
		() =>
			repeat(
				array([
					[1, 2],
					[3, 4],
				]),
				[1, 2],
				0
			),
		() =>
			array([
				[1, 2],
				[3, 4],
				[3, 4],
			])
	);
