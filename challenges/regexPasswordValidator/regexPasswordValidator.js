function validate(password) {
  password;
  return password.length <=6 //?
         ? /\w+/.test(password) //?
         : false;

// try incorporating the length validation as part of regex: n{a,b}
// determine OR syntax
// determine syntax for negation
// capture groups
}

validate('!ab123'); //?
validate('!@#$%^'); //?
validate('abcdefg'); //?
validate('123456'); //?
validate('abc123'); //?
validate('abcdef'); //?
validate('abc'); //?
validate('123'); //?


module.exports = validate;