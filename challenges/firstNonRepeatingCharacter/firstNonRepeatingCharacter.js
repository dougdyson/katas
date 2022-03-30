// v3 - Regex solution
const firstNonRepeatingCharacter = s => 
  [...s].find(c => !s.match(new RegExp(c, `gi`))[1]) || ``;

// v2 - loop solution
const firstNonRepeatingCharacterV2 = s => {
  const lc = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (lc.indexOf(lc[i]) === lc.lastIndexOf(lc[i])) {
      return s[i]
    }
  };
  return '';
}

// v1 - copilot solution
const firstNonRepeatingCharacterV1 = s => {
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