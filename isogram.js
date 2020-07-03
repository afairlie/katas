function isIsogram(str){
  const log = [];
  let result = true;
  
  for (const letter of str.split('')) {
    const l = letter.toLowerCase()
    if (log.includes(l)) {
      result = false;
      break;
    }
    log.push(l);
  }

  return result;
}