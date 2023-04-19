import {
	tester,
	arange,
	array,
	asarray,
	slice,
	normalize_axis_tuple,
	all,
	equal,
	random,
	diag,
	index_exp,
} from './core.mjs';

export function flip(a, axis = null) {
	a = asarray(a);
	let indexer;
	if (axis == null) {
		indexer = Array(a.ndim).fill(slice('::-1'));
	} else {
		axis = normalize_axis_tuple(axis, a.ndim);
		indexer = Array(a.ndim).fill(slice(':'));
		for (let ax of axis) {
			indexer[ax] = slice('::-1');
		}
	}
	return a.get(indexer);
}

export function fliplr(a) {
	a = asarray(a);
	if (a.ndim < 2) throw `Input must be >= 2-d.`;
	return a.get(index_exp(':', '::-1'));
}

export function flipud(a) {
	a = asarray(a);
	if (a.ndim < 1) throw `Input must be >= 1-d.`;
	return a.at(slice('::-1'));
}

tester
	.add(
		flip,
		() => {
			let A = arange(8).reshape([2, 2, 2]);
			return [A, flip(A, 0), flip(A, 1), flip(A), flip(A, [0, 2])];
		},
		() => [
			array([
				[
					[0, 1],
					[2, 3],
				],
				[
					[4, 5],
					[6, 7],
				],
			]),
			array([
				[
					[4, 5],
					[6, 7],
				],
				[
					[0, 1],
					[2, 3],
				],
			]),
			array([
				[
					[2, 3],
					[0, 1],
				],
				[
					[6, 7],
					[4, 5],
				],
			]),
			array([
				[
					[7, 6],
					[5, 4],
				],
				[
					[3, 2],
					[1, 0],
				],
			]),
			array([
				[
					[5, 4],
					[7, 6],
				],
				[
					[1, 0],
					[3, 2],
				],
			]),
		]
	)
	.add(
		flip,
		() => {
			let A = random.normal(0, 1, [3, 4, 5]);
			return all(equal(flip(A, 2), A.at(slice(':'), slice(':'), slice('::-1'), slice('...'))));
		},
		() => true
	);

tester
	.add(
		fliplr,
		() => fliplr(diag([1, 2, 3])),
		() =>
			array([
				[0, 0, 1],
				[0, 2, 0],
				[3, 0, 0],
			])
	)
	.add(
		fliplr,
		() => {
			let A = random.normal(0, 1, [2, 4, 5]);
			return all(equal(fliplr(A), A.at(slice(':'), slice('::-1'), slice('...'))));
		},
		() => true
	);

tester
	.add(
		flipud,
		() => flipud(diag([1, 2, 3])),
		() =>
			array([
				[0, 0, 3],
				[0, 2, 0],
				[1, 0, 0],
			])
	)
	.add(
		flipud,
		() => {
			let A = random.normal(0, 1, [2, 3, 5]);
			return all(equal(flipud(A), A.at(slice('::-1'), slice('...'))));
		},
		() => true
	)
	.add(
		flipud,
		() => flipud([1, 2]),
		() => array([2, 1])
	);
