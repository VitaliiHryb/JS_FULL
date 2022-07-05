// Калькулятор

// input: string
// output: string

// '1 + 2' => '1 + 2 = 3'

const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
      break;
    case '/':
      result = Number(a) / Number(b);
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc('1 + 2')); // => '1 + 2 = 3'
console.log(calc('4 - 2')); // => '4 - 2 = 2'
console.log(calc('6 / 3')); // => '6 + 3 = 2'
console.log(calc('3 * 4')); // => '3 + 4 = 12'

// const calc = expression => {
//   const a = expression.split(' ');
//   let result;

//   switch (a[1]) {
//     case '+':
//       result = Number(a[0]) + Number(a[2]);
//       break;
//     case '-':
//       result = Number(a[0]) - Number(a[2]);
//       break;
//   }

//   return `${expression} = ${result}`;
// };
