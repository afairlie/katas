// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  let set = new Set(numbers);
  let pair = [...set]
  const count = numbers.filter(num => num === pair[0]).length
  
  return count > 1 ? pair[1] : pair[0]
}

console.log(stray([1,1,2]), 2)