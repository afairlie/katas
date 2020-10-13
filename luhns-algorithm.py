def main():
    number = input("credit card: ")
    if check_valid(number):
        print(check_card_type(str(number)))
    else:
        print('INVALID')

def check_valid(number):
    strnum = list(reversed(str(number)))

    digits = sum(int(strnum[i]) for i in range(0, len(strnum), 2))

    every_other_digit = list(str(int(strnum[i]) * 2) for i in range(1, len(strnum), 2))
    every_other_digit = sum(int(i) for i in ''.join(every_other_digit))

    return sum([every_other_digit, digits]) % 10 == 0

def check_card_type(number):
    first_two = f"{number[0]}{number[1]}"

    if str(number)[0] == '4':
        return 'VISA'
    elif first_two in ['34', '37']:
        return 'AMEX'
    elif first_two in ['51', '52', '53', '54', '55']:
        return 'MASTERCARD'
    else:
        return 'INVALID'

main()