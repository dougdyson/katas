tfunction romanNumeralDecoder (romanNumeral) {

ype  if (typeof(romanNumeral) !== 'string' || romanNumeral === '') return null;
  
  const validRomanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'L', 'C', 'D', 'M'];

  const length = romanNumeral.length;
  const romanNumeralArr = romanNumeral.split();


  
  return romanNumeral;

}

module.exports = romanNumeralDecoder;