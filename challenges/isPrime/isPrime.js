function isPrime(number) {

  // any number less than 2 is not a prime number
  if (number < 2) return false;
  
  // numbers produced from factors of composite numbers
  // begin repeating after the square root of the product,
  // thus it is not necessary to repeat the calculation
  // past the product's square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;

// NOTES
// ========
// My first solution worked but timed out in the codewars test runner, which
// generically told me to make my code more effecient.
// 
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
// I implemented a version of this where I had an external file with the 
// first thousand prime numbers and used it to validate numbers before any math is performed.
// (Assuming tests will catch any potential data errors in the file.)
//
// However, the numbers in the file were not large enough to avoid the problem of determining
// prime for Very Large Numbers, which is where the computational demand needs to be optimized.
//
// After looking for a prime API service, I even found an even bigger list of known primes
// (the biggest, so they say) - so technically, checking against this list would be a valid approach
//
// In doing some additional research, discovered square root can be used as a way to reduce unnecessary
// computation. http://mathandmultimedia.com/2012/06/02/determining-primes-through-square-root/
// The concept is that the factors in the equation repeat inverted after the square root of the product.
//
// The square root approach worked and ran 500% faster and did not timeout on codewars!!!

