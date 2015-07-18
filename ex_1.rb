# Assumptions:
# 1) Inputs might be something other than a string
# 2) Space and newline is considered a character
# 3) newline will be represented as \n

def char_occurence(str)
  return puts "Input must be a non-empty string" if str.nil? or !str.is_a? String or str.empty?

  characters = {}
  str.chars.each do |char|
    if characters.has_key? char
      characters[char] += 1
    else
      characters[char] = 1
    end
  end

  count = characters.values.sort
  max_count = count.last
  min_count = count.first
  max_char = characters.select { |k,v| v == max_count }.sort.first[0]
  min_char = characters.select { |k,v| v == min_count }.sort.first[0]

  p "The character '#{max_char}' appears the most with a total of #{max_count} count"
  p "The character '#{min_char}' appears the least with a total of #{min_count} count"
end