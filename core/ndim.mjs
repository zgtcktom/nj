import { asarray, isscalar, tester } from './core.mjs';

export function ndim(a) {
	return a == null || isscalar(a) ? 0 : asarray(a).ndim;
}

tester
	.add(
		'ndim',
		() =>
			ndim([
				[1, 2, 3],
				[4, 5, 6],
			]),
		() => 2
	)
	.add(
		'ndim',
		() =>
			ndim(
				asarray([
					[1, 2, 3],
					[4, 5, 6],
				])
			),
		() => 2
	)
	.add(
		'ndim',
		() => ndim(1),
		() => 0
	)
	.add(
		'ndim',
		() => ndim(null),
		() => 0
	);
