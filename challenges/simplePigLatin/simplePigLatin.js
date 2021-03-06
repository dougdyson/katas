const pigIt = (s) => s.replace(/(\w)(\w*)/g,'$2$1ay');

// The above V2 uses a string instead of an array, since we can iterate
// through characters in a string as we would an array. This reduces
// code by not having to create an array from the string argument.
// 230% reduction in code!!!

function pigItV1(s) {
  return s.split(/\b/).reduce((a, v) => /\w/.test(v) ? a += v.slice(1) + v.slice(0,1) + 'ay' : a += v, '');
}

// The above V1 is not too bad. However, after submitting this solution,
// I reviewed other solutions which used regex much more effectively with
// much less code.
//
// Will refactor with more effective regex/less code.

pigIt("O tempora o mores !");   //?
pigItV1("O tempora o mores !"); //?

module.exports = pigIt;