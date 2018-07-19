// Is Unique

function allUnique(string) {
  for (let i = 0; i < string.length; i++) {
    const index = string.slice(0, i).indexOf(string[i]);
    if (index >= 0) return false;
  }
  return true;
}

console.log(allUnique("aeiou"));