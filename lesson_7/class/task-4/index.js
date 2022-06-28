//['Den', 'John', 'Ann', 'Mike'], ['John', 'Mike']; => ['Good job, Den', 'Good job, Ann']
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => 
    allStudentsList
     .filter(name => !studentsForRetake.includes(name))
     .map(name => 'Good job, ' + name);

  
  // examples
  const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
  const retakeStudTest1 = ['John', 'Mike'];
  getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']
  
  const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
  const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
  getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []

  //1. find passed students
  //2. add Good job


//   const passedStudents = allStudentsList
//      .filter(name => studentsForRetake.indexOf(name) === -1);


// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//     const passedStudents = allStudentsList
//      .filter(name => !studentsForRetake.includes(name));

//      const messages = passedStudents
//         .map(name => 'Good job, ' + name);

//      return messages;
//   };