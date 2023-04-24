import { tester, asarray, NDArray, array, arange, slice, get_size, tuple_ } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {number[]} newshape
 * @returns {NDArray}
 */
export function reshape(a, newshape) {
	a = asarray(a);
	newshape = tuple_(newshape);

	let unknown = -1;
	let rest = 1;
	for (let i = 0; i < newshape.length; i++) {
		if (newshape[i] == -1) {
			if (unknown != -1) {
				throw new Error('can only specify one unknown dimension');
			}
			unknown = i;
		} else {
			rest *= newshape[i];
		}
	}
	if (unknown != -1) {
		if (a.size % rest != 0) {
			throw new Error(`cannot reshape array of size ${a.size} into shape [${newshape.join(', ')}]`);
		}
		newshape[unknown] = rest == 0 ? 0 : a.size / rest;
	}
	if (a.size != get_size(newshape)) {
		throw new Error(`cannot reshape array of size ${a.size} into shape [${newshape.join(', ')}]`);
	}
	if (a.base == undefined) {
		return new NDArray(newshape, a.data, a.dtype, a);
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
				strides.push(j < a.shape.length ? a.strides[j++] : 1);
			}
			// console.log(strides);
			// console.log('reshape', newshape, strides, a.strides, a.shape);
			return new NDArray(newshape, a.data, a.dtype, a, strides, a.offset, a.itemsize);
		}
	}

	// for reshape(a, [-1])
	let strides = null;

	if (newshape.length == 1 && even_strides(a.shape, a.strides, a.ndim)) {
		strides = [a.strides[0]];
	} else if (newshape.length != 0) {
		a = array(a);
	}

	let { data, dtype, offset, itemsize } = a;

	return new NDArray(newshape, data, dtype, a, strides, offset, itemsize);
}

/**
 * Determines whether the array can `.reshape(-1)` without creating a copy.
 *
 * i.e.: can iterate using a constant stride (without using a `[i, j, k]` indices)
 * @param {number[]} shape
 * @param {number[]} strides
 * @param {number} ndim
 * @returns {boolean}
 * @ignore
 */
function even_strides(shape, strides, ndim) {
	let lastindex;
	for (let i = ndim - 1; i > 0; i--) {
		if (shape[i] > 1) {
			lastindex = i;
			break;
		}
	}
	for (let i = lastindex - 1; i >= 0; i--) {
		if (shape[i] > 1) {
			if (strides[i] != strides[lastindex] * shape[lastindex]) return false;
			lastindex = i;
		}
	}
	return true;
}

tester
	.add(
		reshape,
		() => {
			let a = array([1, 2, 3, 4, 5]);
			return reshape(a.at(slice('::-2')), -1);
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
			let a = asarray([[[[0, 1]]]]).at(0);
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
			let a = b.reshape([10, 3]).at(slice('::2'));
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
