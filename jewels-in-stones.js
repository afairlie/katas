let numJewelsInStones = function(J, S) {
  // iterate each char of S, if char === J[n], acc++; 
  const jewels = J.split('');

    return S.split('').reduce((total, curr) => {
      if (jewels.find(c => c === curr)) {
        total++;
      }

      return total;
    }, 0);
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));