// Create an object from the pairs of key and value

const arrToObject = (arr)=>{
    console.log(Object.fromEntries(arr));
}

arrToObject([
    ['a', 1 ],
    ['b', 2 ],
    ['c', 3 ],
    ['d', 4 ],
    ]);
    
