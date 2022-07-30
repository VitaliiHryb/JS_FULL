const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name"');
const userLocationElem = document.querySelector('.user__location"');

const defaultAvatar = 'https://';

userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  //
};

showUserBtnElem.addEventListener('click', onSearchUser);
