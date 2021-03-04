function pigIt(s) {
  return s.split(/\b/)
          .reduce((a, v) => /\w/.test(v) ? a += v.slice(1) + v.slice(0,1) + 'ay' : a += v, '');
}

pigIt("O tempora o mores !");

module.exports = pigIt;