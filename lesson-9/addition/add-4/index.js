// input: object
// output: array

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => (a.age > b.age ? 1 : -1));
};

const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customers-id-3': {
    name: 'Ann',
    age: 16,
  },
};

console.log(getCustomersList(customers)); /* =>
[
  {
    name: 'Ann',
    age: 16,
    id: 'customers-id-3'
  },
  {
    name: 'Tom',
    age: 17,
    id: 'customers-id-2'
  },
  {
    name: 'William',
    age: 54,
    id: 'customers-id-1'
  },
]
*/

// const getCustomersList = obj => {
//   const result = [];
//   const obj1 = Object.values(obj);
//   obj1.forEach(element => {
//     result.push(element.name);
//   });
//   return result;
// };
