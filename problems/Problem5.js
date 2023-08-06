//n prime numbers


function isPrime(n)
{
    if(n<2) return false;
    if(n==2) return true;
    for(let i = 2 ; i<n ; i++)
    {
        if(n%i === 0)
        return false
    }
    return true;
}

function generateNumber(n)
{
    let arr = [];
    for(let i =1 ;i<=n;i++)
    {
          if(isPrime(i))
          {
            arr.push(i);
          }
    }
    return arr;
}



console.log(generateNumber(10));