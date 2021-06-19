const strippedComments = (input, markers) => {

  const slice = (a, m) => a.split(/\n/)
                           .reduce((a,v) => v.includes(m) ? a += '\n' + v.slice(0, v.indexOf(m)) : a += '\n' + v, '')
                           .trim();

  return markers.reduce((a, m) => a = slice(a, m), input);

}
module.exports = strippedComments;