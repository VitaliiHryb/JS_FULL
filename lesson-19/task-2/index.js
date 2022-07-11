'use strict';
// Перебор собственных свойств объекта (for..in)

export { getOwnProps };

const getOwnProps = obj => {
  const arrWithProps = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      arrWithProps.push(prop);
    }
  }

  return arrWithProps;
};

// ---------------------------------------------------------
const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

console.log(Object.keys(ship));

// task-1 explanation
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// user.fullName = 'Tom Hardy';
// console.log(user.firstName);

// // console.log(user.fullName);

// // Корабль - прототипы

// // export { vehicle, ship }

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Argo',
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// ship.move();
