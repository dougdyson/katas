function romanNumeralDecoder (romanNumeral) {

  if (typeof(romanNumeral) !== 'string' || romanNumeral === '') return null;
  
  const validRomanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'L', 'C', 'D', 'M'];
  const romanNumerals = [{'I':1}, {'V':5}, {'X':10}, {'L':50}, {'C':50}, {'D':500}, {'M':1000}];

  

  const length = romanNumeral.length;
  const romanNumeralArr = romanNumeral.split('');

  // test for non-valid strings
  if (!validRomanNumerals.includes(romanNumeral)) {
    return null;
  }
  
  return romanNumeral;

}

module.exports = romanNumeralDecoder;