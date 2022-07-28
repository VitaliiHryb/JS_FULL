// Преобразователь в промис

// input: number
// output: Promise()

/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = num => {
  return new Promise(resolve => {
    resolve(num);
  });
};

// draft solution
// const makePromise = num => {
//   const p = new Promise(resolve => {
//     resolve(num);
//   });

//   return p;
// };

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});

// export { makePromise };
