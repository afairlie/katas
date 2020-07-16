// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
  let pairs = 0;
  const counted = nums.reduce((allNums, num) => {
      if (num in allNums) {
         allNums[num]++;
      } else {
         allNums[num] = 1
      }
      return allNums
  }, {})
  
  for (let each in counted) {
      const n = counted[each]
      if ( n > 1) {
          pairs += n * (n - 1) / 2
      }
  }
  return pairs
};

console.log(numIdenticalPairs([1,2,3,1,1,3]), 4)