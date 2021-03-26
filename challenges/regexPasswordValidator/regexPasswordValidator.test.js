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
  expect(validate('a2.d412')).toBe(false);
  expect(validate('!fdjn345')).toBe(false);
  expect(validate('!23abc')).toBe(false);
  expect(validate('fdjn3!')).toBe(false);
});

test('checks invalid alphanumeric character password', () => {
  expect(validate('123ABC')).toBe(false);
  expect(validate('abc123')).toBe(false);
});

test('checks invalid alphanumeric character password', () => {
  expect(validate('djiI38')).toBe(true);
  expect(validate('123aB')).toBe(true);
  expect(validate('aBc1')).toBe(true);
});

test('checks invalid alphanumeric character password with too many characters', () => {
  expect(validate('Password123')).toBe(false);
  expect(validate('JHD5FJ53')).toBe(false);
  expect(validate('jfkdfj3j')).toBe(false);
  expect(validate('!fkdfj3j')).toBe(false);
  expect(validate('j!kdfj3j')).toBe(false);
});
