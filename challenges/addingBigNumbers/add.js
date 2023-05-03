function add(a, b) {

  const aArr = a.split('')
  const bArr = b.split('')
  const sum = []
  let c = 0

  while (aArr.length || bArr.length || c) {
    c += ~~aArr.pop() + ~~bArr.pop()
    sum.unshift(c % 10);
    (c > 9) ? c = 1 : c = 0
  }

  return sum.join('')

}

module.exports = add