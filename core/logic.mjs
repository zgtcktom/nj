import { array, tester, _wrap_map, _wrap_reduce } from './core.mjs';

export const all = _wrap_reduce('all', (accum, value) => accum && !!value, 1, true);

export const any = _wrap_reduce('any', (accum, value) => accum || !!value, 1, false);

export const isfinite = _wrap_map('isfinite', Number.isFinite, 1);

export const isinf = _wrap_map(
	'isinf',
	n => n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY,
	1
);

export const isna = _wrap_map('isinf', Number.isNaN, 1);

export const isneginf = _wrap_map('isinf', n => n == Number.NEGATIVE_INFINITY, 1);

export const isposinf = _wrap_map('isinf', n => n == Number.POSITIVE_INFINITY, 1);

tester
	.add(
		all,
		() =>
			// noted that !!all(false) is true
			all([
				[true, false],
				[true, true],
			]) == false,
		() => true
	)
	.add(
		all,
		() =>
			all(
				[
					[true, false],
					[true, true],
				],
				0
			),
		() => array([true, false])
	)
	.add(
		all,
		() => all([-1, 4, 5]),
		() => true
	)
	.add(
		all,
		() => {
			let o = array(false);
			return [all([-1, 4, 5], null, o) === o, o];
		},
		() => [true, array(true)]
	);

tester
	.add(
		any,
		() =>
			any([
				[true, false],
				[true, true],
			]),
		() => true
	)
	.add(
		any,
		() =>
			any(
				[
					[true, false],
					[false, false],
				],
				0
			),
		() => array([true, false])
	)
	.add(
		any,
		() => any([-1, 0, 5]),
		() => true
	)
	.add(
		any,
		// > np.any(np.nan)
		// True
		// Nope
		() => any(NaN),
		() => false
	);
