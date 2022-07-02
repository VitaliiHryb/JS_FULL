// Max absolute number
// 1. get absolute valiues
// 2. find max

/**
 * @param {number[]} arr
 * @return {number}
 */
const getTotalPrice = arr =>
  '$' +
  (
    Math.floor(arr.reduce((previousValue, currentValue) => previousValue + currentValue) * 100) /
    100
  ).toFixed(2);

// examples
getTotalPrice([-10, 10, -10]); // ===> 10
getTotalPrice([2.1, 0, 1.6]); // ===> 2.1
getTotalPrice([-6, 3, 5, -1]); // ===> 6
getTotalPrice([-777, 3, -1, 45, -20]); // ===> 777

// const getTotalPrice = arr => {
//   const sum = Math.abs(arr.reduce((acc, num) => acc + num, 0));
//   const result = '$' + sum.toFixed(2);
//   return result;
//   // console.log(result);
// };

// if (!Array.isArray(arr) || arr.length < 1) return null;
