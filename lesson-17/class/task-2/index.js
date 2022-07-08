// Привязка контекста
// callbackPrompt

const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    // setTimeout(() => this.showPrompt(), ms);
    // console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

export { callbackPrompt };

callbackPrompt.showDeferredPrompt(3000);

// setTimeout(() => {console.log('run)}, 1000); // 1000 is ms

// explanation
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   sayHi(age, message) {
//     return `${message} ${this.firstName} and I'm ${age} years old`;
//   },
// };

// // const func = user.getFullName;
// // console.log(func());

// // .bind();
// // const func = user.getFullName.bind(user);
// // console.log(func());

// // .call();
// const func = user.getFullName;

// // console.log(func.call({ firstName: 'Tom', lastName: 'Jerry' }));

// // .apply();
// console.log(func.apply({ firstName: 'Tom', lastName: 'Jerry' }));

// const func1 = user.sayHi;
// const anotherUser = { firstName: 'Tom' };
// console.log(func1.apply(anotherUser, [17, "Hi! I'm"]));
// // if use method .call() ==> func1.apply(anotherUser, 17, "Hi! I'm");
