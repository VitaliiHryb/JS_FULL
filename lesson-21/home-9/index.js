'use strict';
// Установка атрибутов для DOM элементов

// paste in input ==> name="login"
// finishForm must includes <type> with text on password for input with parol

function finishForm() {
  const target = document.querySelector('form');
  const formItem = document.createElement('input');
  target.prepend(formItem);
  formItem.type = 'text';
  formItem.name = 'login';
  return formItem;
}

// finishForm();

export { finishForm };

// add type and name
// inp2.type = 'text';
// inp2.name = 'input_2';
