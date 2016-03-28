import test from 'blue-tape';
import { sum } from '../index.js';

const a = 1;
const b = 2;

let actual;
let expected;
let desc;

test('sum()', (t) => {
  t.plan(2);

  actual = typeof sum(a, b);
  expected = 'number';
  desc = 'should return a number';
  t.equal(actual, expected, desc);

  actual = sum(a, b);
  expected = 3;
  desc = ['(', a, ' + ', b, ') should return 3'].join('');
  t.equal(actual, expected, desc);

  t.end();
});
