import { tester, arange, array, slice, Slice } from './core.mjs';

let _index_exp = arg => {
	if (typeof arg == 'number') return arg;
	if (arg instanceof Slice) return arg;
	return slice(arg);
};

export const tupleType = Symbol('tupleType');

/**
 * @param  {...null|number|Slice|string} args
 * @returns {Array<null|number|Slice|string>}
 */
export function index_exp(...args) {
	let tup = args.map(_index_exp);
	tup[tupleType] = true;
	return tup;
}

/**
 * @param  {...null|number|Slice|string|Array<null|number|Slice|string>} args
 * @returns {Array<null|number|Slice|string>}
 */
export function s_(...args) {
	if (args.length == 1) {
		return _index_exp(args[0]);
	}
	return index_exp(...args);
}

process.env.PRODUCTION ||
	tester.add(
		s_,
		() =>
			arange(8)
				.reshape(2, 2, -1)
				.get(s_(0, [0, -1], '::-1')),
		() => array([[1, 0]])
	);
