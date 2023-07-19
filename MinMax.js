const arr1 = [ 2, 3 , 5 , 9 , 1 , 4 ];
let max = 0 ;
let maxx=0;
let max3 = 0;
let max4 =0;
for( x in arr1)
{
    // console.log(x);
    if(arr1[x] > max)
    {
        max = arr1[x];
    } 

}

arr1.forEach(element => {
    if(element>max3)
    {
        max3 = element;
    }
});

for(ele of arr1)
{
    if(ele>max4)
    {
        max4 = ele;
    }

}

for(let i =0 ;i<arr1.length;i++)
{
    if(arr1[i]>maxx)
    {
        maxx =arr1[i];
    }
}
console.log(`max is ${max}`);
console.log(`max is ${maxx}`);
console.log(`max is ${max3}`);
console.log(`max is ${max4}`);