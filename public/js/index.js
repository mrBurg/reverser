function ready() {
  const container = document.getElementById('container');

  container.innerHTML = reverseString('Hello World!!!');
}

document.addEventListener('DOMContentLoaded', ready);
