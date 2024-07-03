export default function getStudentByLocation(stdObj, city) {
  if (stdObj && city) {
    return stdObj.filter((val) => val.location === city);
  }
  return [];
}
