const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

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
    benchmarks.add(event.target);
  })
  .on('complete', () => {
    benchmarks.log();
  })
  // run async
  .run({ async: true });
