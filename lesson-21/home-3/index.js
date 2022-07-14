'use strict';
// Получение содержимого элемента

function getTitle() {
  const textContent = document.querySelector('.title');
  return textContent;
}

function getDescription() {
  const textContent = document.querySelector('.about');
  return textContent.innerText;
}

function getPlans() {
  const textContent = document.querySelector('.plans');
  return textContent.innerHTML;
}

function getGoal() {
  const textContent = document.querySelector('.goal');
  return textContent.outerHTML;
}

export { getTitle, getDescription, getPlans, getGoal };
