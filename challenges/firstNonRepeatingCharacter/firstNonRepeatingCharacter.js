// Regex solution v3
const firstNonRepeatingCharacter = s => 
  [...s].find(v => !s.match(new RegExp(v, `gi`))[1]) || ``;

const firstNonRepeatingCharacterV2 = s => {
  const lc = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (lc.indexOf(lc[i]) == lc.lastIndexOf(lc[i])) {
      return s[i]
    }
  };
  return '';
}

const firstNonRepeatingCharacterV1 = s => {
  // copilot solution = YUCK!
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