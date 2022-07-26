// Фикс цепочки промисов
const successPromise = new Promise(resolve => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then(number => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then(
    number =>
      new Promise(resolve => {
        const squaredNumber = number * number;
        resolve(squaredNumber);
      }),
  )
  .then(result => {
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then(
    number =>
      new Promise(resolve => {
        const tenNumber = number * 10;
        resolve(tenNumber);
      }),
  )
  .then(result => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
