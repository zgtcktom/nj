import { asarray, nonzero, take, tester, array } from './core.mjs';

export function compress(condition, a, axis = null, out = null) {
	condition = asarray(condition);
	if (condition.ndim != 1) throw 'condition must be a 1-d array';
	return take(a, nonzero(condition)[0], axis, out);
}

tester
	.add(
		compress,
		() => {
			return compress(
				[0, 1],
				array([
					[1, 2],
					[3, 4],
					[5, 6],
				]),
				0
			);
		},
		() => array([[3, 4]])
	)
	.add(
		compress,
		() => {
			return compress(
				[false, true, true],
				array([
					[1, 2],
					[3, 4],
					[5, 6],
				]),
				0
			);
		},
		() =>
			array([
				[3, 4],
				[5, 6],
			])
	)
	.add(
		compress,
		() => {
			return compress(
				[false, true],
				array([
					[1, 2],
					[3, 4],
					[5, 6],
				]),
				1
			);
		},
		() => array([[2], [4], [6]])
	)
	.add(
		compress,
		() => {
			return compress(
				[false, true],
				array([
					[1, 2],
					[3, 4],
					[5, 6],
				])
			);
		},
		() => array([2])
	);
