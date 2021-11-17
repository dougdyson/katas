const rangeExtraction =  (r) => {
  // initialize output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    const li = range.length-1; // last index of range array
    if (r[i] - r[i-1] != 1) {
      range.push(r[i])
    } else {
      // find the last '-'
      const sliceFrom = range[li].toString().lastIndexOf('-')
      sliceFrom
      // don't slice < 0
      if (sliceFrom <= 0){
      range[li] = range[li].toString().slice(sliceFrom) + `-${r[i]}`;
      }
    }
  }
  range
  return range.toString();
}

rangeExtraction([-20,-19,-18,-3,-2,-1,0,1,6,7,8,9,10,20,21,22]);


module.exports = rangeExtraction