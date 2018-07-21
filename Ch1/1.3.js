//URLify

function urlify(string, num) {
  const regExp1 = new RegExp('\\s+', 'g'); // takes care of single or multiple whitespace
  const regExp2 = new RegExp('\\s', 'g'); // takes care of single whitespace
  //first replace multiple whitespace with one and get specified length
  string = string.replace(regExp1, ' ').slice(0, 13); 
  // then, return string with single whitespace replace with '%20'
  return string.replace(regExp2, '%20');
}