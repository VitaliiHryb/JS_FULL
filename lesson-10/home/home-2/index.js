const randomNum = (min, max) => Math.random() * (max - min) + min;

const getRandomNumbers = (length, from, to) => {
  if (Math.abs(from - to) < 1) return null;
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(randomNum(from, to)));
  }
  return result;
  //console.log(result);
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

// Math.floor()
// const newArr = []
// arr.length = length
// Math.random() * (max - min) + min

// 1. check if it isn't integer numbers from to
// 2. random number generation //let numbers = randomNum(from, to);
// 3. push random numbers in array
