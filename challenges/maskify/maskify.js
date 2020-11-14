function maskify(string) {

  const chars = string.split('');

  for (let i = 0; i < (chars.length - 4); i++) {
    chars[i] = '#';   
  }
  
  return chars.join('');
}

module.exports = maskify;

// to check out: repeat
//
// function maskify(cc) {
//   return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
// }

