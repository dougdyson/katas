const nextBiggestInteger = int => {
  
  // VALIDATE INPUT
  // return -1 for empty string, null, undefined, NaN, or negative numbers
  if (int === '' || int === null || int === undefined || isNaN(int) || int < 0) return -1;
  
  // convert int to array of digits
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
    
    // create array of digits from nextInt
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

// sb 414
// nextBiggestInteger(18766555440); //?

module.exports = nextBiggestInteger;