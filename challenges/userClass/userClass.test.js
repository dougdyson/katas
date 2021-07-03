const User = require('./userClass.js'); //?

test('Class successfully created with default rank of -8', () => {
  const NewUser = new User(); //?
  expect(NewUser.rank).toBe(-8)
});

test('Class successfully created with default progress of 0', () => {
  const NewUser = new User(); //?
  expect(NewUser.progress).toBe(0)
});