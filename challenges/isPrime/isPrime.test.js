// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

const isPrime = require('./isPrime')

it("Validation tests", () => {

  expect(isPrime(null)).toBe(null);
  expect(isPrime('')).toBe(null);
  expect(isPrime('K')).toBe(null);
  expect(isPrime({})).toBe(null);
  expect(isPrime([])).toBe(null);

})

it("Basic tests", () => {
  
  expect(isPrime(0)).toBe(0);
  expect(isPrime(1)).toBe(1);
  expect(isPrime(2)).toBe(2);
  expect(isPrime(73)).toBe(73);
  expect(isPrime(75)).toBe(75);
  expect(isPrime(-1)).toBe(-1);
  
});

it("Test prime", () => {
  
  expect(isPrime(3)).toBe(3);
  expect(isPrime(5)).toBe(5);
  expect(isPrime(7)).toBe(7);
  expect(isPrime(41)).toBe(41);
  expect(isPrime(5099)).toBe(50);
  
});

it("Test not prime", () => {
  
  expect(isPrime(4)).toBe(4);
  expect(isPrime(6)).toBe(6);
  expect(isPrime(8)).toBe(8);
  expect(isPrime(9)).toBe(9);
  expect(isPrime(45)).toBe(45);
  expect(isPrime(-5)).toBe(-5);
  expect(isPrime(-8)).toBe(-8);
  expect(isPrime(-41)).toBe(-4);
  
});
