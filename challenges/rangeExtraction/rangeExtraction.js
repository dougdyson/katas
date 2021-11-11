const rangeExtraction = (r) => r.reduce((a,v) => a += `,${String(v)}`)

module.exports = rangeExtraction;