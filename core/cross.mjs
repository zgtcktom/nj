import {
	tester,
	arange,
	array,
	asarray,
	ones,
	zeros,
	slice,
	NDArray,
	negative,
	multiply,
	moveaxis,
	broadcast_shapes,
	normalize_axis_index,
	empty,
	subtract,
} from './core.mjs';

export function cross(a, b, axis = -1, axisa = axis, axisb = axis, axisc = axis) {
	a = asarray(a);
	b = asarray(b);

	axisa = normalize_axis_index(axisa, a.ndim);
	axisb = normalize_axis_index(axisb, b.ndim);

	a = moveaxis(a, axisa, -1);
	b = moveaxis(b, axisb, -1);

	let lasta = a.shape.at(-1);
	let lastb = b.shape.at(-1);
	if ((lasta != 2 && lasta != 3) || (lastb != 2 && lastb != 3)) {
		throw `incompatible dimensions for cross product (dimension must be 2 or 3)`;
	}

	let shape = broadcast_shapes(a.shape.slice(0, -1), b.shape.slice(0, -1));

	if (a.shape.at(-1) == 3 || b.shape.at(-1) == 3) {
		shape = [...shape, 3];
		axisc = normalize_axis_index(axisc, shape.length);
	}

	let cp = empty(shape);

	let a0, a1, a2;
	let b0, b1, b2;
	let cp0, cp1, cp2;

	a0 = a.at('...', 0);
	a1 = a.at('...', 1);
	if (a.shape.at(-1) == 3) a2 = a.at('...', 2);

	b0 = b.at('...', 0);
	b1 = b.at('...', 1);
	if (b.shape.at(-1) == 3) b2 = b.at('...', 2);
	if (cp.ndim != 0 && cp.shape.at(-1) == 3) {
		cp0 = cp.at('...', 0);
		cp1 = cp.at('...', 1);
		cp2 = cp.at('...', 2);
	}

	if (a.shape.at(-1) == 2) {
		if (b.shape.at(-1) == 2) {
			multiply(a0, b1, cp);
			subtract(cp, multiply(a1, b0), cp);
			return cp;
		} else {
			if (b.shape.at(-1) != 3) throw 'b.shape.at(-1) != 3';
			multiply(a1, b2, cp0);
			multiply(a0, b2, cp1);
			negative(cp1, cp1);
			multiply(a0, b1, cp2);
			subtract(cp2, multiply(a1, b0), cp2);
		}
	} else {
		if (a.shape.at(-1) != 3) throw 'a.shape.at(-1) != 3';
		if (b.shape.at(-1) == 3) {
			multiply(a1, b2, cp0);
			let tmp = multiply(a2, b1);
			subtract(cp0, tmp, cp0);
			multiply(a2, b0, cp1);
			multiply(a0, b2, tmp);
			subtract(cp1, tmp, cp1);
			multiply(a0, b1, cp2);
			multiply(a1, b0, tmp);
			subtract(cp2, tmp, cp2);
		} else {
			if (b.shape.at(-1) != 2) throw 'b.shape.at(-1) != 2';
			multiply(a2, b1, cp0);
			negative(cp0, cp0);
			multiply(a2, b0, cp1);
			multiply(a0, b1, cp2);
			subtract(cp2, multiply(a1, b0), cp2);
		}
	}

	return moveaxis(cp, -1, axisc);
}

tester
	.add(
		cross,
		() => cross([1, 2, 3], [4, 5, 6]),
		() => array([-3, 6, -3])
	)
	.add(
		cross,
		() => cross([1, 2], [4, 5, 6]),
		() => array([12, -6, -3])
	)
	.add(
		cross,
		() => cross([1, 2, 0], [4, 5, 6]),
		() => array([12, -6, -3])
	)
	.add(
		cross,
		() => cross([1, 2], [4, 5]),
		() => array(-3)
	)
	.add(
		cross,
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			let y = array([
				[4, 5, 6],
				[1, 2, 3],
			]);
			return cross(x, y);
		},
		() =>
			array([
				[-3, 6, -3],
				[3, -6, 3],
			])
	)
	.add(
		cross,
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
			]);
			let y = array([
				[4, 5, 6],
				[1, 2, 3],
			]);
			return cross(x, y, undefined, undefined, undefined, 0);
		},
		() =>
			array([
				[-3, 3],
				[6, -6],
				[-3, 3],
			])
	)
	.add(
		cross,
		() => {
			let x = array([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			]);
			let y = array([
				[7, 8, 9],
				[4, 5, 6],
				[1, 2, 3],
			]);
			return [cross(x, y), cross(x, y, undefined, 0, 0)];
		},
		() => [
			array([
				[-6, 12, -6],
				[0, 0, 0],
				[6, -12, 6],
			]),
			array([
				[-24, 48, -24],
				[-30, 60, -30],
				[-36, 72, -36],
			]),
		]
	);
