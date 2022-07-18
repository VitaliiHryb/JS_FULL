// Todo List - create/update task

// Goals:
// 1. how to work web-flow
// 2. practice DOM with events, arrays, objects
// 3. algo and refactoring

// Recomendations:
// 1a. when add/change a task - first add/update array element
// 1b. after this render the List again with updated array ==> call function render
// 2a. be sure to appoint for every task in array - id
// 2b. id use with data-attribute for checkbox with render
// 2c. with the help of this id define in what task needed to change status 'done' with 'click' on checkbox
// 3. when render tasks, better use id for data-attributes (not index or smth)
// 4. keep in mind that data-attribute will have data - 'string'

// Algo:
// 1. create action for button ( ==> creating tasks )
// 1a. onclick use renderTask
// use getInput

const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

// for click
const createButton = document.querySelector('button');
const taskInput = document.querySelector('.task-input');

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  removeListeners();

  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      checkbox.addEventListener('change', changeTaskState);
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      // <li class="list__item list__item_done">
      //   <input type="checkbox" class="list__item-checkbox">
      //   Visit
      // </li>

      return listItemElem;
    });

  // push new task in list
  listElem.append(...tasksElems);
};

function changeTaskState(event) {
  const checkbox = event.target;
  const { id } = checkbox.dataset;
  const task = tasks.find(t => t.id === id);
  task.done = checkbox.checked;
  renderTasks(tasks);
}

function removeListeners() {
  const checkboxes = document.querySelectorAll('.list__item-checkbox');
  checkboxes.forEach(c => c.removeEventListener('change', changeTaskState));
}

function createNewTask() {
  const textInInput = taskInput.value;
  if (!textInInput) {
    return;
  }
  const newId = Math.max(...tasks.map(t => +t.id)) + 1;

  const addedTask = { text: textInInput, done: false, id: newId.toString() };
  tasks.push(addedTask);

  renderTasks(tasks);
}
createButton.addEventListener('click', createNewTask);

renderTasks(tasks);

// -----------------------------------------------------------------------------------

// // perfect solution
// const listElem = document.querySelector('.list');
// const createTaskBtnElem = document.querySelector('.create-task-btn');

// const tasks = [
//   { id: 1, text: 'Buy milk', isDone: false },
//   { id: 2, text: 'Pick up Tom from airport', isDone: false },
//   { id: 3, text: 'Visit party', isDone: false },
//   { id: 4, text: 'Visit doctor', isDone: true },
//   { id: 5, text: 'Buy meat', isDone: true },
// ];

// function createTask(id, text, isDone = false) {
//   return { id, text, isDone };
// }

// // what is attrs? It is an array of keys ==> add new attribute (name: value)
// function createElement(elementType, class_, attrs, dataset) {
//   const element = document.createElement(elementType);

//   if (class_) element.classList.add(class_);

//   if (attrs)
//     Object.keys(attrs).forEach(attr => {
//       element.setAttribute(attr, attrs[attr]);
//     });

//   if (dataset)
//     Object.keys(dataset).forEach(dataKey => {
//       element.dataset[dataKey] = dataset[dataKey];
//     });

//   return element;
// }

// function renderDecorator(callbackFn) {
//   return function () {
//     const fnResult = callbackFn.apply(this, arguments);

//     listElem.innerHTML = '';
//     renderTasks(tasks);

//     return fnResult;
//   };
// }

// const onCheckboxClick = renderDecorator(({ target }) => {
//   const taskId = +target.closest('.list__item').dataset.taskId;
//   const task = tasks.find(task => task.id === taskId);
//   task.isDone = !task.isDone;
//   console.log(tasks, task);
// });

// const onCreateBtnClick = renderDecorator(() => {
//   const newTaskElement = document.querySelector('.task-input');
//   if (!newTaskElement.value) return;

//   const id = Math.max(...tasks.map(task => task.id)) + 1;
//   tasks.push(createTask(id, newTaskElement.value));
//   newTaskElement.value = '';
// });

// createTaskBtnElem.addEventListener('click', onCreateBtnClick);

// const renderTasks = tasksList => {
//   const tasksElems = tasksList
//     .sort((a, b) => a.isDone - b.isDone)
//     .map(({ id, text, isDone }) => {
//       const listItemElem = createElement('li', 'list__item', null, {
//         taskId: id,
//       });

//       const checkbox = createElement('input', 'list__item-checkbox', {
//         type: 'checkbox',
//       });
//       checkbox.checked = isDone;
//       checkbox.addEventListener('click', onCheckboxClick);

//       if (isDone) listItemElem.classList.add('list__item_done');

//       listItemElem.append(checkbox, text);
//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

// renderTasks(tasks); // render test data by default
