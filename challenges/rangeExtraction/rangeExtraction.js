const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);

  // [-2,-1,0,1,2]

  const range = r.reduce((a,v,i,arr) => {
    if (i === 0) a = `${v}-`
    else if (arr[i] - arr[i+1] != -1 ) a += `-${v}`
    return a
  })

  return range;

}

const test = rangeExtraction([-2,-1,0,1,2]);

module.exports = rangeExtraction