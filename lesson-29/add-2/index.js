'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */
const requestUserData = (userId, callback) => {
  const randomNumber = Math.floor(1000 + Math.random() * 2000);
  // console.log(randomNumber);

  if (userId === 'broken') {
    setTimeout(() => callback(null, 'Failed to load user data'), randomNumber);
  } else {
    setTimeout(
      () => callback(userId, { userId, email: `${userId}@example.com` }),
      randomNumber,
    );
  }
};

export { requestUserData };

// test data

// requestUserData('John', (userId, isErr) => console.log(isErr));

// requestUserData('broken', (userId, isErr) => console.log(isErr));

// option-2
// const requestUserData = (userId, callback) => {
//   const randomNumber = Math.floor(1000 + Math.random() * 2000);
//   // console.log(randomNumber);

//   if (userId === 'broken') {
//     setTimeout(() => callback(null, 'Failed to load user data'), randomNumber);
//   } else {
//     setTimeout(
//       () =>
//         callback(
//           userId,
//           `{ userId: ${userId}, email: '${userId}@example.com' }`,
//         ),
//       randomNumber,
//     );
//   }
// };

// requestUserData('John', (userId, isErr) => console.log(isErr));

// requestUserData('broken', (userId, isErr) => console.log(isErr));

// option-3
// const requestUserData = (userId, callback) => {
//   const randomNumber = Math.floor(1000 + Math.random() * 2000);
//   // console.log(randomNumber);

//   if (userId === 'broken') {
//     setTimeout(() => callback(null, 'Failed to load user data'), randomNumber);
//   } else {
//     setTimeout(() => callback(userId), randomNumber);
//   }
// };

// export { requestUserData };

// // // test data

// // requestUserData('John', (userId, err) =>
// //   console.log(
// //     userId === null
// //       ? err
// //       : `{ userId: ${userId}, email: '${userId}@example.com' }`,
// //   ),
// // );

// // requestUserData('broken', (userId, err) =>
// //   console.log(
// //     userId === null
// //       ? err
// //       : `{ userId: ${userId}, email: '${userId}@example.com' }`,
// //   ),
// // );
