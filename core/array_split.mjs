import { tester, arange, array, slice, normalize_axis_index, swapaxes, NDArray } from './core.mjs';

/**
 * @param {NDArray} a
 * @param {number|number[]} indices_or_sections
 * @param {number} [axis]
 * @returns {NDArray}
 */
export function array_split(a, indices_or_sections, axis = 0) {
	let n_total, n_sections, div_points;
	if (a.shape != null) {
		axis = normalize_axis_index(axis, a.ndim);
		n_total = a.shape[axis];
	} else {
		n_total = a.length;
	}

	if (typeof indices_or_sections == 'number') {
		n_sections = indices_or_sections | 0;
		if (n_sections <= 0) {
			throw `number sections must be larger than 0.`;
		}
		let n_each_section = (n_total / n_sections) | 0;
		let extras = n_total % n_sections;
		let section_sizes = [
			0,
			...Array(extras).fill(n_each_section + 1),
			...Array(n_sections - extras).fill(n_each_section),
		];

		div_points = array(section_sizes).cumsum().array();
	} else {
		n_sections = indices_or_sections.length + 1;
		div_points = [0, ...indices_or_sections, n_total];
	}

	let sub_arys = [];
	let sary = swapaxes(a, axis, 0);
	for (let i = 0; i < n_sections; i++) {
		let st = div_points[i];
		let end = div_points[i + 1];
		sub_arys.push(swapaxes(sary.at(slice(st, end)), axis, 0));
	}

	return sub_arys;
}

process.env.PRODUCTION ||
	tester
		.add(
			array_split,
			() => array_split(arange(8.0), 3),
			() => [array([0, 1, 2]), array([3, 4, 5]), array([6, 7])]
		)
		.add(
			array_split,
			() => array_split(arange(9), 4),
			() => [array([0, 1, 2]), array([3, 4]), array([5, 6]), array([7, 8])]
		);
