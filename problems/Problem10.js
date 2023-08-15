// Merge two sorted array 
const arr1 = [8 , 9 , 10 , 11 ];
const arr2 = [2 , 3 , 4, 5 ];

let arr3 = [...arr1 , ...arr2];
arr3.sort((a, b) => a - b);
console.log(arr3);
