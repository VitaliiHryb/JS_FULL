// Задержка цепочки промисов

// delay ==> Promise

const delay = timeDelay => {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeDelay);
  });
};

// delay(3000).then(() => console.log('Done'));

export { delay };

// es-lint not like it
// const delay = timeDelay => {
//   return new Promise(resolve => setTimeout(resolve, timeDelay));
// };
