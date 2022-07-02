// Парсинг чисел
const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

const elementList = [12, 0, undefined, -5, '33kl', [], Infinity, -54.4];
console.log(getParsedIntegers(elementList));
console.log(getParsedIntegersV2(elementList));
console.log(getParsedFloats(elementList));
console.log(getParsedFloatsV2(elementList));

// parseInt()
// Number.parseInt()
// parseFloat()
// Number.parseFloat()

// parseInt() === Number.parseInt()
// parseFloat() === Number.parseFloat()

// const parseArray = arr => {
//   const result = arr.map(el => Number.parseFloat(el));
//
//   return result;
// };

// const elementList = [12, 0, undefined, -5, '33kl', [], Infinity, -54.4];
// const parseArray = arr => arr.map(el => Number.parseFloat(el));
// console.log(parseArray(elementList));
