# examples
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"

def accum(s)
  # split to array, letter * index + 1.capitalize
  arr = s.split(//).map.with_index do |l, i|
   (l * (i + 1)).capitalize
  end
  # join with dash
  arr.join('-')
end

puts accum("abcd")
puts accum("RqaEzty")
puts accum("cwAt")

# refactor

def accumR(s)
  s.chars.map.with_index { |char,i| (char*(i+1)).capitalize }.join('-')
end

puts accumR("abcd")
puts accumR("RqaEzty")
puts accumR("cwAt")