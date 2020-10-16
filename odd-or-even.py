def odd_or_even(arr):
    return sum(arr) % 2 == 0 and "even" or "odd"

# alt: return "even" if sum(arr) % 2 == 0 else "odd"

assert odd_or_even([1, 2, 3]) == "even"
assert odd_or_even([1, 2, 3, 4, 5]) == "odd"
print("assertions passed")