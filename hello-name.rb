def hello(name = nil)
  if name && name != ''
    "Hello, #{name.capitalize}!"
  else
    "Hello, World!"
  end
end

puts hello 'ariANE'
puts hello

# refactored solution:

def helloR name = ''
  "Hello, #{name.empty? ? 'World' : name.capitalize}!"
end

puts helloR 'ariANE'
puts helloR