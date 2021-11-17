const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);
  let range = [];
  r.forEach((v) => range.push(v));
  return range.toString();
}

let test = rangeExtraction([-4,-3,-2,-1,0,2,4]);
test
test = rangeExtraction([-2,-1,0,2,4,5]);
test
// test = rangeExtraction([-2,-1,0,1,2,4,5,6]);
// test

module.exports = rangeExtraction