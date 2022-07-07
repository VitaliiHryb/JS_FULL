// Лексическое окружение

// setMessage
'use strict';

let message = 'Just learn it!';

export function sendMessage(name) {
  console.log(`${name}, ${message} Your Gromcode`);
}

export function setMessage(text) {
  message = text;
}

// sendMessage('Tom');
// sendMessage('Hello');
// sendMessage('Tom');

// another.js

// import {setMessage} from 'index.js;
// let message = 'Bay';
// setMessage('Bob');

// const message = 'Just learn it!';
// const setMessage = name => {
//   const sender = 'Gromecode';
//   console.log(`${name}, ${message} You ${sender}`);
// };
// setMessage('Tom');
