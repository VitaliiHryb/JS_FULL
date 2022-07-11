'use strict';
// псевдомассивы
// export { sumOfSquares }

function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem * elem;
  }, 0);
}

console.log(sumOfSquares(1, 2, 3, 4));

// function argsSum() {
//   return [].reduce.call(
//     arguments,
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   );
// }

// function argsSum() {
//   return [].reduce.apply(arguments, [
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   ]);
// }

// [].reduce((acc, elem) => { }, 0)

// function func() {
//   console.log(typeof arguments);
//   console.log(arguments);
// }

// func(1, 2, 3, 4);
