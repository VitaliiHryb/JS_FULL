'use strict';
{
    "max-classes-per-file": ["error", 1]
}
// ------------------------------- SHIP ----------------------------

class Vehicle {
  constructor(name, numberOfWheels) {
    this.numberOfWheels = numberOfWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Aurora', '17 hm/h');

ship1.move();
console.log(ship1);
ship1.stop();

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
// hasWheels: false,
// name: 'Argo',

// liftAnchorUp() {
//   console.log(`${this.name} lifting anchor up`);
// }

// liftAnchorDown() {
//   console.log(`${this.name} lifting anchor down`);
// }

// startMachine() {
//   this.liftAnchorUp();
//   this.move();
// },
// stopMachine() {
//   this.stop();
//   this.liftAnchorDown();
// },
// };

// Object.setPrototypeOf(ship, vehicle);
// ------------------------------- /SHIP ----------------------------
