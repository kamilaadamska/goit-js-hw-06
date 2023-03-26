const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', () => {
  textEl.style.fontSize = `${inputEl.value}px`;
});
