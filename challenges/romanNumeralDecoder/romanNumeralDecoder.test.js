// get from code wars
// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

const romanNumeralDecoder = require('./romanNumeralDecoder');

it('Returns null if input parameter is empty', function() {
  expect(romanNumeralDecoder('')).toBe(null);
})

it('Returns null if input is not a string', function() {
  expect(romanNumeralDecoder(2)).toBe(null);
  expect(romanNumeralDecoder({})).toBe(null);
  expect(romanNumeralDecoder([])).toBe(null);
})

it('Returns null if input contains an invalid roman numeral', function() {
  expect(romanNumeralDecoder('K')).toBe(null);
  expect(romanNumeralDecoder('%')).toBe(null);
  expect(romanNumeralDecoder('-')).toBe(null);
})

it('Translates Roman numerals into integers', function() {
  expect(romanNumeralDecoder('I')).toBe(1);
  expect(romanNumeralDecoder('XXI')).toBe(21);
  expect(romanNumeralDecoder('VI')).toBe(6);
  expect(romanNumeralDecoder('MMVIII')).toBe(2008);
  expect(romanNumeralDecoder('MDCLXVI')).toBe(1666);
})

it('Translates Roman numerals into integers where numeral ends with IV (4) or IX (9)', function() {
  expect(romanNumeralDecoder('IV')).toBe(4);
  expect(romanNumeralDecoder('IX')).toBe(9);
  expect(romanNumeralDecoder('XIX')).toBe(19);
  expect(romanNumeralDecoder('MMIX')).toBe(2009);
  expect(romanNumeralDecoder('MDCLXIV')).toBe(1664);
})