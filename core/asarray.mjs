import { tester, NDArray, array } from './core.mjs';

export function asarray(a) {
	if (a instanceof NDArray) return a;
	return array(a);
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
