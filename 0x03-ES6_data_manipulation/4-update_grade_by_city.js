export default function updateStudentGradeByCity(students, city, newGrades) {
  const filterByCity = students.filter((std) => std.location === city);
  const newList = filterByCity.map((val) => {
    const gradesArray = newGrades.filter((x) => x.studentId === val.id);
    const temp = val;
    if (gradesArray.length) {
      temp.grade = gradesArray[0].grade;
    } else {
      temp.grade = 'N/A';
    }
    return temp;
  });
  return newList;
}
