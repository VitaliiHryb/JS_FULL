// Reverse String

// input: string
// output:

// strinng is actually an array
// Step 1. Use the split() method to return a new array
// Step 2. Use the reverse() method to reverse the new created array
// Step 3. Use the join() method to join all elements of the array into a string
// Step 4. Return the reversed string

const reverseString = str => {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  } else {
    return null;
  }
};

console.log(reverseString('abcdefg'));

// const reverseString = str => {
//   let splitString = str.split('');
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join('');
//   return joinArray;
// };

// without verification
// const reverseString = str => str.split('').reverse().join('');
