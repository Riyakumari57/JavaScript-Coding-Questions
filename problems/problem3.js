//Create a function that will receive two arrays of numbers as arguments  and return
// an array composed of all the numbers that are either in the first array or second array but not in both


function FormNewArray(arr1 , arr2) {
    let arr3 = [];
    for(x of arr1)
    {
        if(!arr2.includes(x))
        {
            arr3.push(x);
        }
    }


    for(y of arr2)
    {
        if(!arr1.includes(x))
        {
            arr3.push(x);
        }
    }

    return arr3;
  }

  let arr1 = [1 , 2 , 3 ,5 , 7 , 9, 11];
  let arr2 = [8 , 4 , 3 , 6 , 1];

  console.log(FormNewArray(arr1,arr2));