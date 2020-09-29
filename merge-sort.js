const unsorted = [200, 5, 1, 4, 21, 14, 2, 50, 19, 22, 11.5];

function sort(arr) {
  // merge sort
  if (arr.length === 1) {
    return [...arr]
  }

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]]
    }
    return [...arr]
  }

  const length = arr.length
  const middle = Math.ceil(length / 2)

  const a = arr.slice(0, middle)
  const b = arr.slice(middle, length)

  const sortedA = sort(a)
  const sortedB = sort(b)

  const result = sortedA

  sortedB.forEach(elB => {
    const i = result.findIndex(e => elB < e)
    result.splice(i, 0, elB)
  })

  return result;
}

const result = sort(unsorted)

console.log(result)