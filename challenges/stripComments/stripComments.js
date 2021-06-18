const strippedComments = (input, markers) => {

  const removedComments = (m) =>  input.split(/\n/).reduce((a,v) => v.includes(m) ? a += '\n' + v.slice(0, v.indexOf(m)) : a += '\n' + v, '').trim();

  return markers.reduce((a,v) => a += removedComments(v), '');

}
module.exports = strippedComments;

// [X] simple case: single line & one marker
// [X] multi-line
// [] array of markers