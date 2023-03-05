import { tester } from './core/core.mjs';
import { slice, isscalar } from './core/core.mjs';
import * as nj from './core/core.mjs';

let runTest = true;

function is_int(value) {
	return Number.isInteger(value);
}

console.log(Object.keys(nj));

function prod(a) {
	let prod = 1;
	for (let n of a) prod *= n;
	return prod;
}

// for (let i of ndindex([3, 2, 1])) {
//     console.log(i);
// }
// console.log([...ndindex([3, 2, 1], false)]);

export function iterable(obj) {
	return obj?.[Symbol.iterator] != undefined;
}

// export function ones(shape)
// export function ones_like(shape)
// export function zeros(shape)
// export function zeros_like(shape)

// end
function test() {
	if (runTest) tester.run();
}

test();
