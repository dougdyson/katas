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
});

test('checks valid 6 alphanumeric character password', () => {
  expect(validate('djI38D55')).toBe(true);
  expect(validate('Password123')).toBe(true);
});

test('checks invalid alphanumeric character password with too many characters', () => {
  expect(validate('JHD5FJ53')).toBe(false);
  expect(validate('jfkdfj3j')).toBe(false);
});

