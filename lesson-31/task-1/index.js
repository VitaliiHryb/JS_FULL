// Promise handlers & chaining
// Promise handlers
'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}`,
        });
      }, 1000);
    }
  });

  return request;
};

// 'userid777'
export { requestUserData };

// requestUserData('user-1').then(data => console.log(data));
// requestUserData('broken').catch(error => console.log(error));
// requestUserData('user-2').finally(() => console.log('finally'));

// // option-1
// requestUserData('user-2')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'));

// // option-2
// requestUserData('user-2')
//   .then(
//     data => console.log(data),
//     error => console.log(error),
//   )
//   // .catch(error => console.log(error))
//   .finally(() => console.log('finally'));

// // how to throw Error
// requestUserData('broken')
//   .catch(error => {
//     console.log(error);
//     throw new Error('Error');
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'));
