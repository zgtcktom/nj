import { tester, NDArray, array, Dtype } from './core.mjs';

/**
 * @param {NDArray} a array-like
 * @param {Dtype} [dtype]
 * @returns {NDArray}
 */
export function asarray(a, dtype = undefined) {
	if (a instanceof NDArray) {
		if (dtype == undefined) return a;
		return a.astype(dtype, false);
	}
	return array(a, dtype);
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
