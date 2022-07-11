'use strict';
// Конструктор объектов - прототипы

// export { User };

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) return false;
  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};

// -----------------------------------------------------------
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function () {
//   if (this.age < 0) return false;
//   if (this.age >= 25) {
//     console.log(`New photo request was sent for ${this.name}`);
//   }
//   return this.age;
// };

// ------------------------------------------------------------
// const user1 = new User('Tom Soer', 17);
// console.log(user1);

// user1.sayHi();

// const user2 = new User('Jordan Piterson', 57);
// user2.sayHi();

// console.log(user2.sayHi === user1.sayHi);

const user3 = new User('John', 57);
user3.setAge();

const user4 = new User('Ann', 17);
user4.setAge();

const user5 = new User('Ann', -17);
console.log(user5.setAge());
