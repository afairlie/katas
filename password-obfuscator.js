// Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

const password = process.argv.slice(2, 3)

function obfuscate(password) {
  const result = password[0].split('').map(letter => {
    switch(letter) {
      case 'a': return '4';
      case 'e': return '3';
      case 'o': return '0';
      case 'l': return '1';
      default: return letter;
    }
  }).join('')
  console.log(result)
}

obfuscate(password)