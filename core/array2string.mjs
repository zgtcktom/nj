import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

function _format_function(value) {
	console.log(value);
}

function _formatArray(
	a,
	format_function,
	line_width,
	next_line_prefix,
	separator,
	edge_items,
	summary_insert,
	legacy
) {
	// translated by chatgpt magic
	// still need revising tho
	function recurser(index, hanging_indent, curr_width) {
		let axis = index.length;
		let axes_left = a.ndim - axis;

		if (axes_left === 0) {
			return format_function(a.get(index));
		}

		let next_hanging_indent = hanging_indent + ' ';
		let next_width;
		if (legacy <= 113) {
			next_width = curr_width;
		} else {
			next_width = curr_width - ']'.length;
		}

		let a_len = a.shape[axis];
		let show_summary = summary_insert && 2 * edge_items < a_len;
		let leading_items, trailing_items;

		if (show_summary) {
			leading_items = edge_items;
			trailing_items = edge_items;
		} else {
			leading_items = 0;
			trailing_items = a_len;
		}

		let s = '';

		if (axes_left === 1) {
			let elem_width = curr_width;
			if (legacy <= 113) elem_width -= separator.trimEnd().length;
			else elem_width -= Math.max(separator.trimEnd().length, ']'.length);

			let line = hanging_indent;
			for (let i = 0; i < leading_items; i++) {
				let word = recurser([...index, i], next_hanging_indent, next_width);
				[s, line] = _extendLine_pretty(s, line, word, elem_width, hanging_indent, legacy);
				line += separator;
			}

			if (show_summary) {
				[s, line] = _extendLine(s, line, summary_insert, elem_width, hanging_indent, legacy);
				if (legacy <= 113) line += ', ';
				else line += separator;
			}

			for (let i = trailing_items; i > 1; i--) {
				let word = recurser([...index, -i], next_hanging_indent, next_width);
				[s, line] = _extendLine_pretty(s, line, word, elem_width, hanging_indent, legacy);
				line += separator;
			}

			if (legacy <= 113) elem_width = curr_width;
			let word = recurser([...index, -1], next_hanging_indent, next_width);
			[s, line] = _extendLine_pretty(s, line, word, elem_width, hanging_indent, legacy);

			s += line;
		} else {
			s = '';
			let line_sep = separator.trimEnd() + '\n'.repeat(axes_left - 1);

			for (let i = 0; i < leading_items; i++) {
				let nested = recurser([...index, i], next_hanging_indent, next_width);
				s += hanging_indent + nested + line_sep;
			}

			if (show_summary) {
				if (legacy <= 113) s += hanging_indent + summary_insert + ', \n';
				else s += hanging_indent + summary_insert + line_sep;
			}

			for (let i = trailing_items; i > 1; i--) {
				let nested = recurser([...index, -i], next_hanging_indent, next_width);
				s += hanging_indent + nested + line_sep;
			}

			let nested = recurser([...index, -i], next_hanging_indent, next_width);
			s += hanging_indent + nested;
		}

		s = '[' + s.slice(hanging_indent.length) + ']';
		return s;
	}

	try {
		return recurser([], next_line_prefix, line_width);
	} finally {
		recurser = null;
	}
}

function _array2string(a, options, separator = ' ', prefix = '') {
	let data = asarray(a);
	if (a.ndim == 0) a = data;

	let summary_insert;
	if (a.size > options['threshold']) {
		summary_insert = '...';
		data = _leading_trailing(data, options['edgeitems']);
	} else {
		summary_insert = '';
	}

	next_line_prefix = ' ';
	next_line_prefix += ' '.repeat(prefix.length);

	let lst = _formatArray(
		a,
		_format_function,
		options['linewidth'],
		next_line_prefix,
		separator,
		options['edgeitems'],
		summary_insert,
		options['legacy']
	);
	return lst;
}

tester
	.add(
		tester,
		() => 0,
		() => 1
	)
	.add(
		tester,
		() => 0,
		() => 1
	)
	.add(
		tester,
		() => 0,
		() => 1
	);
