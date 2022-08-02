// Используй правильные HTTP методы для каждой ф-ции (GET, POST, PUT, DELETE)

// const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const baseUrl = 'https://62e9354b01787ec712138da8.mockapi.io/api/v1/users';

// Ф-ция getUsersList должна сделать запрос на сервер за всеми пользователями
// и вернуть промис с массивом пользователей
function getUsersList() {
  return fetch(`${baseUrl}`).then(response => response.json());
}

// Ф-ция getUserById принимает как единственный аргумент строку userId.
// getUserById должна сделать запрос на сервер за указанным пользователем
// и вернуть промис с объектом пользователя
function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`)
    .then(response => response.json())
    .then(users => users);
}

// Ф-ция createUser должна принимать объект пользователя и создать такого пользователя на сервере.
// Должна возвращать промис
function createUser(userData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userData),
  };
  return fetch(`${baseUrl}`, requestOptions).then(response => response.json());
}

// Ф-ция deleteUser должна принимать id пользователя и удалить пользователя с таким id.
// Должна возвращать промис
function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, { method: 'DELETE' }).then(response =>
    response.json(),
  );
}

// Ф-ция updateUser должна принимать id пользователя как первый аргумент и объект пользователя
// как второй аргумент. updateUser должна обновить данные пользователя на сервере.
// Должна возвращать промис
function updateUser(userId, userData) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userData),
  };
  return fetch(`${baseUrl}/${userId}`, requestOptions).then(response =>
    response.json(),
  );
}

// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });

// export { getUserById, ... };
