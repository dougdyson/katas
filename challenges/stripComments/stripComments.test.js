const strippedComments = require('./stripComments.js');

test('invalid empty string', () => {
  expect(strippedComments('')).toBe('');
});