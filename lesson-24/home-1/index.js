// Разница дат
// input:
// output:

// algo
// 1. millsec to minutes
// 2. millsec to hour
// 3. millsec to day
// 4. use Math.abs.()
// 5. get diff in milliseconds
// 6. ==> 275d 2h 58m 16s
// 6a. first get days from diff, after this hours and seconds

const millToMin = 60 * 1000;
const millToHours = 60 * millToMin;
const millToDay = 24 * millToHours;

const getDiff = (startDate, endDate) => {
  // console.log(endDate);
  // console.log(startDate);
  // console.log(endDate - startDate);
  // console.log(Math.abs(endDate - startDate));

  const millDiff = Math.abs(endDate - startDate);
  //
  const daysDiff = Math.trunc(millDiff / millToDay);
  const noDaysDiff = millDiff - daysDiff * millToDay;
  //
  const hoursDiff = Math.trunc(noDaysDiff / millToHours);
  const nohoursDiff = noDaysDiff - hoursDiff * millToHours;
  //
  const minDiff = Math.trunc(nohoursDiff / millToMin);
  const noMinDiff = nohoursDiff - minDiff * millToMin;

  const secDiff = Math.trunc(noMinDiff / 1000);

  // console.log(`${daysDiff}d ${hoursDiff}h ${minDiff}m ${secDiff}s`);
  return `${daysDiff}d ${hoursDiff}h ${minDiff}m ${secDiff}s`;
};

// // test data
// const startDate = new Date(2017, 3, 22, 5, 23, 50);
// const endDate = new Date(2018, 3, 15, 6, 5, 44);
// getDiff(startDate, endDate);

export { getDiff };
