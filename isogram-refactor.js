function isIsogram(str){

  const letters = str.toLowerCase().split('')
  
  return [...new Set(letters)].length === str.length
}