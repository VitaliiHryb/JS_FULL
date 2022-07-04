// Очистка данных о транзакциях

// input: array
// output: array

// don't change array
// Step 1. elements is a string => numbers
// Step 2. check if it is an number
// Step 3. + '$'

const cleanTransactionsList = arr => {
  return arr.filter(element => !isNaN(element)).map(element => '$' + Number(element).toFixed(2));
};

console.log(cleanTransactionsList([' 1.9 ', ' 16.4 ', ' 17 ', ' 1 dollar ', ' 19 ']));

// delete elements with letters from array
// trim spaces
// math floor each element

// const cleanTransactionsList = (arr) => {
//   const filteredElements = arr.filter(function (element) {
//     if (isNaN(element)) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   return filteredElements.map((element) => '$' + Number(element).toFixed(2));
// };

// console.log(
//   cleanTransactionsList(['15', '1 dollar', '   3.4', '1.2    ', '4'])
// );
