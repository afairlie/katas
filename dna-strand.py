def DNA_strand(dna):
  pairs = dict(A='T', T='A', G='C', C='G')
  result = ''

  for c in dna:
    result += pairs[c]
  
  return result


assert DNA_strand("AAAA") == "TTTT"
assert DNA_strand("ATTGC") == "TAACG"
assert DNA_strand("GTAT") == "CATA"
print('all assertions passed')

# refactor

def dna_strand(dna):
  table = str.maketrans('ATGC', 'TACG')
  return dna.translate(table)

assert dna_strand("AAAA") == "TTTT"
assert dna_strand("ATTGC") == "TAACG"
assert dna_strand("GTAT") == "CATA"
print('all assertions passed')