const spinner = document.querySelector('.spinner');

// показать спинер
function showSpinner() {
  spinner.classList.remove('spinner_hidden');
}

// спрятать спиннер
function hideSpinner() {
  spinner.classList.add('spinner_hidden');
}

export { showSpinner, hideSpinner };
