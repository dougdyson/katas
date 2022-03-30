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
  it('should return empty', function() {
    expect(firstNonRepeatingCharacter('sSss')).toBe('');
  });

});