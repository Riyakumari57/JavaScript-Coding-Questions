//Fibonacci 


//Without Recursion
let f0 = 0;
let f1  = 1;
console.log(f0);
console.log(f1);
for(let i = 0 ; i<10 ;i++)
{
    let fi = f1 + f0;
    console.log(fi);
    f0 = f1;
    f1 = fi;
}


//with recursion
console.log("nth fibonacci using recursion");
function findFinbonnaci(n)
{
    if(n==0) return 0;
    if(n==1) return 1;

    return findFinbonnaci(n-1)+findFinbonnaci(n-2);
}

console.log(findFinbonnaci(6));








