// Композиция
// compose

// explanation
// f ==> function
// g ==> function
// f(g(value)) === f*g(value)

// explanation
// const compose = (func1, func2, ...res) => {
//   // call functions in arguments
// }

const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEveryting = compose(add3, mult2, div4);

console.log(doEveryting(3));

export { compose };
