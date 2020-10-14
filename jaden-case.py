import string

def jaden_case(s):
  return string.capwords(s)

print(jaden_case('this is a string with no caps, no longer.'))

# alt solution

def jaden_casing(string):
  return ' '.join(word.capitalize() for word in string.split())

print(jaden_casing('this too is a string, now capitalized'))

# another other solution
print('this too is a string, now capitalized'.title())