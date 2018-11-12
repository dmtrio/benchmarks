const Benchmark = require('benchmark');

const test = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const arrayFromTest = testString => Array.from(testString);
const stringSplitTest = testString => testString.split('');

// add tests
new Benchmark.Suite()
  .add('Array.From(Sting) returns {Array}', () => {
    arrayFromTest(test);
  })
  .add('string.split(Sting) returns {Array}', () => {
    stringSplitTest(test);
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
