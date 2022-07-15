'use strict';
// Дата атрибуты (data-attributes)

// 1. read a number from data-number
// 2. ^2 this number and write in 'data-squared-number'
// 3. add sqared number to next data-number
// 4. find elements with class .number

// use .dataset

function squaredNumbers() {
  const listElem = document.querySelectorAll('[data-number]');

  const callbackFunc = elem => {
    const choosenNum = elem.dataset.number;
    const squared = choosenNum * choosenNum;
    elem.setAttribute('data-squared-number', squared);
  };

  for (let dataElem = 0; dataElem < listElem.length; dataElem += 1) {
    callbackFunc(listElem[dataElem]);
  }
}

// squaredNumbers();

export { squaredNumbers };

// // first solution
// function squaredNumbers() {
//   const fiveElem = document.querySelector('[data-number="5"]');
//   const sevenElem = document.querySelector('[data-number="7"]');
//   const threeElem = document.querySelector('[data-number="-3"]');

//   const num1 = fiveElem.dataset.number;
//   const squaredFive = num1 * num1;
//   fiveElem.setAttribute('data-squared-number', squaredFive);

//   const num2 = sevenElem.dataset.number;
//   const squaredSeven = num2 * num2;
//   sevenElem.setAttribute('data-squared-number', squaredSeven);

//   const num3 = fiveElem.dataset.number;
//   const squaredThree = num3 * num3;
//   threeElem.setAttribute('data-squared-number', squaredThree);
//   }

// // second solution
// function squaredNumbers() {
//   const fiveElem = document.querySelector('[data-number="5"]');
//   const sevenElem = document.querySelector('[data-number="7"]');
//   const threeElem = document.querySelector('[data-number="-3"]');

//   const callbackFunc = elem => {
//     const choosenNum = elem.dataset.number;
//     const squared = choosenNum * choosenNum;
//     elem.setAttribute('data-squared-number', squared);
//   };

//   callbackFunc(fiveElem);
//   callbackFunc(sevenElem);
//   callbackFunc(threeElem);

//   console.log(fiveElem);
//   console.log(sevenElem);
//   console.log(threeElem);
// }

// // education material
// // document.querySelectorAll('[data-genre~="horror"]');
// // I want choose one li, so
// // const fiveElem = document.querySelector('[data-number="5"]');
// // setAttribute(name, value)

// // article.dataset.columns = 5 приведёт к тому, что новое значение атрибута станет равным "5"

// // dataset: DOMStringMap {number: '5'}
// // dataset: DOMStringMap {number: '7'}
