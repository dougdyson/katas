/* https://www.codewars.com/kata/52e1476c8147a7547a000811/javascript

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