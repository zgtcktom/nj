import { tester, asarray, NDArray, array, ascontiguousarray, arange, slice, ndindex } from './core.mjs';

export function even_strides(strides, shape, ndim) {
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

	// how can it tell if the strides allows a view instead of a copy?
	// no .ravel until this is resolved
	// even_strides() should do the trick
	if (!even_strides(a.strides, a.shape, a.ndim)) a = array(a);

	return new NDArray(newshape, a.data, a, null, a.offset, a.itemsize);
}

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
	);
