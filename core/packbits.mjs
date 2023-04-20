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
	empty,
	normalize_axis_index,
	ravel,
	ndindex,
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
