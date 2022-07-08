// method

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

export { user };

// user.getFullName();

// const user = {
//   name: 'John',
//   age: 17,
//   walk(distance) {
//     console.log(`I'm walking for a ${distance} km`);
//   },
//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   },
// };
