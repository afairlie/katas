def findNumbers(nums):
  count = 0
  digits = 1
  
  for n in nums:
    while (n >= 10):
      digits += 1
      n = n / 10
    if digits % 2 == 0:
      count += 1
    digits = 1
    
  return count

assert findNumbers([22, 234, 456, 1, 3, 2980, 0]) == 2
assert findNumbers([1, 1, 1, 22, 1, 1, 22, 1, 1, 1, 1, 2222]) == 3
print("assertions passed")