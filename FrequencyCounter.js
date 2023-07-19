let arr = [2 ,3 , 4 , 2 , 5 , 3 , 6 , 1 , 1,2];
//I know two ways of finding frequency one is hashmap(like creating one obj) and second one is reduce

const hashmap = {};
let s = new Set();
arr.forEach((it) =>{
    if(it in hashmap)
    {
        hashmap[it]++;
        s.add(it);
        //console.log(it);
    }
    else{
        hashmap[it] = 1;
    }
})
let arr2 = [...s];
console.log(arr2);
console.log(Array.from(s));

// console.log(hashmap);
//this is the manual way now we will use reduce which is afuncion in js 
// const arr1 = [1 , 2, 1 , 1 , 4 , 5 , 2 , 4 ];

// const count = arr1.reduce((accumulator, value) => {
//   accumulator[value] = ++accumulator[value] || 1;

//   return accumulator;
// }, {});



// const arr2 = [1 , 2, 1 , 1 , 4 , 5 , 2 , 4 ];

// const count2 = arr2.reduce((accumulator, value) =>
//  {
//   accumulator[value] = ++accumulator[value] || 1;
//     return accumulator;
// }, {});

// console.log(count);