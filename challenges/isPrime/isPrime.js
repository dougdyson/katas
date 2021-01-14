const primeNumbers = require('./primeNumbers');
const primes = primeNumbers();

function isPrime(number) {

  // rudimentary input validation
  if (typeof(number) !== 'number' || number === null || number < 2) return false;

  // check precalculated primes
  // if (primes.includes(number)) return true;
  
  // if input argument not in precalculated primes, test via modulo
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;

  // The above solution works but times out in the codewars test runner, which
  // generically tells you to make your code more effecient.

  // THOUGHTS
  // ========
  // Recursion or reduce are perhaps potential refactoring approaches.
  // The trick is reducing the amount of computation required as much as possible, but
  // calculating whether a modulo divisor is necessary perhaps costs as much as
  // calculating the modulo operation result.
  //
  // Since a 0 remainder within the modulo loop equates to not a prime number, perhaps 
  // examining the trend of the remainder is a way to reduce unnecessary computation. 
  // Such as, if the remainder is trending toward 0, adjust the algorithm to trend towards 1. 
  // As an example, a 1.5 remainder should iteratively calculate towards 1.0. Or conversely,
  // get to a 0 remainder as quickly as possible to rule out prime.
  //
  // Then, are there potential differences between checking if a number is prime or checking 
  // if a number is not prime? Are there ways to do one more efficiently than the other?
  //
  // In a way, I implemented a version of this, where I have an external file with the 
  // first thousand prime numbers and use it to validate numbers before any math is performed.
  // (Assuming tests will catch any potential data errors in the file.)
  // However, the numbers in the file are not large enough to avoid the problem of determining
  // prime for Very Large Numbers, which is where the computational demand needs to be optimized.
  //
  // After looking for a prime API service, I even found an even bigger list of known primes
  // (the biggest, so they say) - so technically, checking against this list would be a valid approach
  //
  // In doing some additional research, the square root can be used as a way to reduce unnecessary
  // computation. http://mathandmultimedia.com/2012/06/02/determining-primes-through-square-root/
  // The concept is that the factors in the equation repeat inverted after the square root.

}

module.exports = isPrime;