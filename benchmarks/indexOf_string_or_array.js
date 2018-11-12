const Benchmark = require('benchmark');

const test = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const find = 'O';
const regExp = new RegExp(find);

// add tests
new Benchmark.Suite()
  .add('RegExp#test', () => {
    regExp.test(test);
  })
  .add('String#indexOf', () => {
    test.indexOf(find) > -1;
  })
  .add('String#match', () => {
    !!test.match(regExp);
  })
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  // run async
  .run({ async: true });
