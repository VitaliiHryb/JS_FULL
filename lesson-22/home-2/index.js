'use strict';
// Handle event for checkbox
// use addEventListener

const taskStatus = document.querySelector('.task-status');
function handleClick() {
  // alert(`${taskStatus.value}`);
  if (taskStatus.checked) {
    console.log(true);
  } else console.log(false);
}
taskStatus.addEventListener('change', handleClick);

// export {}
