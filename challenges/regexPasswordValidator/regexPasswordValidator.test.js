/* https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number
- no special characters

Valid passwords will only be alphanumeric characters.
*/

const validate = require('./regexPasswordValidator');

test('invalid empty string', () => {
  expect(validate('')).toBe(false);
});

test('invalid with non-alphanumeric', () => {
  expect(validate('!')).toBe(false);
  expect(validate('~!@#$%')).toBe(false);
  expect(validate('a1.b2c')).toBe(false);
  expect(validate('!abcD1')).toBe(false);
  expect(validate('abC12!')).toBe(false);
});

test('invalid with missing case', () => {
  expect(validate('123ABC')).toBe(false);
  expect(validate('abc123')).toBe(false);
});

test('invalid with too few characters', () => {
  expect(validate('123aB')).toBe(false);
  expect(validate('aBc1')).toBe(false);
  expect(validate('AbC1')).toBe(false);
});

test('valid alphanumeric character password', () => {
  expect(validate('Password123')).toBe(true);
  expect(validate('abC1234')).toBe(true);
  expect(validate('1234abC')).toBe(true);
});
