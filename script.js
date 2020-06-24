/* eslint-disable */

const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
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

const itemDone = document.getElementsByClassName('.done');

function markItemDone() {
  const clickItem = document.getElementsByTagName(li).onclick;
}

itemDone.addEventListener('click', addListAfterClick);
