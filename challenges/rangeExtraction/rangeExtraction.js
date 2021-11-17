const rangeExtraction =  (r) => {
  // initialize output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    if (r[i] - r[i-1] != 1) {
      range.push(r[i])
    } else {
      const li = range.length-1; // last index of range array
      // find the last '-'
      const sliceFrom = range[li].toString().lastIndexOf('-')
      sliceFrom
      // don't slice < 0
      if (sliceFrom <= 0){
        sliceFrom
        range[li] = range[li].toString() + `-${r[i]}`;
      } else {
        range[li] = range[li].toString().slice(sliceFrom) + `-${r[i]}`
      }
    }
  }
  range
  return range.toString();
}

rangeExtraction([-20,-19,-18,-3,-2,-1,0,2,3,4,10,11,12]);


module.exports = rangeExtraction