const nextBiggestInteger = int => {

  // convert int to array of digits
  const digits = int.toString().split(''); //?

  // maximum number possible
  const maxInt = parseInt(digits.sort().reverse().join('')); //?

  // if int is already the maximum possible number, return -1
  if (int === maxInt) return -1; //?

  // next integer from int
  let nextInt = int + 1; //?

  // add +1 to int and check to see if all digits are in int in any order
  while (nextInt <= maxInt) {
    // create array of digits from nextInt
    const nextIntDigits = nextInt.toString().split(''); //?
    
    // check if all digits are in int in any order, need to remove matched ints
    if (nextIntDigits.every(digit => digits.includes(digit))) {
      return nextInt; //?
    }

    // increment nextInt
    nextInt = nextInt + 1; //?
  }
}

nextBiggestInteger(144); //?

module.exports = nextBiggestInteger