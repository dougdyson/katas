const strippedComments = require('./stripComments.js');

// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")

test('invalid empty string', () => {
  expect(strippedComments('','')).toBe('');
});