# count the number of sheep in an array, if true == sheep

def countSheeps array
  array.count(true)
end

array1 = [true,  true,  true,  false,
          true,  true,  true,  true ,
          true,  false, true,  false,
          true,  false, false, true ,
          true,  true,  true,  true ,
          false, false, true,  true ]

puts countSheeps(array1)
puts 17