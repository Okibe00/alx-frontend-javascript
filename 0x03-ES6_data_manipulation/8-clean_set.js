export default function cleanSet(set, substr) {
  if (substr.length === 0) {
    return '';
  }
  const strArray = [];
  set.forEach((str) => {
    if (str.startsWith(substr)) {
      strArray.push(str.substring(substr.length));
    }
  });
  return strArray.join('-');
}
