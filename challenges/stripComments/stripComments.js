const strippedComments = (input, markers) => {

  return input.split(/\n/)
              .reduce((a,v) => v.includes(markers[0]) ? a += '\n' + v.slice(0, v.indexOf(markers[0])) : a += '\n' + v, '')
              .trim();

}
module.exports = strippedComments;

strippedComments('apples| and bananas', ['|']); //?
strippedComments('apples| and bananas\n2nd line\n3rd line!', ['|']); //?

// [X] simple case: single line & one marker
// [X] multi-line
// [] array of markers

// array method, leaving for temp ref:
// return input.slice(markers[0], [...input].findIndex(char => char === markers[0]))
