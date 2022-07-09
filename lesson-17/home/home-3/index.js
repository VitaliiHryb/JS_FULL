// Переадресация вызова // Call forwarding

// defer(func, ms) => function

function defer(func, ms) {
  return function () {
    // setTimeout(func, ms);
    // setTimeout(() => func.call(this, ...arguments), ms);
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

export { defer };

// const sayHi = () => {
//   console.log('Hi');
// };

// const deferredSayHi = defer(sayHi, 1000);
// deferredSayHi();

// const sum = (a, b) => {
//   console.log(a + b);
// };

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

// const deferredSum = defer(sum, 1000);
// deferredSum(1, 4);

// const deferredHi = defer(user.sayHi.bind(user), 1000);
// deferredHi();

const deferredHi = defer(user.sayHi, 1000);
deferredHi.call({ name: 'Bob' });
