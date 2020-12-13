function romanNumeralDecoder (romanNumeral) {

  if (typeof(romanNumeral) !== 'string' || romanNumeral === '') return null;
  
  const validRomanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'L', 'C', 'D', 'M'];

  const length = romanNumeral.length;
  const romanNumeralArr = romanNumeral.split();

  console.log(romanNumeralArr);

  // test for non-valid strings
  if (!validRomanNumerals.includes(romanNumeral)) {
    return null;
  }


  
  return romanNumeral;

}

module.exports = romanNumeralDecoder;