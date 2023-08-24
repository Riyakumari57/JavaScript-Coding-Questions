//  Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 

function removeFalsyValue(arr)
{
    return arr.filter(Boolean);
}

const arr = [1 ,4 , null , 0 , undefined , 22 , 55];
const arr2 =  removeFalsyValue(arr);
console.log(arr2);
