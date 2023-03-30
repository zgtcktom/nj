import * as nj from '../dist/bundle.mjs';

console.log(nj);

let a = nj.arange(10).reshape(2, -1);
console.log(a);
console.log(a.tolist());

nj.tester.run();
