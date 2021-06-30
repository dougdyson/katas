import User from './userClass.js';

const NewUser = new User(); //?

NewUser.exists; //?

test('Class successfully created', () => {
  expect(NewUser.exists).toBe(true)
});