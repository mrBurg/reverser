function reverseString(str) {
  return str.split('').reverse().join('');
}

function ready() {
  console.log(reverseString('Hello World!!!'));
}

document.addEventListener('DOMContentLoaded', ready);
