// Rounding numbers

/**
 * @param {number} num
 * @return {number[]}
 */

// num => []

// const multiRound = num => [Math.round(num), Math.floor(num), Math.ceil(num), Math.trunc(num)];
const multiRound = num => [
  Math.floor(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.round(num * 100) / 100,
  +num.toFixed(2),
];

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

// 0.1 + 0.2 === 0.3

// Math.ceil()
// Math.floor();
// Math.round();
// Math.trunc();

// Math.abc();
// Math.max();
// Math.min();

// Math.pow();
// Math.sqrt();

// toFixed(n)
// Math.PI.toFixed(3); // '3.142'
