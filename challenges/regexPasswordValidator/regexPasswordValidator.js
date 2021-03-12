function validate(password) {
  return password.length <=6 
         ? /((put answer here))/.test(password)
         : false;
}

module.exports = validate;