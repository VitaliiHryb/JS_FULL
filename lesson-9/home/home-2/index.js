// Добавление свойства в объект
/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};

const addPropertyV2 = (userData, userId) => Object.assign(userData, { id: userId });

const addPropertyV3 = (userData, userId) => Object.assign({}, userData, { id: userId });

const addPropertyV4 = (userData, userId) => Object.assign({ ...userData }, { id: userId });

// examples
const user = {
  name: 'Sam',
};

// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
addPropertyV2(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
addPropertyV3(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
addPropertyV4(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   console.log(userData);
// }

// function addPropertyV2(userData, userId) {
//   const indus = { id: userId };
//   const addInNewObj = Object.assign(userData, indus);
//   console.log(addInNewObj);
//   //return addInNewObj.userId;
// }

// function addPropertyV3(userData, userId) {
//   const indus = { id: userId };
//   const addInNewObj = Object.assign({}, userData, indus);
//   console.log(addInNewObj);
//   //return addInNewObj.userId;
// }

// function addPropertyV4(userData, userId) {
//   const indus = { id: userId };
//   const copyObj = { ...userData };
//   const addInNewObj = Object.assign(copyObj, indus);
//   console.log(addInNewObj);
//   //return addInNewObj.userId;
// }
