const strippedComments = (input, markers) => {

  return input.split(/\n/)
              .reduce((a,v) => v.includes(markers[0]) ? a += '\n' + v.slice(0, v.indexOf(markers[0])) : a += '\n' + v, '')
              .trim();

}
module.exports = strippedComments;

// [X] simple case: single line & one marker
// [X] multi-line
// [] array of markers