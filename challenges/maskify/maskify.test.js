// from:
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

const maskify = require('./maskify');

test('do not mask if empty string', () => {
  expect(maskify('')).toBe('');
});

test('do not mask if string.length < 5', () => {
  expect(maskify('1')).toBe('1');
  expect(maskify('3')).toBe('3');
});

test('mask every character > (string.length >= 5)', () => {
  expect(maskify('12345')).toBe('#2345');
  expect(maskify('4556364607935616')).toBe('############5616');
});