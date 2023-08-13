//n prime numbers


function isPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) { // if its greater then 2 and even no need to go further.
        return false;
    }
    for (let i = 3; i * i <= n; i += 2) { //i*i <= sqrt(n);
        if (n % i === 0) {
            return false;
        }
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
