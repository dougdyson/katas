const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1]-v=== 1 ? a : a += `,${String(v)}`)

  return r.reduce((a,v,i,arr) => { 
    console.log(arr[i+1]-v);
    return arr[i+1]-v === 1 ? a += `-${String(v)}` : a += `,${String(v)}`})
}

module.exports = rangeExtraction;