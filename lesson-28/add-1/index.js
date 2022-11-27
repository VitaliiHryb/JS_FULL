// Функции Фибаначи

function maxFibonacci(fiboTarget) {
  let fiboOne = 0;
  let fiboTwo = 1;
  for (let currentFibo = 0; fiboTwo <= fiboTarget; currentFibo += 1) {
    const fiboOneCopy = fiboOne;
    fiboOne = fiboTwo;
    fiboTwo += fiboOneCopy;
  }

  return fiboOne;
}

console.log(maxFibonacci(15));
console.log(maxFibonacci(8));
console.log(maxFibonacci(22));
console.log(maxFibonacci(35));
console.log(maxFibonacci(56));
console.log(maxFibonacci(90));

// export { maxFibonacci };

// maxFibonacci(15); // ==> 13
// maxFibonacci(8); // ==> 8
