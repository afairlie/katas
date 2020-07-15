// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  const splitText = s.split(' ')
  let shortest = splitText[0].length;
  splitText.forEach(string => string.length < shortest ? shortest = string.length : false)
  return shortest
}

console.log(findShort('Hello my name is Ariane'), 2)