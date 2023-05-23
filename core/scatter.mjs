import {
	tester,
	arange,
	array,
	asarray,
	slice,
	NDArray,
	Slice,
	dtype,
	broadcast_to,
	broadcast_shapes,
	empty,
	copyto,
	NdindexIterator,
} from './core.mjs';

/**
 *
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @param {number} [axis = 0]
 * @returns {ViewIterator}
 */
export function scatter(a, indices, axis = 0) {
	a = asarray(a);

	let mask = [];

	let shapes = [];
	let newIndices = [];
	for (let index of indices) {
		if (index == null) {
			newIndices.push(null);
			mask.push(false);
		} else if (typeof index == 'string') {
			newIndices.push(slice(index));
			mask.push(false);
		} else if (index instanceof Slice) {
			newIndices.push(index);
			mask.push(false);
		} else {
			index = asarray(index);
			if (index.dtype == dtype('boolean')) {
				for (let ind of index.nonzero()) {
					shapes.push(ind.shape);
					newIndices.push(ind);
					mask.push(true);
				}
			} else {
				shapes.push(index.shape);
				newIndices.push(index);
				mask.push(true);
			}
		}
	}
	let n = mask.length;

	let shape = broadcast_shapes(...shapes);
	for (let i = 0; i < n; i++) {
		if (mask[i]) newIndices[i] = broadcast_to(newIndices[i], shape);
	}

	let adjacent = true;
	let lastIndex = -1;
	for (let i = 0; i < n; i++) {
		if (mask[i]) {
			if (lastIndex === -1) lastIndex = i;
			else if (i !== lastIndex + 1) {
				adjacent = false;
				break;
			}
			lastIndex = i;
		}
	}

	let outer = [];
	let outShape = [];
	if (adjacent) {
		// advanced indexes are all adjacent
		for (let i = 0; i < n; ) {
			if (mask[i]) {
				axis += i;
				outShape.push(...shape);
				i = lastIndex + 1;
			} else {
				let dim = newIndices[i].indices(a.shape[i]).slicelength;
				outer.push(dim);
				outShape.push(dim);
				i++;
			}
		}
	} else {
		outShape.push(...shape);
		for (let i = 0; i < n; i++) {
			if (!mask[i]) {
				if (newIndices[i] == null) {
					outer.push(1);
					outShape.push(1);
				} else {
					let dim = newIndices[i].indices(a.shape[i]).slicelength;
					outer.push(dim);
					outShape.push(dim);
				}
			}
		}
	}

	for (let i = n; i < a.ndim; i++) {
		let dim = a.shape[i];
		outShape.push(dim);
		outer.push(dim);
	}

	return new ViewIterator(a, shape, newIndices, axis, outShape);
}

/**
 * @class
 * @extends {NdindexIterator}
 */
class ViewIterator extends NdindexIterator {
	/**
	 * @param {NDArray} base
	 * @param {number[]} shape
	 * @param {Array<Slice|NDArray>} indices
	 * @param {number} axis
	 * @param {number[]} outShape
	 */
	constructor(base, shape, indices, axis, outShape) {
		super(shape);
		this.base = asarray(base);
		this.indices = indices;
		this.axis = axis;
		this.outShape = outShape;
		this._indices = [...indices];
	}

	/**
	 * @returns {{value: NDArray, done: boolean}}
	 */
	next() {
		if (this.done) return { done: true };
		let { base, indices, index, _indices } = this;

		for (let i = 0; i < indices.length; i++) {
			if (indices[i] instanceof NDArray) {
				_indices[i] = indices[i].item(index);
			}
		}

		let value = base.get(_indices);

		super.next();
		return { value, done: false };
	}

	/**
	 * @returns {NDArray}
	 */
	get() {
		let { axis, coords, outShape, base } = this;
		let out = empty(outShape, base.dtype);

		for (let view of this) {
			copyto(out.get(coords, axis), view);
		}

		return out;
	}

	/**
	 * @param {NDArray} value array-like
	 */
	set(value) {
		let { axis, coords, outShape } = this;
		value = broadcast_to(value, outShape);

		for (let view of this) {
			copyto(view, value.get(coords, axis));
		}
	}
}

/**
 * @param {NDArray} a array-like
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {NDArray}
 */
export function get(a, indices) {
	return scatter(a, indices).get();
}

export function set(a, indices, value) {
	return scatter(a, indices).set(value);
}

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
		() =>
			array([
				[0, 4, 8],
				[2, 6, 10],
				[3, 7, 11],
				[12, 16, 20],
				[14, 18, 22],
				[15, 19, 23],
				[12, 16, 20],
				[14, 18, 22],
				[3, 7, 11],
			])
	)
	.add(
		get,
		() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [[1, 0], 0]),
		() =>
			array([
				[12, 13, 14, 15],
				[0, 1, 2, 3],
			])
	)
	.add(
		get,
		() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [':', [false, false, true], ':-1']),
		() => array([[[8, 9, 10]], [[20, 21, 22]]])
	)
	.add(
		get,
		() => get(arange(2 * 3 * 4).reshape(2, 3, 4), [':', [[0], [1]], [2]]),
		() =>
			array([
				[[2], [6]],
				[[14], [18]],
			])
	);
