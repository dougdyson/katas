function pigIt(s) {
  return s.split(' ').reduce((a, v) => a += v.slice(1) + v.slice(0,1) + 'ay ', '').trim();
}

pigIt("hello world boom"); //?

module.exports = pigIt;