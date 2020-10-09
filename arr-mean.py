# Return the average of the given array rounded down to its nearest integer.

def get_average(marks):
    product = 0
    for each in marks:
        product += each
    return int(product / len(marks))

print(get_average([1, 5, 87, 45, 8, 8])) # 25

# better answer

def get_mean(marks):
  return int(sum(marks) / len(marks))

print(get_mean([1, 4, 7, 11, 3, 5, 7])) # 5