'use strict';
export const tasks

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

function renderTasks(taskList) {
  const listElement = document.querySelector('.list');

  const listItems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list__item');
      if (done) {
        listItem.classList.add('list__item_done');
      }

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      listItem.append(checkbox, text);

      return listItem;
    });

  listElement.append(...listItems);
}

renderTasks(tasks);
