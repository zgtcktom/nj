import { asarray, shape, tester } from './core.mjs';

/**
 * Return the ndim of an array without invoking array creation.
 * @param {any} a
 * @returns {number}
 */
export function ndim(a) {
	if (a == null || typeof a != 'object') return 0;
	if (a.ndim != undefined) return a.ndim;

	return shape(a).length;
}

export const _ndim = ndim;

process.env.PRODUCTION ||
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
