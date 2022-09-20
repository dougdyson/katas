const nextBiggestIntegerV1 = int => {

  // VALIDATE INPUT
  // return -1 for empty string, null, undefined, NaN, or negative numbers
  if (int === '' || int === null || int === undefined || isNaN(int) || int < 0) return -1;
  
  // convert int to digits of digits
  const digits = int.toString().split('');
  
  // maximum number possible
  const maxDigit =  int.toString().split('');
  const maxInt = parseInt(maxDigit.sort().reverse().join(''));
  
  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1;

  const digitsFromIndex1 = digits.slice(1);
  const sortedDigitsFromIndex1 = digits.slice(1).sort().reverse();
 
  if (digitsFromIndex1.join('') === sortedDigitsFromIndex1.join('')) return descendingSortMethod(int); //?
  else return associativeArrayMethod(int);
}
  
const descendingSortMethod = int => {
  
  // convert int to array of digits
  const digits = int.toString().split('');

  // create ascending sorted array of digits from int
  const ascDigits = int.toString().split('').sort();

  // reduce digits and make sorting changes to ascDigits
  return digits.reduceRight((acc, digit, index, digits) => {
    
    // if digit is less than next digit
    if (digit > digits[index - 1]) {

      const nextDigit = digits[index - 1]

      // find index of next highest digit in ascDigits
      const nextHighestIndex = ascDigits.findIndex(d => d > nextDigit);

      // remove the next highest digit from ascDigits
      const nextHighestDigit = ascDigits.splice(nextHighestIndex, 1)[0];

      // splice nextHighestDigit into ascDigits at index
      ascDigits.splice(0, 0, nextHighestDigit);
      
      // convert to integer
      acc = parseInt(ascDigits.join(''));

    }

    return acc;

   }, 0);
}

const associativeArrayMethod = int => {
  
  // convert int to digits of digits
  const digits = int.toString().split('');
  
  // maximum number possible
  const maxInt = parseInt(digits.sort().reverse().join(''));

  // map instances of digits
  const associativeDigits = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0};
  digits.forEach(digit => associativeDigits[digit] += 1);

  // next integer from int
  let nextInt = int + 1;

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

const nextBiggestIntegerCommented = int => {

  // create array of digits from int
  const digits = int.toString().split('');
  // length of digits for use in interogating digits from right to left
  let i = digits.length-1;
  
  // find first digit from right that is less than the digit to its left
  while(i > 0) {
    if (digits[i]>digits[i-1]) break;
    i--;
  }
  if (i == 0) return -1; // if no such digit is found, return -1

  // splice digits from the i
  const endDigits = digits.splice(i).sort();
  // get the digit from the immediate left of the endDigits splice
  let leftDigit = digits[digits.length-1];
  
  // find the smallest digit in the endDigits that is greater than leftDigit
  for (i = 0; i < endDigits.length; ++i) {
    if (endDigits[i] > leftDigit) break;
  }

  // swap the leftDigit with the smallest digit in the endDigits
  digits[digits.length-1] = endDigits[i]
  endDigits[i] = leftDigit;

  // return the integer formed by the digits
  const res = digits.concat(endDigits);
  const num = parseInt(res.join(''));
  return num;
}

const nextBiggestInteger = int => {

  const digits = int.toString().split('');
  let i = digits.length-1;
  
  while(i > 0) {
    if (digits[i]>digits[i-1]) break;
    i--;
  }
  if (i == 0) return -1;

  const endDigits = digits.splice(i).sort();
  let leftDigit = digits[digits.length-1];
  
  for (i = 0; i < endDigits.length; ++i) {
    if (endDigits[i] > leftDigit) break;
  }

  digits[digits.length-1] = endDigits[i]
  endDigits[i] = leftDigit;

  const res = digits.concat(endDigits);
  const num = parseInt(res.join(''));
  return num;
}



// // sb 19633221 => 21123369
// nextBiggestInteger(19633221); //?
// nextBiggestInteger(414); //?
// nextBiggestInteger(12); //?
// // sb 34211 => 41123
// nextBiggestInteger(34211) //?
// nextBiggestInteger(315); //?
// // sb 59777763110 => 60113577779
// nextBiggestInteger(59777763110); //?

module.exports = nextBiggestInteger;