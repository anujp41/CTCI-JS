// Check permutations

function checkPerm(str1, str2) {
  if (str1.length !== str2.length) return false;
  const arr1 = str1.split('');
  arr1.sort((prev, curr) => str2.indexOf(prev) - str2.indexOf(curr));
  str1 = attr1.join('');
  return str1 === str2;
}