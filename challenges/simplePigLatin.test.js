// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.
// codewars: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

const pigIt = require('./simplePigLatin');

it('Move the first letter of each word to the end of it, then add "ay" to the end', () => {
  expect(pigIt('Pig latin is cool!')).toBe('igPay atinlay siay oolcay!');
  expect(pigIt('This is my string.')).toBe('hisTay siay ymay tringsay.');
})