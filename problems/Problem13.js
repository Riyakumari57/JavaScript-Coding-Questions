// Implement a function that groups elements in an array based on a given condition. 
//For example, grouping even and odd numbers into separate arrays. 

function  groupByCondition(arr,condition){
    return [
        arr.filter(e => condition(e)),
         arr.filter(e => !condition(e))
        ];
}

const arr = [ 2 , 5 , 1 , 9 , 3 , 7 , 8 ];
let isEven = num =>  num%2===0;
const finalArr =  groupByCondition(arr,isEven);
console.log(finalArr);
