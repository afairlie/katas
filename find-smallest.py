def find_smallest(arr):
  smallest = arr[0]
  for n in arr:
    if n < smallest:
      smallest = n
  return smallest

print(find_smallest([78, 56, 232, 12, 11, 43])) # 11
print(find_smallest([78, 56, -2, 12, 8, -33])) # -33

# better solution

def find_smallest_int(arr):
  return min(arr)

print(find_smallest_int([78, 56, 232, 12, 11, 43])) # 11
print(find_smallest_int([78, 56, -2, 12, 8, -33])) # -33