// вся логика, которая относится к запросу данных с сервера
// функции, которые запрашивают данные
async function fetchUserData(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
}

// подпищик возвращается в виде аргумента
async function fetchRepositories(url) {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
}
export { fetchUserData, fetchRepositories };

// response.ok === response.status === 200

// OLD OPTION: without asinc/await

// function fetchUserData(userName) {
//   return fetch(`https://api.github.com/users/${userName}`).then(response => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });
// }

// function fetchRepositories(url) {
//   return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });
// }
// export { fetchUserData, fetchRepositories };
