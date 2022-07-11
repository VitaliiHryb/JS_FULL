'use strict';
// This в callback
// event (this is arrow functions)
// export { event };

const event = {
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Tom', age: 16, email: 'exa@server.com' },
    { name: 'Bob', age: 40, email: 'exa@server.com' },
    { name: 'Ann', age: 21, email: 'exa@server.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email: `${email}`,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());

// const event = {
//   message: 'Welcome to the party!',
//   guests: [
//     { name: 'Tom', age: 16, email: 'exa@server.com' },
//     { name: 'Bob', age: 62, email: 'exa@server.com' },
//     { name: 'Ann', age: 21, email: 'exa@server.com' },
//     { name: 'John', age: 18, email: 'example@server.com' },
//   ],
//   getInvitations() {
//     return this.guests
//       .filter(i => i.age >= 18)
//       .map(({ name, email }) => ({
//         email: `${email}`,
//         message: `Dear ${name}! ${this.message}`,
//       }));
//   },
// };

// -------------------------------------------------------------
// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name);
//   },
// };

// obj.sayHi();

// console.log(this);

// function func() {
//   console.log(this);
// }
// func();

// const func = obj.sayHi;
// func();
// Uncaught TypeError: Cannot read properties of undefined (reading 'name')

// var a = 1;
// window.a = 1;
// console.log(window.a);

// let b = 1;
// console.log(window.b);

// window.user = {
//   name: 'John',
// };
// console.log(window.user);

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// user.sayHi();
// setTimeout(user.sayHi.bind(user), 100);
// setTimeout(() => user.sayHi(), 100);
