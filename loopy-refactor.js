const checkMultiple = (i, multiple) => {
  return i % multiple === 0 ? true : false;
}

const loopyLighthouse = function([startingNum, finalNum], [multipleX, multipleY], [firstWord, secondWord]){
  if (startingNum && finalNum && multipleX, multipleY && firstWord && secondWord){

    for (let i = startingNum; i <= finalNum; i++){
      const multipleOfX = checkMultiple(i, multipleX)
      const multipleOfY = checkMultiple(i, multipleY)
      let result = '';
      
      if (multipleOfX){result += firstWord}
      if (multipleOfY){result += secondWord}

      console.log(result || i)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);