const { reverseString } = require('./../../public/js/functions');

const data = 'abcdefghijklmnopqrstuvwxy';

test('Pass a string to reverse it', () => {
  expect(reverseString(data)).toBe(data.split('').reverse().join(''));
});
