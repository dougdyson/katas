function validate(password) {
  password;
  return password.length <=6 //?
         ? /\p{N}/gu.test(password) //?
         : false;

// try incorporating the length validation as part of regex
}

validate('!ab123'); //?
validate('abcdefg'); //?
validate('123456'); //?
validate('abc123'); //?
validate('abcdef'); //?


module.exports = validate;