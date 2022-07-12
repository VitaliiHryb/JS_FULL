// 'use strict';
{
    "max-classes-per-file": ["error", 1]
}
/* eslint max-classes-per-file: ["error", { ignoreExpressions: true }] */


// ------------------------------ photo request was sent -----------------------------------
// // static compare(user1, user2) {
// //   return user1.age - user2.age;
// // }
// // const user1 = new User('Tom', 17);
// // const user2 = new User('Tom', 37);
// // console.log(User.compare(user1, user2));

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }

  static createEmpty() {
    return new User('', null);
  }
}

// export { User };

// const user1 = new User('Tom', 17);
// console.log(user1);

// // // конструктор в функции
// // function User(name,age) {
// //   this.name = name;
// //   this.age = age,
// // }

// // User.prototype.sayHi = function() {
// //   console.log(`Hi, I am ${this.name}`);
// // }

// // User.prototype.requestNewPhoto = function() {
// //   console.log(`New photo request was sent for ${this.name}`);
// // }

// // User.prototype.setAge = function(value) {
// //   if (value < 0) {
// //     return false;
// //   }
// //   this.age = value;
// //   if (value >= 25) {
// //     this.requestNewPhoto();
// //   }
// //   return value;
// // }
