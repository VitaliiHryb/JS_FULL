// Поиск наименьшего квадрата
// input
// output

// array => |array[min] * array[min]|;
// Step 1: check if array is array
// Step 2: use Math.abs()
// Step 3: use Math.min()

export default array => {
  if (!Array.isArray(array) || array.length === 0) return null;

  const absArray = array.map(el => Math.abs(el));
  return Math.min(...absArray) ** 2;
};

// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));

// [-777, 3, -2, 6, 45, -20] => 4
