const { reverseString, stringCheck } = require('../../public/js/common');

const data = 'abcdefghijklmnopqrstuvwxy';
const fakeData = 1;

test('Pass a string to reverse it', () => {
  expect(reverseString(data)).toBe(data.split('').reverse().join(''));
});

test('Pass a data to check type', () => {
  expect(stringCheck(fakeData)).toBe(true);
});
