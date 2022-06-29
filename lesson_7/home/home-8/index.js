// average number
const arrAverage = arr => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, currentValue) => acc + currentValue) / arr.length;
};

console.log(arrAverage([0, 1, 2, 3, 4]));
