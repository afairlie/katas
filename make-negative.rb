def makeNegative(num)
  num <= 0 ? num : -num
end

puts makeNegative 5
puts makeNegative -5
puts makeNegative 0

# refactored solution

def makeNegativeR num
  # returns the absolute value of num - ruby won't return negative 0?
  -num.abs
end

puts makeNegativeR 5
puts makeNegativeR -5
puts makeNegativeR 0