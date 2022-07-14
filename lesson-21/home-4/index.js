'use strict';
// Update text content

// const some result = document.querySelector('.title');

function setTitle(text) {
  const result = document.querySelector('.title');
  result.textContent = text;
  return result;
}

// setTitle('I like to move it move it');

export { setTitle };
