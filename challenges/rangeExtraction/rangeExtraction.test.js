const rangeExtraction = require('./rangeExtraction');

test('returns a string', () => {
  expect.stringContaining(rangeExtraction([1]));
});

test('creates a range from consecutive numbers', () => {
  expect(rangeExtraction([-1,0,1])).toBe("-1-1")
});