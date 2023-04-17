import {
	tester,
	arange,
	array,
	asarray,
	NDArray,
	index_exp,
	concatenate,
	Slice,
	shallow_array_equal,
} from './core.mjs';

/**
 * @typedef {Object} FormatOptions
 * @property {number} edgeitems
 * @property {number} threshold
 * @property {number|undefined} precision
 * @property {number} linewidth
 * @property {number|null} formatter
 * @property {string} separator
 * @property {string} prefix
 */

/** @type {FormatOptions} */
let _formatOptions = {
	edgeitems: 3,
	threshold: 1000,
	linewidth: 75,
	precision: undefined,
	formatter: null,
	separator: ' ',
	prefix: '',
};

/**
 *
 * @param {NDArray} a
 * @param {number} edgeitems
 * @param {(number|Slice)[]} index
 * @returns {NDArray}
 */
function _leading_trailing(a, edgeitems, index = []) {
	let axis = index.length;
	if (axis == a.ndim) return a.get(...index);

	if (a.shape[axis] > 2 * edgeitems) {
		let leftIndex = index.concat(index_exp([, edgeitems]));
		let rightIndex = index.concat(index_exp([-edgeitems]));
		return concatenate(
			[_leading_trailing(a, edgeitems, leftIndex), _leading_trailing(a, edgeitems, rightIndex)],
			axis
		);
	}

	return _leading_trailing(a, edgeitems, index.concat(index_exp(':')));
}

class Callable {
	get __call__() {
		return this.call.bind(null, this);
	}
}

class IntegerFormat extends Callable {
	/**
	 *
	 * @param {NDArray} data
	 */
	constructor(data) {
		super();
		this.padLeft = data.size > 0 ? Math.max(String(data.max()).length, String(data.min()).length) : 0;
	}

	/**
	 *
	 * @param {{padLeft: number}} thisArg
	 * @param {number} x
	 */
	call({ padLeft } = this, x) {
		let str = String(x);
		return ' '.repeat(padLeft - str.length) + str;
	}
}

/**
 *
 * @param {number} x
 * @param {number|undefined} precision
 * @returns {string}
 */
function scientific(x, precision) {
	return x.toExponential(precision);
}

/**
 *
 * @param {number} x
 * @param {number|undefined} precision
 * @returns {string}
 */
function positional(x, precision) {
	return precision != undefined ? x.toFixed(precision) : String(x);
}

class FloatingFormat extends Callable {
	/**
	 *
	 * @param {NDArray} data
	 * @param {number} precision
	 */
	constructor(data, precision = undefined) {
		super();
		this.precision = precision;

		let exp_format = false;
		{
			let min_val = data.item(0);
			let max_val = min_val;
			let any_non_zero_finite = false;

			for (let x of data.flat) {
				if (Number.isFinite(x)) {
					if (x != 0) {
						x = Math.abs(x);
						min_val = Math.min(min_val, x);
						max_val = Math.max(max_val, x);
						any_non_zero_finite = true;
					}
				}
			}

			if (any_non_zero_finite && (max_val >= 1e8 || min_val < 0.0001 || max_val / min_val > 1000)) {
				exp_format = true;
			}
		}
		this.exp_format = exp_format;

		let max_len = 0;
		if (this.exp_format) {
			for (let x of data.flat) {
				max_len = Math.max(max_len, scientific(x, precision).length);
			}
		} else {
			for (let x of data.flat) {
				max_len = Math.max(max_len, positional(x, precision).length);
			}
		}
		this.padLeft = max_len;
	}

	/**
	 *
	 * @param {{padLeft: number, exp_format: boolean, precision: number|undefined}} thisArg
	 * @param {number} x
	 */
	call({ padLeft, exp_format, precision } = this, x) {
		let str = exp_format ? scientific(x, precision) : positional(x, precision);
		return ' '.repeat(padLeft - str.length) + str;
	}
}

