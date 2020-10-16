
def shuffle(nums, n):
  new_list = []
  for i in range(n):
    new_list.append(nums[i])
    new_list.append(nums[i + n])
  return new_list

assert shuffle([1, 2, 3, 4], 2) == [1, 3, 2, 4]
assert shuffle([2, 4, 6, 8, 10, 12, 14, 16], 4) == [2, 10, 4, 12, 6, 14, 8, 16]
print("assertions passed")