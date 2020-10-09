def friend(x):
  return list(filter(lambda n: len(n) == 4, x))

print(friend(["Ryan", "Kieran", "Mark"])) # ["Ryan", "Mark"]

# alt solution
def friend_age(x):
  # LIST COMPREHENTION: iterates of x.items() with name, age, checks if age > 25, returns array of dicts with name: age
  return list({n: a} for n, a in x.items() if a > 25)

print(friend_age({"Ryan": 26, "Kieran": 28, "Mark": 25})) # friend age