import {
	arange,
	array,
	tester,
	slice,
	_wrap_map,
	_wrap_reduce,
	asarray,
	ndoffset,
	linspace,
	subtract,
	mod,
	normalize_axis_index,
	concatenate,
	ravel,
	reshape,
	remainder,
	eye,
} from './core.mjs';

export const e = Math.E;
export const nan = NaN;
export const pi = Math.PI;
export const inf = Infinity;
export const NINF = -Infinity;

export const sin = _wrap_map('sin', Math.sin, 1);
export const cos = _wrap_map('cos', Math.cos, 1);
export const tan = _wrap_map('tan', Math.tan, 1);

export const arcsin = _wrap_map('arcsin', Math.asin, 1);
export const arccos = _wrap_map('arccos', Math.acos, 1);
export const arctan = _wrap_map('arctan', Math.atan, 1);

export const hypot = _wrap_map('hypot', Math.hypot, 1);

export const arctan2 = _wrap_map('arctan2', Math.atan2, 1);

export const degrees = _wrap_map('degrees', x => (x * 180) / pi, 1);
export const radians = _wrap_map('radians', x => (x / 180) * pi, 1);

export function unwrap(p, period = 2 * pi, discont = period / 2) {
	p = asarray(p);
	if (p.ndim != 1) throw 'unwrap currently only supports 1d arrays';

	let unwrapped = [p.data[p.offset]];
	let lastAngle = p.data[p.offset];

	let first = true;
	for (let offset of ndoffset(p.shape, p.strides)) {
		if (first) {
			first = false;
			continue;
		}
		let delta = p.data[p.offset + offset] - lastAngle;
		if (delta > discont) {
			delta -= period;
		} else if (delta < -discont) {
			delta += period;
		}
		let angle = lastAngle + delta;
		unwrapped.push(angle);
		lastAngle = angle;
	}

	return asarray(unwrapped);
}

export const rad2deg = _wrap_map('rad2deg', x => (x * 180) / pi, 1);
export const deg2rad = _wrap_map('deg2rad', x => (x / 180) * pi, 1);

export const sinh = _wrap_map('sinh', Math.sinh, 1);
export const cosh = _wrap_map('cosh', Math.cosh, 1);
export const tanh = _wrap_map('tanh', Math.tanh, 1);

export const arcsinh = _wrap_map('arcsinh', Math.asinh, 1);
export const arccosh = _wrap_map('arccosh', Math.acosh, 1);
export const arctanh = _wrap_map('arctanh', Math.atanh, 1);

const _around = _wrap_map(
	'_around',
	({ decimals }, x) => {
		let multiplier = 10 ** decimals;
		let n = x * multiplier;
		let m = Math.round(n);
		let fraction = n % 1;
		if (fraction == 0.5 || fraction == -0.5) {
			m = m % 2 ? m - 1 : m;
		}
		return m / multiplier;
	},
	1,
	true
);
export const around = function (x, decimals = 0, out) {
	return _around(x, out, { decimals });
};

export const rint = _wrap_map(
	'rint',
	x => {
		let fraction = x % 1;
		let n = Math.round(x);
		if (fraction == 0.5 || fraction == -0.5) {
			n = n % 2 ? n - 1 : n;
		}
		return n;
	},
	1
);

export const fix = _wrap_map('fix', x => Math.sign(x) * Math.floor(Math.abs(x)), 1);

export const floor = _wrap_map('floor', Math.floor, 1);
export const ceil = _wrap_map('ceil', Math.ceil, 1);
export const trunc = _wrap_map('trunc', Math.trunc, 1);

export const prod = _wrap_reduce('prod', (x1, x2) => x1 * x2, 1, 1);
export const sum = _wrap_reduce('sum', (x1, x2) => x1 + x2, 1, 0);

export const nanprod = _wrap_reduce('nanprod', (x1, x2) => x1 * (isNaN(x2) ? 1 : x2), 1, 1);
export const nansum = _wrap_reduce('nansum', (x1, x2) => x1 + (isNaN(x2) ? 0 : x2), 1, 0);

export const cumprod = null;
export const cumsum = null;

export const nancumprod = null;
export const nancumsum = null;

export function diff(a, n = 1, axis = -1) {
	a = asarray(a);

	let { ndim } = a;
	axis = normalize_axis_index(axis, ndim);

	let slices1 = Array(ndim).fill(slice());
	let slices2 = Array(ndim).fill(slice());
	slices1[axis] = slice(1, null);
	slices2[axis] = slice(null, -1);

	for (let i = 0; i < n; i++) a = subtract(a.get(...slices1), a.get(...slices2));

	return a;
}

