function romanNumeralDecoder (romanNumeral) {

  if (typeof(romanNumeral) !== 'string' || romanNumeral === '') return null;
  
  const validRomanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'L', 'C', 'D', 'M'];
  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':50, 'D':500, 'M':1000};

  const length = romanNumeral.length;
  let decodedNumeral = null;

  for (let i = 0; i < length; i++){

    // get each char
    const currentLetter = romanNumeral.charAt(i) //?
    decodedNumeral = decodedNumeral + romanNumerals[currentLetter]; //?

  }
  
  return decodedNumeral;
;

}

console.log(romanNumeralDecoder('XXI')); 


module.exports = romanNumeralDecoder;