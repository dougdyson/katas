const nextBiggestInteger = int => {

  // convert int to array of digits
  const digits = int.toString().split(''); //?

  // maximum number possible
  const maxInt = parseInt(digits.sort().reverse().join('')); //?

  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1; //?

  // int + 1
  let nextInt = int + 1; //?

  // add +1 to int and check to see if all digits are in int in any order
  while (nextInt <= maxInt) {
    // create array of digits from nextInt
    const nextIntDigits = nextInt.toString().split(''); //?
    
    // check if all digits are in int in any order
    if (digits.every(digit => nextIntDigits.includes(digit))) {
      return nextInt;
    }

    // increment nextInt
    nextInt = nextInt + 1; //?
  }


}

nextBiggestInteger(12); //?

module.exports = nextBiggestInteger;