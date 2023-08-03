// Create a function that receives an array of numbers and returns an array containing only the positive numbers

//Without filter
function getPositive(arr)
{
     let arr2 = [];
     arr.forEach(element => {
        if(element>0) arr2.push(element);
     });
     return arr2;
}
  


//With filter
// The filter() method creates a new array filled with elements that pass a test provided by a function. 
function getPositive2(arr)
{
    return arr.filter((el)=>el>0)
}




let arr = [-4 , 7 ,-2 , -1 , 9 , -8 , 3]
  console.log(getPositive(arr));
  console.log(getPositive2(arr));