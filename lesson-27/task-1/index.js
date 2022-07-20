// Получение всех данных localStorage

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

export { getLocalStorageData };

// localStorage.clear();
// // localStorage.setItem('hobbies', [1, 2, 3, 4]);
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// // localStorage.setItem('name', JSON.stringify('Tom'));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(17));

// // console.log(JSON.parse(localStorage.getItem('hobbies')));

// const getLocalStorageData = () => {
//   // option 1
//   // for (let i = 0; i < localStorage.length; i += 1) {
//   //   localStorage.key(i);
//   // }
//   // option 2
//   // for (let i of localStorage) {
//   //   localStorage.key(i);
//   // }
//   // option 3
//   // Object.keys(localStorage);
//   // Object.values(localStorage);
//   return Object.entries(localStorage).reduce((acc, [key, value]) => {
//     let newValue;
//     try {
//       newValue = JSON.parse(value);
//     } catch (e) {
//       newValue = value;
//     }
//     return {
//       ...acc,
//       // [key]: JSON.parse(value),
//       [key]: newValue,
//     };
//   }, {});
// };

// console.log(getLocalStorageData());

// localStorage.getItem('name');

// example

// const user = {
//   name: 'Tom',
//   age: 25,
//   isStudent: false,
//   driverLicense: null,
//   hobbies: ['football', 'diving'],
//   education: [
//     {
//       name: 'MIT Precourse',
//       gradueteDate: '2020-05-04T14:48:46.105Z',
//     },
//   ],
// };
