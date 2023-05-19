import {
	tester,
	arange,
	array,
	normalize_axis_index,
	asarray,
	array_split,
	ndim,
	NDArray,
	empty,
} from './core.mjs';

/**
 *
 * @param {NDArray} ary
 * @param {NDArray} indices_or_sections
 * @param {number} [axis]
 * @returns {NDArray}
 */
export function split(ary, indices_or_sections, axis = 0) {
	ary = asarray(ary);
	axis = normalize_axis_index(axis, ary.ndim);
	if (indices_or_sections.shape != null) indices_or_sections = indices_or_sections.array();

	if (indices_or_sections.length == undefined) {
		let sections = indices_or_sections;
		let N = ary.shape[axis];
		if (N % sections) throw `array split does not result in an equal division`;
	}

	return array_split(ary, indices_or_sections, axis);
}

export function dsplit(ary, indices_or_sections) {
	if (ndim(ary) < 3) throw `dsplit only works on arrays of 3 or more dimensions`;
	return split(ary, indices_or_sections, 2);
}

export function hsplit(ary, indices_or_sections) {
	if (ndim(ary) == 0) throw `hsplit only works on arrays of 1 or more dimensions`;
	return split(ary, indices_or_sections, ndim(ary) > 1 ? 1 : 0);
}

export function vsplit(ary, indices_or_sections) {
	if (ndim(ary) < 2) throw `vsplit only works on arrays of 2 or more dimensions`;
	return split(ary, indices_or_sections, 0);
}

tester
	.add(
		split,
		() => split(arange(9.0), 3),
		() => [array([0, 1, 2]), array([3, 4, 5]), array([6, 7, 8])]
	)
	.add(
		split,
		() => split(arange(8.0), [3, 5, 6, 10]),
		() => [array([0, 1, 2]), array([3, 4]), array([5]), array([6, 7]), array([])]
	);

tester
	.add(
		dsplit,
		() => dsplit(arange(16.0).reshape(2, 2, 4), 2),
		() => [
			array([
				[
					[0, 1],
					[4, 5],
				],
				[
					[8, 9],
					[12, 13],
				],
			]),
			array([
				[
					[2, 3],
					[6, 7],
				],
				[
					[10, 11],
					[14, 15],
				],
			]),
		]
	)
	.add(
		dsplit,
		() => dsplit(arange(16.0).reshape(2, 2, 4), array([3, 6])),
		() => [
			array([
				[
					[0, 1, 2],
					[4, 5, 6],
				],
				[
					[8, 9, 10],
					[12, 13, 14],
				],
			]),
			array([
				[[3], [7]],
				[[11], [15]],
			]),
			empty([2, 2, 0]),
		]
	);

tester
	.add(
		hsplit,
		() => hsplit(arange(16.0).reshape(4, 4), 2),
		() => [
			array([
				[0, 1],
				[4, 5],
				[8, 9],
				[12, 13],
			]),
			array([
				[2, 3],
				[6, 7],
				[10, 11],
				[14, 15],
			]),
		]
	)
	.add(
		hsplit,
		() => hsplit(arange(16.0).reshape(4, 4), array([3, 6])),
		() => [
			array([
				[0, 1, 2],
				[4, 5, 6],
				[8, 9, 10],
				[12, 13, 14],
			]),
			array([[3], [7], [11], [15]]),
			empty([4, 0]),
		]
	)
	.add(
		hsplit,
		() => hsplit(arange(8.0).reshape(2, 2, 2), 2),
		() => [array([[[0, 1]], [[4, 5]]]), array([[[2, 3]], [[6, 7]]])]
	)
	.add(
		hsplit,
		() => hsplit(array([0, 1, 2, 3, 4, 5]), 2),
		() => [array([0, 1, 2]), array([3, 4, 5])]
	);

tester
	.add(
		vsplit,
		() => vsplit(arange(16.0).reshape(4, 4), 2),
		() => [
			array([
				[0, 1, 2, 3],
				[4, 5, 6, 7],
			]),
			array([
				[8, 9, 10, 11],
				[12, 13, 14, 15],
			]),
		]
	)
	.add(
		vsplit,
		() => vsplit(arange(16.0).reshape(4, 4), array([3, 6])),
		() => [
			array([
				[0, 1, 2, 3],
				[4, 5, 6, 7],
				[8, 9, 10, 11],
			]),
			array([[12, 13, 14, 15]]),
			empty([0, 4]),
		]
	)
	.add(
		vsplit,
		() => vsplit(arange(8.0).reshape(2, 2, 2), 2),
		() => [
			array([
				[
					[0, 1],
					[2, 3],
				],
			]),
			array([
				[
					[4, 5],
					[6, 7],
				],
			]),
		]
	);
