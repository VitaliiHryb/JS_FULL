'use strict';
// Очистка элемента

// const some result = document.querySelector('.title');

function clearList() {
  const result = document.querySelector('.categories');
  result.innerHTML = '';
  return result;
}

// clearList();

export { clearList };
