// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);
// Naively expected output: 14
// Actual output: 0







const arr1 = [ 2 , 5 , 6 , 3 ];
// let sum =0 ;
// arr1.forEach((e)=>{
//     sum+=e;

// })

// console.log(sum);
// const map1 = arr1.map(x=>x*2);
// const arr2 =arr1.map(e=>e*2)
// console.log(arr2);
// console.log(map1);











const arr3 = arr1.map((e)=>{
    return e*2
})

console.log(arr3);

const arr4 =arr1.map(e=>e*2)

console.log(arr4);