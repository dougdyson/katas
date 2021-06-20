const strippedComments = (input, markers) => {

  const slice = (a, m) => a.split(/\n/)
                           .reduce((a,v) => v.includes(m) ? a += '\n' + v.slice(0, v.indexOf(m)).trim() : a += '\n' + v, '')

  return markers.reduce((a, m) => a = slice(a, m), input).trim(); //?

}
module.exports = strippedComments;
