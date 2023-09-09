// Swap Two Array Elements by Destructuring

const swapElements = (arr, x , y ) =>{
    [arr[x] , arr[y]] = [arr[y], arr[x]];
}
const arr = [ 3 , 2 , 5 , 9 , 12];
console.log(arr);//before swaping
swapElements(arr,1,3);
console.log(arr);//after swapping
