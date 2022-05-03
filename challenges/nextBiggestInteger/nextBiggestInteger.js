const nextBiggestInteger = int => {

  // convert int to array of digits
  const digits = int.toString().split(''); //?

  // maximum number possible
  const maxNum = parseInt(digits.sort().reverse().join('')); //?
  int

  // if int is already the maximum possible number, return -1
  if (int === maxNum) return -1; //?
}

nextBiggestInteger(333); //?

module.exports = nextBiggestInteger;