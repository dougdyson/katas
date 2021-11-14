const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);

  const range = r.reduce((a,v,i,arr) => {
    if (arr[i+1] - v != 1) a += `-${v}`
    else a += `,${v}`
    return a
  })
  return range;
}

let test = rangeExtraction([-2,-1,0,2,4,5]);
test
test = rangeExtraction([-2,-1,0,1,2,4,5,6]);
test

module.exports = rangeExtraction