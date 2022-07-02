// Проверка чисел
const getFiniteNumbers = arr => arr.filter(Number.isFinite);

const getFiniteNumbersV2 = arr => arr.filter(isFinite);

const getNaN = arr => arr.filter(Number.isNaN);

const getNaNV2 = arr => arr.filter(isNaN);

const getIntegers = arr => arr.filter(Number.isInteger);

console.log(getFiniteNumbers([12, 0, -5, '33', [], Infinity, -54.4]));
console.log(getFiniteNumbersV2([12, 0, -5, '33', [], Infinity, -54.4]));
console.log(getNaN([12, 0, -5, '33', [], Infinity, -54.4]));
console.log(getNaNV2([12, 0, -5, '33', [], Infinity, -54.4]));
console.log(getIntegers([12, 0, -5, '33', [], Infinity, -54.4]));

// Number.isNaN('text');
// isNaN('text');
// isNaN(NaN);
// Number.isNaN(NaN);

// Number.isFinite('17');
// isFinite('27');

// parseInt(' 17.17text');
// Number.parseInt(' 17.17text');
// Number.parseInt('seventeen');

// parseFloat(' 17.17text');
// Number.parseFloat(' 17.17text');
// Number.parseFloat('seventeen');

// Number.isInteger(17);
// Number.isInteger(17.0);
// Number.isInteger(17.17);
// Number.isInteger('17');
// Number.isInteger(Infinity);
// Number.isInteger(NaN);
// Number.isInteger(undefined);
// Number.isInteger(null);

// // 1.
// const getFiniteNumbers = arr => {
//   const result = [];
//   arr.forEach(num => {
//     if (Number.isFinite(num)) {
//       result.push(num);
//     }
//     return result;
//   });
// };

// // 2.
// const getFiniteNumbersV2 = arr => {
//   const result = [];
//   arr.forEach(num => {
//     if (num.isFinite) {
//       result.push(num);
//     }
//     return result;
//   });
// };

// // 3.
// const getNaN = arr => {
//   const result = [];
//   arr.forEach(num => {
//     if (Number.isNaN(num)) {
//       result.push(num);
//     }
//     return result;
//   });
// };

// // 4.
// const getNaNV2 = arr => {
//   const result = [];
//   arr.forEach(num => {
//     if (isNaN(num)) {
//       result.push(num);
//     }
//     return result;
//   });
// };

// // 5.
// const getIntegers = arr => {
//   const result = [];
//   arr.forEach(num => {
//     if (Number.isInteger(num)) {
//       result.push(num);
//     }
//     return result;
//   });
// };
