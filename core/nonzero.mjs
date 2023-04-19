import { NDArray, array, atleast_1d, ndenumerate, slice, tester } from './core.mjs';

/** @return {NDArray[]} */
export function nonzero(a) {
	a = atleast_1d(a);
	let { ndim } = a;
	let indices = [];
	for (let i = 0; i < ndim; i++) indices.push([]);
	for (let [index, value] of ndenumerate(a)) {
		if (value) {
			for (let i = 0; i < ndim; i++) {
				indices[i].push(index[i]);
			}
		}
	}
	for (let i = 0; i < ndim; i++) indices[i] = array(indices[i]);
	return indices;
}

tester
	.add(
		nonzero,
		() => {
			let x;
			x = array([
				[3, 0, 0],
				[0, 4, 0],
				[5, 6, 0],
			]).at(slice('...'), null);
			return nonzero(x);
		},
		() => [array([0, 1, 2, 2]), array([0, 1, 0, 1]), array([0, 0, 0, 0])]
	)
	.add(
		nonzero,
		() => {
			return nonzero(
				array([
					[false, false, false],
					[true, true, true],
					[true, true, true],
				])
			);
		},
		() => [array([1, 1, 1, 2, 2, 2]), array([0, 1, 2, 0, 1, 2])]
	)
	.add(
		nonzero,
		() => {
			return nonzero(55);
		},
		() => array([0])
	);
