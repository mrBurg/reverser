function ready() {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const container = document.getElementById('container');
  const data = 'Hello World!!!';

  function updateText() {
    if (stringCheck(input.value)) {
      container.innerHTML = reverseString(input.value);
    }
  }

  function onFocusHandler() {
    this.value = '';

    updateText();
  }

  form.addEventListener('submit', (event) => event.preventDefault());
  input.addEventListener('focus', onFocusHandler);
  input.addEventListener('input', updateText);

  input.value = data;

  updateText();
}

document.addEventListener('DOMContentLoaded', ready);
