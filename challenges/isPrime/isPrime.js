function isPrime(number) {

  // rudimentary input validation
  if (typeof(number) !== 'number' || number === null || number < 2) {
    return false;
  }

  // the below works and passes the sample tests but it times out in the codewar test runner.
  // codewars' generic recommendation is refactoring for effeciency.
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;

  // recursion or reduce seem like potential approaches.
  // the trick is reducing the amount of computation required as much as possible, but
  // calculating whether a modulo divisor is necessary perhaps costs as much as
  // calculating the modulo operation result.

}

module.exports = isPrime;