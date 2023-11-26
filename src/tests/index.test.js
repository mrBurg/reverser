const { reverseString } = require('../../public/js/common');

const data = 'abcdefghijklmnopqrstuvwxy';

test('Pass a string to reverse it', () => {
  expect(reverseString(data)).toBe(data.split('').reverse().join(''));
});
