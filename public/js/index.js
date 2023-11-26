function reverseString(str) {
  return str.split('').reverse().join('');
}

function ready() {
  document.body.innerHTML = reverseString('Hello World!!!');
}

document.addEventListener('DOMContentLoaded', ready);