export function ediff1d(a, to_end = null, to_begin = null) {
	a = diff(reshape(a, -1));

	if (to_begin != null || to_end != null) {
		let arrays = [];
		if (to_begin != null) arrays.push(to_begin);
		arrays.push(a);
		if (to_end != null) arrays.push(to_end);
		a = concatenate(arrays, null);
	}
	return a;
}

export const exp = _wrap_map('exp', Math.exp, 1);

export const expm1 = _wrap_map('expm1', x => Math.exp(x) - 1, 1);
export const exp2 = _wrap_map('exp2', x => 2 ** x, 1);
export const log = _wrap_map('log', Math.log, 1);
export const log10 = _wrap_map('log10', Math.log10, 1);
export const log2 = _wrap_map('log2', Math.log2, 1);
export const log1p = _wrap_map('log1p', Math.log1p, 1);
export const logaddexp = _wrap_map('logaddexp', (x1, x2) => Math.log(Math.exp(x1) + Math.exp(x2)), 2);

export const logaddexp2 = _wrap_map('logaddexp2', (x1, x2) => Math.log2(2 ** x1 + 2 ** x2), 2);

export const signbit = _wrap_map('signbit', x => x < 0, 1);
export const copysign = _wrap_map('copysign', (x1, x2) => (x2 < 0 ? -Math.abs(x1) : Math.abs(x1)), 2);

export const ldexp = _wrap_map('ldexp', (x1, x2) => x1 * 2 ** x2, 2);

export const positive = _wrap_map('positive', x => +x, 1);
export const negative = _wrap_map('negative', x => -x, 1);

function _gcd(a, b) {
	while (b != 0) {
		let tmp = b;
		b = a % b;
		a = tmp;
	}
	return a;
}

function _lcm(a, b) {
	return (a * b) / _gcd(a, b);
}

export const lcm = _wrap_map('lcm', _lcm, 2);
export const gcd = _wrap_map('gcd', _gcd, 2);

export const reciprocal = _wrap_map('reciprocal', x => 1 / x, 1);

export const fmod = _wrap_map('fmod', (x1, x2) => x1 - ((x1 / x2) | 0) * x2, 2);

export const maximum = _wrap_map('maximum', Math.max, 2);

export const minimum = _wrap_map('minimum', Math.min, 2);

export const amax = _wrap_reduce('amax', Math.max, 1, -inf);

export const amin = _wrap_reduce('amin', Math.min, 1, inf);

export const sqrt = _wrap_map('sqrt', Math.sqrt, 1);

export const cbrt = _wrap_map('cbrt', Math.cbrt, 1);

export const square = _wrap_map('square', x => x ** 2, 1);

export const abs = _wrap_map('abs', Math.abs, 1),
	absolute = abs;

export const sign = _wrap_map('sign', Math.sign, 1);

export const nan_to_num = _wrap_map(
	'nan_to_num',
	x => {
		if (isNaN(x)) return 0;
		if (x == Infinity) return Number.MAX_VALUE;
		if (x == -Infinity) return Number.MIN_VALUE;
		return x;
	},
	1
);

tester
	.add(
		amax,
		() => amax(arange(4).reshape(2, 2)),
		() => 3
	)
	.add(
		amax,
		() => amax(arange(4).reshape(2, 2), 0),
		() => array([2, 3])
	)
	.add(
		amax,
		() => amax(arange(4).reshape(2, 2), 1),
		() => array([1, 3])
	);

tester
	.add(
		maximum,
		() => maximum([2, 3, 4], [1, 5, 2]),
		() => array([2, 5, 4])
	)
	.add(
		maximum,
		() => maximum(eye(2), [0.5, 2]),
		() =>
			array([
				[1, 2],
				[0.5, 2],
			])
	);

tester
	.add(
		fmod,
		() => fmod([-3, -2, -1, 1, 2, 3], 2),
		() => array([-1, 0, -1, 1, 0, 1])
	)
	.add(
		fmod,
		() => remainder([-3, -2, -1, 1, 2, 3], 2),
		() => array([1, 0, 1, 1, 0, 1])
	);

tester
	.add(
		gcd,
		() => gcd(12, 20),
		() => 4
	)
	.add(
		gcd,
		() => gcd(arange(6), 20),
		() => array([20, 1, 2, 1, 4, 5])
	);

