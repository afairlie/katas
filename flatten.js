function flatten(array) {
  let result = []

  array.forEach(item => Array.isArray(item) ? result.push(...flatten(item)) : result.push(item))

  return result
}

console.log(flatten([1, 2, 3, [4, 5], 6, [[7, 8], [[9, [10]]]]]))