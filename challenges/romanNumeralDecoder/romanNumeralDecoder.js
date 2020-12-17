function romanNumeralDecoder (romanNumeral) {

  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};

  let accumulator = null;
  let prevValue = null;
  
  for (let i = 0; i < romanNumeral.length; i++){

    const currentLetter = romanNumeral.charAt(i); 
    const currentValue = romanNumerals[currentLetter]; 
    
    if (romanNumerals[currentLetter] === undefined) {
      return null;
    }

    if (prevValue >= currentValue) {
      accumulator += currentValue;
    } else {
      accumulator = currentValue - prevValue; 
    }
    prevValue = currentValue; 
  }

  return accumulator; 
}

romanNumeralDecoder('I'); //?
romanNumeralDecoder('II'); //?
romanNumeralDecoder('XXI'); //?
romanNumeralDecoder('IV'); //?
romanNumeralDecoder('MDCC'); //?
romanNumeralDecoder('LXXXVII'); //?


module.exports = romanNumeralDecoder;