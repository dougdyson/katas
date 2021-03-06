function pigItV1(s) {
  return s.split(/\b/)
          .reduce((a, v) => /\w/.test(v) ? a += v.slice(1) + v.slice(0,1) + 'ay' : a += v, '');
}

// The above V1 is not too bad. However, after submitting this solution,
// I reviewed other solutions which used regex much more effectively with
// much less code.
//
// Will refactor with more effective regex/less code.


function pigIt(s){
  // s.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  return s.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3") //?
}

pigIt("O tempora o mores !");

module.exports = pigIt;