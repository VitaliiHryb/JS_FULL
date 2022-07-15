'use strict';
// Event target - считывание текста с кнопки
// use addEventListener
// use event

const singleUseButt = document.querySelectorAll('.btn');

function handleClick(e) {
  if (e.target) {
    console.log(e.target.textContent);
  }
}

singleUseButt.forEach(button => button.addEventListener('click', handleClick));

// singleUseButt.removeEventListener('click', handleClick);
// if (event.type === 'fullscreenchange')

// export {}
