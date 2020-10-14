

from collections import Counter, deque

c = Counter('qiouetyoqpoiwuyetyueiqwoeiytpewiqtoiyqwer')
print(c)
print(list(c.keys()))

# Write a Python program that iterate over elements repeating each as many times as its count.
print('list counter elements: ', list(c.elements()))

# Write a Python program to find the most common elements and their counts of a specified text
print('most common:', c.most_common())

# Write a Python program to create a new deque with three items and iterate over the deque's elements.
deck = deque([1, 2, 3])

for each in deck:
  print(each)

# Write a Python program to find the occurrences of 10 most common words in a given text.

text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Arcu vitae elementum curabitur vitae. Ipsum nunc aliquet bibendum enim facilisis gravida. Imperdiet proin fermentum leo vel. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Libero id faucibus nisl tincidunt. Egestas sed tempus urna et. Quam pellentesque nec nam aliquam sem et tortor consequat id. Consectetur purus ut faucibus pulvinar elementum. Vitae congue eu consequat ac felis donec et odio pellentesque. Nisl nunc mi ipsum faucibus vitae aliquet. Sit amet cursus sit amet dictum sit. Aliquam etiam erat velit scelerisque in dictum. Varius duis at consectetur lorem donec. Varius duis at consectetur lorem.'

occurences = Counter(text.split())
print('10 most common words: ', occurences.most_common(10))

# Write a Python program that accept some words and count the number of distinct words. Print the number of distinct words and number of occurrences for each distinct word according to their appearance.

print(occurences)
print('no. distinct words: ', len(occurences.items()))