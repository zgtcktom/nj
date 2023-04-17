import { broadcast_shapes, asarray, tester, array, empty, broadcast_to } from './core.mjs';

function _size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

// function extend(function_, class_) {
// 	for (let name of Object.getOwnPropertyNames(class_)) {
// 		let method = class_.prototype[name];
// 		function_[name] = (self, ...args) => method.apply(self, args);
// 	}
// 	return function_;
// }

export class Broadcast {
	constructor(arrays) {
		arrays = arrays.map(asarray);
		this.numiter = arrays.length;
		this.shape = broadcast_shapes(...arrays.map(array => array.shape));
		this.arrays = arrays.map(array => broadcast_to(array, this.shape));
		this.ndim = this.shape.length;
		this.size = _size(this.shape);
		this.index = 0;
		this.reset();
	}

	[Symbol.iterator]() {
		if (this.index != 0) this.reset();
		return this;
	}

	next() {
		let value = this.iters.map(iter => iter.next().value);
		let done = this.index >= this.size;
		this.index++;
		return { value, done };
	}

	reset() {
		this.iters = this.arrays.map(array => array.flat);
		this.index = 0;
	}
}

export function broadcast(...arrays) {
	return new Broadcast(arrays);
}

tester
	.add(
		broadcast,
		() => {
			`
        out = np.empty(b.shape)
        out.flat = [u+v for (u,v) in b]
        out
        array([[5.,  6.,  7.],
               [6.,  7.,  8.],
               [7.,  8.,  9.]])
        `;
			let x = array([[1], [2], [3]]),
				y = array([4, 5, 6]),
				b = broadcast(x, y);
			let out = empty(b.shape);
			let flat = [];
			for (let [u, v] of b) {
				flat.push(u + v);
			}
			out.flat = flat;
			return out;
		},
		() =>
			array([
				[5, 6, 7],
				[6, 7, 8],
				[7, 8, 9],
			])
	)
	.add(
		broadcast,
		() => {
			`
            >>> x = np.array([1, 2, 3])
            >>> y = np.array([[4], [5], [6]])
            >>> b = np.broadcast(x, y)
            >>> b.index
            0
            >>> next(b), next(b), next(b)
            ((1, 4), (2, 4), (3, 4))
            >>> b.index
            3
            >>> b.reset()
            >>> b.index
            0
            `;
			let out = [];
			let x = array([1, 2, 3]),
				y = array([[4], [5], [6]]),
				b = broadcast(x, y);
			out.push(b.index);
			out.push(b.next().value, b.next().value, b.next().value);
			out.push(b.index);
			b.reset();
			out.push(b.index);
			return out;
		},
		() => [0, [1, 4], [2, 4], [3, 4], 3, 0]
	);
