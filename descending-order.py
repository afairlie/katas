# sort the number by each decimal in descending order
def descending_order(num):
    return int(''.join(sorted(str(num), reverse=True)))

print(descending_order(283759))