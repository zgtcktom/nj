import { tester } from './core.mjs';

/**
 * @param  {...number[]} shapes
 * @returns {number[]}
 */
export function broadcast_shapes(...shapes) {
	let ndim = 0;
	for (let shape of shapes) ndim = Math.max(ndim, shape.length);
	if (ndim == 0) return [];

	let broadcasted = Array(ndim).fill(1);
	for (let shape of shapes) {
		for (let i = shape.length - 1, j = ndim - 1; i >= 0; i--, j--) {
			let dim = shape[i];
			if (dim == 1) continue;
			if (broadcasted[j] == 1) broadcasted[j] = dim;
			else if (broadcasted[j] != dim) {
				throw new Error('shape mismatch');
			}
		}
	}
	return broadcasted;
}

tester.add(
	'broadcast_shapes',
	() => broadcast_shapes([1, 2], [3, 1], [3, 2]),
	() => [3, 2]
);
tester.add(
	'broadcast_shapes',
	() => broadcast_shapes([6, 7], [5, 6, 1], [7], [5, 1, 7]),
	() => [5, 6, 7]
);
