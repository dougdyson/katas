// From:
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript


const duplicateCount = require('./duplicateCount');

test('checks for duplicate instances of characters within an empty string', () => {
  expect(duplicateCount("")).toBe(0);
});

test('checks for duplicate instances of characters within a string with no duplicates', () => {
  expect(duplicateCount("abcde")).toBe(0);
});

test('checks for duplicate instances of characters within a string with duplicates', () => {
  expect(duplicateCount("aabbcde")).toBe(2);
});

test('checks for duplicate instances of characters within a string with duplicates of mixed case', () => {
  expect(duplicateCount("aabBcde")).toBe(2);
});

test('checks for duplicate instances of characters within a string with duplicates which are not adjacent', () => {
  expect(duplicateCount("Indivisibility")).toBe(1);
});

test('checks for duplicate instances of characters within a string with duplicates which are not adjacent', () => {
  expect(duplicateCount("Indivisibilities")).toBe(2);
});