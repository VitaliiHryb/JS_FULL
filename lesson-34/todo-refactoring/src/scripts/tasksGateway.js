const baseUrl = 'https://62e9354b01787ec712138da8.mockapi.io/api/v1/todo';

function mapTasks(tasks) {
  return tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
}

function getTasksList() {
  return fetch(baseUrl).then(response => response.json());
  //.then(tasks => mapTasks(tasks));
}

function creatTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
}

function updateTask(taskId, updatedTaskData) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
}

function deleteTask(taskId) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
}

export { getTasksList, creatTask, updateTask, deleteTask };

// {"id":"4","text":"4","done":false,"createDate":"2022-08-09T17:52:23.484Z"}
