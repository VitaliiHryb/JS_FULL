'use strict';
// Нахождение ближайшего родителя

// algo: find span by data-attribute and define its parents
// 1. find span witch have data-number='num'
// 2. return from data-section ==> selector with class '.box'
// prompt: how to find needed selector: `span[data-number="${num}]"`
// return data-section value

// use .dataset

function getSection(num) {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  const parrentElem = spanElem.closest('.box');
  const spanValue = parrentElem.dataset.section;
  return spanValue;
}

// getSection(2);
// getSection(6);

export { getSection };
