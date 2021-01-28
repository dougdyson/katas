function romanNumeralDecoder (romanNumeral) {
  
  // validate input variable
  if (typeof(romanNumeral) != 'string' || romanNumeral === '') return null;
  
  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  
  // used later to compare for IV (4) and IX (9)
  let prevValue = null;

  return romanNumeral.split('').reduceRight(function(decodedNumber, key) {  
    
    const currentValue = romanNumerals[key];
    
    prevValue > currentValue ? decodedNumber -=currentValue : decodedNumber += currentValue;
    
    prevValue = currentValue;
    
    return decodedNumber;

  }, null)

}

function romanNumeralDecoderV2 (romanNumeral) {
  
  if (romanNumeral === null) return null;
  
  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  
  let decodedNumeral = null;
  let prevValue = null;
  
  // calculate from right to left, rather than left to right
  // this avoids having to recalcuate for edge cases
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    
    const currentLetter = romanNumeral.charAt(i); 
    const currentValue = romanNumerals[currentLetter];

    // check if character is a valid roman numeral
    if (romanNumerals[currentLetter] === undefined) return null

    // check for edge case (i.e. IV for 4 or IX for 9)
    if (prevValue > currentValue) {
      decodedNumeral -=currentValue; //?
    } else {
      decodedNumeral += currentValue; //?
    }
    prevValue = currentValue;
  }

  return decodedNumeral;

  // Above is the second solution, which is much more straightforward and uses less code.
  // 
  // Since decodedNumeral is an acculuator variable, this appears a good candidate for .reduce
  // Going to do a refactor with reduce and see if it reduces code further.

}

// ==================================================
// This is the first solution. 
// I decided to not create an array from the input argument.
// My thinking was that since every character in the input argument needs to be evaluated,
// and characters in a string are iterable, should be possible to solve without creating an array. 
// For the most part, this worked out OK but am not happy with it - seems too long and the logic 
// is not as easy to follow as I would like.
// Seeing that I needed an accumulator, going to do a refactor using an array with the reduce method.
//
function romanNumeralDecoderV1 (romanNumeral) {

  if (romanNumeral === null) return null;
  
  const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  
  let decodedNumeral = null;
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
      decodedNumeral+= currentValue;
    } else {
      accumulator = currentValue - (prevValue * 2); 
      decodedNumeral += accumulator;
    }
    prevValue = currentValue;
  }

  return decodedNumeral; 
}

module.exports = romanNumeralDecoder;