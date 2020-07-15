function twoSum(numbers, target) {
    let seen = new Set;
    let result = [];
    
    for (let i in numbers) {
        if (seen.has(target - numbers[i])) {
            const match = numbers.findIndex(num => num === (target - numbers[i]))
            result.push(match)
            result.push(Number(i))
            return result
        } else {
            seen.add(numbers[i])
        }
    }
  }

console.log(twoSum([1, 2, 5, 6, 7], 6), [0, 2])