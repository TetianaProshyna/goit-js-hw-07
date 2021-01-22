// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const divRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls>input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

renderBtnRef.addEventListener('click', getInputValue);
destroyBtnRef.addEventListener('click', destroyBoxes);

function getRandomColor() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

function createBoxes(amount) {
  const array = [...Array(amount).keys()];
  let size = 30;

  array.map(function () {
    const contRef = document.createElement('div');
    contRef.style.backgroundColor = getRandomColor();
    contRef.style.width = size + 'px';
    contRef.style.height = size + 'px';
    size += 10;
    divRef.appendChild(contRef);
  });
}

function getInputValue() {
  createBoxes(Number(inputRef.value));
  inputRef.value = '';
}

function destroyBoxes() {
  while (divRef.firstChild) {
    divRef.removeChild(divRef.firstChild);
  }
}
