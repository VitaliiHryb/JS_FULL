// Установка компонентов даты
// input: date, number
// output: string

// algo
// 1. take date that is in variable(date) with method .getDate()
// 2. taken date set new date with method .setDate()
// 3. find out what day of the week is our data with method .getDay()

// const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
const weekDays = ['Su', 'St', 'Fr', 'Th', 'We', 'Tu', 'Mo'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const today = new Date(date).setDate(day + days);

  return weekDays[new Date(today).getDate()];
};

export { dayOfWeek };

const showDate = dayOfWeek(new Date(2022, 2, 24), 13);

console.log(showDate); // ==> 'Su'

// const weekDays1 = ['Su', 'St', 'Fr', 'Th', 'We', 'Tu', 'Mo'];

// const getDayOfWeek = (date, days) => {
//   const day = new Date(date).getDate();
//   const dateInFuture = new Date(date).setDate(day + days);

//   return weekDays1[new Date(dateInFuture).getDay()];
// };

// const result = getDayOfWeek(new Date(2019, 0, 1), 14);

// console.log(result);
