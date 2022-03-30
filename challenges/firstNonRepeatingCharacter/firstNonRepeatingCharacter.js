const firstNonRepeatingCharacter = (s) => {
  const charMap = s.split('')
  
  for (let i = 0; i < charMap.length; i++) {
    if (charMap.indexOf(charMap[i]) === charMap.lastIndexOf(charMap[i])) {
      return charMap[i]
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