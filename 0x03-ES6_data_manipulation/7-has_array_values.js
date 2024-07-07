export default function hasValuesFromArray(set, array) {
  let flag = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (!set.has(array[i])) {
      flag = 1;
      break;
    }
  }
  return flag === 0;
}
