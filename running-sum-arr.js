// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

function runningSum(nums) {
  const result = []
  
  nums.reduce((acc, curr) => {
      result.push(acc + curr)
      return acc + curr
  }, 0)
  
  return result;
};

console.log(runningSum([1,2,3,4]), [1,3,6,10])