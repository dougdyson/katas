const scrambleCopilot = (str1, str2) => {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  let result = true;
  str2Arr.forEach((letter) => {
    if (str1Arr.indexOf(letter) === -1) {
      result = false;
    } else {
      str1Arr.splice(str1Arr.indexOf(letter), 1);
    }
  });
  return result;
}

const scrambleV1 = (str1, str2) => {

  // create map of str1
  const str1Map = [str1.split('')].reduce((acc, letter) => {
    acc[letter] = acc[letter] + 1 || 1;
    return acc;
  }
  , {});

  const mapKeys = Object.keys(str1Map); //?

  // create map of str2
  const str2Map = str2.split('').reduce((acc, letter) => {
    acc[letter] = acc[letter] + 1 || 1;
    return acc;
  }
  , {});

  // check if str2Map is a subset of str1Map
  return Object.keys(str2Map).every((letter) => {
    return str1Map[letter] >= str2Map[letter];
  }
  );

}

const scramble = (str1, str2) => str2.split('').every(x => str1.split(x).length >= str2.split(x).length)

scramble('scriptjavx', 'javascript'); //?

module.exports = scramble;