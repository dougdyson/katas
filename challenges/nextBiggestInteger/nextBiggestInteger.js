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
    
    // create temp array of digits
    const tempDigits = digits //?

    // create array of digits from nextInt
    const nextIntDigits = nextInt.toString().split(''); //?

    // check to see if all digits from nextIntDigits are in tempDigits
    const allDigits = nextIntDigits.every(digit => tempDigits.includes(digit));
    if (allDigits) {
      
      console.log(`all digits found for ${nextInt} in ${digits}`);
      
      digits.reduce((acc, digit) => {
        console.log(digit)
        // find first instance of digit in tempDigits
        const index = tempDigits.indexOf(digit); //?
        // remove digit from tempDigits
        tempDigits.splice(index, 1); //?
        console.log(`${tempDigits} and tempDigits length is ${tempDigits.length}`);
      }, 0); //?

      // if tempDigits is empty, all digits were found
      if (tempDigits.length === 0) return nextInt; //?

    }

    nextInt = nextInt + 1; //?
    
  };

  return nextInt; //?
}


nextBiggestInteger(114); //?

module.exports = nextBiggestInteger;