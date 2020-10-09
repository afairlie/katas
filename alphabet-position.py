def alphabet_position(text):
  # make all uppercase
  # skip anything not a-z
  result = list()
  for c in text:
    num = ord(c.upper()) % 64
    if num > 0 and num <= 26:
      result.append(str(num))
  return ' '.join(result)

print(alphabet_position("The sunset sets at twelve o' clock."))

# one liner... isalpha() missing piece

def alpha_pos(text):
  return ' '.join(str(ord(c.upper()) % 64) for c in text if c.isalpha())

print(alpha_pos("The sunset sets at twelve o' clock."))