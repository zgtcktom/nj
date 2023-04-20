import { arange, array, asarray, greater, NDArray, ndenumerate, tester } from './core.mjs';

/**
 * @param {NDArray} a
 * @returns {NDArray}
 */
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
		() => argwhere(greater(arange(6).reshape(2, 3), 1)),
		() =>
			array([
				[0, 2],
				[1, 0],
				[1, 1],
				[1, 2],
			])
	);

// tester.onload(() => {
// 	console.log(argwhere(greater(arange(6).reshape(2, 3), 1)));
// });
