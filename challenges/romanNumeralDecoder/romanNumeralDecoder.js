function romanNumeralDecoder (romanNumeral) {

  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};

  let decodedNumeral = null;
  let accumulator = null;

  for (let i = 0; i < romanNumeral.length; i++){

    // get each char
    const currentLetter = romanNumeral.charAt(i) //?
    // check for invalid character
    if (romanNumerals[currentLetter] === undefined){
      return null;
    }
    // check if next character is higher value or end
    if (romanNumerals[currentLetter] >= romanNumerals[romanNumeral.charAt(i + 1)] && i + 1 != romanNumeral.length) {
      accumulator = accumulator + romanNumerals[currentLetter] //?
    }
    decodedNumeral = decodedNumeral + romanNumerals[currentLetter]; //?
  }
  
  return decodedNumeral;
;

}

console.log(romanNumeralDecoder('XXI')); 


module.exports = romanNumeralDecoder;