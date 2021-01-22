// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.setAttribute('min', '10');
inputRef.setAttribute('max', '50');
inputRef.setAttribute('value', '25');

function changeFontSize(event) {
  let size = event.target.value;
  spanRef.style.fontSize = size + 'px';
}

inputRef.addEventListener('input', changeFontSize);
