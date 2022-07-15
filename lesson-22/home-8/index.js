'use strict';
// Обработка события 'change' для чекбокса
// use addEventListener
// use event

const textInput = document.querySelector('.task-status');

function handleClick(e) {
  // console.log(e.target.checked === 'true');
  console.log(e.target.checked);
}
textInput.addEventListener('change', handleClick);

// singleUseButt.removeEventListener('click', handleClick);
