let restoreString = function(s, indices) {
  let matched = {};

  indices.forEach((n, i) => matched[n] = s[i])
  return Object.values(matched).join('');
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]), 'leetcode');