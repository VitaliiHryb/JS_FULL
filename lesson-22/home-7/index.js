'use strict';
// Обработка события 'change'
// use addEventListener
// use event

const textInput = document.querySelector('.text-input');

function handleClick(e) {
  console.log(e.target.value);
}

textInput.addEventListener('change', handleClick);

// singleUseButt.removeEventListener('click', handleClick);
