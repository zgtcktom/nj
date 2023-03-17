import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	normalize_axis_index,
	ravel,
	ndindex,
	empty,
	empty_like,
} from './core.mjs';

export function argsort(a, axis = -1, key = null, kind = null) {
	a = asarray(a);
	if (axis == null) {
		a = ravel(a);
		axis = 0;
	} else {
		axis = normalize_axis_index(axis, a.ndim);
	}

	let out = empty_like(a);

	let Ni = a.shape.slice(0, axis);
	let M = a.shape[axis];
	let Nk = a.shape.slice(axis + 1);

	let Si = a.strides.slice(0, axis);
	let T = a.strides[axis];
	let Sk = a.strides.slice(axis + 1);

	let _Si = out.strides.slice(0, axis);
	let _T = out.strides[axis];
	let _Sk = out.strides.slice(axis + 1);

	let tmp = Array(M);
	let indices = Array(M);
	let cmp;
	if (key == null) {
		cmp = (i, j) => tmp[i] - tmp[j];
	} else {
		cmp = (i, j) => key(tmp[i]) - key(tmp[j]);
	}

	for (let ii of ndindex(Ni)) {
		for (let kk of ndindex(Nk)) {
			let { offset } = a;
			let { offset: _offset } = out;
			for (let i = 0; i < Si.length; i++) {
				offset += ii[i] * Si[i];
				_offset += ii[i] * _Si[i];
			}
			for (let i = 0; i < Sk.length; i++) {
				offset += kk[i] * Sk[i];
				_offset += kk[i] * _Sk[i];
			}
			for (let i = 0; i < M; i++) {
				tmp[i] = a.data[offset + i * T];
				indices[i] = i;
			}
			indices.sort(cmp);
			// console.log(ii, M, kk, indices, offset);
			for (let i = 0; i < M; i++) {
				out.data[_offset + i * _T] = indices[i];
			}
		}
	}

	return out;
}

argsort(
	array([
		[
			[0, 3],
			[2, 2],
			[2, 2],
		],
		[
			[8, 5],
			[4, 1],
			[6, -2],
		],
	]),
	0
);

tester
	.add(
		argsort,
		() => argsort([3, 1, 2]),
		() => array([1, 2, 0])
	)
	.add(
		argsort,
		() =>
			argsort(
				array([
					[0, 3],
					[2, 2],
				]),
				0
			),
		() =>
			array([
				[0, 1],
				[1, 0],
			])
	)
	.add(
		argsort,
		() =>
			argsort(
				array([
					[0, 3],
					[2, 2],
				]),
				1
			),
		() =>
			array([
				[0, 1],
				[0, 1],
			])
	)
	.add(
		argsort,
		() =>
			argsort(
				array([
					[
						[0, 3],
						[2, 2],
						[2, 2],
					],
					[
						[8, 5],
						[4, 1],
						[6, -2],
					],
				]),
				0
			),
		() =>
			array([
				[
					[0, 0],
					[0, 1],
					[0, 1],
				],

				[
					[1, 1],
					[1, 0],
					[1, 0],
				],
			])
	)
	.add(
		argsort,
		() =>
			argsort(
				array([
					[
						[0, 3],
						[2, 2],
						[2, 2],
					],
					[
						[8, 5],
						[4, 1],
						[6, -2],
					],
				]),
				1
			),
		() =>
			array([
				[
					[0, 1],
					[1, 2],
					[2, 0],
				],

				[
					[1, 2],
					[2, 1],
					[0, 0],
				],
			])
	)
	.add(
		argsort,
		() =>
			argsort(
				array([
					[
						[0, 3],
						[2, 2],
						[2, 2],
					],
					[
						[8, 5],
						[4, 1],
						[6, -2],
					],
				]),
				2
			),
		() =>
			array([
				[
					[0, 1],
					[0, 1],
					[0, 1],
				],

				[
					[1, 0],
					[1, 0],
					[1, 0],
				],
			])
	);
