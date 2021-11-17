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

test('converts a sequential array to a string indicating a range', () => {
  expect(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toBe("-6,-3-1,3-5,7-11,14,15,17-20")
});