def recursive h
  if h == 0
    return
  end
  recursive h-1
  print '#' * h + "\n"
end

recursive 7