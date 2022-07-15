'use strict';
// Установка дочерних элементов

// const some result = document.querySelector('.title');

function setButton(buttonText) {
  const result = document.querySelector('body');
  result.innerHTML = `<button>${buttonText}</button>`;
  return result;
}

// setButton('button text');

// function setButton(buttonText) {
//   const result = document.querySelector('body');
//   result.innerHTML = buttonText;
//   return result;
// }

// function setButton2(buttonText) {
//   const result = document.querySelector('body');
//   result.textContent = buttonText;
//   return result;
// }

// setButton('<button>button text</button>');
// setButton2('<button>button text</button>');

export { setButton };
