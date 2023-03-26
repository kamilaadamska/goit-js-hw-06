const btnMinusEl = document.querySelector('button[data-action="decrement"]');
const btnPlusEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');
let counterValue = 0;

btnMinusEl.addEventListener('click', () => {
  valueEl.innerText = --counterValue;
});

btnPlusEl.addEventListener('click', () => {
  valueEl.innerText = ++counterValue;
});
