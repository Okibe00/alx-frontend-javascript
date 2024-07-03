export default function getStudentIdsSum(idArr) {
  return idArr.reduce((prevRes, currVal) => prevRes + currVal.id, 0);
}
