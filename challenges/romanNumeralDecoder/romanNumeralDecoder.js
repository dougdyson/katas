function romanNumeralDecoder (romanNumeral) {

  // refactor this function to use an array and reduce
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

// // ==================================================
// // This is the first solution. 
// // I decided to not create an array from the input argument.
// // My thinking was that since every character in the input argument needs to be evaluated,
// // and characters in a string are iterable, should be possible to solve without creating an array 
// // For the most part, this worked out OK.
// // Seeing that I needed an accumulator, going to do a refactor using an array with the reduce method.
//
// function romanNumeralDecoder (romanNumeral) {

//   if (romanNumeral === null) return null;
  
//   const romanNumerals = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  
//   let decodedNumeral = null;
//   let accumulator = null;
//   let prevValue = null;
  
//   for (let i = 0; i < romanNumeral.length; i++){
    
//     const currentLetter = romanNumeral.charAt(i); 
//     const currentValue = romanNumerals[currentLetter]; 
    
//     if (romanNumerals[currentLetter] === undefined) {
//       return null;
//     }

//     if (prevValue >= currentValue) { 
//       accumulator += currentValue;
//       decodedNumeral+= currentValue;
//     } else {
//       accumulator = currentValue - (prevValue * 2); 
//       decodedNumeral += accumulator;
//     }
//     prevValue = currentValue;
//   }

//   return decodedNumeral; 
// }

// romanNumeralDecoder('I');  
// romanNumeralDecoder('II');  
// romanNumeralDecoder('IV'); 
// romanNumeralDecoder('XXI');  
// romanNumeralDecoder('XLIV'); 
// romanNumeralDecoder('MMV'); 
// romanNumeralDecoder('LXXXVIII'); 
// romanNumeralDecoder('MDCLXIV');  


module.exports = romanNumeralDecoder;