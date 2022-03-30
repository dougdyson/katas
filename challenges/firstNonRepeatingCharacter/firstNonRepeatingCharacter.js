// Regex solution v3
const firstNonRepeatingCharacter = s => 
  [...s].find(v => !s.match(new RegExp(v, `gi`))[1]) || ``;

// I knew regex was the way to go, especially since it
// seemed I was being forced into a for loop (red flag!)
// However, saving regex for refactor bc I need regex practice! 
const firstNonRepeatingCharacterV2 = (str) => {
  const lc = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (lc.indexOf(lc[i]) == lc.lastIndexOf(lc[i])) {
      return str[i]
    }
  };
  return '';
}

const firstNonRepeatingCharacterV1 = (s) => {
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