const nextBiggestInteger = (int) => {
  const num = int.toString().split('').sort().reverse().join('');
  return parseInt(num);
}

module.exports = nextBiggestInteger;