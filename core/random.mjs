import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';
// heavily based on https://stackoverflow.com/a/47593316 by bryc

function cyrb128(str) {
	let h1 = 1779033703,
		h2 = 3144134277,
		h3 = 1013904242,
		h4 = 2773480762;
	for (let i = 0, k; i < str.length; i++) {
		k = str.charCodeAt(i);
		h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
		h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
		h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
		h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
	}
	h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
	h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
	h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
	h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
	return [(h1 ^ h2 ^ h3 ^ h4) >>> 0, (h2 ^ h1) >>> 0, (h3 ^ h1) >>> 0, (h4 ^ h1) >>> 0];
}

function sfc32(a, b, c, d) {
	return function () {
		a >>>= 0;
		b >>>= 0;
		c >>>= 0;
		d >>>= 0;
		var t = (a + b) | 0;
		a = b ^ (b >>> 9);
		b = (c + (c << 3)) | 0;
		c = (c << 21) | (c >>> 11);
		d = (d + 1) | 0;
		t = (t + d) | 0;
		c = (c + t) | 0;
		return (t >>> 0) / 4294967296;
	};
}

function xoshiro128ss(a, b, c, d) {
	return function () {
		var t = b << 9,
			r = b * 5;
		r = ((r << 7) | (r >>> 25)) * 9;
		c ^= a;
		d ^= b;
		b ^= c;
		a ^= d;
		c ^= t;
		d = (d << 11) | (d >>> 21);
		return (r >>> 0) / 4294967296;
	};
}

/**
 * @class
 */
class RandomGenerator {
	static methods = { 'xoshiro128++': xoshiro128ss, sfc32: sfc32 };

	/**
	 * @param {string} [seed = Date.now().toString()]
	 * @param {string} [method = 'xoshiro128++']
	 */
	constructor(seed = Date.now().toString(), method = 'xoshiro128++') {
		/**
		 * Returns a pseudorandom number between 0 and 1
		 * @method
		 * @type {function(): number}
		 */
		this.random = RandomGenerator.methods[method](...cyrb128(String(seed)));
	}
}

process.env.PRODUCTION ||
	tester
		.add(
			RandomGenerator,
			() => cyrb128('hello world'),
			() => [3993512746, 3801671567, 1277925671, 1086018946]
		)
		.add(
			RandomGenerator,
			() => new RandomGenerator('hello').random(),
			() => 0.587124211480841
		)
		.add(
			RandomGenerator,
			() => new RandomGenerator().random() > 0,
			() => true
		);
