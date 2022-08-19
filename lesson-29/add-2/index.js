// Load user data
'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

// Напиши функцию, которая принимает id пользователя
// и имитирует загрузку данных о пользователе

const requestUserData = (userId, callback) => {
  const randomNumber = Math.floor(Math.random() * 4000);

  if (userId === 'broken') {
    setTimeout(callback(null, 'Failed to load user data'), randomNumber);
  } else {
    setTimeout(callback(userId), randomNumber);
  }
};

export { requestUserData };

// // test data

// requestUserData('John', (userId, err) =>
//   console.log(
//     userId === 'broken'
//       ? err
//       : `{ userId: ${userId}, email: '${userId}@example.com' }`,
//   ),
// );

// requestUserData('broken', (userId, err) =>
//   console.log(
//     userId === null
//       ? err
//       : `{ userId: ${userId}, email: '${userId}@example.com' }`,
//   ),
// );
