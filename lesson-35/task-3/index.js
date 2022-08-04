import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

// пользователь-пустышка (что бы не дублировать код)
const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

// что бы не дублировать код, отрендерить код с пустышкой
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

// подписка на новый поиск
function onSearchUser() {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
      hideSpinner();
    })
    .catch(err => {
      hideSpinner();
      alert('Failed to load data');
    });
}

showUserBtnElem.addEventListener('click', onSearchUser);

// after TASK-2 PRACTICE
// default img
// https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson35/task3/default-page.png

// .user__avatar
// .user__name
// .user__location

// for data https://api.github.com/users/USERNAME

// fetch(`https://api.github.com/users/${userName}`);

// 10.
// Имена (поле name) репозиториев нужно вывести в виде списка в элемент
// .repo-list. Каждый элемент списка должен иметь класс .repo-list__item

// 11.
// Перед запросом за данными нужно показать элемент .spinner.
// После завершения всех запросов (успешного или с ошибкой) нужно спрятать
// .spinner. Для управления отображением спиннера используйте класс .spinner_hidden

// `https://api.github.com/users/github`;

// fetch()
//   .then(response => {
//     debugger;
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('No data');
//   })
//   .then(data => console.log(data))
//   .catch(err => {
//     debugger;
//     console.log(err);
//   });
