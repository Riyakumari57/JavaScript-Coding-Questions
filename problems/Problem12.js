//How to find the Union or intersection of the array 
const arr = [1 , 2 , 3, 4 , 5 ];
const arr2 = [ 3 , 4, 5 , 6 ,7 ];

//Intersection 
const result = arr.filter((e)=>{
  return  arr2.includes(e)}
)
console.log(`Intersection using Filter`);
console.log(result);

//Union
let arr3 = [...arr , ...arr2];
arr3 = [... new Set(arr3)];
console.log(`Union with set Function`);
console.log(arr3);

//2nd method
//we can do it manually by using for loops .


//Intersection
console.log(`Intersection by loop`);
arr.forEach((e)=>{
    if(arr2.includes(e))
  console.log(e);
}
)



//Union
console.log(`Union by loop`);
arr.forEach((e)=>{
  console.log(e);
}
)
arr2.forEach((e)=>{
    if(!arr.includes(e))
  console.log(e);
}
)
