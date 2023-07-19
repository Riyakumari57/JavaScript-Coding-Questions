const arr = [2,7,11,15];
let target = 9;
const hashmap = {}
arr.forEach((e)=>{
    
        hashmap[e] = arr.indexOf(e);
})

const arr2 = []
for(x of arr)
{
    const num = 9 - x;
    if(hashmap[num] && hashmap[num]!=arr.indexOf(x))
    {
           arr2.push(x);
           arr2.push(num);
    }
}
// console.log(hashmap);
console.log(arr2);