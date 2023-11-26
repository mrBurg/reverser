function ready() {
  const container = document.getElementById('container');
  const data = 'Hello World!!!';

  if (stringCheck(data)) {
    container.innerHTML = reverseString(data);
  }
}

document.addEventListener('DOMContentLoaded', ready);
