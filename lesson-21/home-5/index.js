'use strict';
// Установка дочерних элементов

// const some result = document.querySelector('.title');

function setButton(buttonText) {
  const result = document.querySelector('body');
  result.innerHTML = buttonText;
  return result;
}

// setButton('<button>button text</button>');
// setButton(<button>button text</button>);

export { setButton };
