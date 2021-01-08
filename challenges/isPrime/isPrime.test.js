// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

const isPrime = require('./isPrime');

it("Validation tests", () => {

  expect(isPrime(null)).toBe(false);
  expect(isPrime('')).toBe(false);
  expect(isPrime('K')).toBe(false);
  expect(isPrime({})).toBe(false);
  expect(isPrime([])).toBe(false);

});

it("Basic tests", () => {
  
  expect(isPrime(-3)).toBe(false);
  expect(isPrime(-2)).toBe(false);
  expect(isPrime(-1)).toBe(false);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  
});

it("Test prime", () => {
  expect(isPrime(5)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(41)).toBe(true);
  expect(isPrime(73)).toBe(true);
  expect(isPrime(75)).toBe(false);
  expect(isPrime(5099)).toBe(true);
  expect(isPrime(131071)).toBe(true);
  expect(isPrime(524287)).toBe(true);
  expect(isPrime(6700417)).toBe(true);
  expect(isPrime(2147483647)).toBe(true);
  
});

it("Test not prime", () => {
  
  expect(isPrime(4)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(8)).toBe(false);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(45)).toBe(false);
  expect(isPrime(-5)).toBe(false);
  expect(isPrime(-8)).toBe(false);
  expect(isPrime(-41)).toBe(false);
  
});
