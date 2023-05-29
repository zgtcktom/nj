/**
 * @module bitwise/packing
 */

import {
	tester,
	array,
	asarray,
	NDArray,
	empty,
	normalize_axis_index,
	ravel,
	ndindex,
	array_equal,
} from './core.mjs';

/**
 * @param {NDArray} a
 * @param {null|number} [axis]
 * @param {string} [bitorder]
 * @returns {NDArray}
 */
export function packbits(a, axis = null, bitorder = 'big') {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let outshape = a.shape.slice();
	outshape[axis] = Math.ceil(outshape[axis] / 8);
	let out = empty(outshape);

	let shape = a.shape.slice();
	shape[axis] = 1;

	let tmp = Array(outshape[axis] * 8);

	for (let ii of ndindex(shape)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		tmp.fill(0);
		for (let i = 0; i < a.shape[axis]; i++) {
			let value = a.data[offset + i * a.strides[axis]];
			tmp[i] = value;
		}

		let idx = 0;
		for (let i = 0; i < tmp.length; i += 8) {
			let n = 0;
			if (bitorder == 'big') {
				for (let j = 0; j < 8; j++) {
					n += tmp[i + j] << (7 - j);
				}
			} else if (bitorder == 'little') {
				for (let j = 0; j < 8; j++) {
					n += tmp[i + j] << j;
				}
			} else throw `bitorder can be either big or little`;
			out.data[_offset + idx * out.strides[axis]] = n;
			idx++;
		}
	}

	return out;
}

/**
 * @param {NDArray} a
 * @param {null|number} [axis]
 * @param {null|number} [count]
 * @param {string} [bitorder]
 * @returns {NDArray}
 */
export function unpackbits(a, axis = null, count = null, bitorder = 'big') {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let start = 0;
	let end = 8;
	if (count != null)
		if (count < 0) start = 8 - count;
		else end = count;

	let outshape = a.shape.slice();
	outshape[axis] = outshape[axis] * (end - start);
	let out = empty(outshape);

	let tmp = Array(8);

	for (let ii of ndindex(a.shape)) {
		let { offset } = a;
		let { offset: _offset } = out;
		for (let i = 0; i < a.shape.length; i++) {
			offset += ii[i] * a.strides[i];
			_offset += ii[i] * out.strides[i];
		}

		let value = a.data[offset];

		_unpackbits(value, tmp, bitorder);
		for (let i = start, j = 0; i < end; i++, j++) out.data[_offset + j * out.strides[axis]] = tmp[i];
	}

	return out;
}

function _unpackbits(n, out = [], bitorder = 'big') {
	if (bitorder == 'big') {
		for (let i = 7; i >= 0; i--) {
			out[i] = n % 2;
			n = (n / 2) | 0;
		}
	} else {
		for (let i = 0; i <= 7; i++) {
			out[i] = n % 2;
			n = (n / 2) | 0;
		}
	}
	return out;
}

process.env.PRODUCTION ||
	tester
		.add(
			packbits,
			() =>
				packbits(
					array([
						[
							[1, 0, 1],
							[0, 1, 0],
						],
						[
							[1, 1, 0],
							[0, 0, 1],
						],
					]),
					-1
				),
			() =>
				array([
					[[160], [64]],
					[[192], [32]],
				])
		)
		.add(
			packbits,
			() =>
				packbits(
					array([
						[
							[1, 0, 1],
							[0, 1, 0],
						],
						[
							[1, 1, 0],
							[0, 0, 1],
						],
					])
				),
			() => array([171, 16])
		)
		.add(
			packbits,
			() => packbits(array([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1),
			() => array([[[160, 0]]])
		);

process.env.PRODUCTION ||
	tester
		.add(
			unpackbits,
			() => unpackbits(array([[2], [7], [23]]), 1),
			() =>
				array([
					[0, 0, 0, 0, 0, 0, 1, 0],
					[0, 0, 0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 0, 1, 1, 1],
				])
		)
		.add(
			unpackbits,
			() => {
				let b = array([
					[0, 0, 0, 0, 0, 0, 1, 0],
					[0, 0, 0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 0, 1, 1, 1],
				]);
				let p = packbits(b, 0);

				return [unpackbits(p, 0), array_equal(b, unpackbits(p, 0, b.shape[0]))];
			},
			() => [
				array([
					[0, 0, 0, 0, 0, 0, 1, 0],
					[0, 0, 0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 0, 1, 1, 1],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
				]),
				true,
			]
		);
