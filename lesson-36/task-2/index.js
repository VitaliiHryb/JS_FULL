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
async function onSearchUser() {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }

  // fetchUserData(userName)
  //   .then(userData => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then(url => fetchRepositories(url))
  //   .then(reposList => {
  //     renderRepos(reposList);
  //   })
  //   .catch(err => {
  //     alert('Failed to load data');
  //   })
  //   .finally(() => {
  //     hideSpinner();
  //   });
}

showUserBtnElem.addEventListener('click', onSearchUser);
