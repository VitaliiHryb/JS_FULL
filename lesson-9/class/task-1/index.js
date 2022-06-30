// Object - keys(), values(), entries().

// пройтись циклом по обьекту
// проверить условие value >= 18
// записать в обьект key : velue удовлетворяющие условие
// вернуть новый обьект

const getAdults = usersObj => {
  const usersArray = Object.entries(usersObj);
  const filteredUserArray = usersArray.filter(user => user[1] >= 18);

  const usersNames = filteredUserArray.map(user => user[0]);

  return usersNames;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe', Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

// const getAdults = obj => {
//   let filterObj = {};

//   const isAdult = old => old >= 18;

//   for (const key in obj) {
//     if (isAdult(obj[key])) {
//       filterObj[key] = obj[key];
//       // console.log(filterObj);
//     }
//   }
//   return filterObj;
//   //console.log(filterObj);
// };
