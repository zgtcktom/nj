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
	allclose,
	dot,
	transpose,
	matmul,
} from './core.mjs';

/**
 * @param {NDArray} a
 * @param {NDArray} b
 * @returns {NDArray}
 */
export function solve(a, b) {
	let ab = dot(a, transpose([b]));
	ab = ab.toarray();
	console.log(a, b);

	let [p, l, u] = lu(ab);
	return LUPSolve(l, u, p, ab);
}

const LUPSolve = (L, U, P, b) => {
	const n = L.length;
	const y = new Array(n).fill(0);
	const x = new Array(n).fill(0);

	// Apply permutation to b
	const bp = new Array(n).fill(0);
	for (let i = 0; i < n; i++) {
		bp[i] = b[P[i]];
	}

	// Solve Ly = Pb for y
	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = 0; j < i; j++) {
			sum += L[i][j] * y[j];
		}
		y[i] = bp[i] - sum;
	}

	// Solve Ux = y for x
	for (let i = n - 1; i >= 0; i--) {
		let sum = 0;
		for (let j = i + 1; j < n; j++) {
			sum += U[i][j] * x[j];
		}
		x[i] = (y[i] - sum) / U[i][i];
	}

	return x;
};

/**
 * @param {number[][]} a
 * @returns {number[][][]}
 */
export function lu(a) {
	let n = a.length;
	let p = Array(n)
		.fill()
		.map(() => Array(n).fill(0));

	for (let i = 0; i < n; i++) p[i][i] = 1;

	for (let i = 0; i < n; i++) {
		let maxValue = 0;
		let maxIndex = -1;
		for (let j = i; j < n; j++) {
			let value = Math.abs(a[j][i]);
			if (value > maxValue) {
				maxIndex = j;
				maxValue = value;
			}
		}
		if (maxIndex != i) {
			for (let j = 0; j < n; j++) {
				[p[j][i], p[j][maxIndex]] = [p[j][maxIndex], p[j][i]];
			}
			[a[i], a[maxIndex]] = [a[maxIndex], a[i]];
		}
		for (let j = i + 1; j < n; j++) {
			let factor = (a[j][i] /= a[i][i]);
			for (let k = i + 1; k < n; k++) {
				a[j][k] -= factor * a[i][k];
			}
		}
	}

	let l = Array(n)
		.fill()
		.map(() => Array(n).fill(0));
	let u = Array(n)
		.fill()
		.map(() => Array(n).fill(0));

	for (let i = 0; i < n; i++) {
		l[i][i] = 1;
		for (let j = 0; j < n; j++) {
			if (j < i) {
				l[i][j] = a[i][j];
			} else {
				u[i][j] = a[i][j];
			}
		}
	}

	return [p, l, u];
}

tester.add(
	solve,
	() =>
		solve(
			[
				[1, 2],
				[3, 5],
			],
			[1, 2]
		),
	() => array([-1, 1])
);

tester.add(
	lu,
	() =>
		allclose(
			lu([
				[2, 5, 8, 7],
				[5, 2, 2, 8],
				[7, 5, 6, 6],
				[5, 4, 4, 8],
			]),
			[
				array([
					[0, 1, 0, 0],
					[0, 0, 0, 1],
					[1, 0, 0, 0],
					[0, 0, 1, 0],
				]),
				array([
					[1, 0, 0, 0],
					[0.28571429, 1, 0, 0],
					[0.71428571, 0.12, 1, 0],
					[0.71428571, -0.44, -0.46153846, 1],
				]),
				array([
					[7, 5, 6, 6],
					[0, 3.57142857, 6.28571429, 5.28571429],
					[0, 0, -1.04, 3.08],
					[0, 0, 0, 7.46153846],
				]),
			]
		),
	() => true
);
