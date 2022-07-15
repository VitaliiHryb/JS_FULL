'use strict';
// Single обработка события 'click' на кнопку
// use addEventListener

const singleUseButt = document.querySelector('.single-use-btn');
function handleClick() {
  // alert(`${taskStatus.value}`);
  console.log(`clicked`);
  singleUseButt.removeEventListener('click', handleClick);
}
singleUseButt.addEventListener('click', handleClick);
// singleUseButt.removeEventListener('click', handleClick);

// export {}
