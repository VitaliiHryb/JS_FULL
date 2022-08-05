// Users blogs

// 1. getUsersBlogs должна сделать запрос за данными для ВСЕХ пользователей
// (для получения данных о пользователе , используй API https://api.github.com/users/USERID
// 2. getUsersBlogs должна вернуть промис с адресами блогов пользователей в виде массива
// (свойство blog из объекта пользователя)
// 3. getUsersBlogs должна отклонить промис, если произошла ошибка при хоть одном запросе

// Подсказки и типичные ошибки:
// 1. Используй Promise.all для параллельной отправки запросов
// 2. await в этой задаче нужно использовать только один раз

/**
 * @param {string[]} users
 * @return {promise}
 */

// fail request: `https://api.github.com//${userId}`

const getUsersBlogs = async arr => {
  try {
    const response = await arr.map(userId =>
      fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Failed to load data');
        })
        .then(user => user.blog),
    );
    const usersData = await Promise.all(response);
    return usersData;
  } catch (err) {
    console.log(err);
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList =>
  console.log(linksList),
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

export { getUsersBlogs };
