const nextBiggestInteger = int => {

  // VALIDATE INPUT
  // return -1 for empty string, null, undefined, NaN, or negative numbers
  if (int === '' || int === null || int === undefined || isNaN(int) || int < 0) return -1;

  // convert int to array of digits
  const digits = int.toString().split(''); //?

  // maximum number possible
  const maxInt = parseInt(digits.sort().reverse().join('')); //?

  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1; //?

  // next integer from int
  let nextInt = int + 1; //?

  // add +1 to int and check to see if all digits are in the array in any order
  while (nextInt < maxInt) {
    
    // create array of digits from nextInt
    const nextIntDigits = nextInt.toString().split(''); //?

    // check each digit in nextIntDigits to if it is in maxInt
    nextIntDigits.findIndex((digit, idx) => maxInt);//?
    
    nextInt = nextInt + 1; //?
    
  };

  return nextInt; //?
}


nextBiggestInteger(414); //?

module.exports = nextBiggestInteger;