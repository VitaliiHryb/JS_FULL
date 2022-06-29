// array elements sum
const sum = arr => {
  if (!Array.isArray(arr)) return null;
  let result = 0;
  arr.forEach(element => {
    result += element;
  });
  return result;
};

// console.log(sum([11, 2, 5, 6, 33, 12, 9]));
// console.log(sum(5));
