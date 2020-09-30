const assert = require('assert');
const panagram = 'the quick brown fox jumps over the lazy dog';

function detectPanagram(str) {
  let alphabet = new Set()

  for(let l of str.split(' ').join('').split('')) {
    alphabet.add(l)
    if(alphabet.size === 26) {
      return true
    }
  }
  return false
}

assert.strictEqual(detectPanagram(panagram), true)