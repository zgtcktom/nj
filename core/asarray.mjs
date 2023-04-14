import { tester, NDArray, array } from './core.mjs';

/**
 *
 * @param {NDArray|Array} a
 * @returns {NDArray}
 */
export function asarray(a) {
	return a instanceof NDArray ? a : array(a);
}

tester
	.add(
		'asarray',
		() => {
			let a = array([
				[1, 2],
				[3, 4],
			]);
			return asarray(a) === a;
		},
		() => true
	)
	.add(
		'asarray',
		() =>
			asarray([
				[1, 2],
				[3, 4],
			]),
		() => [
			[1, 2],
			[3, 4],
		]
	);