tester
	.add(
		lcm,
		() => lcm(12, 20),
		() => 60
	)
	.add(
		lcm,
		() => lcm(arange(6), 20),
		() => array([0, 20, 20, 60, 20, 20])
	);

tester
	.add(
		copysign,
		() => copysign(1.3, -1),
		() => -1.3
	)
	.add(
		copysign,
		() => 1 / copysign(0, 1),
		() => Infinity
	)
	.add(
		copysign,
		() => 1 / copysign(0, -1),
		() => -Infinity
	);

tester
	.add(
		signbit,
		() => signbit(-1.2),
		() => true
	)
	.add(
		signbit,
		() => signbit(array([1, -2.3, 2.1])),
		() => array([false, true, false])
	);

tester.add(
	logaddexp,
	() => {
		let prob1 = log(1e-50);
		let prob2 = log(2.5e-50);
		let prob12 = logaddexp(prob1, prob2);
		return prob12;
	},
	() => -113.87649168120691
);

tester
	.add(
		unwrap,
		() => unwrap([0, 1, 2, -1, 0], 4),
		() => array([0, 1, 2, 3, 4])
	)
	.add(
		unwrap,
		() => unwrap([1, 2, 3, 4, 5, 6, 1, 2, 3], 6),
		() => array([1, 2, 3, 4, 5, 6, 7, 8, 9])
	)
	.add(
		unwrap,
		() => unwrap([2, 3, 4, 5, 2, 3, 4, 5], 4),
		() => array([2, 3, 4, 5, 6, 7, 8, 9])
	);

tester
	.add(
		around,
		() => around([0.37, 1.64]),
		() => array([0, 2])
	)
	.add(
		around,
		() => around([0.37, 1.64], 1),
		() => array([0.4, 1.6])
	)
	.add(
		around,
		() => around([0.5, 1.5, 2.5, 3.5, 4.5]),
		() => array([0, 2, 2, 4, 4])
	)
	.add(
		around,
		() => around([5, 15, 25, 35, 45], -1),
		() => array([0, 20, 20, 40, 40])
	)
	.add(
		around,
		() => around([-5, -15, -25, -35, -45], -1),
		() => array([0, -20, -20, -40, -40])
	)
	.add(
		around,
		() => around([1, 2, 3, 11], 1),
		() => array([1, 2, 3, 11])
	)
	.add(
		around,
		() => around([1, 2, 3, 11], -1),
		() => array([0, 0, 0, 10])
	);
// .add(
// 	// this is false
// 	unwrap,
// 	() => unwrap(subtract(mod(linspace(0, 720, 19), 360), 180), 360),
// 	() =>
// 		array([
// 			-180, -140, -100, -60, -20, 20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500,
// 			540,
// 		])
// );

tester.add(
	rint,
	() => rint(array([-1.7, -1.5, -0.2, 0.2, 1.5, 1.7, 2.0])),
	() => array([-2, -2, -0, 0, 2, 2, 2])
);

tester
	.add(
		fix,
		() => fix(3.14),
		() => 3
	)
	.add(
		fix,
		() => fix(3),
		() => 3
	)
	.add(
		fix,
		() => fix([2.1, 2.9, -2.1, -2.9]),
		() => array([2, 2, -2, -2])
	);

tester
	.add(
		prod,
		() => prod([]),
		() => 1
	)
	.add(
		prod,
		() => prod([1, 2]),
		() => 2.0
	)
	.add(
		prod,
		() =>
			prod(
				array([
					[1, 2],
					[3, 4],
				])
			),
		() => 24.0
	)
	.add(
		prod,
		() =>
			prod(
				array([
					[1, 2],
					[3, 4],
				]),
				1
			),
		() => array([2, 12])
	)
	.add(
		prod,
		() =>
			prod(
				array([
					[1, 2],
					[3, 4],
				]),
				0
			),
		() => array([3, 8])
	)
	.add(
		prod,
		() => prod([1, 2], null, null, null, 5),
		() => 10
	);

