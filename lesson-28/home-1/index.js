// Функция shmoment
// input: Date
// output: updated Data

// use chaining

// use getFullYears() ...
// const years = result.setFullYears();
// const month = result.setMonth();
// const days = result.setDate();
// const hours = result.setHours();
// const minutes = result.setMinutes();
// const seconds = result.setSeconds();
// const millise = result.setMilliseconds();

function shmoment(date) {
  const result = new Date(date);

  const dataQuantum = {
    years: value => result.setFullYear(result.getFullYear() + value),
    months: value => result.setMonth(result.getMonth() + value),
    days: value => result.setDate(result.getDate() + value),
    minutes: value => result.setMinutes(result.getMinutes() + value),
    hours: value => result.setHours(result.getHours() + value),
    seconds: value => result.setSeconds(result.getSeconds() + value),
    milliseconds: value => result.setMilliseconds(result.getMilliseconds() + value),
  };

  const update = {
    add(timeQuant, value) {
      dataQuantum[timeQuant](value);
      return this;
    },
    subtract(timeQuant, value) {
      dataQuantum[timeQuant](-value);
      return this;
    },
    result() {
      return new Date(result);
    },
  };

  return update;
}

export { shmoment };

const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result(); // ... Jan 15 2019 17:19:17 ...
console.log(res);
