//aray is sorted 
let arr = [1 , 2 , 4 , 6 , 7 ];
let n = arr.length;
let arr2 = [];
for(let i =1; i<=arr.length;i++)
{
     arr2.push(i)
}
// console.log(arr2);
 let hashmap = {};
 arr.forEach((it) =>{
   if(it in hashmap)
   {
       hashmap[it]++;
       //console.log(it);
   }
   else{
       hashmap[it] = 1;
   }
})
// console.log(hashmap);
arr2.forEach((it)=>{
    // console.log(hashmap[it]);
  if(hashmap[it]!=1) console.log(it);
})

