   let string = 'Riya kumari is a nice girl'

   let reverseEntireSentence =  reverseBySeparator(string, "");
   let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
/* As a general rule, you should always declare variables with const,
   if you realize that the value of the variable needs to change, go back and change it to let.
   Use let when you know that the value of a variable will change.
   Use const for every other variable. Do not use var.*/

console.log(reverseEntireSentence);
console.log(reverseEachWord);

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
  }
