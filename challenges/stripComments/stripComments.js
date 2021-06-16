const strippedComments = (input, markers) => {

  // do for one marker first, then do for array of markers

  const marker = markers[0]; //?
  const comments = [...input].reduce((a, v, i, arr) => v === marker ? a : a + v ) //?

  return comments //?
}

strippedComments("apples, plums | and bananas", '|'); //? 

module.exports = strippedComments;