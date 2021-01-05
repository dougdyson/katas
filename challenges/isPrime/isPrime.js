const primeNumbers = require('./primeNumbers');
const primes = primeNumbers();

function isPrime(number) {

  // rudimentary input validation
  if (typeof(number) !== 'number' || number === null || number < 2) return false;

  // check precalculated primes
  if (primes.includes(number)) return true;

  // if input argument not in precalculated primes, test via modulo
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;

  // recursion or reduce are perhaps potential refactoring approaches.
  // the trick is reducing the amount of computation required as much as possible, but
  // calculating whether a modulo divisor is necessary perhaps costs as much as
  // calculating the modulo operation result.

}

module.exports = isPrime;