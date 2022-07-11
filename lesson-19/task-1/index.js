'use strict';

// Корабль - прототипы

// export { vehicle, ship }

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

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} is stopped`);
//   },
// };

// // vehicle.move();

// // console.log(vehicle.toString);
// // console.log(vehicle);

// const ship = {
//   name: 'Argo',
//   hasWheels: false,
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//   },
//   stopMachine() {
//     console.log(`${this.name} lifting anchor down`);
//   },
//   __proto__: vehicle,
// };

// ship.move();
// ship.stop();
// ship.startMachine();
// ship.stopMachine();
// // console.log(ship);
