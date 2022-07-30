const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

function fetchUserData(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then(respons =>
    respons.json(),
  );
}

function renderUserData(userData) {
  const { avatar_url, name, location } = userData;

  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
}

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

function onSearchUser() {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
}

showUserBtnElem.addEventListener('click', onSearchUser);

// const userAvatarElem = document.querySelector('.user__avatar');
// const userNameElem = document.querySelector('.user__name');
// const userLocationElem = document.querySelector('.user__location');

// // const defaultAvatar = 'https://';
// const defaultAvatar = 'https://avatars.githubusercontent.com/u/1342004';

// userAvatarElem.src = defaultAvatar;

// const showUserBtnElem = document.querySelector('.name-form__btn');
// const userNameInputElem = document.querySelector('.name-form__input');

// const fetchUserData = userName => {
//   return fetch(`https://api.github.com/users/${userName}`).then(response =>
//     response.json(),
//   );
//   // response.blob(),
// };

// const renderuserData = userData => {
//   // console.log(userData);
//   const { avatar_url, name, location } = userData;
//   userAvatarElem.src = avatar_url;
//   userNameElem.textContent = name;
//   userLocationElem.textContent = location ? `from ${location}` : '';
// };

// const onSearchUser = () => {
//   const userName = userNameInputElem.value;
//   fetchUserData(userName).then(userData => renderuserData(userData));
// };

// // https://api.github.com/users/USERNAME

// showUserBtnElem.addEventListener('click', onSearchUser);
