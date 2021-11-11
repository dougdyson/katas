const rangeExtraction = require('./rangeExtraction');

test('converts a non-sequential array to a string with each array element comma seperated', () => {
  expect(rangeExtraction([-1,1,3])).toBe("-1,1,3")
});