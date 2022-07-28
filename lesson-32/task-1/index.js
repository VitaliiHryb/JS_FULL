// Статические методы промисов
// Methods:
// 1. Promise.resolve(value)
// 2. Promise.reject(new Error('error'))
// 3. Promise.all(promise)
// 4. Promise.allSettled(promise)
// 5. Promise.race(promise)

/*
const resolvedPromise1 = Promise.resolve(17);
// resolvedPromise1 == resolvedPromise2 // равнозначная запись
const resolvedPromise2 = new Promise(resolve => {
  resolve(17);
});

const rejectPromise1 = Promise.reject(new Error('error777'));
const rejectPromise2 = new Promise((_, reject) => {
  reject(new Error('error777'));
});
*/

// Задача: есть ассинхронный сумматор,
// принемает на вход промисы и возвращает их sum через время
// когда все они выплнятся
// async(asyncNum1, asyncNum2, ...)

const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const anyncNum1 = getValueWithDelay(56, 1000);
// const anyncNum2 = getValueWithDelay(undefined, 2000);
const anyncNum2 = getValueWithDelay(10, 2000);
// const anyncNum3 = getValueWithDelay('66', 3000);
const anyncNum3 = getValueWithDelay(66, 3000);

const getSum = numbers =>
  numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

// const asyncSum = (...asyncNumbers) => {
//   return Promise.allSettled(asyncNumbers).then(numbers => console.log(numbers));
// };

asyncSum(anyncNum1, anyncNum2, anyncNum3).then(result => console.log(result));

// asyncSum(anyncNum1, Promise.reject(new Error('err')), anyncNum3).then(result =>
//   console.log(result),
// );

export { asyncSum };
