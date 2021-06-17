const strippedComments = require('./stripComments.js');

test('simple string with one marker', () => {
  expect(strippedComments('apples, plums| and bananas',['|']))
    .toBe('apples, plums');
});

test('two line string with one marker', () => {
  expect(strippedComments('apples, plums| and bananas\nNew line!', ['|']))
    .toBe('apples, plums\nNew line!');
});


// tests from website
// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")