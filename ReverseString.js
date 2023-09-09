   let string = 'Riya kumari is a nice girl'

   let reverseEntireSentence =  reverseBySeparator(string, "");
   let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

   console.log(reverseEntireSentence);
   console.log(reverseEachWord);

   function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
   }
