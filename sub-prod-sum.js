let subtractProductAndSum = function(n) {
  let pwr = n.toString().length;
  let nums = [];

  while (pwr) {
    const num = Math.pow(10, pwr);
    nums.push((((n % num) - (n % (num / 10))) / (num / 10)))
    pwr--;
  }

  // iterate, add and multiply
  let added = 0;
  let multiplied = 1;

  nums.forEach(n => {
    added += n;
    multiplied *= n;
  })
  // return multiply - add
  return multiplied - added;
};

console.log(subtractProductAndSum(234))