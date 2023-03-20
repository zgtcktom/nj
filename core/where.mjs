import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	nonzero,
	broadcast,
	less,
	multiply,
	empty_like,
	empty,
	ogrid,
	add,
} from './core.mjs';

export function where(condition, x = null, y = null) {
	if (x == null && y == null) return nonzero(condition);
	let b = broadcast(condition, x, y);
	let out = empty(b.shape);
	let i = 0;
	for (let [condition, x, y] of b) {
		out.data[i++] = condition ? x : y;
	}
	return out;
}

tester
	.add(
		where,
		() => {
			let a = arange(10);
			return where(less(a, 5), a, multiply(10, a));
		},
		() => array([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])
	)
	.add(
		where,
		() =>
			where(
				[
					[true, false],
					[true, true],
				],
				[
					[1, 2],
					[3, 4],
				],
				[
					[9, 8],
					[7, 6],
				]
			),
		() =>
			array([
				[1, 8],
				[3, 4],
			])
	)
	.add(
		where,
		() => {
			let [x, y] = ogrid(slice(':3'), slice(null, 4));
			return where(less(x, y), x, add(10, y));
		},
		() =>
			array([
				[10, 0, 0, 0],
				[10, 11, 1, 1],
				[10, 11, 12, 2],
			])
	)
	.add(
		where,
		() => {
			let a = array([
				[0, 1, 2],
				[0, 2, 4],
				[0, 3, 6],
			]);
			return where(less(a, 4), a, -1);
		},
		() =>
			array([
				[0, 1, 2],
				[0, 2, -1],
				[0, 3, -1],
			])
	);
