// Всплытие и погружение событий
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const sapnElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');
const btnClear = document.querySelector('.clear-btn');
const btnRemoveHandlers = document.querySelector('.remove-handlers-btn');
const btnAttatchHandlers = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

const addHandlers = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  sapnElem.addEventListener('click', logGreySpan, true);
  sapnElem.addEventListener('click', logGreenSpan);
};

addHandlers();

btnAttatchHandlers.addEventListener('click', addHandlers);

const removeHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  sapnElem.removeEventListener('click', logGreySpan, true);
  sapnElem.removeEventListener('click', logGreenSpan);
};

btnRemoveHandlers.addEventListener('click', removeHandlers);

const clear = element => {
  element.innerHTML = '';
};

const clearBox = clear.bind(null, eventsListElem);
btnClear.addEventListener('click', clearBox);

// const divElem = document.querySelector('.rect_div');
// const pElem = document.querySelector('.rect_p');
// const spanElem = document.querySelector('.rect_span');

// const logTarget = (text, color) => {
//   const eventsListElem = document.querySelector('.events-list');

//   eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
// };

// // const logGreenDiv = () => logTarget.bind(null, 'DIV', 'green');
// const logGreenDiv = () => logTarget('DIV', 'green');
// const logGreenP = () => logTarget('P', 'green');
// const logGreenSpan = () => logTarget('SPAN', 'green');

// const logGreyDiv = () => logTarget('DIV', 'grey');
// const logGreyP = () => logTarget('P', 'grey');
// const logGreySpan = () => logTarget('SPAN', 'grey');

// divElem.addEventListener('click', logGreyDiv, true);
// divElem.addEventListener('click', logGreenDiv);

// pElem.addEventListener('click', logGreyP, { capture: true });
// pElem.addEventListener('click', logGreenP);

// spanElem.addEventListener('click', logGreySpan, true);
// spanElem.addEventListener('click', logGreenSpan);

// // divElem.addEventListener('click', event => {
// //   logGreenP();
// //   // event.stopPropagation();
// //   console.log(event.currentTarget);
// // });

// // const handler = () => {
// //   console.log('div');
// // };

// // elem.addEventListener('click', handler());
// // elem.removeEventListener('click', handler());

// // for user
// // .textContent
