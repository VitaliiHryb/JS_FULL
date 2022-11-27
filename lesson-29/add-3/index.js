'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */
const requestUserData = (userId, callback) => {
  const randomNumber = Math.floor(1000 + Math.random() * 2000);

  if (userId === 'broken') {
    setTimeout(() => callback(null, 'Failed to load user data'), randomNumber);
  } else {
    setTimeout(
      () => callback({ userId, email: `${userId}@example.com` }),
      randomNumber,
    );
  }
};

export { requestUserData };

// RequestUserData должна вызвать колбек с данными пользователя, если передан правильный id пользователя
