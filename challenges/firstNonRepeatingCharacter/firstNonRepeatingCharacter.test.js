// from https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// Write a function named first_non_repeating_letter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. 
// For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("")

const firstNonRepeatingCharacter = require('./firstNonRepeatingCharacter');

describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    expect(firstNonRepeatingCharacter('stress')).toBe('t');
    expect(firstNonRepeatingCharacter('a')).toBe('a');
    expect(firstNonRepeatingCharacter('moonmen')).toBe('e');
  });
});

describe('Case sensitivity tests', function() {
  it('should handle case differences', function() {
    expect(firstNonRepeatingCharacter('sTreSS')).toBe('T');
  });

});

describe('All repeating characters test', function() {
  it('should handle case differences', function() {
    expect(firstNonRepeatingCharacter('sSss')).toBe('');
  });

});