const nj = require('../dist/bundle');

console.log(nj);

let a = nj.arange(10).reshape(2, -1);
console.log(a);
console.log(a.tolist());

nj.tester.run();
