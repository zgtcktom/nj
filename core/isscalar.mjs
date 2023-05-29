import { tester, array } from './core.mjs';

/**
 * @param {any} element
 * @returns {boolean}
 */
export function isscalar(element) {
	switch (typeof element) {
		case 'boolean':
		case 'function':
		case 'number':
		case 'string':
			return true;
	}
	return false;
}

process.env.PRODUCTION ||
	tester
		.add(
			'isscalar',
			() => isscalar(3.1),
			() => true
		)
		.add(
			'isscalar',
			() => isscalar(array(3.1)),
			() => false
		)
		.add(
			'isscalar',
			() => isscalar([3.1]),
			() => false
		)
		.add(
			'isscalar',
			() => isscalar(false),
			() => true
		)
		.add(
			'isscalar',
			() => isscalar('numpy'),
			() => true
		)
		.add(
			'isscalar',
			() => isscalar(Number()),
			() => true
		);
