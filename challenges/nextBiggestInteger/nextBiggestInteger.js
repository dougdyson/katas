const nextBiggestInteger = int => {
  
  // VALIDATE INPUT
  // return -1 for empty string, null, undefined, NaN, or negative numbers
  if (int === '' || int === null || int === undefined || isNaN(int) || int < 0) return -1;
  
  // maximum number possible
  const maxInt = parseInt(int.toString().split('').sort().reverse().join('')); //?
  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1;

  // convert int to digits of digits
  const digits = int.toString().split(''); //?

  // reduceRight digits where digits[i] > digits[i-1]
  const i = digits.reduceRight((acc, digit, index, digits) => {
    digit; //?
    digits[index-1]; //?
    if (digit > digits[index - 1]) {
      // swap digits[i] and digits[i-1]
      digits[index] = digits[index - 1];
      digits[index - 1] = digit;
    }
    acc = parseInt(digits.join('')); //?
    return acc; //?
  },0); //?
}


  
  // Swapping approach: from the right, swap lower digit with higher digit appended to the right
  // and keep swapping/appending until the next higher digit is found
  // 19633221         121
  // 19633212         112
  // 19633122         211
  // 19631223
  // 19612233
  // 19122336
  // 11223369 -> no more swapping possible
  // 12123369 -> work from left to right to find the next highest digit and swap it
  // 21123369 -> swap lower digit with higher digit, do until greater than original number
  


const nextBiggestIntegerV1 = int => {
  
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
    
    // create digits of digits from nextInt
    const nextIntDigits = nextInt.toString().split('');

    // create temp associativeDigits object
    const tempAssociativeDigits = {...associativeDigits};
    
    // decrement tempAssociativeDigits[digit] for each digit in nextIntDigits
    nextIntDigits.map(digit => tempAssociativeDigits[digit]--);
      
    // check that all associativeDigits[digit] are 0
    if (Object.values(tempAssociativeDigits).every(value => value === 0)) return nextInt;

    nextInt = nextInt + 1;
    
  };

  return nextInt;
}

// sb 19633221 => 21123369
// nextBiggestInteger(19633221); //?
// nextBiggestInteger(414); //?
nextBiggestInteger(12); //?
// sb 3421 => 4123
// nextBiggestInteger(3421); //?

module.exports = nextBiggestInteger;