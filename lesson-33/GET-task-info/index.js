// GET task info
// Напиши методы, для получения данных с сервера

// ТЗ
// 1. getTasksList должна сделать запрос на сервер за всеми задачами и вернуть промис с массивом задач
// 2. getTaskById принемает как единственный аргумент строку taskId
// Должна сделать запрос на сервер за указанной задачей и вернуть промис с обьектом задачи

// Типичные ошибки
// 1. getTaskById не должна загружать все таски, а только нужную
// 2. fetch возвращает промис. И метод then тоже возвращает промис.
// Что бы проверить роботу функций из задания, на них тоже нужно подписатся,
// как это сделано в примере работы

// Алгоритм
// 1.

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  // console.log(fetch(baseUrl).then(response => response.json()));
  return fetch(baseUrl).then(response => response.json());
}

function getTaskById(taskId) {
  const arr = getTasksList();
  // const arr = [
  //   { id: '1', isDone: false },
  //   { id: '2', isDone: false },
  // ];
  return arr.filter(task => task.id === taskId);
}

// // examples
// getTasksList().then(tasksList => {
//   console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
// });

// // console.log(getTaskById('2'));

// getTaskById('2').then(taskData => {
//   console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
// });

export { getTasksList, getTaskById };

// const fetchUserData = () => {
//   const result = fetch(`https://api.github.com/users`).then(response =>
//     response.json(),
//   );
//   console.log(result);
//   return result;
// };

// fetchUserData();
