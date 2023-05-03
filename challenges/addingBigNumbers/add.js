function add(a, b) {

  const aArr = a.split('')
  const bArr = b.split('')
  const sum = []
  let c = 0

  while (aArr.length || bArr.length || c) {
    c += ~~aArr.pop() + ~~bArr.pop()
    sum.unshift(c % 10)
    c = c > 9
  }

  return sum.join('')

}

module.exports = add