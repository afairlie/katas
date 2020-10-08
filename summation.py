def summation(num):
  count = 0
  
  for n in range(num + 1):
      count += n
  
  return count

# refactored answer

def summationR(num):
  return sum(range(num + 1))

print(summation(3))
print(summationR(3))