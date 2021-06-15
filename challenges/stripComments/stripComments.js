const strippedComments = (input, markers) => {

  let marker = markers[0]; //?
  return [...input].reduce((a, v, i, arr) => arr[i] === marker ? a = a : a = a + arr[i]  ) //?

}

strippedComments("apples, plums and | bananas", '|'); //? 

module.exports = strippedComments;