const twoSum = function(nums, target) {
  let seen = new Set;
  let result = [];
  
  for (let i in nums) {
      if (seen.has(target - nums[i])) {
          const match = [...seen].findIndex(num => num === (target - nums[i]))
          result.push(match)
          result.push(Number(i))
      } else {
          seen.add(nums[i])
      }
  }
  
  return result;
};

console.log(twoSum([1, 2, 5, 6, 7], 6), [0, 2])