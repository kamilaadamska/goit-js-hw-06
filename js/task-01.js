const listItemEl = document.querySelectorAll('.item');

console.log('Number of categories:', listItemEl.length);

listItemEl.forEach(element => {
  console.log('Category:', element.firstElementChild.innerText);
  console.log('Elements:', element.lastElementChild.children.length);
});
