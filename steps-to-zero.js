let numberOfSteps  = function(num) {
    //  count steps to zero
    let steps = 0;

    // reduce to zero given
      // if even, divide by two, steps++
      // else -1, steps++
    while (num) {
      if (num % 2 === 0) {
        num = num / 2;
        steps++;
      } else {
        num--;
        steps++;
      }
      // better solution to do steps++ once, at end of conditionals
    }
    return steps;
};

console.log(numberOfSteps(8));