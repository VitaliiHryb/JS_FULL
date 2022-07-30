// Самые активные разработчики
// 'https://api.github.com/repos/USERID/REPOID/commits?per_page=100';

// { days: 7, userId: 'userId', repoId: 'repoId' }

const inputNameOwnerElem = document.querySelector('.form__input-name-owner');
const inputNameRepoElem = document.querySelector('.form__input-name-repo');
const inputAmountDaysElem = document.querySelector('.form__input-amount-days');
const usersListElem = document.querySelector('.users-list');
const showUserBtnElem = document.querySelector('.name-form__btn');

showUserBtnElem.addEventListener('click', onSearchMostActiveDevs);

function onSearchMostActiveDevs() {
  const userId = inputNameOwnerElem.value;
  const repoId = inputNameRepoElem.value;
  const days = inputAmountDaysElem.value;

  getMostActiveDevs({ days, userId, repoId }).then(users => renderUsers(users));
}

// `https://api.github.com/repos/DereviankoViacheslav/calendar-web-app/commits?per_page=100`)

function getMostActiveDevs({ days, userId, repoId }) {
  return fetch(
    `https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`,
  )
    .then(respons => respons.json())
    .then(commits => getDevelopers(commits, days));
}

function getDevelopers(commits, days) {
  const fromDate = getStartDate(days);

  const dataUsers = commits
    .filter(commit => new Date(commit.commit.author.date) - fromDate > 0)
    .reduce((acc, commit) => {
      const id = commit.author.id;
      acc[id] = acc[id] ? acc[id] : {};
      const avatar = acc[id].avatar ? acc[id].avatar : commit.author.avatar_url;
      const name = acc[id].name ? acc[id].name : commit.commit.author.name;
      const email = acc[id].email ? acc[id].email : commit.commit.author.email;
      const count = acc[id].count ? ++acc[id].count : 1;

      return { ...acc, [id]: { id, name, email, avatar, count } };
    }, {});

  const arrUsers = Object.values(dataUsers).sort((a, b) => b.count - a.count);
  const commitsTopDeveloper = arrUsers[0].count;

  return arrUsers.filter(({ count }) => commitsTopDeveloper === count);
}

function getStartDate(daysAgo) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() - daysAgo));
}

function renderUsers(users) {
  let listItem = '';

  users.map(({ name, avatar }) => {
    listItem += `<li class="users-list__item">
                        <img class="user__avatar" src="${avatar}" alt="User Avatar">
                        <span class="user__name">${name}</span>
                    </li>`;
  });
  usersListElem.innerHTML = listItem;
}

export { getMostActiveDevs };
