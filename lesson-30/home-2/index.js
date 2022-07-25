// Обработчики успешного промиса (Success Promise Handlers)
/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise(resolve => {
  resolve(67);
  // console.log(number);
});

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

successPromise.then(function onSuccess(number) {
  const squared = number * number;
  console.log(squared);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
successPromise.catch(function onError() {
  console.log('I am an error');
});

// текст не вывелся, потому что нет ошибки
