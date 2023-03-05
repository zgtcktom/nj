import { arange, array, compress, ravel, tester } from './core.mjs';

export function extract(condition, a) {
	return compress(ravel(condition), ravel(a));
}

tester.add(
	extract,
	() => {
		let arr, condition;
		arr = arange(12).reshape([3, 4]);
		condition = array([
			[true, false, false, true],
			[false, false, true, false],
			[false, true, false, false],
		]);
		return extract(condition, arr);
	},
	() => array([0, 3, 6, 9])
);
