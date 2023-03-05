import { array, asarray, NDArray, ndenumerate, tester } from './core.mjs';

export function argwhere(a) {
	a = asarray(a);
	let length = 0;
	let data = [];
	for (let [index, value] of ndenumerate(a)) {
		if (!value) continue;
		data.push(...index);
		length++;
	}
	return new NDArray([length, a.ndim], data);
}

tester
	.add(
		argwhere,
		() => argwhere(55).shape,
		() => [1, 0]
	)
	.add(
		argwhere,
		() =>
			argwhere([
				[0 > 1, 1 > 1, 2 > 1],
				[3 > 1, 4 > 1, 5 > 1],
			]),
		() =>
			array([
				[0, 2],
				[1, 0],
				[1, 1],
				[1, 2],
			])
	);
