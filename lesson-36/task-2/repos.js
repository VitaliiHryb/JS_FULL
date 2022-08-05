const listElem = document.querySelector('.repo-list');

function cleanReposList() {
  listElem.innerHTML = '';
}

// ф-я отрисовует репозитории
// ожидает список репозиториев, будет по этом усписку проходится и генерировать елемменты,
//  которые мы потом добавим в елементы с классом .repo-list
function renderRepos(reposList) {
  const reposListElems = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;

    return listElem;
  });
  cleanReposList(); // чистим список пользователей
  listElem.append(...reposListElems); // вставляем массив (append принемает в виде строки)
}

export { renderRepos, cleanReposList };
