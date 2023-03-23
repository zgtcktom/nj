import { tester, asarray, NDArray, array, ascontiguousarray, arange, slice, ndindex } from './core.mjs';

export function even_strides(strides, shape, ndim = strides.length) {
	// can .reshape(-1) without creating a copy
	// can iterate through .data with a constant stride (no need ndindex)
	let lastindex;
	for (let i = ndim - 1; i > 0; i--) {
		if (shape[i] > 1) {
			lastindex = i;
			break;
		}
	}
	for (let i = lastindex - 1; i >= 0; i--) {
		if (shape[i] > 1) {
			// console.log(
			// 	'asd',
			// 	strides[i],
			// 	shape[i],
			// 	strides[lastindex],
			// 	strides[i] == strides[lastindex] * shape[lastindex]
			// );
			if (strides[i] != strides[lastindex] * shape[lastindex]) return false;
			lastindex = i;
		}
	}
	return true;
}

function get_size(shape) {
	let size = 1;
	for (let dim of shape) size *= dim;
	return size;
}

export function reshape(a, newshape) {
	a = asarray(a);
	if (typeof newshape == 'number') newshape = [newshape];
	let unknown = -1;
	let rest = 1;
	for (let i = 0; i < newshape.length; i++) {
		if (newshape[i] == -1) {
			if (unknown != -1) throw 'can only specify one unknown dimension';
			unknown = i;
		} else {
			rest *= newshape[i];
		}
	}
	if (unknown != -1) {
		let { size } = a;
		if (size % rest != 0) throw `cannot reshape array of size ${size} into shape ${newshape}`;
		newshape[unknown] = rest == 0 ? 0 : size / rest;
	}
	if (a.size != get_size(newshape))
		throw `cannot reshape array of size ${a.size} into shape [${newshape.join(', ')}]`;

	if (a.base == undefined) {
		return new NDArray(newshape, a.data, a);
	}

	// check (1, 1, x, -1, y, 1) to (x, y)
	// or backward
	if (true || newshape.length >= a.shape.length) {
		let compatible = true;
		let j = 0;
		for (let i = 0; i < newshape.length; i++) {
			if (newshape[i] == 1) continue;
			for (; j < a.shape.length && a.shape[j] == 1; j++);
			if (j >= a.shape.length || newshape[i] != a.shape[j]) {
				compatible = false;
				break;
			}
			j++;
		}
		if (j != a.shape.length) compatible = false;
		// console.log(a.shape, compatible, newshape, a.data);
		if (compatible) {
			let strides = [];
			for (let i = 0, j = 0; i < newshape.length; i++) {
				if (newshape[i] != 1) {
					for (; j < a.shape.length && a.shape[j] == 1; j++);
				}
				strides.push(a.strides[j]);
			}
			// console.log(strides);
			return new NDArray(newshape, a.data, a, strides, a.offset, a.itemsize);
		}
	}

	// console.log(newshape.length == 1, even_strides(a.strides, a.shape, a.ndim));
	// for reshape(a, [-1])
	let strides = null;
	if (newshape.length == 1 && even_strides(a.strides, a.shape, a.ndim)) {
		strides = [a.strides[0]];
	} else if (newshape.length != 0) {
		a = array(a);
	}

	return new NDArray(newshape, a.data, a, strides, a.offset, a.itemsize);
}

let msg = await new Promise((resolve, reject) => {
	setTimeout(() => resolve('ok'), 1);
});

// console.log(msg);

// https://rob-blackbourn.github.io/blog/webassembly/wasm/array/arrays/javascript/c/2020/06/07/wasm-arrays.html
// https://nodejs.dev/en/learn/nodejs-with-webassembly/

tester
	.add(
		reshape,
		() => {
			let a = array([1, 2, 3, 4, 5]);
			// console.log('wtf');
			return reshape(a.get(slice('::-2')), -1);
		},
		() => array([5, 3, 1])
	)
	.add(
		reshape,
		() => {
			let a = array([1]);
			return reshape(a, []);
		},
		() => array(1)
	)
	.add(
		reshape,
		() => {
			let a = array(1);
			return reshape(a, 1);
		},
		() => array([1])
	)
	.add(
		reshape,
		() => {
			let a = array(1);
			return reshape(a, -1);
		},
		() => array([1])
	)
	.add(
		'reshape',
		() => {
			let a = asarray([
				[0, 1],
				[2, 3],
				[4, 5],
			]);

			return reshape(a, [2, 3]);
		},
		() => [
			[0, 1, 2],
			[3, 4, 5],
		]
	)
	.add(
		'reshape',
		() => {
			let a = asarray([[[[0, 1]]]]);
			return reshape(a, [2, -1]);
		},
		() => [[0], [1]]
	)
	.add(
		'reshape',
		() => {
			let a = asarray([[[[0, 1]]]]);
			return reshape(a, [2, -1]).base === a;
		},
		() => true
	)
	.add(
		'reshape',
		() => {
			let a = asarray([[[[0, 1]]]]).get(0);
			return reshape(a, [2, -1]).base === a;
		},
		() => false
	)
	.add(
		'reshape',
		() =>
			reshape(
				array([
					[1, 2, 3],
					[4, 5, 6],
				]),
				[-1]
			),
		() => array([1, 2, 3, 4, 5, 6])
	)
	.add(
		'reshape',
		() => {
			`
			b = np.arange(30)
			a = b.reshape((10, 3))[::2]
			c = a.reshape(a.shape)
			a, a.reshape((1, 1, 5, -1, 3)).base is b, a.base is b, a.reshape(-1).base is b, c is a, c.base is b
			`;
			let b = arange(30);
			let a = b.reshape([10, 3]).get(slice('::2'));
			let c = a.reshape(a.shape);
			return [
				a.toarray(),
				reshape(a, [1, 1, 5, -1, 3]).base === b,
				a.base === b,
				a.reshape(-1).base === b,
				c === a,
				c.base === b,
			];
		},
		() => [
			array([
				[0, 1, 2],
				[6, 7, 8],
				[12, 13, 14],
				[18, 19, 20],
				[24, 25, 26],
			]).toarray(),
			true,
			true,
			false,
			false,
			true,
		]
	);
