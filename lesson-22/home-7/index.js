'use strict';
// Создание DOM элементов и вставка на страницу

function createButton(buttonText) {
  const page = document.querySelector('body');
  const butt = document.createElement('button');
  page.append(butt);
  butt.textContent = buttonText;
  return butt;
}

// createButton('somebody will know it');

export { createButton };
