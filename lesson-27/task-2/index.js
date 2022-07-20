// Событие storage

const counter = document.querySelector('.counter');
const counterValueElement = document.querySelector('.counter__value');

window.addEventListener('storage', event => {
  counterValueElement.textContent = event.newValue;
});

function counterChange(event) {
  const button = event.target.classList.contains('counter__button');
  if (!button) return;
  const value = +counterValueElement.textContent;
  const data = event.target.dataset.action;
  const newValue = data === 'increase' ? value + 1 : value - 1;
  localStorage.setItem('count', newValue);
  counterValueElement.textContent = newValue;
}

counter.addEventListener('click', counterChange);

// // example

// const user = {
//   name: 'Tom',
//   age: 25,
//   isStudent: false,
//   driverLicense: null,
//   hobbies: ['football', 'diving'],
//   education: [
//     {
//       name: 'MIT Precourse',
//       gradueteDate: '2020-05-04T14:48:46.105Z',
//     },
//   ],
// };

// -----------------------------------------------------
// // not works
// const counterElem = document.querySelector('.counter');
// const counterValueElem = document.querySelector('.counter__value');

// const onCounterChange = e => {
//   const isButton = e.target.classList.contains('.counter__button');

//   if (!isButton) {
//     return;
//   }

//   const oldValue = Number(counterValueElem.textContent);

//   const action = e.target.dataset.action;

//   const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

//   localStorage.setItem('counterValue', newValue);

//   counterValueElem.textContent = newValue;
// };

// counterElem.addEventListener('click', onCounterChange);

// const onStoraageChange = e => {
//   console.log(e);
//   counterValueElem.textContent = e.newValue;
// };

// window.addEventListener('storage', onStoraageChange);

// const onDocumentLoaded = () => {
//   counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
// };

// document.addEventListener('DOMContentLoaded', onDocumentLoaded);
