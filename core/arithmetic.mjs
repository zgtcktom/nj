import { tester, _wrap_map, arange, array } from './core.mjs';

export const add = _wrap_map('add', (x1, x2) => x1 + x2, 2);

export const subtract = _wrap_map('subtract', (x1, x2) => x1 - x2, 2);

export const multiply = _wrap_map('multiply', (x1, x2) => x1 * x2, 2);

export const divide = _wrap_map('divide', (x1, x2) => x1 / x2, 2);

tester.add(
	add,
	() => add(arange(9.0).reshape([3, 3]), arange(3.0)),
	() =>
		array([
			[0, 2, 4],
			[3, 5, 7],
			[6, 8, 10],
		])
);

tester
	.add(
		subtract,
		() => subtract(1.0, 4.0),
		() => -3.0
	)
	.add(
		subtract,
		() => subtract(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[0, 0, 0],
				[3, 3, 3],
				[6, 6, 6],
			])
	);

tester
	.add(
		multiply,
		() => multiply(2.0, 4.0),
		() => 8.0
	)
	.add(
		subtract,
		() => multiply(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[0, 1, 4],
				[0, 4, 10],
				[0, 7, 16],
			])
	);

tester
	.add(
		divide,
		() => divide(2.0, 4.0),
		() => 0.5
	)
	.add(
		divide,
		() => divide(arange(9.0).reshape([3, 3]), arange(3.0)),
		() =>
			array([
				[NaN, 1, 1],
				[Infinity, 4, 2.5],
				[Infinity, 7, 4],
			])
	);

console.log(divide(arange(9.0).reshape([3, 3]), arange(3.0)).toarray());
