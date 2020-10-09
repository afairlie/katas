def balancedStringSplit(s):
    count = 0
    balanced = 0
    
    for c in s:
        if c == 'R':
            count += 1
        else:
            count -= 1
        if count == 0:
            balanced += 1
    return balanced

print(balancedStringSplit('LRLLRRRRRLLLRLRL')) # 5