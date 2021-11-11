const rangeExtraction = require('./rangeExtraction');

test('returns a string', () => {
  expect.stringContaining(rangeExtraction([1]))
});