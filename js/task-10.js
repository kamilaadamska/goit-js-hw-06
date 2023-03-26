const parentEl = document.getElementById('boxes');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

let divSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${divSize}px`;
    divEl.style.height = `${divSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    parentEl.append(divEl);
    divSize += 10;
  }
}

function destroyBoxes() {
  parentEl.innerHTML = '';
  inputEl.value = '';
  divSize = 30;
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener('click', destroyBoxes);
