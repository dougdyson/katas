// from https://www.codewars.com/kata/52685f7382004e774f0001f7
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

const humanReadableTime = require('./humanReadableTime')

it('return 00:00:00', () => {
  expect(humanReadableTime(0)).toBe('00:00:00');
})

it('return 00:00:59', () => {
  expect(humanReadableTime(59)).toBe('00:00:59');
})

it('return 00:01:00', () => {
  expect(humanReadableTime(60)).toBe('00:01:00');
})

it('return 00:01:30', () => {
  expect(humanReadableTime(90)).toBe('00:01:30');
})

it('return 00:59:59', () => {
  expect(humanReadableTime(3599)).toBe('00:59:59');
})

it('return 01:00:00', () => {
  expect(humanReadableTime(3600)).toBe('01:00:00');
})

it('return 12:34:56', () => {
  expect(humanReadableTime(45296)).toBe('12:34:56');
})

it('return 23:59:59', () => {
  expect(humanReadableTime(86399)).toBe('23:59:59');
})

it('return 24:00:00', () => {
  expect(humanReadableTime(86400)).toBe('24:00:00');
})

it('return 99:59:59', () => {
  expect(humanReadableTime(359999)).toBe('99:59:59');
})
