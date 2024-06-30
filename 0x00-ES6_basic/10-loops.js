export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    if (idx) {
      newArray.push(appendString + idx);
    }
  }
  return newArray;
}
