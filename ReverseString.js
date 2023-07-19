var string = 'Riya kumari is a nice girl'

   var reverseEntireSentence =  reverseBySeparator(string, "");
   var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

console.log(reverseEntireSentence);
console.log(reverseEachWord);

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
  }