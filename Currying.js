//What is Currying in js

//It is a process of taking a function with multiple arguments and turning 
//it tinto a sequence of functions each with only a single argument


function calculateVolume(length)
{
    return function(breadth){
        return function (height){
            return length*breadth*height;
        }
    }
     

}

console.log(calculateVolume(2)(3)(5));
