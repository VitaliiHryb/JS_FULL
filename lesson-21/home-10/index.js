'use strict';
// Working with classes for DOM elements

// 1. добавить класс selected к елементу с классом one
// 2. delete класс selected к елементу с классом two
// 3. переключить (toggle) класс three_done у елемента с класом three
// 4. add class 'another-class' for element with class 'four' if it has some-class

function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.toggle('three_done');
  if (document.querySelector('.four').classList.contains('some-class')) {
    document.querySelector('.four').classList.add('another-class');
  }
}

// manageClasses();

export { manageClasses };

// add type and name
// inp2.type = 'text';
// inp2.name = 'input_2';

//  const formPas = document.querySelector('input');
//  const formItem = document.createElement('input');
//  target.prepend(formItem);

// element.classList.add('class-name') - добавит элементу класс с именем class-name

// element.classList.remove('class-name') - удалит у элемента класс с именем class-name
