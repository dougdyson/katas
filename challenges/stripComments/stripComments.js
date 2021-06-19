const strippedComments = (input, markers) => {

  const slice = (m, s) => s.split(/\n/)
                           .reduce((a,v) => v.includes(m) ? a += '\n' + v.slice(0, v.indexOf(m)) : a += '\n' + v, '')
                           .trim();

  return markers.reduce((a, m) => a = slice(m, a), input);

}
module.exports = strippedComments;