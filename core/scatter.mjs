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
	Slice,
	dtype,
	broadcast_to,
	broadcast_shapes,
	concatenate,
	get_size,
} from './core.mjs';

/**
 *
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {{shape: number[], indices: Array<NDArray|Slice>}}
 */
export function scatter(a, indices) {
	a = asarray(a);
	let axis = 0;

	let newIndices = [];
	let shapes = [];
	for (let index of indices) {
		if (typeof index == 'string' || index == null) {
			newIndices.push(slice(index));
		} else if (index instanceof Slice) {
			newIndices.push(index);
		} else {
			index = asarray(index);
			if (index.dtype == dtype('boolean')) {
				let indices = index.nonzero();
				shapes.push(...indices.map(a => a.shape));
				newIndices.push(...indices);
			} else {
				shapes.push(index.shape);
				newIndices.push(index);
			}
		}
		axis++;
	}

	let outShape = [];
	let shape = broadcast_shapes(...shapes);
	outShape.push(...shape);
	newIndices = newIndices.map(index => (index instanceof NDArray ? broadcast_to(index, shape) : index));

	newIndices.forEach((index, axis) => {
		if (index instanceof Slice) {
			outShape.push(index.indices(a.shape[axis]).slicelength);
		}
	});

	for (let i = newIndices.length; i < a.ndim; i++) {
		outShape.push(a.shape[i]);
	}

	return { size: get_size(shape), shape: outShape, indices: newIndices };
}

/**
 * @param {NDArray} a array-like
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {NDArray}
 */
export function get(a, indices) {
	a = asarray(a);
	let { size, shape, indices: _indices } = scatter(a, indices);
	indices = _indices;

	let copies = Array(size);
	for (let i = 0; i < copies.length; i++) {
		// console.log(indices.map(index => (index instanceof NDArray ? index.item(i) : index)));
		copies[i] = a.get(indices.map(index => (index instanceof NDArray ? index.item(i) : index)));
	}
	console.log(shape, indices);
	if (copies[0].ndim == 0) {
		return array(copies);
	}
	return concatenate(copies, 0).reshape(shape);
}

export function set(a, indices, value) {}

tester
	.add(
		get,
		() => get(arange(2 * 3 * 4 * 5).reshape(2, 3, 4, 5), [[0, 0], ':1', [0, 0], ':']),
		() => array([[[0, 1, 2, 3, 4]], [[0, 1, 2, 3, 4]]])
	)
	.add(
		get,
		() =>
			get(arange(2 * 3 * 4).reshape(2, 3, 4), [
				[[1], [1]],
				[true, false, true],
			]),
		() =>
			array([
				[
					[12, 13, 14, 15],
					[20, 21, 22, 23],
				],
				[
					[12, 13, 14, 15],
					[20, 21, 22, 23],
				],
			])
	)
	.add(
		get,
		() =>
			get(arange(2 * 3 * 4).reshape(2, 3, 4), [
				':',
				[
					[true, false, true, true],
					[true, false, true, true],
					[true, false, true, true],
				],
			]),
		() =>
			array([
				[0, 2, 3, 4, 6, 7, 8, 10, 11],
				[12, 14, 15, 16, 18, 19, 20, 22, 23],
			])
	)
	.add(
		get,
		() =>
			get(arange(2 * 3 * 4).reshape(2, 3, 4), [
				[0, 0, 0, 1, 1, 1, 1, 1, 0],
				':',
				[0, 2, 3, 0, 2, 3, 0, 2, 3],
			]),
		() => 1
	)
	.add(
		get,
		() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [[1, 0], 0]),
		() => 1
	);
