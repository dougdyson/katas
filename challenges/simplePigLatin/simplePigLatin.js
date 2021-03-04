function pigIt(s) {
  return s.split(/\b/)
          .reduce((a, v) => /\w/.test(v) ? a += v.slice(1) + v.slice(0,1) + 'ay' : a += v, '');
}

// The above V1 is not too bad. However, after submitting this solution,
// I reviewed other solutions which used regex much more effectively with
// much less code.
//
// Will refactor with more effective regex/less code.

pigIt("O tempora o mores !");

module.exports = pigIt;