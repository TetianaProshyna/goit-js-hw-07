// const listItems = document.querySelectorAll('.item');
// console.log(`В списке ${listItems.length} категории.`);

const mainListRef = document.querySelector('#categories');
const mainListItems = Array.from(mainListRef.children);

console.log(`В списке ${mainListItems.length} категории.`);

mainListItems.forEach(el => {
  console.log(`Категория: ${el.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${el.querySelector('ul').children.length}`,
  );
});
