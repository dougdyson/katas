const nextBiggestInteger = int => {

  // This will be the combination of the 2 previous functions,
  // where if int matches the 2 function target format, it will
  // use the V2 function, otherwise it will use the V1 function.

  // VALIDATE INPUT
  // return -1 for empty string, null, undefined, NaN, or negative numbers
  if (int === '' || int === null || int === undefined || isNaN(int) || int < 0) return -1;
  
  // convert int to digits of digits
  const digits = int.toString().split(''); //?
  
  // maximum number possible
  const maxDigit =  int.toString().split('');
  const maxInt = parseInt(maxDigit.sort().reverse().join('')); //?
  
  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1;

  // slice digits fom index 1 to end
  
  const digitsFromIndex1 = digits.slice(1); //?
  const sortedDigitsFromIndex1 = digits.slice(1).sort().reverse(); //?

 
  if (digitsFromIndex1.join('') === sortedDigitsFromIndex1.join('')) return descendingSortMethod(int); //?
  else return associativeArrayMethod(int);
}
  
const descendingSortMethod = int => {
  
  // convert int to array of digits
  const digits = int.toString().split(''); //?

  // create ascending sorted array of digits from int
  const ascDigits = int.toString().split('').sort(); //?

  // reduce digits and make sorting changes to ascDigits
  return digits.reduceRight((acc, digit, index, digits) => {

    digit
    digits[index - 1] //?
    index
    
    // if digit is less than next digit
    if (digit > digits[index - 1]) {

      digit
      index
      const nextDigit = digits[index - 1] //?

      // find index of next highest digit in ascDigits
      const nextHighestIndex = ascDigits.findIndex(d => d > nextDigit); //?

      // remove the next highest digit from ascDigits
      const nextHighestDigit = ascDigits.splice(nextHighestIndex, 1)[0]; //?

      // splice nextHighestDigit into ascDigits at index
      ascDigits.splice(0, 0, nextHighestDigit); //?
      
      // convert to integer
      acc = parseInt(ascDigits.join('')); //?

      // if acc is less than int, call nextBiggestIntegerV2 with acc
      // if (acc < int) acc = nextBiggestIntegerV1(int); //?
    }

    return acc; //?

   }, 0);
}

const associativeArrayMethod = int => {
  
  // VALIDATE INPUT
  // return -1 for empty string, null, undefined, NaN, or negative numbers
  if (int === '' || int === null || int === undefined || isNaN(int) || int < 0) return -1;
  
  // convert int to digits of digits
  const digits = int.toString().split(''); //?
  
  // maximum number possible
  const maxInt = parseInt(digits.sort().reverse().join('')); //?
  
  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1;

  // map instances of digits
  const associativeDigits = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0};
  digits.forEach(digit => associativeDigits[digit] += 1);

  // next integer from int
  let nextInt = int + 1; //?

  while (nextInt < maxInt) {

    // if nextInt has the same digits as int
    if (nextInt.toString().split('').every(digit => associativeDigits[digit] > 0)) {
    
      // create digits of digits from nextInt
      const nextIntDigits = nextInt.toString().split('');

      // create temp associativeDigits object
      const tempAssociativeDigits = {...associativeDigits};
      
      // decrement tempAssociativeDigits[digit] for each digit in nextIntDigits
      nextIntDigits.map(digit => tempAssociativeDigits[digit]--);
        
      // check that all associativeDigits[digit] are 0
      if (Object.values(tempAssociativeDigits).every(value => value === 0)) return nextInt;
    }

    nextInt = nextInt + 1;
    
  };

  return nextInt;
}

// sb 19633221 => 21123369
// nextBiggestInteger(19633221); //?
// nextBiggestInteger(414); //?
// nextBiggestInteger(12); //?
// sb 34211 => 41123
// nextBiggestInteger(34211) //?
nextBiggestInteger(315); //?

// nextBiggestInteger(59777763110); //?

module.exports = nextBiggestInteger;