/**
 *
 * @param {*} x
 */
function default_format(x) {
	return `${x}`;
}

let indirect = x => () => x;

/**
 *
 * @param {NDArray} data
 * @param {FormatOptions} options
 */
function _get_formatdict(data, options) {
	let formatdict = {
		int: () => new IntegerFormat(data).__call__,
		float: () => new FloatingFormat(data, options.precision).__call__,
		object: () => default_format,
	};

	let { formatter } = options;

	if (formatter != null) {
		for (let key of Object.keys(formatter)) {
			formatdict[key] = indirect(formatter[key]);
		}
	}

	return formatdict;
}

function _get_format_function(data, options) {
	let formatdict = _get_formatdict(data, options);
	let dtype = Number.isInteger(data.item(0)) ? 'int' : typeof data.item(0) == 'number' ? 'float' : 'object';
	return formatdict[dtype](options);
}

/**
 *
 * @param {string} s
 * @param {string} line
 * @param {string} word
 * @param {number} line_width
 * @param {string} next_line_prefix
 * @param {number} legacy
 * @returns {[string, string]}
 */
function _extendLine(s, line, word, line_width, next_line_prefix, legacy) {
	let needs_wrap = line.length + word.length > line_width;
	if (legacy > 113) {
		if (line.length <= next_line_prefix.length) {
			needs_wrap = false;
		}
	}

	if (needs_wrap) {
		s += line.trimEnd() + '\n';
		line = next_line_prefix;
	}
	line += word;
	return [s, line];
}

/**
 *
 * @param {string} s
 * @param {string} line
 * @param {string} word
 * @param {number} line_width
 * @param {string} next_line_prefix
 * @param {number} legacy
 * @returns {[string, string]}
 */
