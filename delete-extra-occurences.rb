# Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

def delete_nth(order,max_e)
  seen = {}

  order.select do |n|
    if !seen[n]
      seen[n] = 1
      n
    elsif seen[n] < max_e
      seen[n] += 1
      n
    end
  end
end

p delete_nth([20,37,20,21], 1)
p [20,37,21]

# better answer

# def delete_nth(order, max_e)
#   occurrences = Hash.new(0)
#   order.reject { |item| (occurrences[item] += 1) > max_e }
# end