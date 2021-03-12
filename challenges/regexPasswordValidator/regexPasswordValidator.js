function validate(password) {
  return password.length <=6 
         ? /((put answer here))/.test(password)
         : false;

// try incorporating the length validation as part of regex
}

module.exports = validate;