function _extendLine_pretty(s, line, word, line_width, next_line_prefix, legacy) {
	let words = word.split(/\r?\n/);
	if (words.length === 1 || legacy <= 113) {
		return _extendLine(s, line, word, line_width, next_line_prefix, legacy);
	}

	let max_word_length = Math.max(...words.map(w => w.length));
	let indent;
	if (line.length + max_word_length > line_width && line.length > next_line_prefix.length) {
		s += line.trimEnd() + '\n';
		line = next_line_prefix + words[0];
		indent = next_line_prefix;
	} else {
		indent = ' '.repeat(line.length);
		line += words[0];
	}

	for (let i = 1; i < words.length; i++) {
		s += line.trimEnd() + '\n';
		line = indent + words[i];
	}

	let suffix_length = max_word_length - words.at(-1).length;
	line += ' '.repeat(suffix_length);

	return [s, line];
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
	/**
	 *
	 * @param {(number|Slice)[]} index
	 * @param {string} hanging_indent
	 * @param {number} curr_width
	 * @returns {string}
	 */
	function recurser(index, hanging_indent, curr_width) {
		let axis = index.length;
		let axes_left = a.ndim - axis;

		if (axes_left === 0) {
			return format_function(a.item(index));
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
			let elem_width;
			let seqlen = separator.trimEnd().length;
			if (legacy <= 113) {
				elem_width = curr_width - seqlen;
			} else {
				elem_width = curr_width - Math.max(seqlen, ']'.length);
			}

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
				s += hanging_indent + summary_insert;
				if (legacy <= 113) s += ', \n';
				else s += line_sep;
			}

			let i = trailing_items;
			for (; i > 1; i--) {
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

/**
 *
 * @param {NDArray} a
 * @param {FormatOptions} options
 * @param {string} separator
 * @param {string} prefix
 * @returns
 */
function _array2string(a, options = _formatOptions, separator = ' ', prefix = '') {
	let data = asarray(a);
	if (a.ndim == 0) a = data;

	let summary_insert;
	if (a.size > options.threshold) {
		summary_insert = '...';
		data = _leading_trailing(data, options.edgeitems);
	} else {
		summary_insert = '';
	}

	let format_function = _get_format_function(data, options);

	let next_line_prefix = ' ' + ' '.repeat(prefix.length);

	let lst = _formatArray(
		a,
		format_function,
		options.linewidth,
		next_line_prefix,
		separator,
		options.edgeitems,
		summary_insert,
		options.legacy
	);

	return lst;
}

/**
 *
 * @param {NDArray} a
 * @param {FormatOptions} options
 * @returns
 */
export function array2string(a, options = null) {
	options = options != null ? Object.assign(Object.create(_formatOptions), options) : _formatOptions;

	let { separator, prefix } = options;

	if (a.size == 0) return `[]`;

	return _array2string(a, options, separator, prefix);
}

/**
 *
 * @param {NDArray} a
 * @param {number} linewidth
 * @param {number} precision
 * @returns
 */
export function array_str(a, linewidth = null, precision = null) {
	linewidth ??= _formatOptions.linewidth;
	precision ??= _formatOptions.precision;

	if (a.ndim == 0) return `${a.item()}`;

	return array2string(a, { linewidth, precision });
}

/**
 *
 * @param {NDArray} a
 * @param {number} linewidth
 * @param {number} precision
 * @returns
 */
export function array_repr(a, linewidth = null, precision = null) {
	linewidth ??= _formatOptions.linewidth;
	precision ??= _formatOptions.precision;

	if (a.ndim == 0) return `${a.item()}`;

	let class_name = a instanceof NDArray ? 'array' : typeof a;

	let skipdtype = a.size > 0;

	let prefix = class_name + '(';
	let suffix = skipdtype ? ')' : ',';

	let lst;
	if (a.size > 0 || shallow_array_equal(a.shape, [0])) {
		lst = array2string(a, { linewidth, precision, separator: ', ', prefix });
	} else {
		lst = `[], shape=[${arr.shape.join(', ')}]`;
	}

	let arr_str = prefix + lst + suffix;

	if (skipdtype) return arr_str;

	let dtype_str = `dtype=${arr.dtype})`;

	let last_line_len = arr_str.length - (arr_str.lastIndexOf('\n') + 1);
	let spacer = ' ';

	if (last_line_len + dtype_str.length + 1 > linewidth) {
		spacer = '\n' + ' '.repeat((class_name + '(').length);
	}

	return arr_str + spacer + dtype_str;
}

tester
	.add(
		array2string,
		() => array2string(arange(3 * 4 * 5 * 6 * 7).reshape(3, 4, 5 * 6 * 7)),
		() =>
			'[[[   0    1    2 ...  207  208  209]\n  [ 210  211  212 ...  417  418  419]\n  [ 420  421  422 ...  627  628  629]\n  [ 630  631  632 ...  837  838  839]]\n\n [[ 840  841  842 ... 1047 1048 1049]\n  [1050 1051 1052 ... 1257 1258 1259]\n  [1260 1261 1262 ... 1467 1468 1469]\n  [1470 1471 1472 ... 1677 1678 1679]]\n\n [[1680 1681 1682 ... 1887 1888 1889]\n  [1890 1891 1892 ... 2097 2098 2099]\n  [2100 2101 2102 ... 2307 2308 2309]\n  [2310 2311 2312 ... 2517 2518 2519]]]'
	)
	.add(
		array2string,
		() => array2string(array([0.1, 100, 50, -9000])),
		() => '[ 1e-1  1e+2  5e+1 -9e+3]'
	)
	.add(
		array2string,
		() => array2string(array([1.1, 100.2, 50.6])),
		() => '[  1.1 100.2  50.6]'
	);

tester
	.add(
		array_repr,
		() => array_repr(array([1.1, 100.2, 50.6])),
		() => 'array([  1.1, 100.2,  50.6])'
	)
	.add(
		array_repr,
		() => '' + array([1.1, 100.2, 50.6]),
		() => 'array([  1.1, 100.2,  50.6])'
	);