tester
	.add(
		sum,
		() => sum([0.5, 1.5]),
		() => 2.0
	)
	.add(
		sum,
		() =>
			sum([
				[0, 1],
				[0, 5],
			]),
		() => 6
	)
	.add(
		sum,
		() =>
			sum(
				[
					[0, 1],
					[0, 5],
				],
				0
			),
		() => array([0, 6])
	)
	.add(
		sum,
		() =>
			sum(
				[
					[0, 1],
					[0, 5],
				],
				1
			),
		() => array([1, 5])
	)
	.add(
		sum,
		() => sum([10], null, null, null, 5),
		() => 15
	)
	.add(
		sum,
		// a = np.arange(100).reshape(5, -1, 1)[::-2, 2:7]
		// np.sum(a, (0, -1))
		() => sum(arange(100).reshape(5, -1, 1).get(slice('::-2'), slice('2:7')), [0, -1]),
		() => array([126, 129, 132, 135, 138])
	)
	.add(
		sum,
		// a = np.arange(100).reshape(5, -1, 1)[::-2, 2:7]
		// np.sum(a, (0, -1))
		() => {
			let a = arange(100);
			a = a.get(slice(20, -20)).reshape([2, 1, -1, 2]).get(slice('...'), slice('::-1'));
			return sum(a, [1, -2], null, true, -99);
		},
		() => array([[[[426, 411]]], [[[876, 861]]]])
	);

tester
	.add(
		nanprod,
		() => nanprod(1),
		() => 1
	)
	.add(
		nanprod,
		() => nanprod([1]),
		() => 1
	)
	.add(
		nanprod,
		() => nanprod([1, nan]),
		() => 1.0
	)
	.add(
		nanprod,
		() =>
			nanprod(
				array([
					[1, 2],
					[3, nan],
				])
			),
		() => 6.0
	)
	.add(
		nanprod,
		() =>
			nanprod(
				array([
					[1, 2],
					[3, nan],
				]),
				0
			),
		() => array([3, 2])
	);

tester
	.add(
		nansum,
		() => nansum(1),
		() => 1
	)
	.add(
		nansum,
		() => nansum([1]),
		() => 1
	)
	.add(
		nansum,
		() => nansum([1, nan]),
		() => 1.0
	)
	.add(
		nansum,
		() =>
			nansum(
				array([
					[1, 1],
					[1, nan],
				])
			),
		() => 3.0
	)
	.add(
		nansum,
		() =>
			nansum(
				array([
					[1, 1],
					[1, nan],
				]),
				0
			),
		() => array([2, 1])
	)
	.add(
		nansum,
		() => nansum([1, nan, inf]),
		() => inf
	)
	.add(
		nansum,
		() => nansum([1, nan, NINF]),
		() => -inf
	);

tester
	.add(
		diff,
		() => diff(array([1, 2, 4, 7, 0])),
		() => array([1, 2, 3, -7])
	)
	.add(
		diff,
		() => diff(array([1, 2, 4, 7, 0]), 2),
		() => array([1, 1, -10])
	)
	.add(
		diff,
		() =>
			diff(
				array([
					[1, 3, 6, 10],
					[0, 5, 6, 8],
				])
			),
		() =>
			array([
				[2, 3, 4],
				[5, 1, 2],
			])
	)
	.add(
		diff,
		() =>
			diff(
				array([
					[1, 3, 6, 10],
					[0, 5, 6, 8],
				]),
				1,
				0
			),
		() => array([[-1, 2, 0, -2]])
	);

tester
	.add(
		ediff1d,
		() => ediff1d(array([1, 2, 4, 7, 0])),
		() => array([1, 2, 3, -7])
	)
	.add(
		ediff1d,
		() => ediff1d(array([1, 2, 4, 7, 0]), array([88, 99]), -99),
		() => array([-99, 1, 2, 3, -7, 88, 99])
	)
	.add(
		ediff1d,
		() =>
			ediff1d([
				[1, 2, 4],
				[1, 6, 24],
			]),
		() => array([1, 2, -3, 5, 18])
	);

tester.add(
	abs,
	() => abs(array([-1.2, 1.2])),
	() => array([1.2, 1.2])
);

// function tuple_eq(a, b) {
// 	if (a.length != b.length) return false;
// 	for (let i = 0; i < a.length; i++) if (a[i] != b[i]) return false;
// 	return true;
// }

// function _binary_func(func, x1, x2, out) {
// 	let b = broadcast(x1, x2);
// 	if (out == null) {
// 		out = empty(b.shape);
// 		let i = 0;
// 		for (let [x1, x2] of b) {
// 			out.data[i++] = func(x1, x2);
// 		}
// 		return out;
// 	}
// 	if (tuple_eq(b.shape, out.shape)) {
// 		let i = 0;
// 		for (let [x1, x2] of b) {
// 			out.itemset(i++, func(x1, x2));
// 		}
// 		return out;
// 	}
// 	if (!broadcastable_to(b.shape, out.shape))
// 		throw `non-broadcastable output operand with shape [${out.shape}] doesn't match the broadcast shape [${b.shape}]`;

