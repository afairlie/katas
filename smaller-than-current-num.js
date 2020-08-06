let smallerNumbersThanCurrent = function(nums) {
  return nums.map((n, i) => {
    let count = 0;
    for (let j in nums) {
      if (j == i) {
        j++;
      } else {
        nums[j] < n ? count++ : false;
      }
    }
    return count;
  })
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]), [4, 0, 1, 1, 3]);

let betterSolution = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map(num => sorted.indexOf(num));
}

// this works because indexOf will retrieve index of first num that matches in array, so when there are repeat numbers, it will still just find the first, which will correspond to the number of other numbers it is greater than.
console.log(betterSolution([8,1,2,2,3]));