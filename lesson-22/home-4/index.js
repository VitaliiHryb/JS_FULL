'use strict';
// Поле поиска
// use addEventListener

const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
function handleClick() {
  // alert(`${taskStatus.value}`);
  console.log(`${searchInput.value}`);
}
searchBtn.addEventListener('click', handleClick);

// export {}
