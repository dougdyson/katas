// get from code wars
// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

const romanNumeralDecoder = require('./romanNumeralDecoder');

it('Returns null if input parameter is empty', function() {
  expect(romanNumeralDecoder('')).toBe(null);
})

it('Returns null if input is not a string', function(){
  expect(romanNumeralDecoder(2)).toBe(null);
})

it('Returns null if character is not a valid roman numeral', function(){
  expect(romanNumeralDecoder('K')).toBe(null);
})

it('Translates Roman numerals into integers', function() {
  expect(romanNumeralDecoder('I')).toBe(1);
  expect(romanNumeralDecoder('XXI')).toBe(21);
  expect(romanNumeralDecoder('IV')).toBe(4);
  expect(romanNumeralDecoder('MMVIII')).toBe(2008);
  expect(romanNumeralDecoder('MDCLXVI')).toBe(1666);
})
