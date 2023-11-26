function reverseString(str) {
  return str.split('').reverse().join('');
}

function stringCheck(data) {
  const isTrue = typeof data == String(typeof '');

  if (isTrue) {
    return isTrue;
  }

  console.warn(`Wrong type of received data [ ${data} ]`);

  return false;
}

(typeof module != String(void 0) ? module : {}).exports = {
  reverseString,
  stringCheck,
};
