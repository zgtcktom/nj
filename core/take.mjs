import { NDArray, array, asarray, empty, ndindex, shallow_array_equal, slice, tester } from './core.mjs';

/**
 *
 * @param {NDArray} a
 * @param {any[]} indices
 * @param {null|number} [axis]
 * @param {NDArray} [out]
 * @param {string} [mode]
 * @returns {NDArray}
 */
export function take(a, indices, axis = null, out = null, mode = 'raise') {
	a = asarray(a);
	indices = array(indices);
	if (axis == null) {
		indices.data = _indices(indices.data, mode, a.size);

		let newshape = indices.shape;

		if (out == null) out = empty(newshape);
		else if (!shallow_array_equal(out.shape, newshape))
			throw 'output array does not match result of ndarray.take';

		for (let i = 0; i < indices.size; i++) {
			out.data[i] = a.item(indices.data[i]);
		}

		return out;
	} else {
		if (axis < 0) axis += a.ndim;

		indices.data = _indices(indices.data, mode, a.shape[axis]);

		let newshape = a.shape.slice();
		newshape.splice(axis, 1, ...indices.shape);

		if (out == null) out = empty(newshape);
		else if (!shallow_array_equal(out.shape, newshape))
			throw 'output array does not match result of ndarray.take';

		let rest = Array(axis).fill(slice());
		for (let index of ndindex(indices.shape)) {
			out.get(rest.concat(index)).set(a.get([...rest, indices.item(index)]));
		}

		return out;
	}
}

function clip(n, min, max) {
	return n < min ? min : n > max ? max : n;
}

function _indices(indices, mode, size) {
	let newindices = [];
	if (mode == 'wrap') {
		for (let index of indices) {
			index = index % size;
			index = index < 0 ? index + size : index;
			newindices.push(index);
		}
	} else if (mode == 'clip') {
		for (let index of indices) {
			index = clip(index, 0, size - 1);
			newindices.push(index);
		}
	} else if (mode == 'raise') {
		for (let index of indices) {
			if (index < -size || index >= size)
				throw `index ${index} is out of bounds for axis 0 with size ${size}`;
			index = index < 0 ? index + a.size : index;
			newindices.push(index);
		}
	} else throw `unexpected mode = ${mode}`;
	return newindices;
}

process.env.PRODUCTION ||
	tester
		.add(
			'take',
			() => {
				let a = [4, 3, 5, 7, 6, 8];
				let indices = [0, 1, 4];
				return take(a, indices);
			},
			() => array([4, 3, 6])
		)
		.add(
			'take',
			() => {
				let a = [4, 3, 5, 7, 6, 8];
				return take(a, [
					[0, 1],
					[2, 3],
				]);
			},
			() =>
				array([
					[4, 3],
					[5, 7],
				])
		)
		.add(
			'take',
			() => {
				let a = array([
					[1, 2],
					[3, 4],
					[5, 6],
					[7, 8],
				]);
				return take(
					a,
					[
						[0, 1],
						[2, 3],
					],
					0
				);
			},
			() =>
				array([
					[
						[1, 2],
						[3, 4],
					],

					[
						[5, 6],
						[7, 8],
					],
				])
		)
		.add(
			'take',
			() => {
				let a = array([
					[1, 2],
					[3, 4],
					[5, 6],
					[7, 8],
				]);
				return take(
					a,
					array([
						[
							[
								[0, 1],
								[0, 1],
							],
						],
					]),
					1
				);
			},
			() =>
				array([
					[
						[
							[
								[1, 2],
								[1, 2],
							],
						],
					],

					[
						[
							[
								[3, 4],
								[3, 4],
							],
						],
					],

					[
						[
							[
								[5, 6],
								[5, 6],
							],
						],
					],

					[
						[
							[
								[7, 8],
								[7, 8],
							],
						],
					],
				])
		)
		.add(
			'take',
			() => {
				let a = [
					[5, 6, 2, 7, 1],
					[4, 9, 2, 9, 3],
				];
				let indices = [0, 4];
				return take(a, indices, 1);
			},
			() => [
				[5, 1],
				[4, 3],
			]
		);
