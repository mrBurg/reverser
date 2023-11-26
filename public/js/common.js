function reverseString(str) {
  return str.split('').reverse().join('');
}

(typeof module != String(void 0) ? module : {}).exports = {
  reverseString,
};
