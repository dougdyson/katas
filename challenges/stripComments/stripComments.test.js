const strippedComments = require('./stripComments.js');

test('simple string with one marker', () => {
  expect(strippedComments('apples| and bananas',['|']))
    .toBe('apples');
});

test('simple two line string with one marker', () => {
  expect(strippedComments('apples| and bananas\nNew line!', ['|']))
    .toBe('apples\nNew line!');
});

test('three line string with one marker', () => {
  expect(strippedComments('apples| and bananas\n2nd line\n3rd line!', ['|']))
    .toBe('apples\n2nd line\n3rd line!');
});


// tests from website
// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")