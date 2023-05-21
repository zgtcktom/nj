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
	empty,
	copyto,
	ndindex,
	NdindexIterator,
	expand_dims,
	atleast_1d,
} from './core.mjs';

/**
 *
 * @param {NDArray} a
 * @param {Array<number|Slice|string|null|number[]|boolean[]|NDArray>} indices
 * @returns {}
 */
export function scatter(a, indices) {
	a = asarray(a);

	let mask = [];

	let shapes = [];
	let newIndices = [];
	for (let index of indices) {
		if (typeof index == 'string' || index == null) {
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
	let outShape;
	let axis = 0;
	if (adjacent) {
		// advanced indexes are all adjacent
		outShape = [];
		for (let i = 0; i < n; ) {
			if (mask[i]) {
				axis = i;
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
		outShape = shape.slice();
		for (let i = 0; i < n; i++) {
			if (!mask[i]) {
				let dim = newIndices[i].indices(a.shape[i]).slicelength;
				outer.push(dim);
				outShape.push(dim);
			}
		}
	}

	for (let i = n; i < a.ndim; i++) {
		let dim = a.shape[i];
		outShape.push(dim);
		outer.push(dim);
	}

	// console.log('asd', outShape, axis);

	// let size = get_size(shape);
	// let views = Array(size);
	// for(let i=0;i<size;i++){
	// 	views[i]=a.at
	// }

	return new ViewIterator(a, shape, newIndices, axis, outShape);

	// return {
	// 	size,
	// 	axis,
	// 	inner: shape,
	// 	shape: outShape,
	// 	indices: newIndices,
	// 	base: a,
	// 	[Symbol.iterator]() {
	// 		this.index = 0;
	// 		this.done = false;
	// 		return this;
	// 	},
	// 	next() {
	// 		if (this.done) return { done: true };

	// 		let { base, size, indices, index } = this;

	// 		let value = [...indices.map(ind => (ind instanceof NDArray ? ind.item(index) : ind))];

	// 		this.done = ++this.index >= size;
	// 		return { value, done: false };
	// 	},

	// 	/**
	// 	 * @param {NDArray} value
	// 	 */
	// 	set(value) {
	// 		let { base, shape, inner } = this;
	// 		value = broadcast_to(value, shape);
	// 		let it = ndindex(inner)[Symbol.iterator]();

	// 		let prefix = Array(axis).fill(slice(':'));
	// 		for (let indices of this) {
	// 			let ind = prefix.concat(it.next().value);
	// 			let x = value.get(ind);
	// 			// console.log(ind, indices);
	// 			copyto(base.get(indices), x);
	// 		}
	// 	},
	// };
}

/**
 * @class
 * @extends {NdindexIterator}
 */
class ViewIterator extends NdindexIterator {
	/**
	 *
	 * @param {NDArray} base
	 * @param {number[]} shape
	 * @param {Array.<Slice|NDArray>} indices
	 * @param {number} axis
	 * @param {number[]} viewShape
	 */
	constructor(base, shape, indices, axis, viewShape) {
		super(shape);
		this.base = asarray(base);
		this.indices = indices;
		this.axis = axis;
		this.viewShape = viewShape;
	}

	/**
	 * @returns {{value: NDArray, done: boolean}}
	 */
	next() {
		if (this.done) return { done: true };
		let { base, indices, index } = this;

		let value = base.get(indices.map(ind => (ind instanceof NDArray ? ind.item(index) : ind)));

		super.next();
		return { value, done: false };
	}

	/**
	 * @returns {NDArray}
	 */
	get() {
		let out = empty(this.viewShape, this.base.dtype);

		let prefix = Array(this.axis).fill(slice(':'));
		for (let view of this) {
			let indices = prefix.concat(this.coords);
			copyto(out.get(indices), view);
		}
		return out;
		// let views = [...this].map(view => expand_dims(view, -1));
		// return concatenate(views, this.axis).reshape(this.viewShape);
	}

	/**
	 * @param {NDArray} value array-like
	 */
	set(value) {
		value = broadcast_to(value, this.viewShape);

		let prefix = Array(this.axis).fill(slice(':'));
		for (let view of this) {
			let indices = prefix.concat(this.coords);
			copyto(view, value.get(indices));
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
	// a = asarray(a);
	// let { size, shape, indices: _indices, axis } = scatter(a, indices);
	// indices = _indices;

	// let copies = Array(size);
	// for (let i = 0; i < copies.length; i++) {
	// 	copies[i] = a.at(...indices.map(index => (index instanceof NDArray ? index.item(i) : index)), null);
	// }

	// // let out = empty(shape, a.dtype);

	// // console.log(copies, axis, shape);
	// return concatenate(copies, axis).reshape(shape);
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
