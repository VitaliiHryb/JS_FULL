'use strict';
// Подписка для нескольких элементов
// use addEventListener
// use event

const textInput = document.querySelectorAll('.pagination__page');
// const dataPageNumb = document.querySelectorAll('.data-page-number');

function handleClick(e) {
  console.log(e.target.textContent);
}

textInput.forEach(button => button.addEventListener('click', handleClick));

// singleUseButt.removeEventListener('click', handleClick);
// console.log(`${textInput.value}`);
