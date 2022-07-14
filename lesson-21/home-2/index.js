/* eslint-disable max-classes-per-file */
// Finding multiple elements on a page

export function getItemsList() {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
}

// NodeList ==> Array.from

export function getItemsArray() {
  const elementArray = Array.from(document.querySelectorAll('.tool'));
  // list ==> array
  console.dir(elementArray);
  return elementArray;
}

// getItemsList();
// getItemsArray();
