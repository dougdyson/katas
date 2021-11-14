const rangeExtraction = require('./rangeExtraction');

test('converts a non-sequential array to a string with each array element comma seperated', () => {
  expect(rangeExtraction([-3,-1,2,4])).toBe("-3,-1,2,4")
});

test('converts a sequential array to a string indicating a range', () => {
  expect(rangeExtraction([-2,-1])).toBe('-2--1')
});

test('converts a sequential array to a string indicating a range', () => {
  expect(rangeExtraction([-2,-1,0,1,2])).toBe('-2-2')
});