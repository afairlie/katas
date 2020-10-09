def index(array, n):
    if n < len(array):
        return array[n] ** n
    else:
        return -1

print(index([1, 2, 3, 4, 5], 3) == 64)