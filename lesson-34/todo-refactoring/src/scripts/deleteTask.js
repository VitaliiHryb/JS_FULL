import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { getTasksList, deleteTask } from './tasksGateway.js';

function onDeleteTask(event) {
  const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;

  const taskId = event.target.parentNode.firstElementChild.dataset.id;
  // console.log(event.target.parentNode.firstElementChild);

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}

export { onDeleteTask };
