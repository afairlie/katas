// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  const nums = num.toString().split('')
  const length = nums.length
  let result = ''
  
  nums.forEach((num, index) => {
    if (Number(num) > 0) {
      const expanded = num * Math.pow(10, length - (index + 1));
      if (!result) {
        result += `${expanded}`
      } else {
        result += ` + ${expanded}`
      }
    }
  })
  
  return result
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');