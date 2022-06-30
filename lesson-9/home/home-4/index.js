// Объект в массив жителей
// 1. ==> {[[{}],[{}],[{}]]} ==> [[{}],[{}],[{}]]; избавляемся от первой вложености
// 2. ==> [{}],[{}],[{}] ==>  [{},{},{}]
// 3. ==> для каждого елемента массива применяем .name ==> values

const getPeople = obj => {
  return Object.values(obj)
    .reduce((sumArray, currentObj) => sumArray.concat(currentObj), [])
    .map(element => element.name);
};

const country = {
  countries: [{ name: 'ukrain' }, { name: 'france' }, { name: 'germany' }], // room
  cities: [{ name: 'Цюрих' }, { name: 'Женева' }, { name: 'Базель' }],
  populate: [{ name: 378884 }, { name: 188634 }, { name: 164937 }],
};
console.log(getPeople(country));

// const getPeople = obj => {
//   let result = [];
//   const allKeys = Object.values(obj);
//   const arrOfKeys = allKeys.reduce((sumArray, currentObj) => {
//     return sumArray.concat(currentObj);
//   }, []);
//   result = arrOfKeys.map(index => index.name);
//   console.log(result);
// };
