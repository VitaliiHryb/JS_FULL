// Основные требования:
// 1. По нажатию на кнопку Register нужно сохранить данные юзера, отправив данные формы на сервер
// '.submit-button' ==> // (используй в качестве сервера свой mockapi.io)
// 2. Ответ от сервера требуется вывести в alert в виде объекта
// 3. После успешного сохранения данных нужно очистить поля формы
// Подсказка: (установить пустую строку как значение)
// 4. Кнопка Register должна быть disabled, если хотя бы одно поле не валидно
// Подсказка: (используй HTMLFormElement.reportValidity() у элемента формы для ее валидации)!
// 5. После написания и тестирования кода, обязательно проделай рефакторинг (!)

const baseUrl = 'https://62e9354b01787ec712138da8.mockapi.io/api/v1/users';

const submitBtnElem = document.querySelector('.submit-button');
const form = document.forms[0];
const inputs = [...document.querySelectorAll('input')];
const errorTextElem = document.querySelector('.error-text');

function validateFields() {
  if (form.reportValidity()) {
    submitBtnElem.disabled = false;
  } else {
    submitBtnElem.disabled = true;
  }
  errorTextElem.textContent = '';
}

function submitData(event) {
  event.preventDefault();
  const newUser = [...new FormData(form)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  })
    .then(response => response.json())
    .then(data => {
      inputs.map(elem => (elem.value = ''));
      submitBtnElem.disabled = true;
      alert(JSON.stringify(data));
    })
    .catch(() => {
      errorTextElem.textContent = 'Failed to create user';
    });
}

form.addEventListener('input', validateFields);
form.addEventListener('submit', submitData);
