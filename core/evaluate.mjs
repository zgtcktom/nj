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
	ndoffset,
	add,
	subtract,
	multiply,
	divide,
	mod,
} from './core.mjs';

class Operator {
	constructor(symbol, arity, associativity, precedence, fn) {
		this.symbol = symbol;
		this.arity = arity;
		this.associativity = associativity;
		this.precedence = precedence;
		this.fn = fn;
	}
}

const ops = {
	add: new Operator('+', 2, 'left', 11, (x, y) => add(x, y)),
	sub: new Operator('-', 2, 'left', 11, (x, y) => subtract(x, y)),
	mul: new Operator('*', 2, 'left', 12, (x, y) => multiply(x, y)),
	div: new Operator('/', 2, 'left', 12, (x, y) => divide(x, y)),
	mod: new Operator('%', 2, 'left', 12, (x, y) => mod(x, y)),
};

class Tokenizer {
	/**
	 * @param {string} source
	 */
	constructor(source) {
		this.source = source;
		this.length = source.length;
		this.index = 0;
	}

	[Symbol.iterator]() {
		return this;
	}

	next() {
		let { source, length, index } = this;
		let char0 = source[index];

		while (char0 == '\f' || char0 == '\t' || char0 == '\v' || char0 == ' ') char0 = source[++index];
		if (char0 === undefined) return { done: true };

		let value;
		let type;
		if (char0 == "'" || char0 == '"') {
			let delim = char0;
			let i = index;
			while ((i = source.indexOf(delim, i + 1))) {
				if (i == -1) throw new Error('unexpected EOF');
				if (source[i - 1] != '\\') break;
			}
			value = source.slice(index + 1, i);
			type = 'string';

			index = i + 1;
		} else if (isIdentifierStart(char0)) {
			let i = index;
			while (isIdentifierPart(source[i + 1])) i++;
			value = source.slice(index, i + 1);
			type = 'name';

			index = i + 1;
		} else {
			return { done: true };
		}

		this.index = index;

		return { value: { value, type }, done: index >= length };
	}
}

function isIdentifierStart(char) {
	return /^[a-zA-Z_$]/.test(char);
}

function isIdentifierPart(char) {
	return /^[a-zA-Z0-9_$]/.test(char);
}

export function compile(fn, params = {}) {
	console.log(fn.toString());
}

process.env.PRODUCTION ||
	tester.add(
		compile,
		() => {
			let source = `'use str"ic\\'t' _$s22; let fn = () => {
				console.log([...ndoffset([1, 2, 3], [-2, -1, 1], 0)]);
				compile(({ x }) => x * 5 + 1);
				compile(function fn({ x }) {
					return x * 5 + 1;
				});
			}`;
			console.log([...new Tokenizer(source)]);
		},
		() => {}
	);
