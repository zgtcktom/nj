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
	if (a.base == undefined) {
		return new NDArray(newshape, a.data, a);
	}

	if (true || newshape.length >= a.shape.length) {
		// check (1, 1, x, -1, y, 1) to (x, y)
		// or backward
		let compatible = true;
		let j = 0;
		// console.log(0, newshape, a.shape);
		for (let i = 0; i < newshape.length; i++) {
			// console.log(1, newshape, a.shape, newshape[i], a.shape[j]);
			if (newshape[i] == 1) continue;
			for (; j < a.shape.length && a.shape[j] == 1; j++);
			// console.log(2, newshape, a.shape, newshape[i], a.shape[j]);
			if (j >= a.shape.length || newshape[i] != a.shape[j]) {
				compatible = false;
				break;
			}
			j++;
		}
		if (j != a.shape.length) compatible = false;
		// console.log(3, compatible);
		if (compatible) {
			return new NDArray(newshape, a.data, a, null, a.offset, a.itemsize);
		}
	}

	// for reshape(a, [-1])
	if (!even_strides(a.strides, a.shape, a.ndim)) a = array(a);

	return new NDArray(newshape, a.data, a, null, a.offset, a.itemsize);
}

let msg = await new Promise((resolve, reject) => {
	setTimeout(() => resolve('ok'), 1);
});

console.log(msg);

// https://rob-blackbourn.github.io/blog/webassembly/wasm/array/arrays/javascript/c/2020/06/07/wasm-arrays.html
// https://nodejs.dev/en/learn/nodejs-with-webassembly/

tester
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
