def no_space(x)
  x.gsub(/\s/, '')
end

puts no_space('8 j 8   mBliB8g  imjB8B8  jl  B')
puts '8j8mBliB8gimjB8B8jlB'

# another good solution:

# def no_space(x)
#   x.delete(' ')
# end