import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {number} reps
 * @returns {NDArray}
 */
export function tile(a, reps) {
	if (typeof reps == 'number') reps = [reps];
	let d = reps.length;

	if (reps.every(x => x == 1) && a instanceof NDArray) {
		return array(a, null, true, d);
	}
	let c = array(a, null, false, d);
	if (d < c.ndim) {
		reps = [...Array(c.ndim - d).fill(1), ...reps];
	}
	let outshape = c.shape.map((s, i) => s * reps[i]);
	let n = c.size;
	if (n > 0) {
		let { ndim, shape } = c;
		for (let i = 0; i < ndim; i++) {
			let dim_in = shape[i];
			let nrep = reps[i];
			if (nrep != 1) c = c.reshape(-1, n).repeat(nrep, 0);
			n = (n / dim_in) | 0;
		}
	}

	return c.reshape(outshape);
}

tester
	.add(
		tile,
		() => {
			let a = array([0, 1, 2]);
			return [tile(a, 2), tile(a, [2, 2]), tile(a, [2, 1, 2])];
		},
		() => [
			array([0, 1, 2, 0, 1, 2]),
			array([
				[0, 1, 2, 0, 1, 2],
				[0, 1, 2, 0, 1, 2],
			]),
			array([[[0, 1, 2, 0, 1, 2]], [[0, 1, 2, 0, 1, 2]]]),
		]
	)
	.add(
		tile,
		() => {
			let b = array([
				[1, 2],

				[3, 4],
			]);
			return [tile(b, 2), tile(b, [2, 1])];
		},
		() => [
			array([
				[1, 2, 1, 2],
				[3, 4, 3, 4],
			]),
			array([
				[1, 2],
				[3, 4],
				[1, 2],
				[3, 4],
			]),
		]
	)
	.add(
		tile,
		() => {
			let c = array([1, 2, 3, 4]);
			return tile(c, [4, 1]);
		},
		() =>
			array([
				[1, 2, 3, 4],
				[1, 2, 3, 4],
				[1, 2, 3, 4],
				[1, 2, 3, 4],
			])
	);
