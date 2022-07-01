//Посчитать баланс по всем транзакциям

// алгоритм
// 1. пройтись по усім елементам массива, щоб отримати values of amounts
// 2. просумувати усі amount
const getTotalRevenue = transactions => {
  const arr = [];
  let result = 0;
  transactions.forEach(element => arr.push(element.amount));
  arr.forEach(amountElement => (result += amountElement));
  return result;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
// console.log(getTotalRevenue(dayTransactions)); // ==> 310

// const getTotalRevenue = transactions => {
//   const arr = [];
//   let result = 0;
//   transactions.forEach(element => {
//     arr.push(element.amount);
//   });
//   arr.forEach(element => {
//     result += element;
//   });
//   return result;
// };
