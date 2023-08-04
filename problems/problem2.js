//Reverse an array
function ReverseArray(arr)
{
    const arr2 = [];
    for(let i =arr.length;i>=0; i--)
    {
          arr2.push(arr[i]);
    }
    return arr2;
}




let arr = [1 , 2 , 3, 4 , 5, 6 ]
console.log(ReverseArray(arr));
