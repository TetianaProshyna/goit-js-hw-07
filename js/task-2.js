const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createListItems = listItems =>
  listItems.map(function (item) {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
  });

const listRef = document.querySelector('#ingredients');
listRef.append(...createListItems(ingredients));
