'use strict';
// Создание DOM элементов и вставка на страницу - 2

// use append, prepend, before, after
// output list from 1 to 8

function finishList() {
  const target1 = document.querySelector('.list');
  const target2 = document.querySelector('.special');
  const liItem1 = document.createElement('li');
  const liItem4 = document.createElement('li');
  const liItem6 = document.createElement('li');
  const liItem8 = document.createElement('li');
  target1.prepend(liItem1);
  target2.before(liItem4);
  target2.after(liItem6);
  target1.append(liItem8);
  liItem1.textContent = '1';
  liItem4.textContent = '4';
  liItem6.textContent = '6';
  liItem8.textContent = '8';
}

// finishList();

export { finishList };

/*
<ul class="list"> <!-- target1 -->
  <!-- prepend -->
  <li>2</li>
  <li>3</li>
  <!-- before -->
  <li class="special">5</li> <!-- target2 -->
  <!-- after -->
  <li>7</li>
  <!-- append -->
</ul>
*/
