import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	amax,
	_wrap_map_unary,
	_wrap_map_binary,
} from './core.mjs';

export const invert = _wrap_map_unary('invert', x => ~x);
export const bitwise_not = invert;

export const bitwise_and = _wrap_map_binary('bitwise_and', (x1, x2) => x1 & x2);
export const bitwise_or = _wrap_map_binary('bitwise_or', (x1, x2) => x1 | x2);
export const bitwise_xor = _wrap_map_binary('bitwise_xor', (x1, x2) => x1 ^ x2);

export const left_shift = _wrap_map_binary('left_shift', (x1, x2) => x1 << x2);
export const right_shift = _wrap_map_binary('right_shift', (x1, x2) => x1 >> x2);

tester.add(
	invert,
	() => invert([13]),
	() => array([-14])
);

tester
	.add(
		bitwise_and,
		() => bitwise_and(13, 17),
		() => 1
	)
	.add(
		bitwise_and,
		() => bitwise_and([11, 7], [4, 25]),
		() => array([0, 1])
	)
	.add(
		bitwise_and,
		() => bitwise_and(array([2, 5, 255]), array([3, 14, 16])),
		() => array([2, 4, 16])
	)
	.add(
		bitwise_and,
		() => bitwise_and([true, true], [false, true]),
		() => array([false, true])
	);

tester.add(
	bitwise_or,
	() => bitwise_or([33, 4], 1),
	() => array([33, 5])
);

tester.add(
	bitwise_xor,
	() => {
		// xor swap
		let a = [1, 2, 3];
		let b = [4, 5, 6];
		a = bitwise_xor(a, b);
		b = bitwise_xor(a, b);
		a = bitwise_xor(a, b);
		return [a, b];
	},
	() => [
		[4, 5, 6],
		[1, 2, 3],
	]
);

tester.add(
	left_shift,
	() => left_shift(5, [1, 2, 3]),
	() => array([10, 20, 40])
);

tester.add(
	right_shift,
	() => right_shift(10, [1, 2, 3]),
	() => array([5, 2, 1])
);
