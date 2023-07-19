//factorial

var num = 5;
for(let i = num-1 ; i>=1;i--)
{
   num*=i;
   console.log(`i is ${i} and num is ${num}`);
}
console.log(`num is ${num}`);