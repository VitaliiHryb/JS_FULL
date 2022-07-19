// Время в Гринвиче
// input:
// output:

// algo
// 1.
// 2.
// 3.

// const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC', // Grinvich
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const getGreenwichTime = date => formatter.format(date);

console.log(getGreenwichTime(new Date()));

// timezone: 'UTC', 'Asia/'...

export { getGreenwichTime };
