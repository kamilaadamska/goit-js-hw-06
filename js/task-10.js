const parentEl = document.getElementById('boxes');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  parentEl.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    const divSize = 30;
    divEl.style.width = `${divSize + i * 10}px`;
    divEl.style.height = `${divSize + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.margin = '10px';
    parentEl.append(divEl);
  }
}

function destroyBoxes() {
  parentEl.innerHTML = '';
  inputEl.value = '';
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener('click', destroyBoxes);
