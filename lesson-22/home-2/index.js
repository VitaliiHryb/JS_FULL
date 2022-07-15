'use strict';
// Обработка события 'change'
// use addEventListener

const textInput = document.querySelector('.text-input');
function handleClick() {
  // alert('done');
  alert(`${textInput.value}`);
}
textInput.addEventListener('change', handleClick);

// export {}
