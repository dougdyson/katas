let re1 = /ab+c/; //?

let re2 = new RegExp('ab+c'); //?

let myRe = /d(b+)d/g;
let myArray = myRe.exec('bbbbbbbddddcdbbdbsbdz'); //?

myArray[1]; //?

// find space
const phrase = / /g;
const space = phrase.exec('Hello World!'); //?

// find word
const p = "Hello World!";
const r = / /g;
const i = r.exec(p).index; //?
const w = p.slice(0, i); //?


// respell word

