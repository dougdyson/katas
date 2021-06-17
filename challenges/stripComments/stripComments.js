const strippedComments = (input, markers) => input.slice(0, input.indexOf(markers[0]));

module.exports = strippedComments;

strippedComments('apples, plums | and bananas', '|'); //? 

// [X] simple case: single line & one marker
// [] multi-line
// [] array of markers

// array method, leaving for temp ref:
// return input.slice(markers[0], [...input].findIndex(char => char === markers[0]))
