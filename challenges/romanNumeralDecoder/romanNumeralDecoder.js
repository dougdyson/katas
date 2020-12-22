function romanNumeralDecoder (romanNumeral) {

  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};

  let decodedNumeral = null;
  let accumulator = null;
  let prevValue = null;

  if (romanNumeral === null) return null;
  
  for (let i = 0; i < romanNumeral.length; i++){
    
    const currentLetter = romanNumeral.charAt(i); 
    const currentValue = romanNumerals[currentLetter];
    
    if (romanNumerals[currentLetter] === undefined) {
      return null;
    }

    if (prevValue >= currentValue) { 
      accumulator += currentValue;
      decodedNumeral+= currentValue;
    } else {
      accumulator = currentValue - (prevValue * 2);
      decodedNumeral += accumulator;
    }
    prevValue = currentValue;
  }

  return decodedNumeral; 
}

// romanNumeralDecoder('I'); //? 
// romanNumeralDecoder('II'); //? 
// romanNumeralDecoder('IV'); //?
// romanNumeralDecoder('XXI'); //? 
// romanNumeralDecoder('XLIV'); //?
// romanNumeralDecoder('MMV'); //?
// romanNumeralDecoder('LXXXVIII'); //?
//romanNumeralDecoder('MDCLXIV');  //?


module.exports = romanNumeralDecoder;