/* eslint-disable default-case */

// const arr = [-777, 3, -2, 6, 45, -20];

export const getMinSquareNumber = arr => {
  let result = arr[0];
  arr.forEach(el => {
    if (result * result > el * el) {
      result = el;
    }
  });
  return result * result;
};

// console.log(getMinSquareNumber(arr));

export const calc = expression => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};

// console.log(calc('a'));
