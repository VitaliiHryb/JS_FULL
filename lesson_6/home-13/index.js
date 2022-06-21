function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [...new Set(array)];
  let sum = newArr.length;
  /*return sum;*/
  console.log(sum);
}

console.log([1, 4, 1, 8, 3, 4, 8, 8]);
console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));

/* ----- alternative (don't know why not works) ------ */
/*
function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const arr = [...array];
  let count = 1;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[i] === arr[j]) {
        count += 0;
      }
      if (arr[i] !== arr[j]) {
        count += 1;
      }
    }
  }
  return count;
}
*/
