def remove_smallest(numbers):
  if not numbers:
    return []
  new_list = numbers.copy()
  new_list.remove(min(numbers))
  return new_list

assert remove_smallest([2, 4, 3, 5, 1, 7, 4, 1, 5]) == [2, 4, 3, 5, 7, 4, 1, 5]
assert remove_smallest([]) == []
print("assertions passed")

# alt way to copy: new_list = numbers[:] (leave [start:end] blank)