const s = "Hello World, Hello!";
// find space
const r = /\s/g;
// find word
const i = r.exec(s).index; //?
// respell word
const pigWord = s.slice(1, i) + s.slice(0, 1).toLowerCase().concat('ay'); //?

// The above looks like a good candidate for reduce

const pw = s.split(' ').reduce((acc,v,x,arr) =>  ) //?

