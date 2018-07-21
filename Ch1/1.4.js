//Palindrome permutations

function checkPermutation(input, output) {
  const regexp = new RegExp('\\s', 'g');
  input = input.replace(regexp, '').toLowerCase();
  output = output.replace(regexp, '').toLowerCase();
  if (input.length !== output.length) return false;
  const inputMap = createHash(input);
  const outputMap = createHash(output);
  for (let key in inputMap) {
    if (inputMap[key] !== outputMap[key]) {
      return false;
    }
  }
  return true;
}

function createHash(string) {
  const map = {};
  for (let ltr of string) {
    map[ltr] ? map[ltr]++ : map[ltr] = 1;
  }
  return map;
}