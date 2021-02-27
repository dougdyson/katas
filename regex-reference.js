const re1 = /ab+c/; //?

const re2 = new RegExp('ab+c'); //?

const myRe = /d(b+)d/g;
const myArray = myRe.exec('bbbbbbbddddcdbbdbsbdz'); //?

myArray[1]; //?

// find space
const phrase = / /g;
const space = phrase.exec('Hello World!'); //?

// find word
const s = "Hello World!";
const r = / /g;
const i = r.exec(s).index; //?
// respell word
const pigWord = s.slice(1, i) + s.slice(0, 1).toLowerCase() + 'ay'; //?

// The above looks like a good candidate for reduce

