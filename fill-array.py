def arr(n = 0): 
    list = []
    
    if n:
        for x in range(n):
            list.append(x)
    
    return list
result = (arr(5) == [0, 1, 2, 3, 4])
print(result)

# refactor

def arrR(n = 0):
  return list(range(n))

result = (arrR(5) == [0, 1, 2, 3, 4])
print(result)