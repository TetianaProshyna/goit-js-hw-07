// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

function isInputValid(event) {
  event.target.value.length === Number(inputRef.getAttribute('data-length'))
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
function deleteClass() {
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.remove('valid');
  }
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid');
  }
}

inputRef.addEventListener('blur', isInputValid);
inputRef.addEventListener('focus', deleteClass);
