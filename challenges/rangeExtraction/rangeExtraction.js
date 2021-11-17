const rangeExtraction =  (r) => {
  // initialize output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    const li = range.length-1; // last index of range array
    (r[i] - r[i-1] != 1) ? range.push(r[i]) 
                         : range[li] = range[li].toString().slice(0,2) + `-${r[i]}`
  }
  return range.toString();
}

let test = rangeExtraction([-2,-1,0,1,2,4,5,]);
test;

module.exports = rangeExtraction