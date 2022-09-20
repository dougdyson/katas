const scramble = (str1, str2) => {
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

module.exports = scramble;