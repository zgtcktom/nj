import { asarray, tester } from './core.mjs';

export function ndim(a) {
	if (a == undefined) return 0;
	switch (typeof a) {
		case 'boolean':
		case 'function':
		case 'number':
		case 'string':
			return 0;
	}
	return asarray(a).ndim;
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
	);
