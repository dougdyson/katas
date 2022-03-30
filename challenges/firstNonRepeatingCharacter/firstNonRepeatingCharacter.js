const firstNonRepeatingCharacter = (string) => {
  
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
      return string[i]
    }
  };

  return '';
}

const firstNonRepeatingCharacterV1 = (s) => {
  // copilot solution
  const charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]]++;
    } else {
      charMap[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] === 1) {
      return s[i];
    }
  }
  return '';
}

module.exports = firstNonRepeatingCharacter;