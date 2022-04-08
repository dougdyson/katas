const nextBiggestInteger = int => {

  // convert int to array of digits
  const digits = int.toString().split(''); //?

  // maximum number possible
  const maxNum = digits.sort().reverse().join(''); //?

  let lowestNum = null;

  // have to refactor with regex!
  for (let i = int + 1; i <= maxNum; i++){
    // convert i to array of strings
    const iDigits = i.toString().split(''); //?
    // chech each num in nums array to see if it isn't in digits array
    if (iDigits.every(num => digits.includes(num))) {
      lowestNum = i;
      break;
    }
  }

  return lowestNum; //?

}

const test = nextBiggestInteger(2143) //?

module.exports = nextBiggestInteger;