//Reverse a string

function ReverseString(str)
{
    let str2 = "";
    for(let i=str.length-1;i>=0;i--)
    {
         let char = str[i];
         str2+=char;
    }
    return str2;
}


let newString = ReverseString("RIYA KUMARI")
console.log(newString);

