/* https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number

Valid passwords will only be alphanumeric characters.
*/

const validate = require('./regexPasswordValidator');

test('checks for empty string', () => {
  expect(validate('')).toBe(false);
});

test('checks for non-alphanumeric', () => {
  expect(validate('!')).toBe(false);
  expect(validate('a1.b2c')).toBe(false);
  expect(validate('!abcD1')).toBe(false);
  expect(validate('abC12!')).toBe(false);
});

test('checks invalid alphanumeric character password with missing case', () => {
  expect(validate('123ABC')).toBe(false);
  expect(validate('abc123')).toBe(false);
});

test('checks valid alphanumeric character password', () => {
  expect(validate('abCD38')).toBe(true);
  expect(validate('123aB')).toBe(true);
  expect(validate('aBc1')).toBe(true);
});

test('checks invalid alphanumeric character password with too many characters', () => {
  expect(validate('Password123')).toBe(false);
  expect(validate('abC1234')).toBe(false);
  expect(validate('1234abC')).toBe(false);
  expect(validate('abC123!')).toBe(false);
  expect(validate('!234abC')).toBe(false);
});
