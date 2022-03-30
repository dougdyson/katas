const firstNonRepeatingCharacter = (s) => {
  let match = ''

  s.split('').map((element,index) => {s.includes(element,index+1) ? null : match = element})
  
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