import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax, empty } from './core.mjs';

export function indices(dimensions, sparse = false) {
	let N = dimensions.length;
	let shape = Array(N).fill(1);

	let res;
	if (sparse) res = [];
	else res = empty([N, ...dimensions]);

	for (let i = 0; i < dimensions.length; i++) {
		let dim = dimensions[i];
		let idx = arange(dim).reshape([...shape.slice(0, i), dim, ...shape.slice(i + 1)]);
		if (sparse) res.push(idx);
		else res.set([i], idx);
	}

	return res;
}

tester
	.add(
		indices,
		() => indices([2, 3]),
		() =>
			array([
				[
					[0, 0, 0],
					[1, 1, 1],
				],
				[
					[0, 1, 2],
					[0, 1, 2],
				],
			])
	)
	.add(
		indices,
		() => indices([2, 3], true),
		() => [array([[0], [1]]), array([[0, 1, 2]])]
	);
