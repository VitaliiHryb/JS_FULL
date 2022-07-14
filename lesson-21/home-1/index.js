'use strict';
// Finding an element on a page

export function getTitleElement() {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

export function getInputElement() {
  const inputElem = document.querySelector('input');
  console.dir(inputElem);
  return inputElem;
}

// getTitleElement();
// getInputElement();
