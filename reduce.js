let arr = [2 , 3 , 4, 5];
const sumArray =  arr.reduce((total  , num) =>{
    return total+num;
},0);

console.log(sumArray);
