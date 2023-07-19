function sumofThree(arr)
{
    return new Promise((resolve , reject)=>{
        if(arr.length>3)
        {
            reject("Only three elemnts allowed ")
        }
        else{
            var sum = 0;
            for(let i =0 ; i<arr.length;i++)
            {
                sum+=arr[i];

            }
            resolve(`your promise has been resolved and the value is ${sum}`)
        }
    })
}

const arr = [1 , 4 , 6];
console.log(sumofThree(arr));