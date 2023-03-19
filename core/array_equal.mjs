import { all, array, asarray, broadcastable, equal, tester, _wrap_map_binary } from './core.mjs';

export function shallow_array_equal(a, b) {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}

const equal_nan_map = _wrap_map_binary(
	'nan_equal',
	(x1, x2) => x1 == x2 || (Number.isNaN(x1) && Number.isNaN(x2))
);

export function array_equal(a1, a2, equal_nan = false) {
	a1 = asarray(a1);
	a2 = asarray(a2);
	if (!shallow_array_equal(a1.shape, a2.shape)) return false;
	if (equal_nan) return all(equal_nan_map(a1, a2));
	return all(equal(a1, a2));
}

export function array_equiv(a1, a2) {
	a1 = asarray(a1);
	a2 = asarray(a2);
	if (!broadcastable(a1.shape, a2.shape)) return false;
	return all(equal(a1, a2));
}

tester
	.add(
		array_equal,
		() => array_equal([1, 2], [1, 2]),
		() => true
	)
	.add(
		array_equal,
		() => array_equal(array([1, 2]), array([1, 2])),
		() => true
	)
	.add(
		array_equal,
		() => array_equal([1, 2], [1, 2, 3]),
		() => false
	)
	.add(
		array_equal,
		() => array_equal([1, 2], [1, 4]),
		() => false
	)
	.add(
		array_equal,
		() => {
			let a = array([1, NaN]);
			return array_equal(a, a);
		},
		() => false
	)
	.add(
		array_equal,
		() => {
			let a = array([1, NaN]);
			return array_equal(a, a, true);
		},
		() => true
	);

tester
	.add(
		array_equiv,
		() => array_equiv([1, 2], [1, 2]),
		() => true
	)
	.add(
		array_equiv,
		() => array_equiv([1, 2], [1, 3]),
		() => false
	)
	.add(
		array_equiv,
		() =>
			array_equiv(
				[1, 2],
				[
					[1, 2],
					[1, 2],
				]
			),
		() => true
	)
	.add(
		array_equiv,
		() =>
			array_equiv(
				[1, 2],
				[
					[1, 2, 1, 2],
					[1, 2, 1, 2],
				]
			),
		() => false
	)
	.add(
		array_equiv,
		() =>
			array_equiv(
				[1, 2],
				[
					[1, 2],
					[1, 3],
				]
			),
		() => false
	);
