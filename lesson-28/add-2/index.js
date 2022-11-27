// Функции Фибаначи

function sum(lastNumber) {
  let result = 0;

  (function sumOfInt(nextNumber) {
    if (nextNumber >= 0) {
      result += nextNumber;
      sumOfInt(nextNumber - 1);
    }
  })(lastNumber);

  return result;
}

console.log(sum(4));
console.log(sum(5));

// export { sum };

// sum(4); // ==> 10
// sum(5); // ==> 15

/*
function sum(lastNumber) {
  let integersSum = 0;
  for (let i = 0; i <= lastNumber; i += 1) {
    integersSum += i;
  }

  return integersSum;
}
*/
