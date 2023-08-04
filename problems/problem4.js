//Create a function that will receive two arrays and will return an 
//array with elements that are in the first array but not in the second




function FormNewArray(arr1 , arr2) {
    let arr3 = [];
    for(x of arr1)
    {
        if(!arr2.includes(x))
        {
            arr3.push(x);
        }
    }

    return arr3;
  }

  let arr1 = [1 , 2 , 3 ,5 , 7 , 9, 11];
  let arr2 = [8 , 4 , 3 , 6 , 1];

  console.log(FormNewArray(arr1,arr2));

