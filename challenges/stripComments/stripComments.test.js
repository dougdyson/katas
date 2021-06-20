const strippedComments = require('./stripComments.js');

test('one line string with one marker', () => {
  expect(strippedComments('apples| and bananas',['|']))
    .toBe('apples');
});

test('two line string with one marker', () => {
  expect(strippedComments('apples| and bananas\nNew line!', ['|']))
    .toBe('apples\nNew line!');
});

test('three line string with one marker', () => {
  expect(strippedComments('apples| and bananas\n2nd line\n3rd line!', ['|']))
    .toBe('apples\n2nd line\n3rd line!');
});

test('one line string with two markers', () => {
  expect(strippedComments('apples|, bananas and ~cherries', ['|','~']))
    .toBe('apples');
});

test('two line string with two markers', () => {
  expect(strippedComments('apples|, bananas \nand~ cherries', ['|','~']))
    .toBe('apples\nand');
});

test('three line string with two markers', () => {
  expect(strippedComments('apples, plums % and bananas\npears\noranges !applesauce', ["%", "!"]))
    .toBe("apples, plums \npears\noranges");
})


// tests from website: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums \npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")