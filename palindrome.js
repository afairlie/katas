const assert = require('assert')
const palindrome = 'a man a plan a canal panama';

function detectPalindrome(str) {
  let spaceless = str.split(' ').join('')
  const l = spaceless.length

  for(let i = 0; i < Math.floor(l / 2); i++) {
    if(spaceless[i] !== spaceless[l - i - 1]) {
      return false
    }
  }

  return true
}

assert.strictEqual(detectPalindrome(palindrome), true)