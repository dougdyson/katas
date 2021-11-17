const rangeExtraction =  (r) => {
  // initialize output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    const li = range.length-1; // last index of range array
    if (r[i] - r[i-1] != 1) {
      range.push(r[i])
    }
    else {
      const lookingFor = r[i-1].toString()
      lookingFor
      const cut = range[li].toString().indexOf(lookingFor)
      cut
      range[li] = range[li].toString().slice(cut) + `-${r[i]}`;
    }
  }
  range
  return range.toString();
}

rangeExtraction([-20,-19,-18,-4,-3,-2,-1,0,1,2,3,7,8,9,11,12,13,20,21,22,23]);


module.exports = rangeExtraction