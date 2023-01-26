'use strict';

export function studentsBirthDays(students) {
  const birthDays = {};
  students.forEach(student => {
    const birthdate = new Date(student.birthDate);
    const month = birthdate.toLocaleString('default', { month: 'short' });
    if (!birthDays[month]) {
      birthDays[month] = [];
    }
    birthDays[month].push({ name: student.name, day: birthdate.getUTCDate() });
  });
  const sortedBirthDays = {};
  Object.entries(birthDays).forEach(([month, students]) => {
    sortedBirthDays[month] = [...students].sort(
      (studentA, studentB) => studentA.day - studentB.day,
    );
    sortedBirthDays[month] = sortedBirthDays[month].map(
      student => student.name,
    );
  });
  return sortedBirthDays;
}

// option 2
// function studentsBirthDays(students) {
//   const birthDays = students.reduce((acc, student) => {
//     const birthdate = new Date(student.birthDate);
//     const month = birthdate.toLocaleString('default', { month: 'short' });
//     if (!acc[month]) {
//       acc[month] = [];
//     }
//     acc[month].push({ name: student.name, day: birthdate.getUTCDate() });
//     return acc;
//   }, {});

//   const sortedBirthDays = Object.entries(birthDays).map(([month, students]) => {
//     const sortedStudents = [...students].sort(
//       (studentA, studentB) => studentA.day - studentB.day,
//     );
//     return { [month]: sortedStudents.map(student => student.name) };
//   });
//   return Object.assign({}, ...sortedBirthDays);
// }
