function isPrime(number) {

  if (typeof(number) !== 'number' || number === null || number < 2) {
    return false;
  }

  // this works but is not scalable
  return (number % 2 === 0 || number % 3 === 0) ? true : false;

  // recursion or reduce seem like possible approaches
  // the trick is reducing the amount of computation required as much as possible, but
  // calculating whether a modulo divisor is necessary perhaps costs as much as
  // calculating the modulo operatoin result

}

module.exports = isPrime;