// 	out.set(_binary_func(func, x1, x2, null));
// 	return out;
// }

// function binary_func(func) {
// 	return (x1, x2, out = null) => _binary_func(func, x1, x2, out);
// }

// function _add(x1, x2) {
// 	return x1 + x2;
// }

// var add2 = binary_func(_add);
// var add = wrap_map('add', _add);
// var add3 = _wrap_map('add', _add);
// export var sin = _wrap_map('sin', Math.sin);
// console.log(sum);

tester.add(
	sin,
	() => sin(arange(30).reshape(2, 5, 1, -1, 1)),
	() =>
		array([
			[
				[[[0.0], [0.8414709848078965], [0.9092974268256817]]],
				[[[0.1411200080598672], [-0.7568024953079282], [-0.9589242746631385]]],
				[[[-0.27941549819892586], [0.6569865987187891], [0.9893582466233818]]],
				[[[0.4121184852417566], [-0.5440211108893698], [-0.9999902065507035]]],
				[[[-0.5365729180004349], [0.4201670368266409], [0.9906073556948704]]],
			],
			[
				[[[0.6502878401571168], [-0.2879033166650653], [-0.9613974918795568]]],
				[[[-0.7509872467716762], [0.14987720966295234], [0.9129452507276277]]],
				[[[0.8366556385360561], [-0.008851309290403876], [-0.8462204041751706]]],
				[[[-0.9055783620066238], [-0.13235175009777303], [0.7625584504796028]]],
				[[[0.956375928404503], [0.27090578830786904], [-0.6636338842129675]]],
			],
		])
);

// console.log(add2.toString(), add.toString());

// let x1, x2, out;
// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// x2 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = Array(x1.length);
// timeit(() => {
// 	for (let i = 0; i < x1.length; i++) {
// 		out[i] = x1[i] + x2[i];
// 	}
// }, 3000);
// // x1 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// // x2 = ones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// x1 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// x2 = ones([1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10]);
// // x1 = ones([121, 40]);
// // x2 = ones([121, 40]);
// out = empty(x1.shape);
// timeit(() => {
// 	add2(x1, x2, out);
// }, 3000);

// out = empty(x1.shape);
// timeit(() => {
// 	add(x1, x2, out);
// }, 3000);

// out = empty(x1.shape);
// timeit(() => {
// 	add3(x1, x2, out);
// }, 3000);

// out = empty(x1.shape);
// timeit(() => {
// 	sum(x1);
// }, 3000);

// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = Array(x1.length);
// timeit(() => {
// 	for (let i = 0; i < x1.length; i++) out[i] = Math.sin(x1[i]);
// });

// x1 = array(x1);
// out = empty(x1.shape);
// sum(x1);
// timeit(() => {
// 	return sin(x1, out);
// });

// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = [];
// timeit(() => {
// 	let sum = 0;
// 	for (let i = 0; i < x1.length; i++) sum = sum + x1[i];
// 	out[0] = sum;
// });
// x1 = array(Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1));
// out = empty([]);
// sum(x1, null, out);
// timeit(() => {
// 	sum(x1, null, out, 0);
// });
// x1 = Array(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10).fill(1);
// out = [];
// timeit(() => {
// 	let sum = 0;
// 	for (let i = 0; i < x1.length; i++) sum = sum + x1[i];
// 	out[0] = sum;
// });

// tester
// 	.add(
// 		add,
// 		() => add([1.0], [4.0]),
// 		() => 5.0
// 	)
// 	.add(
// 		add,
// 		() => {
// 			let x1, x2;
// 			x1 = arange(9.0).reshape(3, 3);
// 			x2 = arange(3.0);
// 			return add(x1, x2);
// 		},
// 		() =>
// 			array([
// 				[0, 2, 4],
// 				[3, 5, 7],
// 				[6, 8, 10],
// 			])
// 	)
// 	.add(
// 		add,
// 		() => {
// 			let out;
// 			out = empty([2, 2]);
// 			add([1, 2], [3, 4], out);
// 			return out;
// 		},
// 		() =>
// 			array([
// 				[4, 6],
// 				[4, 6],
// 			])
// 	);
