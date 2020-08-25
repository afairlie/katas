const xorOperation = function(n, start) {
  const nums = [];
  
  for (let i = 0; i < n; i++) {
      nums.push(start + 2*i)
  }
  // console.log(nums)
  
  return nums.reduce((acc, curr) => {
      // console.log(acc ^ curr)
      return acc ^ curr
  }, 0)
};

xorOperation(4, 3)