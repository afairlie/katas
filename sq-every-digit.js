const assert = require('assert')

function squareDigits(num){
  const result = num.toString().split('').map(n => Math.pow(Number(n), 2))
  return Number(result.join(''))
}

assert.strictEqual(squareDigits(9119), 811181);