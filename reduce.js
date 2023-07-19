let arr = [2 , 3 , 4,5];
function sumArray(total  , num)
{ 
    console.log(`total is ${total}`);
   return total +num;
}

// function RoundSum(total , num)
// {
   
//     return total+ Math.round(num);
// }
function getOutput() {  
   console.log( arr.reduce(sumArray));
    // console.log(arr.reduce(RoundSum));
}



getOutput();