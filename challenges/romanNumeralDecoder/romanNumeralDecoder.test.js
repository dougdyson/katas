// get from code wars
// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

const romanNumeralDecoder = require('./romanNumeralDecoder');

it.skip('Returns null if input parameter is empty or null', function() {
  expect(romanNumeralDecoder('')).toBe(null);
  expect(romanNumeralDecoder(null)).toBe(null);
})

it.skip('Returns null if input is not a string', function() {
  expect(romanNumeralDecoder(2)).toBe(null);
  expect(romanNumeralDecoder({})).toBe(null);
  expect(romanNumeralDecoder([])).toBe(null);
})

it.skip('Returns null if input contains an invalid roman numeral', function() {
  expect(romanNumeralDecoder('K')).toBe(null);
  expect(romanNumeralDecoder('%')).toBe(null);
  expect(romanNumeralDecoder('-')).toBe(null);
})

it('Translates Roman numerals into integers', function() {
  expect(romanNumeralDecoder('I')).toBe(1); // smallest roman numeral
  expect(romanNumeralDecoder('MMMDCCCLXXXVIII')).toBe(3888); // largest roman numeral
  expect(romanNumeralDecoder('XXI')).toBe(21);
  expect(romanNumeralDecoder('VI')).toBe(6);
  expect(romanNumeralDecoder('MMVIII')).toBe(2008);
  expect(romanNumeralDecoder('MDCLXVI')).toBe(1666);
})

it('Translates Roman numerals into integers where numeral ends with IV (4) or IX (9)', function() {
  expect(romanNumeralDecoder('IV')).toBe(4);
  expect(romanNumeralDecoder('IX')).toBe(9);
  expect(romanNumeralDecoder('XIV')).toBe(14);
  expect(romanNumeralDecoder('MMIX')).toBe(2009);
  expect(romanNumeralDecoder('MDCLXIV')).toBe(1664);
})