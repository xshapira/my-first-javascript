/* eslint-disable */

const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

function inputLength() {
  // @ts-ignore
  return input.value.length;
}

function createListElement() {
  const li = document.createElement('li');
  // @ts-ignore
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  // @ts-ignore
  input.value = '';
}

function addListAfterClick() {
  () => {
    if (inputLength() > 0) {
      createListElement();
    }
  };
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

// -----------------------------------------------------------------------------
// Exercise
// -----------------------------------------------------------------------------

console.log('hello Israel');
console.log('hello USA');
