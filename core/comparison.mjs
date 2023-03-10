import { arange, array, ones, tester, _wrap_map } from './core.mjs';

export const equal = _wrap_map('equal', (x1, x2) => x1 == x2, 2);

export const not_equal = _wrap_map('not_equal', (x1, x2) => x1 != x2, 2);

export const less_equal = _wrap_map('less_equal', (x1, x2) => x1 <= x2, 2);

export const less = _wrap_map('less_equal', (x1, x2) => x1 < x2, 2);

export const greater_equal = _wrap_map('less_equal', (x1, x2) => x1 >= x2, 2);

export const greater = _wrap_map('less_equal', (x1, x2) => x1 > x2, 2);

tester
	.add(
		equal,
		() => equal([0, 1, 3], arange(3)),
		() => array([true, true, false])
	)
	.add(
		equal,
		() => equal(1, ones(1)),
		() => array([true])
	)
	.add(
		equal,
		() => equal(array([2, 4, 6]), array([2, 4, 2])),
		() => array([true, true, false])
	);

tester
	.add(
		not_equal,
		() => not_equal([1, 2], [1, 3]),
		() => array([false, true])
	)
	.add(
		not_equal,
		() =>
			not_equal(
				[1, 2],
				[
					[1, 3],
					[1, 4],
				]
			),
		() =>
			array([
				[false, true],
				[false, true],
			])
	);

tester.add(
	less_equal,
	() => less_equal([4, 2, 1], [2, 2, 2]),
	() => array([false, true, true])
);

tester.add(
	less,
	() => less([1, 2], [2, 2]),
	() => array([true, false])
);

tester.add(
	greater_equal,
	() => greater_equal([4, 2, 1], [2, 2, 2]),
	() => array([true, true, false])
);

tester.add(
	greater,
	() => greater([4, 2], [2, 2]),
	() => array([true, false])
);
