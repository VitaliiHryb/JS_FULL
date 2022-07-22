// Каррирование

// // const sum = (a, b) => a + b;

// const sum = a => b => a + b;

// const add3 = sum(3);

// const result = add3(5);
// // console.log(result);

const mult = a => b => a * b;

const twice = mult(2);
// console.log(twice(9));

const triple = mult(3);

// const result = triple(twice(9));
// console.log(result);

export { mult, twice, triple };
