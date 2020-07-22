#Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

# For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

def sum_two_smallest_numbers(numbers)
  lowest = numbers[0];
  second_lowest = numbers[1];
  
  numbers.each do |n|
    if n < lowest
      second_lowest = lowest;
      lowest = n;
    elsif n < second_lowest && n > lowest
      second_lowest = n;
    end
  end
  
  lowest + second_lowest;
end

puts sum_two_smallest_numbers([5, 8, 12, 18, 22])
puts 13