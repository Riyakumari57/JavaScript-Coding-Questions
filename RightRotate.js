//Rotate an array to the left 1 position

function RotateArrayBy1(arr)
{
    let first = arr.pop();
    arr.unshift(first);
}

let arr = [1,2,3,4,5];
RotateArrayBy1(arr);
console.log(arr);