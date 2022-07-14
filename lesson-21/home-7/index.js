'use strict';
// Создание DOM элементов и вставка на страницу

function createButton(buttonText) {
  const categories = document.querySelector('.categories');
  const butt = document.createElement('button');
  categories.append(butt);
  butt.textContent = buttonText;
  return butt;
}

// createButton('somebody will know it');

export { createButton };
