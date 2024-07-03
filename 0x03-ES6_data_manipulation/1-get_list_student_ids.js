export default function getListStudentIds(stdObj) {
  const stdIds = [];
  if (Array.isArray(stdObj)) {
    return stdObj.map((std) => std.id);
  }
  return stdIds;
}
