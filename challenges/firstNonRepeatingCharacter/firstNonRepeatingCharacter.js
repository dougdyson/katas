const firstNonRepeatingCharacter = (s) => {
  let match = ''

  s.split('').reduce((acc,cv,idx) => {
    (cv.includes(cv, idx + 1)) ? match = '' : match = cv
  }, '')
  
  return match;
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