for(var i =0;i<5;i++)
{
      setTimeout(()=>{console.log(i)},1)
}

/* In this code snippet, we have a for loop that iterates five times. The loop variable i is declared
   using the var keyword, which means it has function scope rather than block scope. The loop iterates from i = 0 to i < 5
   When the setTimeout functions execute after the loop has completed, 
   the value of i is 5 at that time (since the loop has already finished, and i has reached the value 5). 
   So, all five functions will log the value 5 to the console.*/

for(let i =0;i<5;i++)
{
    setTimeout(()=>{console.log(i)},1000)
}

/* In this case, the loop variable i is declared using the let keyword, which means it has block scope. 
   Each iteration of the loop will create a new variable i, and this variable will only be accessible inside the block of the loop.
   With let, each iteration creates a new variable i with block scope.
   So, when each setTimeout function executes after the delay, 
   they reference their respective i variable from their respective loop iteration.*/

/* In summary, the main difference between the two versions is the scoping behavior of the loop variable i.
   Using var results in function scope, causing the value of i to be shared across all iterations,
   while using let results in block scope, providing each iteration with its own separate variable.*/


/*The difference between let and var is in the scope of the variables they create:

>>> Variables declared by let are only available inside the block where they’re defined.
>>> Variables declared by var are available throughout the function in which they’re declared.*/
