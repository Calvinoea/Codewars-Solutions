# Create a function called encode() to replace all the lowercase vowels in a given string with numbers 


def encode(s)
   s.tr('aeiou','12345')
 
end

def decode(s)
  s.tr('12345','aeiou')
end
