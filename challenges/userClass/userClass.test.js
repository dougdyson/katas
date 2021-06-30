const User = require('./userClass');

test('We check to see if the class exists', () => {
  const User = new User();
  expect(User).toBe(true)
});