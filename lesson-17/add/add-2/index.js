// Полное имя

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  setFullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  },
};

const result = user.getFullName.bind(user);
result();
const result2 = user.setFullName('notJohn Doe');
console.log(user);

// export { user };

// const user = {
//   fistName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.fistName} ${this.lastName}`;
//     // console.log(`${this.fistName} ${this.lastName}`);
//   },
//   setFullName(FullName) {
//     let [fist, last] = FullName.split(' ');
//     this.fistName = fist;
//     this.lastName = last;
//   },
// };
