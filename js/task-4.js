// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue
// в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement
// для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса

let spanRef = document.querySelector('#value');
let counterValue = Number(spanRef.textContent);
const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
  return counterValue;
};
const decrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
  return counterValue;
};
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);
