// Write a program that takes any number of command line arguments, converts each to pig latin, then puts the translated words together into one sentence logged to the console.

const pigLatin = (words) => {
  console.log(words.map(w => {
    const firstLetter = w.split('').shift()
    const word = w.split('').slice(1)
    word.push(firstLetter + 'ay')
    return word.join('')
  }).join(' '))
}

pigLatin(process.argv.slice(2))