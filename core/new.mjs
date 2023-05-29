import { tester, arange, array, asarray, ones, zeros, slice, NDArray, amax } from './core.mjs';

process.env.PRODUCTION ||
	tester
		.add(
			tester,
			() => 0,
			() => 1
		)
		.add(
			tester,
			() => 0,
			() => 1
		)
		.add(
			tester,
			() => 0,
			() => 1
		);
