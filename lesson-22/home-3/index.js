'use strict';
// Handle event for checkbox
// use addEventListener

const taskStatus = document.querySelector('.task-status');
function handleClick() {
  // alert(`${taskStatus.value}`);
  if (taskStatus.checked) {
    console.log(true);
    console.log(`${taskStatus.value}`);
  } else {
    console.log(false);
    console.log(`${taskStatus.value}`);
  }
}
taskStatus.addEventListener('change', handleClick);

// export {}
